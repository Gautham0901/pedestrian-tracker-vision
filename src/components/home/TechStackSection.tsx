
import React from "react";
import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

const technologies = [
  {
    name: "YOLOv10",
    description: "Latest iteration of the YOLO object detection family with improved speed and accuracy.",
    icon: "🔍",
  },
  {
    name: "DeepSORT",
    description: "Deep learning approach for online multi-object tracking with appearance features.",
    icon: "🔄",
  },
  {
    name: "Explainable AI",
    description: "Techniques to help humans understand the decisions made by AI models.",
    icon: "🧠",
  },
  {
    name: "TensorFlow",
    description: "Open-source machine learning framework for model training and deployment.",
    icon: "📊",
  },
  {
    name: "PyTorch",
    description: "Deep learning framework with strong GPU acceleration and dynamic computation.",
    icon: "🔥",
  },
  {
    name: "ONNX Runtime",
    description: "Cross-platform inference accelerator supporting multiple frameworks.",
    icon: "⚡",
  },
];

const TechStackSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/0 to-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Technology Stack</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our system is built on cutting-edge open-source technologies and custom algorithms
            for optimal performance and accuracy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start">
                <div className="text-3xl mr-4">{tech.icon}</div>
                <div>
                  <h3 className="text-lg font-medium mb-2">{tech.name}</h3>
                  <p className="text-muted-foreground text-sm">{tech.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 bg-muted rounded-lg p-6 max-w-3xl mx-auto"
        >
          <div className="flex items-start">
            <AlertCircle className="h-5 w-5 text-tech-purple mr-3 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-medium mb-2">Open Source Foundation</h4>
              <p className="text-muted-foreground text-sm">
                Our project builds upon and contributes back to the open-source community,
                with customizations and improvements designed for pedestrian tracking applications.
                Check our documentation for implementation details and model architecture.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;
