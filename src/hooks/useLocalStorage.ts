import { useState, useEffect } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error loading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  useEffect(() => {
    const handleStorageChange = (e: StorageEvent | CustomEvent) => {
      if (e instanceof StorageEvent) {
        if (e.key === key && e.newValue) {
          try {
            setStoredValue(JSON.parse(e.newValue));
          } catch (error) {
            console.error(`Error parsing localStorage key "${key}":`, error);
          }
        }
      } else if (e.type === `localStorage-${key}`) {
        try {
          const item = window.localStorage.getItem(key);
          setStoredValue(item ? JSON.parse(item) : initialValue);
        } catch (error) {
          console.error(`Error loading localStorage key "${key}":`, error);
        }
      }
    };

    window.addEventListener("storage", handleStorageChange as EventListener);
    window.addEventListener(`localStorage-${key}`, handleStorageChange as EventListener);

    return () => {
      window.removeEventListener("storage", handleStorageChange as EventListener);
      window.removeEventListener(`localStorage-${key}`, handleStorageChange as EventListener);
    };
  }, [key, initialValue]);

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
      
      // Dispatch custom event for same-tab synchronization
      window.dispatchEvent(new CustomEvent(`localStorage-${key}`));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue] as const;
}
