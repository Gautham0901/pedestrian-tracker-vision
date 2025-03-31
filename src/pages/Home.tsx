
import React from "react";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import DemoPreviewSection from "@/components/home/DemoPreviewSection";
import TechStackSection from "@/components/home/TechStackSection";

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <DemoPreviewSection />
      <TechStackSection />
    </div>
  );
};

export default Home;
