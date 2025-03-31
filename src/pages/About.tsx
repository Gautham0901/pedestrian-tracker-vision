
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, GitHub, Globe, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const team = [
  {
    name: "Alex Johnson",
    role: "Project Lead",
    bio: "Computer vision researcher with 8+ years of experience in pedestrian detection algorithms.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sarah Chen",
    role: "ML Engineer",
    bio: "Specializes in YOLOv10 implementation and optimization for real-time pedestrian tracking.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Michael Torres",
    role: "XAI Specialist",
    bio: "Focuses on developing explainable AI techniques for computer vision applications.",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
  },
  {
    name: "Priya Sharma",
    role: "Frontend Developer",
    bio: "Creates intuitive interfaces for AI visualization and interactive demonstrations.",
    image: "https://randomuser.me/api/portraits/women/75.jpg",
  },
];

const publications = [
  {
    title: "Enhanced Pedestrian Detection with YOLOv10 and DeepSORT Integration",
    authors: "Johnson, A., Chen, S., Torres, M.",
    conference: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR)",
    year: "2023",
    link: "#",
  },
  {
    title: "XAI for Pedestrian Tracking: Making Computer Vision Models Transparent",
    authors: "Torres, M., Sharma, P., Johnson, A.",
    conference: "International Conference on Explainable AI (XAI)",
    year: "2023",
    link: "#",
  },
  {
    title: "Real-time Pedestrian Analysis for Urban Planning Applications",
    authors: "Chen, S., Johnson, A., Sharma, P.",
    conference: "Smart Cities and Urban Computing Workshop",
    year: "2022",
    link: "#",
  },
];

const About = () => {
  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h1 className="text-3xl font-bold mb-2">About the Project</h1>
          <p className="text-muted-foreground max-w-3xl">
            Our pedestrian detection and tracking system combines state-of-the-art computer vision with explainable AI techniques.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <div className="prose prose-slate max-w-none">
              <p className="text-muted-foreground mb-4">
                PedestrianTrackAI was developed to solve the challenges of accurate pedestrian detection 
                and tracking in complex urban environments. By leveraging the latest advancements in 
                computer vision and explainable AI, we aim to create systems that not only detect and 
                track pedestrians with high accuracy but also provide transparent explanations for 
                their decisions.
              </p>
              <p className="text-muted-foreground mb-4">
                Our research focuses on improving both the technical performance of detection algorithms 
                and their interpretability. We believe that explainable AI is crucial for building trust 
                in systems used for urban planning, security, autonomous vehicles, and pedestrian flow analysis.
              </p>
              <p className="text-muted-foreground">
                This project builds upon open source foundations while contributing novel approaches in 
                YOLOv10 optimization, DeepSORT tracking improvements, and innovative XAI methods specific 
                to pedestrian detection tasks.
              </p>
            </div>
            
            <div className="mt-6 flex flex-wrap gap-4">
              <Button asChild>
                <a href="https://github.com/" target="_blank" rel="noreferrer">
                  <GitHub className="mr-2 h-4 w-4" />
                  View on GitHub
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#publications">
                  <FileText className="mr-2 h-4 w-4" />
                  Research Papers
                </a>
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Project Timeline</CardTitle>
                <CardDescription>Development milestones</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative pl-6 border-l border-border">
                  <div className="absolute w-3 h-3 bg-tech-blue rounded-full -left-[7px] top-1"></div>
                  <div>
                    <p className="font-medium">Initial Research</p>
                    <p className="text-sm text-muted-foreground">January 2022</p>
                  </div>
                </div>
                <div className="relative pl-6 border-l border-border">
                  <div className="absolute w-3 h-3 bg-tech-teal rounded-full -left-[7px] top-1"></div>
                  <div>
                    <p className="font-medium">YOLOv10 Integration</p>
                    <p className="text-sm text-muted-foreground">May 2022</p>
                  </div>
                </div>
                <div className="relative pl-6 border-l border-border">
                  <div className="absolute w-3 h-3 bg-tech-indigo rounded-full -left-[7px] top-1"></div>
                  <div>
                    <p className="font-medium">DeepSORT Implementation</p>
                    <p className="text-sm text-muted-foreground">August 2022</p>
                  </div>
                </div>
                <div className="relative pl-6 border-l border-border">
                  <div className="absolute w-3 h-3 bg-tech-purple rounded-full -left-[7px] top-1"></div>
                  <div>
                    <p className="font-medium">XAI Methods Integration</p>
                    <p className="text-sm text-muted-foreground">November 2022</p>
                  </div>
                </div>
                <div className="relative pl-6">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                  <div>
                    <p className="font-medium">Public Release</p>
                    <p className="text-sm text-muted-foreground">February 2023</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((person, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card className="h-full flex flex-col">
                  <div className="pt-6 px-6">
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                      <img 
                        src={person.image} 
                        alt={person.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-center">{person.name}</CardTitle>
                    <CardDescription className="text-center mb-2">{person.role}</CardDescription>
                  </div>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground text-center">
                      {person.bio}
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-center space-x-4 pt-0">
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <GitHub size={18} />
                    </a>
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Globe size={18} />
                    </a>
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail size={18} />
                    </a>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          id="publications"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-8">Publications</h2>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">{pub.title}</CardTitle>
                    <CardDescription>{pub.authors}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">{pub.conference}</span>
                      <span className="text-sm font-medium">{pub.year}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" asChild className="ml-auto">
                      <a href={pub.link}>
                        Read Paper
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
                {index < publications.length - 1 && (
                  <Separator className="my-6" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
