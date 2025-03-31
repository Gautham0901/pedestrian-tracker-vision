
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";

interface TeamMemberProps {
  name: string;
  role: string;
  description?: string;
  imageUrl?: string;
  links?: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  description,
  imageUrl,
  links,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden hover:shadow-md transition-shadow">
        <div className="relative aspect-square bg-muted">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={name}
              className="object-cover w-full h-full"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
              <span className="text-4xl font-bold text-primary/40">
                {name.charAt(0)}
              </span>
            </div>
          )}
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-sm text-muted-foreground font-medium mt-1">{role}</p>
          {description && (
            <p className="mt-4 text-sm text-muted-foreground">{description}</p>
          )}
          
          {links && (
            <div className="mt-4 flex space-x-3">
              {links.github && (
                <a 
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={18} />
                </a>
              )}
              {links.linkedin && (
                <a 
                  href={links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin size={18} />
                </a>
              )}
              {links.email && (
                <a 
                  href={`mailto:${links.email}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail size={18} />
                </a>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

const TeamSection = () => {
  const teamMembers: TeamMemberProps[] = [
    {
      name: "Aatrey Anand V",
      role: "Team Member",
      description: "Specializing in computer vision and AI model development.",
      links: {
        github: "#",
        linkedin: "#",
        email: "aatrey@example.com"
      }
    },
    {
      name: "Gautham B",
      role: "Team Member",
      description: "Focus on deep learning algorithms and tracking systems.",
      links: {
        github: "#",
        linkedin: "#",
        email: "gautham@example.com"
      }
    },
    {
      name: "Mrs. K. Sangeetha",
      role: "Mentor",
      description: "Guiding the team with expertise in computer vision and AI research.",
      links: {
        linkedin: "#",
        email: "sangeetha@example.com"
      }
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            Meet Our Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            The brilliant minds behind PedestrianTrackAI working to advance pedestrian detection and tracking technology.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
