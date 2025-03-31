
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SplineContainer from "@/components/ui/spline-container";

const HeroSection = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative min-h-screen pt-20 flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-tech-blue/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="z-10"
        >
          <motion.div variants={item}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Advanced <span className="text-gradient">Pedestrian Detection</span> with AI
            </h1>
          </motion.div>
          
          <motion.div variants={item}>
            <p className="mt-6 text-lg text-muted-foreground max-w-md">
              Cutting-edge computer vision using YOLOv10 and DeepSORT with explainable AI for accurate pedestrian tracking and analysis.
            </p>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-md">
              <Link to="/demo">
                Try Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="rounded-md">
              <Link to="/documentation">Learn More</Link>
            </Button>
          </motion.div>
          
          <motion.div variants={item} className="mt-12">
            <div className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-primary/10 text-primary">
              <span className="mr-2 h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              Real-time tracking with explainable results
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative z-10"
        >
          <SplineContainer 
            url="https://my.spline.design/interactiveaiwebsite-e8b11478a148f002789fbc81149e145a/" 
            height="500px"
            loadingFallback={
              <div className="flex flex-col items-center">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
                <p className="mt-4 text-sm text-muted-foreground">Loading 3D model...</p>
              </div>
            }
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
