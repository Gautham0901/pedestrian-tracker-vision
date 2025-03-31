
import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DemoPreviewSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">See the Technology in Action</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience our pedestrian detection and tracking system with interactive demos
            and real-time analysis on pre-recorded or live video feeds.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative rounded-xl overflow-hidden aspect-video max-w-4xl mx-auto shadow-xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-tech-blue/20 to-tech-purple/20 mix-blend-overlay" />

          {/* Placeholder for demo video/image */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <Link to="/demo">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full w-16 h-16 bg-primary flex items-center justify-center cursor-pointer"
              >
                <Play className="h-6 w-6 text-primary-foreground ml-1" />
              </motion.div>
            </Link>
          </div>

          <img
            src="https://images.unsplash.com/photo-1618255924197-944c37df5c7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Pedestrian detection demo"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <Button asChild size="lg" className="rounded-md mt-6">
            <Link to="/demo">Try Interactive Demo</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoPreviewSection;
