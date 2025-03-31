
import React from "react";
import { motion } from "framer-motion";
import { Check, Copy, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ApiDocsSection = () => {
  const [copiedEndpoint, setCopiedEndpoint] = React.useState<string | null>(null);

  const handleCopy = (text: string, endpoint: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEndpoint(endpoint);
    setTimeout(() => setCopiedEndpoint(null), 2000);
  };

  return (
    <div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-2xl font-bold mb-6"
      >
        API Documentation
      </motion.h2>

      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">REST API Endpoints</h3>
          <div className="border border-border rounded-lg overflow-hidden">
            <div className="bg-muted p-4 border-b border-border">
              <h4 className="font-medium text-lg">Image Detection</h4>
              <p className="text-sm text-muted-foreground">
                Submit an image for pedestrian detection
              </p>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <code className="bg-muted text-primary px-2 py-1 rounded text-sm">
                  POST /api/v1/detect
                </code>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() =>
                    handleCopy("POST /api/v1/detect", "detect")
                  }
                >
                  {copiedEndpoint === "detect" ? (
                    <Check className="h-4 w-4 text-tech-teal" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>

              <Tabs defaultValue="request">
                <TabsList className="w-full grid grid-cols-2 mb-4">
                  <TabsTrigger value="request">Request</TabsTrigger>
                  <TabsTrigger value="response">Response</TabsTrigger>
                </TabsList>
                <TabsContent value="request">
                  <div className="bg-card border border-border rounded-md p-3 overflow-x-auto">
                    <pre className="text-xs text-muted-foreground">
{`Content-Type: multipart/form-data

{
  "image": <file>,
  "options": {
    "confidence_threshold": 0.5,
    "enable_xai": true
  }
}`}
                    </pre>
                  </div>
                </TabsContent>
                <TabsContent value="response">
                  <div className="bg-card border border-border rounded-md p-3 overflow-x-auto">
                    <pre className="text-xs text-muted-foreground">
{`{
  "detections": [
    {
      "id": 1,
      "bbox": [120, 80, 200, 300],
      "confidence": 0.92,
      "xai_data": {
        "feature_importance": {
          "posture": 0.72,
          "head": 0.65,
          "clothing": 0.48
        }
      }
    },
    ...
  ],
  "processing_time": 0.128,
  "model_version": "YOLOv10-S"
}`}
                    </pre>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>

        <div className="border border-border rounded-lg overflow-hidden">
          <div className="bg-muted p-4 border-b border-border">
            <h4 className="font-medium text-lg">Video Processing</h4>
            <p className="text-sm text-muted-foreground">
              Process a video for pedestrian detection and tracking
            </p>
          </div>
          <div className="p-4">
            <div className="flex justify-between items-center mb-2">
              <code className="bg-muted text-primary px-2 py-1 rounded text-sm">
                POST /api/v1/process-video
              </code>
              <Button
                variant="ghost"
                size="sm"
                onClick={() =>
                  handleCopy("POST /api/v1/process-video", "process-video")
                }
              >
                {copiedEndpoint === "process-video" ? (
                  <Check className="h-4 w-4 text-tech-teal" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>

            <Tabs defaultValue="request">
              <TabsList className="w-full grid grid-cols-2 mb-4">
                <TabsTrigger value="request">Request</TabsTrigger>
                <TabsTrigger value="response">Response</TabsTrigger>
              </TabsList>
              <TabsContent value="request">
                <div className="bg-card border border-border rounded-md p-3 overflow-x-auto">
                  <pre className="text-xs text-muted-foreground">
{`Content-Type: multipart/form-data

{
  "video": <file>,
  "options": {
    "confidence_threshold": 0.5,
    "enable_tracking": true,
    "enable_xai": true,
    "output_format": "mp4"
  }
}`}
                  </pre>
                </div>
              </TabsContent>
              <TabsContent value="response">
                <div className="bg-card border border-border rounded-md p-3 overflow-x-auto">
                  <pre className="text-xs text-muted-foreground">
{`{
  "job_id": "job_8f7d6e5c",
  "status": "processing",
  "estimated_time": 25,
  "status_url": "/api/v1/job-status/job_8f7d6e5c"
}`}
                  </pre>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Code Examples</h3>
          <Tabs defaultValue="python">
            <TabsList className="mb-4">
              <TabsTrigger value="python">Python</TabsTrigger>
              <TabsTrigger value="javascript">JavaScript</TabsTrigger>
              <TabsTrigger value="curl">cURL</TabsTrigger>
            </TabsList>
            <TabsContent value="python">
              <div className="relative">
                <div className="absolute top-3 right-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      handleCopy(
                        `import requests

# Image detection
url = "https://api.pedestriantracker.ai/v1/detect"
files = {"image": open("image.jpg", "rb")}
data = {"options": {"confidence_threshold": 0.5, "enable_xai": True}}

response = requests.post(url, files=files, data=data)
detections = response.json()

print(f"Found {len(detections['detections'])} pedestrians")`,
                        "python"
                      )
                    }
                  >
                    {copiedEndpoint === "python" ? (
                      <Check className="h-4 w-4 text-tech-teal" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                <div className="bg-black rounded-md p-4">
                  <div className="flex items-center space-x-2 border-b border-zinc-700 pb-2 mb-4">
                    <Terminal className="h-4 w-4 text-zinc-400" />
                    <span className="text-xs text-zinc-400">python</span>
                  </div>
                  <pre className="text-xs text-white overflow-x-auto">
{`import requests

# Image detection
url = "https://api.pedestriantracker.ai/v1/detect"
files = {"image": open("image.jpg", "rb")}
data = {"options": {"confidence_threshold": 0.5, "enable_xai": True}}

response = requests.post(url, files=files, data=data)
detections = response.json()

print(f"Found {len(detections['detections'])} pedestrians")`}
                  </pre>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="javascript">
              <div className="relative">
                <div className="absolute top-3 right-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      handleCopy(
                        `// Using fetch API
const url = 'https://api.pedestriantracker.ai/v1/detect';
const formData = new FormData();
const imageFile = document.querySelector('#imageInput').files[0];
formData.append('image', imageFile);
formData.append('options', JSON.stringify({
  confidence_threshold: 0.5,
  enable_xai: true
}));

fetch(url, {
  method: 'POST',
  body: formData,
})
  .then(response => response.json())
  .then(data => {
    console.log(\`Found \${data.detections.length} pedestrians\`);
  })
  .catch(error => console.error('Error:', error));`,
                        "javascript"
                      )
                    }
                  >
                    {copiedEndpoint === "javascript" ? (
                      <Check className="h-4 w-4 text-tech-teal" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                <div className="bg-black rounded-md p-4">
                  <div className="flex items-center space-x-2 border-b border-zinc-700 pb-2 mb-4">
                    <Terminal className="h-4 w-4 text-zinc-400" />
                    <span className="text-xs text-zinc-400">javascript</span>
                  </div>
                  <pre className="text-xs text-white overflow-x-auto">
{`// Using fetch API
const url = 'https://api.pedestriantracker.ai/v1/detect';
const formData = new FormData();
const imageFile = document.querySelector('#imageInput').files[0];
formData.append('image', imageFile);
formData.append('options', JSON.stringify({
  confidence_threshold: 0.5,
  enable_xai: true
}));

fetch(url, {
  method: 'POST',
  body: formData,
})
  .then(response => response.json())
  .then(data => {
    console.log(\`Found \${data.detections.length} pedestrians\`);
  })
  .catch(error => console.error('Error:', error));`}
                  </pre>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="curl">
              <div className="relative">
                <div className="absolute top-3 right-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      handleCopy(
                        `curl -X POST https://api.pedestriantracker.ai/v1/detect \\
  -F "image=@image.jpg" \\
  -F 'options={"confidence_threshold": 0.5, "enable_xai": true}'`,
                        "curl"
                      )
                    }
                  >
                    {copiedEndpoint === "curl" ? (
                      <Check className="h-4 w-4 text-tech-teal" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                <div className="bg-black rounded-md p-4">
                  <div className="flex items-center space-x-2 border-b border-zinc-700 pb-2 mb-4">
                    <Terminal className="h-4 w-4 text-zinc-400" />
                    <span className="text-xs text-zinc-400">bash</span>
                  </div>
                  <pre className="text-xs text-white overflow-x-auto">
{`curl -X POST https://api.pedestriantracker.ai/v1/detect \\
  -F "image=@image.jpg" \\
  -F 'options={"confidence_threshold": 0.5, "enable_xai": true}'`}
                  </pre>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ApiDocsSection;
