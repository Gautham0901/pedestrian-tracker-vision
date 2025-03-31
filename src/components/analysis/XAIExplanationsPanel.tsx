
import React from "react";
import { motion } from "framer-motion";
import { Info, Zap, BarChart3, Brain } from "lucide-react";
import { 
  Card, CardContent, CardDescription, CardHeader, CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const XAIExplanationsPanel = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold">XAI Explanations</h2>
          <p className="text-muted-foreground">Explainable AI insights for detection and tracking decisions</p>
        </div>
        <Button variant="outline" className="mt-2 md:mt-0">
          <Info className="mr-2 h-4 w-4" />
          How XAI Works
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg">Feature Importance</CardTitle>
            <CardDescription>What the model looks at to identify pedestrians</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Human posture/silhouette</span>
                  <span className="text-sm text-muted-foreground">92%</span>
                </div>
                <Progress value={92} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Head and shoulders</span>
                  <span className="text-sm text-muted-foreground">87%</span>
                </div>
                <Progress value={87} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Lower body movement</span>
                  <span className="text-sm text-muted-foreground">73%</span>
                </div>
                <Progress value={73} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Clothing patterns</span>
                  <span className="text-sm text-muted-foreground">68%</span>
                </div>
                <Progress value={68} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Motion trajectory</span>
                  <span className="text-sm text-muted-foreground">62%</span>
                </div>
                <Progress value={62} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Detection Confidence</CardTitle>
            <CardDescription>Accuracy metrics across conditions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex flex-col items-center">
                <div className="relative w-24 h-24">
                  <svg className="w-24 h-24 -rotate-90" viewBox="0 0 100 100">
                    <circle
                      className="text-muted stroke-current"
                      strokeWidth="10"
                      fill="transparent"
                      r="40"
                      cx="50"
                      cy="50"
                    />
                    <circle
                      className="text-tech-blue stroke-current"
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeDasharray={250}
                      strokeDashoffset={250 - (250 * 88) / 100}
                      fill="transparent"
                      r="40"
                      cx="50"
                      cy="50"
                    />
                  </svg>
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <span className="text-2xl font-bold">88%</span>
                  </div>
                </div>
                <span className="text-sm text-muted-foreground mt-2">Overall accuracy</span>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-sm">
                    <div className="h-3 w-3 rounded-full bg-tech-blue mr-2" />
                    Well-lit conditions
                  </div>
                  <span className="text-sm font-medium">94%</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-sm">
                    <div className="h-3 w-3 rounded-full bg-tech-indigo mr-2" />
                    Partial occlusion
                  </div>
                  <span className="text-sm font-medium">82%</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-sm">
                    <div className="h-3 w-3 rounded-full bg-tech-purple mr-2" />
                    Low-light conditions
                  </div>
                  <span className="text-sm font-medium">76%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Detection Insights</CardTitle>
              <Zap className="h-4 w-4 text-tech-blue" />
            </div>
          </CardHeader>
          <CardContent className="pt-2">
            <p className="text-sm text-muted-foreground mb-4">
              YOLOv10 detection process uses anchor-free approach with dynamic allocation of detection resources.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-tech-blue/10 flex items-center justify-center text-tech-blue mr-2 mt-0.5 flex-shrink-0">
                  1
                </div>
                <span>Initial feature extraction via CNN backbone</span>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-tech-blue/10 flex items-center justify-center text-tech-blue mr-2 mt-0.5 flex-shrink-0">
                  2
                </div>
                <span>Multi-scale feature maps for varied detection sizes</span>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-tech-blue/10 flex items-center justify-center text-tech-blue mr-2 mt-0.5 flex-shrink-0">
                  3
                </div>
                <span>Direct regression of bounding boxes and class confidence</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Tracking Logic</CardTitle>
              <BarChart3 className="h-4 w-4 text-tech-teal" />
            </div>
          </CardHeader>
          <CardContent className="pt-2">
            <p className="text-sm text-muted-foreground mb-4">
              DeepSORT integrates appearance features with motion prediction for robust tracking.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-tech-teal/10 flex items-center justify-center text-tech-teal mr-2 mt-0.5 flex-shrink-0">
                  1
                </div>
                <span>Kalman filtering for motion prediction between frames</span>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-tech-teal/10 flex items-center justify-center text-tech-teal mr-2 mt-0.5 flex-shrink-0">
                  2
                </div>
                <span>Deep appearance features from CNN for re-identification</span>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-tech-teal/10 flex items-center justify-center text-tech-teal mr-2 mt-0.5 flex-shrink-0">
                  3
                </div>
                <span>Hungarian algorithm for optimal detection-to-track association</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">XAI Methods</CardTitle>
              <Brain className="h-4 w-4 text-tech-purple" />
            </div>
          </CardHeader>
          <CardContent className="pt-2">
            <p className="text-sm text-muted-foreground mb-4">
              Multiple XAI techniques used to provide insights into model decisions.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-tech-purple/10 flex items-center justify-center text-tech-purple mr-2 mt-0.5 flex-shrink-0">
                  1
                </div>
                <span>Grad-CAM for visual feature importance heatmaps</span>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-tech-purple/10 flex items-center justify-center text-tech-purple mr-2 mt-0.5 flex-shrink-0">
                  2
                </div>
                <span>SHAP values for quantifying feature contributions</span>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-tech-purple/10 flex items-center justify-center text-tech-purple mr-2 mt-0.5 flex-shrink-0">
                  3
                </div>
                <span>Attention visualization for tracking association decisions</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default XAIExplanationsPanel;
