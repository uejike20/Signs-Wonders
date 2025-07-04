import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import ShopPage from '@/pages/ShopPage';
import AboutPage from '@/pages/AboutPage';

const Preloader = () => (
  <motion.div
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
  >
    <motion.img
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: [0.6, 0.01, -0.05, 0.95] }}
      alt="Signs and Wonders Logo"
      className="h-24 w-auto"
      src="https://storage.googleapis.com/hostinger-horizons-assets-prod/0728ab6f-a315-4b37-9fe6-d45e205f3ba5/cacd900ffd34229e4fa4287c13b18a9e.webp"
    />
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.6, 0.01, -0.05, 0.95], delay: 0.3 }}
      className="mt-4"
    >
      <span className="text-3xl font-bold font-serif text-foreground tracking-tight">
        Signs <span className="text-primary">&</span> Wonders
      </span>
    </motion.div>
  </motion.div>
);


function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);


  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground aurora">
      <AnimatePresence mode="wait">
        {loading && <Preloader />}
      </AnimatePresence>
      
      {!loading && (
        <>
          <Header />
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/about" element={<AboutPage />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;