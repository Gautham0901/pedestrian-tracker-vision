
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnalyticsDashboard from "@/components/analysis/AnalyticsDashboard";
import XAIExplanationsPanel from "@/components/analysis/XAIExplanationsPanel";

const Analysis = () => {
  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold mb-2">Analysis & Results</h1>
          <p className="text-muted-foreground max-w-3xl">
            Comprehensive statistical analysis, visualizations, and explainable AI insights from pedestrian detection and tracking.
          </p>
        </motion.div>

        <Tabs defaultValue="analytics" className="space-y-8">
          <TabsList className="w-full max-w-md grid grid-cols-2">
            <TabsTrigger value="analytics">Analytics Dashboard</TabsTrigger>
            <TabsTrigger value="explanations">XAI Explanations</TabsTrigger>
          </TabsList>
          
          <TabsContent value="analytics">
            <AnalyticsDashboard />
          </TabsContent>
          
          <TabsContent value="explanations">
            <XAIExplanationsPanel />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Analysis;
