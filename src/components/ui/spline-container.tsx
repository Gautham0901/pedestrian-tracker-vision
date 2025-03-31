
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface SplineContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  url: string;
  width?: string | number;
  height?: string | number;
  splineClass?: string;
  loadingFallback?: React.ReactNode;
}

const SplineContainer = ({
  url,
  width = '100%',
  height = '500px',
  splineClass,
  loadingFallback,
  className,
  ...props
}: SplineContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [splineLoaded, setSplineLoaded] = useState(false);

  useEffect(() => {
    // Load Spline script dynamically
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@0.9.523/build/spline-viewer.js';
    script.async = true;
    script.onload = () => {
      setSplineLoaded(true);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    // Set up event listener for when Spline fully loads
    if (splineLoaded && containerRef.current) {
      const viewer = containerRef.current.querySelector('spline-viewer');
      if (viewer) {
        viewer.addEventListener('load', () => {
          setLoading(false);
        });
      }
    }
  }, [splineLoaded]);

  return (
    <div
      ref={containerRef}
      className={cn('relative', className)}
      style={{ width, height }}
      {...props}
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-card/50 backdrop-blur-sm z-10">
          {loadingFallback || (
            <div className="flex flex-col items-center">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
              <p className="mt-4 text-sm text-muted-foreground">Loading 3D scene...</p>
            </div>
          )}
        </div>
      )}
      {splineLoaded && (
        <spline-viewer
          url={url}
          class={cn('w-full h-full', splineClass)}
        ></spline-viewer>
      )}
    </div>
  );
};

export default SplineContainer;
