import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import newLogo from '../main-logo.png'; // <-- ADDED THIS IMPORT

const Footer = () => {
  const { toast } = useToast();

  const handleSocialClick = () => {
    toast({
      title: "🚧 Feature In Progress",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <div className="md:col-span-1 flex flex-col items-center md:items-start">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img alt="Signs and Wonders Logo" className="h-12 w-auto" src={newLogo} /> 
            </Link>
            <p className="text-sm text-muted-foreground">Wearing our Faith on our sleeves & with our full chest.</p>
          </div>
          <div>
            <p className="font-bold text-foreground mb-4 uppercase tracking-wider">Shop</p>
            <ul className="space-y-2">
              <li><Link to="/shop" className="text-sm text-muted-foreground hover:text-primary transition-colors">All Products</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-foreground mb-4 uppercase tracking-wider">About</p>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">Our Story</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-foreground mb-4 uppercase tracking-wider">Follow Us</p>
            <div className="flex space-x-6 justify-center md:justify-start">
              <button onClick={handleSocialClick} className="text-muted-foreground hover:text-primary transition-colors"><Facebook size={22} /></button>
              <button onClick={handleSocialClick} className="text-muted-foreground hover:text-primary transition-colors"><Instagram size={22} /></button>
              <button onClick={handleSocialClick} className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={22} /></button>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Signs and Wonders. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
