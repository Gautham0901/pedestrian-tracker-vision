
import React from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ModelArchitectureSection = () => {
  return (
    <div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-2xl font-bold mb-6"
      >
        Model Architecture
      </motion.h2>

      <Tabs defaultValue="yolov10">
        <TabsList className="w-full max-w-md grid grid-cols-3 mb-6">
          <TabsTrigger value="yolov10">YOLOv10</TabsTrigger>
          <TabsTrigger value="deepsort">DeepSORT</TabsTrigger>
          <TabsTrigger value="xai">XAI</TabsTrigger>
        </TabsList>

        <TabsContent value="yolov10" className="space-y-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">YOLOv10 Architecture</h3>
            <p className="text-muted-foreground mb-6">
              YOLOv10 builds upon previous YOLO versions with several key improvements for pedestrian detection.
            </p>

            <div className="aspect-[16/8] bg-muted rounded-lg flex items-center justify-center mb-6">
              <img 
                src="https://miro.medium.com/v2/resize:fit:1400/1*CUgQW1e9ZYjH1BV2f0jO4g.png" 
                alt="YOLOv10 Architecture Diagram" 
                className="max-h-full rounded-lg object-contain"
              />
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="backbone">
                <AccordionTrigger>Backbone</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground mb-2">
                    Employs a CSPDarknet backbone with enhanced depth and improved feature extraction,
                    optimized specifically for human detection with custom pedestrian-focused layers.
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    <li>Specialized convolutional stages for pedestrian features</li>
                    <li>Enhanced skip connections for preserving spatial information</li>
                    <li>Optimized for efficient processing on edge devices</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="neck">
                <AccordionTrigger>Neck</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground mb-2">
                    Improved Feature Pyramid Network (FPN) with bidirectional information flow,
                    allowing better multi-scale feature representation for pedestrians of various sizes.
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    <li>Enhanced feature aggregation across scales</li>
                    <li>Attention mechanisms for focusing on human attributes</li>
                    <li>Custom scaling for pedestrian detection at different distances</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="head">
                <AccordionTrigger>Detection Head</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground mb-2">
                    Decoupled detection head with anchor-free approach, dynamically adjusting to
                    pedestrian postures and proportions in various scenarios.
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    <li>Specialized pedestrian classification branch</li>
                    <li>Regression optimization for human body proportions</li>
                    <li>Posture-aware bounding box prediction</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="bg-muted rounded-lg p-6">
            <h4 className="font-medium mb-3">Technical Specifications</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="text-sm font-medium mb-2">Model Variants</h5>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>YOLOv10-N (Nano)</span>
                    <span className="text-muted-foreground">3.5M params</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>YOLOv10-S (Small)</span>
                    <span className="text-muted-foreground">11.8M params</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>YOLOv10-M (Medium)</span>
                    <span className="text-muted-foreground">29.6M params</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>YOLOv10-L (Large)</span>
                    <span className="text-muted-foreground">54.3M params</span>
                  </div>
                </div>
              </div>
              <div>
                <h5 className="text-sm font-medium mb-2">Performance</h5>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Inference Speed</span>
                    <span className="text-muted-foreground">20-60 FPS</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>mAP (COCO)</span>
                    <span className="text-muted-foreground">52.8-64.3%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Input Resolution</span>
                    <span className="text-muted-foreground">640×640 px</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Pedestrian AP</span>
                    <span className="text-muted-foreground">86.7%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="deepsort" className="space-y-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">DeepSORT Architecture</h3>
            <p className="text-muted-foreground mb-6">
              DeepSORT extends traditional SORT algorithm with deep association metrics for robust
              pedestrian tracking across frames, even with occlusions.
            </p>

            <div className="aspect-[16/8] bg-muted rounded-lg flex items-center justify-center mb-6">
              <img 
                src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*YghbSaRoJQU7J7nJZ8r86Q.png" 
                alt="DeepSORT Architecture Diagram" 
                className="max-h-full rounded-lg object-contain"
              />
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="kalman">
                <AccordionTrigger>Kalman Filtering</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground mb-2">
                    Predicts pedestrian motion between frames using linear velocity model,
                    customized for human walking patterns and movement characteristics.
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    <li>State representation: position, velocity, aspect ratio, height</li>
                    <li>Custom motion model for natural pedestrian movement</li>
                    <li>Adaptive process noise for different movement speeds</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="appearance">
                <AccordionTrigger>Appearance Features</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground mb-2">
                    Deep CNN extracts visual features from pedestrian bounding boxes for
                    re-identification across frames, even after occlusion.
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    <li>128-dimensional embedding vector per detection</li>
                    <li>Trained on large pedestrian re-identification datasets</li>
                    <li>Robust to partial occlusion and lighting variations</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="matching">
                <AccordionTrigger>Matching Strategy</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground mb-2">
                    Cascaded matching approach combining motion and appearance information,
                    with Hungarian algorithm for optimal detection-to-track assignment.
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    <li>Mahalanobis distance for motion similarity</li>
                    <li>Cosine distance for appearance similarity</li>
                    <li>Weighted combination with adaptive gating</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="bg-muted rounded-lg p-6">
            <h4 className="font-medium mb-3">Technical Specifications</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="text-sm font-medium mb-2">Feature Extraction</h5>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Model Base</span>
                    <span className="text-muted-foreground">ResNet-50</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Feature Dimension</span>
                    <span className="text-muted-foreground">128</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Training Dataset</span>
                    <span className="text-muted-foreground">Market-1501</span>
                  </div>
                </div>
              </div>
              <div>
                <h5 className="text-sm font-medium mb-2">Performance</h5>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>MOTA (MOT16)</span>
                    <span className="text-muted-foreground">76.9%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>ID Switches</span>
                    <span className="text-muted-foreground">-62.5%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Processing Overhead</span>
                    <span className="text-muted-foreground">5-8ms/frame</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="xai" className="space-y-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">XAI Techniques</h3>
            <p className="text-muted-foreground mb-6">
              Multiple explainable AI approaches are integrated to provide insights into model decisions,
              increasing transparency and trust in the pedestrian detection system.
            </p>

            <div className="aspect-[16/8] bg-muted rounded-lg flex items-center justify-center mb-6">
              <img 
                src="https://miro.medium.com/v2/resize:fit:1400/0*tLLL_xZgD2qzJ6hZ" 
                alt="XAI Visualization" 
                className="max-h-full rounded-lg object-contain"
              />
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="gradcam">
                <AccordionTrigger>Grad-CAM Visualizations</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground mb-2">
                    Generates heatmaps highlighting regions of input images that influenced
                    pedestrian detection decisions the most.
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    <li>Class-specific gradient computation</li>
                    <li>Spatial feature map weighting</li>
                    <li>Layer-wise relevance propagation</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="shap">
                <AccordionTrigger>SHAP Values</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground mb-2">
                    Quantifies the contribution of each image feature to detection and
                    classification decisions based on game theory principles.
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    <li>Feature attribution for detection confidence</li>
                    <li>Interpretable quantification of feature importance</li>
                    <li>Model-agnostic explanation generation</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="attention">
                <AccordionTrigger>Attention Visualization</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground mb-2">
                    Reveals which appearance features were most critical for tracking association
                    and re-identification across frames.
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    <li>Visualizes DeepSORT association decision factors</li>
                    <li>Highlights discriminative regions for re-identification</li>
                    <li>Demonstrates feature matching between frames</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="bg-muted rounded-lg p-6">
            <h4 className="font-medium mb-3">Explanation Methods</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="text-sm font-medium mb-2">Visual Explanations</h5>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Saliency Maps</span>
                    <span className="text-muted-foreground">Pixel-level</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Feature Heatmaps</span>
                    <span className="text-muted-foreground">Activation-based</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Occlusion Sensitivity</span>
                    <span className="text-muted-foreground">Region-based</span>
                  </div>
                </div>
              </div>
              <div>
                <h5 className="text-sm font-medium mb-2">Quantitative Explanations</h5>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Feature Importance</span>
                    <span className="text-muted-foreground">Ranked metrics</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Decision Factors</span>
                    <span className="text-muted-foreground">Weight analysis</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Confidence Attribution</span>
                    <span className="text-muted-foreground">Score breakdown</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ModelArchitectureSection;
