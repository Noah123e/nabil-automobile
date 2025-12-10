import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { useWebsiteData } from "@/context/WebsiteDataContext";

const Footer = () => {
  const { data, slug } = useWebsiteData();
  
  const businessName = data?.business_name || "Alex Automobile";
  const description = data?.about_section 
    ? data.about_section.length > 100 
      ? data.about_section.substring(0, 100) + "..." 
      : data.about_section
    : "Your partner for exclusive vehicles. Driving culture at the highest level.";
  const address = data ? `${data.address}, ${data.city} ${data.state}` : "123 Auto Drive, Los Angeles CA 90001";
  const phone = data?.phone || "+1 555 950 2200";
  const email = data?.email || "info@alex-automobile.com";
  const basePath = slug ? `/${slug}` : "";

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-bold text-primary">
              {businessName}
            </h3>
            <p className="text-muted-foreground text-sm">
              {description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to={`${basePath}`} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to={`${basePath}/catalog`} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Vehicles
                </Link>
              </li>
              <li>
                <Link to={`${basePath}/team`} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Team
                </Link>
              </li>
              <li>
                <Link to={`${basePath}/contact`} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  {address}
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href={`tel:${phone.replace(/\s/g, "")}`} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href={`mailto:${email}`} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {email}
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Opening Hours</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between text-muted-foreground">
                <span>Mon – Fri:</span>
                <span>10:00 AM – 6:00 PM</span>
              </li>
              <li className="flex justify-between text-muted-foreground">
                <span>Sat:</span>
                <span>10:00 AM – 4:00 PM</span>
              </li>
              <li className="flex justify-between text-muted-foreground">
                <span>Sun:</span>
                <span>Closed</span>
              </li>
            </ul>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {businessName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
