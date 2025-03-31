
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface SplineContainerProps {
  splineUrl: string;
  height?: string;
  fallbackImageSrc?: string;
}

const SplineContainer: React.FC<SplineContainerProps> = ({
  splineUrl,
  height = "500px",
  fallbackImageSrc = "",
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // Dynamic import of Spline script
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@splinetool/viewer@0.9.490/build/spline-viewer.js";
    script.type = "module";
    script.async = true;
    script.onload = () => {
      setIsLoaded(true);
    };
    script.onerror = () => {
      setIsError(true);
    };
    document.head.appendChild(script);

    return () => {
      // Cleanup
      document.head.removeChild(script);
    };
  }, []);

  const containerStyles: React.CSSProperties = {
    width: "100%",
    height: height,
    position: "relative",
    overflow: "hidden",
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      style={containerStyles}
      className="rounded-lg"
    >
      {isLoaded && !isError ? (
        <>
          <spline-viewer
            url={splineUrl}
            style={{ width: "100%", height: "100%" }}
          ></spline-viewer>
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background to-transparent opacity-70" />
        </>
      ) : (
        <div className="flex items-center justify-center h-full bg-muted rounded-lg">
          {fallbackImageSrc ? (
            <img 
              src={fallbackImageSrc} 
              alt="3D visualization fallback" 
              className="max-h-full max-w-full object-contain"
            />
          ) : (
            <div className="text-center p-4">
              <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-muted-foreground">Loading 3D visualization...</p>
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default SplineContainer;
