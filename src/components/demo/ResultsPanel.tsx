
import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Info, Users, Clock, Cpu } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const detectionResults = [
  {
    id: 1,
    label: "Person",
    confidence: 0.92,
    trackId: "P-001",
    highlighted: true,
  },
  {
    id: 2,
    label: "Person",
    confidence: 0.88,
    trackId: "P-002",
    highlighted: false,
  },
  {
    id: 3,
    label: "Person",
    confidence: 0.85,
    trackId: "P-003",
    highlighted: false,
  },
  {
    id: 4,
    label: "Person",
    confidence: 0.79,
    trackId: "P-004",
    highlighted: false,
  },
];

const ResultsPanel = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-card rounded-xl shadow-md overflow-hidden h-full flex flex-col"
    >
      <div className="p-4 border-b border-border flex items-center justify-between">
        <h3 className="font-medium">Detection Results</h3>
        <Badge variant="outline" className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-tech-teal animate-pulse"></span>
          Live
        </Badge>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 border-b border-border">
        <div className="flex flex-col items-center p-3 bg-muted rounded-lg">
          <Users className="h-5 w-5 text-tech-blue mb-2" />
          <span className="text-xl font-semibold">4</span>
          <span className="text-xs text-muted-foreground">Persons</span>
        </div>
        <div className="flex flex-col items-center p-3 bg-muted rounded-lg">
          <Clock className="h-5 w-5 text-tech-purple mb-2" />
          <span className="text-xl font-semibold">35ms</span>
          <span className="text-xs text-muted-foreground">Inference</span>
        </div>
        <div className="flex flex-col items-center p-3 bg-muted rounded-lg">
          <Cpu className="h-5 w-5 text-tech-teal mb-2" />
          <span className="text-xl font-semibold">25fps</span>
          <span className="text-xs text-muted-foreground">Processing</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
          <h4 className="text-sm font-medium mb-3">Detection Objects</h4>
          <div className="space-y-3">
            {detectionResults.map((result) => (
              <motion.div
                key={result.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className={`p-3 rounded-lg border ${
                  result.highlighted
                    ? "border-tech-blue bg-tech-blue/5"
                    : "border-border bg-card"
                }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <Badge variant="secondary" className="mr-2">
                      {result.trackId}
                    </Badge>
                    <span className="font-medium">{result.label}</span>
                  </div>
                  <Badge
                    variant={result.confidence > 0.85 ? "default" : "outline"}
                    className={
                      result.confidence > 0.85 ? "bg-tech-teal" : ""
                    }
                  >
                    {(result.confidence * 100).toFixed(0)}%
                  </Badge>
                </div>
                <div className="w-full">
                  <Progress value={result.confidence * 100} className="h-1" />
                </div>
                {result.highlighted && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="mt-3 pt-3 border-t border-border text-sm text-muted-foreground"
                  >
                    <div className="flex items-start mb-2">
                      <Info className="h-4 w-4 mr-2 flex-shrink-0 mt-0.5" />
                      <span>
                        XAI identified key features: posture, head position, and
                        clothing texture
                      </span>
                    </div>
                    <div className="flex justify-between text-xs mt-2">
                      <span>Tracked for 52 frames</span>
                      <button className="text-primary flex items-center">
                        Details
                        <ChevronRight className="h-3 w-3 ml-1" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ResultsPanel;
