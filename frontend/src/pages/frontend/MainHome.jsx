import React from "react";
import HeroSection from "./components/main/HeroSection";
import ServicesSection from "./components/main/ServicesSection";
import AboutSection from "./components/main/AboutSection";
import ProjectsSection from "./components/main/ProjectsSection";
import ProductsSection from "./components/main/ProductsSection";
import ContactSection from "./components/main/ContactSection";
import Footer from "./components/main/Footer";
import Navbar from "./components/main/Navbar";

const HomePage = () => {
  return (
    <div>
      <Navbar />

      {/* Hero: already has background image and overlay */}
      <HeroSection />

      {/* Services Section - Light Background */}
      <div className="bg-light">
        <ServicesSection />
      </div>

      {/* Projects Section - Muted Gray */}
      <div className="bg-body-secondary">
        <ProductsSection />
      </div>

      {/* Projects Section - Muted Gray */}
      <div className="bg-body-secondary">
        <ProjectsSection />
      </div>

      {/* About Section - White */}
      <div className="bg-white">
        <AboutSection />
      </div>

      {/* Contact Section - Light again */}
      <div className="bg-light">
        <ContactSection />
      </div>

      {/* Footer - Dark */}
      <Footer />
    </div>
  );
};

export default HomePage;
