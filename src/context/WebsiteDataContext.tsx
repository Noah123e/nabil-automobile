import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface WebsiteData {
  business_name: string;
  tagline: string;
  about_section: string;
  industry: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  photos: string[];
  services: string[];
  primary_color: string;
  accent_color: string;
}

interface WebsiteDataContextType {
  data: WebsiteData | null;
  loading: boolean;
  error: string | null;
  slug: string | null;
}

const WebsiteDataContext = createContext<WebsiteDataContextType>({
  data: null,
  loading: true,
  error: null,
  slug: null,
});

export const useWebsiteData = () => {
  const context = useContext(WebsiteDataContext);
  if (!context) {
    throw new Error("useWebsiteData must be used within a WebsiteDataProvider");
  }
  return context;
};

interface WebsiteDataProviderProps {
  children: ReactNode;
}

export const WebsiteDataProvider: React.FC<WebsiteDataProviderProps> = ({ children }) => {
  const [data, setData] = useState<WebsiteData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [slug, setSlug] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      // Extract slug from pathname (first segment after /)
      const pathSegments = window.location.pathname.split("/").filter(Boolean);
      const extractedSlug = pathSegments[0] || null;
      
      setSlug(extractedSlug);

      if (!extractedSlug) {
        setError("No business slug provided");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `https://njagkehjoygyvwbojufd.supabase.co/functions/v1/get-website?slug=${encodeURIComponent(extractedSlug)}`
        );

        if (!response.ok) {
          throw new Error(`Business not found (${response.status})`);
        }

        const websiteData = await response.json();
        setData(websiteData);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load website data");
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <WebsiteDataContext.Provider value={{ data, loading, error, slug }}>
      {children}
    </WebsiteDataContext.Provider>
  );
};
