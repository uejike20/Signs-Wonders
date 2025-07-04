import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import PageTransition from '@/components/PageTransition';
import { useToast } from "@/components/ui/use-toast";
import { ShoppingCart } from 'lucide-react';

const products = [
  { id: 1, name: 'Jesus! Name Above All Names', price: '$25.00', imageUrl: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/0728ab6f-a315-4b37-9fe6-d45e205f3ba5/80cea146fabc1a868b1ea8b486c3da88.png' },
  { id: 2, name: 'No Other God...', price: '$25.00', imageUrl: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/0728ab6f-a315-4b37-9fe6-d45e205f3ba5/f2c0f358252eb56a32e4d0498f3e5d98.png' },
  { id: 3, name: 'Blood-Bought', price: '$25.00', imageUrl: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/0728ab6f-a315-4b37-9fe6-d45e205f3ba5/e7f20969992423aed565b6cf804fcb86.png' },
  { id: 4, name: 'Diplomatic Immunity', price: '$25.00', imageUrl: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/0728ab6f-a315-4b37-9fe6-d45e205f3ba5/f85b61a3e2e85ed0547362b0e43a2788.png' },
  { id: 5, name: 'Registered TroubleMaker', price: '$25.00', imageUrl: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/0728ab6f-a315-4b37-9fe6-d45e205f3ba5/14478a86a55ff9cd7d1675379c04b223.png' },
  { id: 6, name: 'Escaped Convict', price: '$25.00', imageUrl: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/0728ab6f-a315-4b37-9fe6-d45e205f3ba5/ec2d0ef6ff78e0a39f1644d5a203371c.png' },
  { id: 7, name: 'The Wages of Sin is Death', price: '$25.00', imageUrl: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/0728ab6f-a315-4b37-9fe6-d45e205f3ba5/04e8304aad79b5afc645aba39b528a62.png' },
  { id: 8, name: 'Combat Ready', price: '$25.00', imageUrl: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/0728ab6f-a315-4b37-9fe6-d45e205f3ba5/f4d557ab0fbe2f0deecf1ffb859bfe2b.png' },
  { id: 9, name: 'We See 4 Men!', price: '$25.00', imageUrl: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/0728ab6f-a315-4b37-9fe6-d45e205f3ba5/b9005d588511e5c192019e247dac873d.png' },
];

const ShopPage = () => {
  const { toast } = useToast();

  const handleAddToCart = (productName) => {
    toast({
      title: `Feature In Progress!`,
      description: `"${productName}" is waiting for you. The cart feature is coming soon!`,
    });
  };

  return (
    <PageTransition>
      <Helmet>
        <title>Shop The Collection - Signs and Wonders</title>
        <meta name="description" content="Explore our full collection of Christian apparel at Signs and Wonders." />
      </Helmet>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-foreground font-serif">The Full Collection</h1>
          <p className="mt-3 text-lg text-muted-foreground">Apparel designed to share The Word and express your faith.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-card rounded-lg shadow-2xl overflow-hidden group flex flex-col border border-border/50"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="w-full h-96 bg-background overflow-hidden p-4 relative">
                <img 
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-400 ease-in-out"
                 src={product.imageUrl} />
                <div className="absolute top-0 left-0 w-full h-full bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                   <Button 
                    className="btn-shine"
                    onClick={() => handleAddToCart(product.name)}
                    aria-label={`Add ${product.name} to cart`}
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart
                  </Button>
                </div>
              </div>
              <div className="p-5 text-center flex-grow flex flex-col justify-center">
                <h3 className="text-lg font-bold text-foreground flex-grow">{product.name}</h3>
                <p className="text-xl font-semibold text-primary mt-2">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default ShopPage;