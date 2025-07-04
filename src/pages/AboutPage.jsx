import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';

const AboutPage = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>About Us - Signs and Wonders</title>
        <meta name="description" content="Learn about the mission and story behind the Signs and Wonders Christian clothing brand." />
      </Helmet>
      <div className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-foreground font-serif leading-tight">
                Our Story & <span className="text-primary">Mission</span>
              </h1>
              <div className="mt-8 space-y-6 text-muted-foreground text-lg">
                <p className="font-semibold text-primary/90 text-xl">
                  "The LORD Gave His Word, Great was The Company of those that Published It!"
                </p>
                <p>
                  Signs and Wonders was born from a simple yet profound desire: to wear our faith not just in our hearts, but for the world to see. We are a family-driven brand dedicated to creating high-quality, stylish apparel that carries the powerful message of the Gospel.
                </p>
                <p>
                  We believe that clothing can be a conversation starter, a declaration of belief, and a daily reminder of God's promises. Each design is thoughtfully created to be a 'sign' and a 'wonder'—pointing to the greatness of God and the beauty of a life lived in faith.
                </p>
                <p className="text-foreground font-semibold">
                  Join the company of publishers. Be Saved & Blessed, wearing your Faith on your sleeves & with your full chest.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="w-full h-[500px] rounded-lg overflow-hidden shadow-2xl"
               initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <img 
                alt="A cross illuminated by a bright light in a church"
                className="w-full h-full object-cover"
               src="https://images.unsplash.com/photo-1508361001413-7892db27d302?q=80&w=2074&auto=format&fit=crop" />
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default AboutPage;