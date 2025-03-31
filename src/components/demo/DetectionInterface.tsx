
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Upload, Play, Pause, RefreshCw, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const DetectionInterface = () => {
  const [activeTab, setActiveTab] = useState("upload");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [confidenceThreshold, setConfidenceThreshold] = useState([0.5]);
  const [showXaiExplanations, setShowXaiExplanations] = useState(true);
  const [showTrackingPaths, setShowTrackingPaths] = useState(true);

  const handleUpload = () => {
    // Handle file upload logic
    console.log("File upload triggered");
  };

  const handleStartProcessing = () => {
    setIsProcessing(true);
    console.log("Started processing");
  };

  const handleTogglePause = () => {
    setIsPaused(!isPaused);
    console.log("Toggled pause state");
  };

  const handleReset = () => {
    setIsProcessing(false);
    setIsPaused(false);
    console.log("Reset detection");
  };

  return (
    <div className="bg-card rounded-xl shadow-md overflow-hidden">
      <Tabs defaultValue="upload" onValueChange={setActiveTab} className="w-full">
        <div className="border-b border-border p-4">
          <TabsList className="grid grid-cols-2">
            <TabsTrigger value="upload">Upload Video</TabsTrigger>
            <TabsTrigger value="webcam">Live Webcam</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="upload" className="p-6">
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-6">
            {isProcessing ? (
              <div className="relative w-full h-full">
                <img
                  src="https://images.unsplash.com/photo-1517732306149-e8f829eb588a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Processed video with detection"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  {isPaused ? (
                    <Badge variant="secondary" className="text-lg px-3 py-1">Paused</Badge>
                  ) : null}
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2">
                  <Button 
                    variant="secondary" 
                    size="sm" 
                    onClick={handleTogglePause}
                    className="rounded-full w-10 h-10 p-0 flex-shrink-0"
                  >
                    {isPaused ? <Play size={18} /> : <Pause size={18} />}
                  </Button>
                  <div className="h-1 bg-muted rounded-full w-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-primary"
                      initial={{ width: "0%" }}
                      animate={{ width: isPaused ? "60%" : "100%" }}
                      transition={{ 
                        duration: isPaused ? 0 : 10, 
                        ease: "linear",
                        repeat: isPaused ? 0 : Infinity,
                        repeatType: "loop"
                      }}
                    />
                  </div>
                  <Button 
                    variant="destructive" 
                    size="sm" 
                    onClick={handleReset}
                    className="rounded-full w-10 h-10 p-0 flex-shrink-0"
                  >
                    <RefreshCw size={18} />
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center p-8">
                <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-lg font-medium mb-2">Upload Video File</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Support for MP4, AVI, MOV (max 50MB)
                </p>
                <Button onClick={handleUpload}>Select File</Button>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <Label>Confidence Threshold</Label>
                  <span className="text-muted-foreground text-sm">{confidenceThreshold[0].toFixed(2)}</span>
                </div>
                <Slider
                  value={confidenceThreshold}
                  min={0.1}
                  max={0.9}
                  step={0.05}
                  onValueChange={setConfidenceThreshold}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Switch
                    id="xai"
                    checked={showXaiExplanations}
                    onCheckedChange={setShowXaiExplanations}
                  />
                  <Label htmlFor="xai">XAI Explanations</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="tracking"
                    checked={showTrackingPaths}
                    onCheckedChange={setShowTrackingPaths}
                  />
                  <Label htmlFor="tracking">Show Tracking Paths</Label>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-end">
              {!isProcessing ? (
                <Button
                  onClick={handleStartProcessing}
                  className="w-full"
                  size="lg"
                  disabled={activeTab !== "upload"}
                >
                  Start Detection
                </Button>
              ) : (
                <Button
                  variant="outline"
                  onClick={handleReset}
                  className="w-full"
                  size="lg"
                >
                  Reset
                </Button>
              )}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="webcam" className="p-6">
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-6">
            <div className="text-center p-8">
              <Settings className="h-12 w-12 mx-auto mb-4 text-muted-foreground animate-pulse" />
              <h3 className="text-lg font-medium mb-2">Webcam Access</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Allow camera access to start live pedestrian detection
              </p>
              <Button onClick={() => console.log("Request webcam access")}>Enable Camera</Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DetectionInterface;
