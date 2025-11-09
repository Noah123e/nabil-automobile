import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useLocalStorage } from "@/hooks/useLocalStorage";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [compareList] = useLocalStorage<string[]>("compareList", []);
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Fahrzeuge", path: "/catalog" },
    { label: "Vergleichen", path: "/compare" },
    { label: "Team", path: "/team" },
    { label: "Kontakt", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const compareLink = compareList.length > 0 
    ? `/compare?ids=${compareList.join(",")}` 
    : "/compare";

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/95 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-display text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
              Nabil Automobile
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 relative">
            {navItems.map((item, index) => {
              const linkTo = item.path === "/compare" ? compareLink : item.path;
              return (
                <Link
                  key={item.path}
                  to={linkTo}
                  className={`relative text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === item.path ? "text-primary" : "text-foreground"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {item.label}
                    {item.path === "/compare" && compareList.length > 0 && (
                      <span className="bg-destructive text-destructive-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                        {compareList.length}
                      </span>
                    )}
                  </span>
                  {location.pathname === item.path && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                      layoutId="navbar-indicator"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:015789502200" className="flex items-center space-x-2 text-sm">
              <Phone className="w-4 h-4 text-primary" />
              <span className="text-foreground">01578 9502200</span>
            </a>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/contact">Kontakt</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-t border-border"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navItems.map((item) => {
                const linkTo = item.path === "/compare" ? compareLink : item.path;
                return (
                  <Link
                    key={item.path}
                    to={linkTo}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center justify-between py-2 text-base font-medium transition-colors ${
                      location.pathname === item.path ? "text-primary" : "text-foreground hover:text-primary"
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.path === "/compare" && compareList.length > 0 && (
                      <span className="bg-destructive text-destructive-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                        {compareList.length}
                      </span>
                    )}
                  </Link>
                );
              })}
              <a
                href="tel:015789502200"
                className="flex items-center space-x-2 py-2 text-base"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-foreground">01578 9502200</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
