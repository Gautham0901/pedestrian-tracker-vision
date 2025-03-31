
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, PieChart, Pie, Cell 
} from "recharts";
import { 
  Card, CardContent, CardDescription, CardHeader, CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ClipboardList, Users, TrendingUp, Clock, Map } from "lucide-react";

const dayData = [
  { hour: "00:00", count: 5 },
  { hour: "02:00", count: 3 },
  { hour: "04:00", count: 2 },
  { hour: "06:00", count: 8 },
  { hour: "08:00", count: 25 },
  { hour: "10:00", count: 43 },
  { hour: "12:00", count: 78 },
  { hour: "14:00", count: 65 },
  { hour: "16:00", count: 85 },
  { hour: "18:00", count: 98 },
  { hour: "20:00", count: 62 },
  { hour: "22:00", count: 35 },
];

const weekData = [
  { day: "Mon", count: 340 },
  { day: "Tue", count: 290 },
  { day: "Wed", count: 410 },
  { day: "Thu", count: 380 },
  { day: "Fri", count: 520 },
  { day: "Sat", count: 610 },
  { day: "Sun", count: 425 },
];

const trackingData = [
  { name: "< 5 sec", value: 120 },
  { name: "5-15 sec", value: 85 },
  { name: "15-30 sec", value: 40 },
  { name: "30+ sec", value: 25 },
];

const COLORS = ["#0EA5E9", "#6366F1", "#8B5CF6", "#22D3EE"];

const AnalyticsDashboard = () => {
  const [timeRange, setTimeRange] = useState("day");

  return (
    <div className="space-y-6">
      <Tabs defaultValue="day" onValueChange={setTimeRange}>
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Analytics Dashboard</h2>
          <TabsList>
            <TabsTrigger value="day">24 Hours</TabsTrigger>
            <TabsTrigger value="week">Week</TabsTrigger>
            <TabsTrigger value="month">Month</TabsTrigger>
          </TabsList>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Total Pedestrians</CardDescription>
              <CardTitle className="text-3xl flex items-baseline">
                1,429
                <span className="text-sm text-tech-teal ml-2 font-normal">+12.5%</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground flex items-center">
                <Users className="h-3 w-3 mr-1" />
                Unique individuals detected
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Peak Count</CardDescription>
              <CardTitle className="text-3xl flex items-baseline">
                98
                <span className="text-xs text-muted-foreground ml-2 font-normal">at 18:00</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" />
                Maximum simultaneous detections
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Avg. Track Duration</CardDescription>
              <CardTitle className="text-3xl flex items-baseline">
                12.4s
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground flex items-center">
                <Clock className="h-3 w-3 mr-1" />
                Average time in camera view
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Analysis Coverage</CardDescription>
              <CardTitle className="text-3xl flex items-baseline">
                94%
                <span className="text-sm text-tech-teal ml-2 font-normal">+2.1%</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground flex items-center">
                <Map className="h-3 w-3 mr-1" />
                Of scene area analyzed
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-lg">Pedestrian Frequency</CardTitle>
              <CardDescription>Number of pedestrians over time</CardDescription>
            </CardHeader>
            <CardContent>
              <TabsContent value="day" className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={dayData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                    <XAxis dataKey="hour" />
                    <YAxis />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: "rgba(255, 255, 255, 0.8)", 
                        borderRadius: "0.5rem", 
                        border: "none", 
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" 
                      }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="count" 
                      stroke="#0EA5E9" 
                      strokeWidth={2} 
                      activeDot={{ r: 8 }} 
                    />
                  </LineChart>
                </ResponsiveContainer>
              </TabsContent>
              
              <TabsContent value="week" className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart 
                    data={weekData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: "rgba(255, 255, 255, 0.8)", 
                        borderRadius: "0.5rem", 
                        border: "none", 
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" 
                      }} 
                    />
                    <Bar dataKey="count" fill="#0EA5E9" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </TabsContent>
              
              <TabsContent value="month" className="h-[300px] flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <ClipboardList className="h-12 w-12 mx-auto mb-2 opacity-50" />
                  <p>Monthly data will be available soon</p>
                </div>
              </TabsContent>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Tracking Duration</CardTitle>
              <CardDescription>How long pedestrians stayed in frame</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={trackingData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {trackingData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "rgba(255, 255, 255, 0.8)", 
                      borderRadius: "0.5rem", 
                      border: "none", 
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" 
                    }} 
                    formatter={(value: number) => [`${value} pedestrians`, "Count"]}
                  />
                </PieChart>
              </ResponsiveContainer>
              
              <div className="grid grid-cols-2 gap-2 mt-2">
                {trackingData.map((entry, index) => (
                  <div key={`legend-${index}`} className="flex items-center text-xs">
                    <div 
                      className="h-3 w-3 rounded-sm mr-1"
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    />
                    <span>{entry.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </Tabs>
    </div>
  );
};

export default AnalyticsDashboard;
