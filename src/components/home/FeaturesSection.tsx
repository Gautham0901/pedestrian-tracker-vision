
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Eye, Zap, Brain, BarChart3 } from "lucide-react";

const features = [
  {
    icon: <Eye className="h-6 w-6 text-tech-blue" />,
    title: "YOLOv10 Detection",
    description: "State-of-the-art object detection with improved accuracy and reduced false positives.",
  },
  {
    icon: <Zap className="h-6 w-6 text-tech-teal" />,
    title: "DeepSORT Tracking",
    description: "Advanced tracking algorithm that maintains identities across frames even in crowded scenes.",
  },
  {
    icon: <Brain className="h-6 w-6 text-tech-purple" />,
    title: "Explainable AI",
    description: "Transparency in AI decisions with visual explanations of detection and tracking reasoning.",
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-tech-indigo" />,
    title: "Real-time Analytics",
    description: "Live statistics and insights on pedestrian movement patterns and density metrics.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            Cutting-edge Technology
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Our platform combines the latest advancements in computer vision and machine learning
            to deliver accurate, reliable pedestrian tracking with explainable results.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-12 w-12 rounded-md flex items-center justify-center bg-muted mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="/documentation"
            className="inline-flex items-center text-primary font-medium hover:underline"
          >
            Learn more about our technology
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
