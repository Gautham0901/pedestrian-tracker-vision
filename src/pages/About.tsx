
import React from "react";
import { motion } from "framer-motion";
import TeamSection from "@/components/about/TeamSection";

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About PedestrianTrackAI</h1>
              <p className="text-xl text-muted-foreground mb-8">
                A cutting-edge pedestrian detection and tracking system utilizing advanced AI technologies
              </p>
              <div className="border-b border-border w-16 mx-auto mb-12"></div>

              <div className="prose prose-lg dark:prose-invert max-w-3xl mx-auto">
                <p>
                  PedestrianTrackAI is a research project focused on developing advanced computer vision techniques 
                  for pedestrian detection, tracking, and analysis. Our system integrates state-of-the-art 
                  YOLOv10 object detection with DeepSORT tracking and explainable AI methodologies to create 
                  a comprehensive solution for understanding pedestrian movement and behavior.
                </p>
                
                <p className="mt-6">
                  Our goal is to push the boundaries of what's possible in pedestrian tracking while maintaining 
                  transparency in our AI systems through XAI (Explainable AI) techniques. This makes our technology 
                  not only powerful but also interpretable and trustworthy.
                </p>
              </div>
            </div>
          </div>
        </section>

        <TeamSection />

        <section className="py-16 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Mission</h2>
              
              <div className="bg-card border border-border p-8 rounded-lg shadow-sm">
                <p className="text-lg mb-6">
                  We're committed to developing pedestrian tracking systems that are:
                </p>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <span>
                      <strong>Accurate:</strong> Utilizing YOLOv10's advanced detection capabilities to minimize false positives and negatives
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <span>
                      <strong>Reliable:</strong> Maintaining tracking consistency across frames with DeepSORT, even in crowded environments
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <span>
                      <strong>Transparent:</strong> Implementing XAI techniques to explain model decisions and build trust
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <span>
                      <strong>Accessible:</strong> Creating tools that researchers and developers can easily understand and use
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default About;
