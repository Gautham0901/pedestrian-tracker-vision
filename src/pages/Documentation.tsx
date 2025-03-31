
import React from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ApiDocsSection from "@/components/documentation/ApiDocsSection";
import ModelArchitectureSection from "@/components/documentation/ModelArchitectureSection";

const Documentation = () => {
  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold mb-2">Documentation</h1>
          <p className="text-muted-foreground max-w-3xl">
            Technical details, API specifications, and implementation guides for the pedestrian detection and tracking system.
          </p>
        </motion.div>

        <Tabs defaultValue="api" className="space-y-8">
          <TabsList className="w-full max-w-md grid grid-cols-2">
            <TabsTrigger value="api">API Documentation</TabsTrigger>
            <TabsTrigger value="model">Model Architecture</TabsTrigger>
          </TabsList>
          
          <TabsContent value="api">
            <ApiDocsSection />
          </TabsContent>
          
          <TabsContent value="model">
            <ModelArchitectureSection />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Documentation;
