import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import PageTransition from '@/components/PageTransition';
import { ArrowRight, Star } from 'lucide-react';

const HomePage = () => {
  const featuredProducts = [
    { id: 1, name: 'Blood-Bought Tee', imageUrl: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/0728ab6f-a315-4b37-9fe6-d45e205f3ba5/e7f20969992423aed565b6cf804fcb86.png' },
    { id: 2, name: 'Jesus! Name Above All Names', imageUrl: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/0728ab6f-a315-4b37-9fe6-d45e205f3ba5/80cea146fabc1a868b1ea8b486c3da88.png' },
    { id: 3, name: 'No Other God Tee', imageUrl: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/0728ab6f-a315-4b37-9fe6-d45e205f3ba5/f2c0f358252eb56a32e4d0498f3e5d98.png' },
  ];

  const title = "Wear Your Faith Boldly";
  const titleWords = title.split(" ");
  
  const titleContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
  const titleWord = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      },
    },
  };

  return (
    <PageTransition>
      <Helmet>
        <title>Signs and Wonders - Kingdom Tees</title>
        <meta name="description" content="Faith-based apparel from Signs and Wonders. The LORD Gave His Word, Great was The Company of those that Published It!" />
      </Helmet>

      <div className="relative">
        <section className="relative bg-hero h-[85vh] flex items-center justify-center text-center text-white">
          <motion.div
            className="z-10 p-4"
            initial="hidden"
            animate="visible"
            variants={titleContainer}
          >
            <h1 className="text-5xl md:text-7xl font-black font-serif uppercase tracking-tighter leading-tight drop-shadow-lg">
              {titleWords.map((word, index) => (
                <motion.span
                  key={index}
                  variants={titleWord}
                  style={{ display: 'inline-block', marginRight: '1rem' }}
                  className={word === "Faith" ? "text-primary" : ""}
                >
                  {word}
                </motion.span>
              ))}
            </h1>
            <motion.p 
              className="mt-4 max-w-2xl mx-auto text-lg text-gray-200 drop-shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              "The LORD Gave His Word, Great was The Company of those that Published It!"
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-10 flex justify-center gap-4"
            >
              <Button asChild size="lg" className="btn-shine">
                <Link to="/shop">
                  Shop The Collection <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </section>

        <section className="bg-card py-20 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground font-serif">Featured Designs</h2>
              <p className="mt-3 text-muted-foreground text-lg">Bold statements for the modern believer.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {featuredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  className="bg-background rounded-lg shadow-2xl overflow-hidden group border border-border transform hover:-translate-y-2 transition-transform duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <div className="w-full h-96 overflow-hidden p-4 bg-card">
                    <img 
                      alt={product.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-400"
                     src={product.imageUrl} />
                  </div>
                  <div className="p-6 text-center bg-background">
                    <h3 className="text-lg font-bold text-foreground">{product.name}</h3>
                    <Button asChild variant="link" className="mt-2 text-primary text-sm">
                      <Link to="/shop">View in Shop</Link>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default HomePage;
