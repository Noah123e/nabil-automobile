import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useWebsiteData } from "@/context/WebsiteDataContext";

const Navigation = () => {
  const { data, slug } = useWebsiteData();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [compareList] = useLocalStorage<string[]>("compareList", []);
  const location = useLocation();
  const [previousIndex, setPreviousIndex] = useState(-1);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const basePath = slug ? `/${slug}` : "";
  const businessName = data?.business_name || "Alex Automobile";
  const phone = data?.phone || "+1 555 950 2200";

  const navItems = [
    { label: "Home", path: `${basePath}` },
    { label: "Vehicles", path: `${basePath}/catalog` },
    { label: "Compare", path: `${basePath}/compare` },
    { label: "About Us", path: `${basePath}/team` },
    { label: "Contact", path: `${basePath}/contact` },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const currentIndex = navItems.findIndex(item => item.path === location.pathname);
    if (currentIndex !== -1 && previousIndex !== -1 && previousIndex !== currentIndex) {
      setDirection(currentIndex > previousIndex ? "right" : "left");
    }
    if (currentIndex !== -1) {
      setPreviousIndex(currentIndex);
    }
  }, [location.pathname]);

  const getCompareLink = () => {
    return compareList.length > 0 
      ? `${basePath}/compare?ids=${compareList.join(",")}` 
      : `${basePath}/compare`;
  };

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
          <Link to={basePath || "/"} className="flex items-center space-x-2">
            <span className="font-display text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
              {businessName}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const linkTo = item.label === "Compare" ? getCompareLink() : item.path;
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
                    {item.label === "Compare" && compareList.length > 0 && (
                      <span className="bg-destructive text-destructive-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                        {compareList.length}
                      </span>
                    )}
                  </span>
                  {location.pathname === item.path && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary origin-left"
                      initial={{ scaleX: 0, transformOrigin: direction === "right" ? "left" : "right" }}
                      animate={{ scaleX: 1 }}
                      exit={{ scaleX: 0 }}
                      transition={{ 
                        duration: 0.3,
                        ease: "easeInOut"
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a href={`tel:${phone.replace(/\s/g, "")}`} className="flex items-center space-x-2 text-sm">
              <Phone className="w-4 h-4 text-primary" />
              <span className="text-foreground">{phone}</span>
            </a>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to={`${basePath}/contact`}>Contact</Link>
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
                const linkTo = item.label === "Compare" ? getCompareLink() : item.path;
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
                    {item.label === "Compare" && compareList.length > 0 && (
                      <span className="bg-destructive text-destructive-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                        {compareList.length}
                      </span>
                    )}
                  </Link>
                );
              })}
              <a
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="flex items-center space-x-2 py-2 text-base"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-foreground">{phone}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
