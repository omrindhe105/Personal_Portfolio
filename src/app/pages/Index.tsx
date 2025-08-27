import React from "react";
import HeroSection from "../components/ui/HeroSection";
import Navbar from "../components/ui/Navbar";
import AboutSection from "../components/ui/AboutSection";
import WorkSection from "../components/ui/WorkSection";
import SkillsSection from "../components/ui/SkillsSection";
import ContactSection from "../components/ui/ContactSection";
import Footer from "../components/ui/Footer";

const Index = () => {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
