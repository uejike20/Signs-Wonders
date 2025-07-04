import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from "@/components/ui/use-toast";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
  ];

  const handleCartClick = () => {
    toast({
      title: "🚧 Feature In Progress",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, y: "-100%" },
    open: { opacity: 1, y: "0%" },
  };
  
  const navItemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1 + 0.5,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <Link to="/" className="flex items-center gap-3">
            <motion.img 
              alt="Signs and Wonders Logo" 
              className="h-16 w-auto" 
              src="https://storage.googleapis.com/hostinger-horizons-assets-prod/0728ab6f-a315-4b37-9fe6-d45e205f3ba5/cacd900ffd34229e4fa4287c13b18a9e.webp"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            />
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="hidden sm:block"
            >
              <span className="text-2xl font-bold font-serif text-foreground tracking-tight">
                Signs <span className="text-primary">&</span> Wonders
              </span>
            </motion.div>
          </Link>

          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                custom={i}
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm font-bold uppercase tracking-wider transition-colors hover:text-primary ${
                      isActive ? 'text-primary' : 'text-muted-foreground'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </motion.div>
            ))}
          </nav>

          <motion.div 
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button variant="ghost" size="icon" onClick={handleCartClick}>
              <ShoppingCart className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              <span className="sr-only">Shopping Cart</span>
            </Button>
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden absolute top-full left-0 w-full bg-background shadow-lg border-t border-border"
          >
            <nav className="flex flex-col items-center space-y-6 p-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-xl font-bold uppercase tracking-wider transition-colors hover:text-primary ${
                      isActive ? 'text-primary' : 'text-foreground'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;