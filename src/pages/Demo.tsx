
import React from "react";
import { motion } from "framer-motion";
import DetectionInterface from "@/components/demo/DetectionInterface";
import ResultsPanel from "@/components/demo/ResultsPanel";

const Demo = () => {
  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold mb-2">Interactive Demo</h1>
          <p className="text-muted-foreground max-w-3xl">
            Upload a video or use your webcam to test our pedestrian detection and tracking system in real-time.
            See XAI explanations of detection decisions and track individuals across frames.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <DetectionInterface />
          </div>
          <div>
            <ResultsPanel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
