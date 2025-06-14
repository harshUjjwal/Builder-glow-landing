import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronDown, Github, Mail, MapPin } from "lucide-react";
import PhotoUpload from "./PhotoUpload";
import { portfolioData } from "@/lib/portfolio-data";

const Hero = () => {
  const [profilePhoto, setProfilePhoto] = useState<string>("");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-portfolio-50 via-white to-blue-50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-portfolio-100 text-portfolio-800 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Available for opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-4"
            >
              {portfolioData.personal.name}
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-portfolio-600 font-semibold mb-4"
            >
              {portfolioData.personal.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-gray-600 mb-6 italic"
            >
              "{portfolioData.personal.subtitle}"
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-gray-700 mb-8 max-w-2xl leading-relaxed"
            >
              {portfolioData.personal.summary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="bg-portfolio-600 hover:bg-portfolio-700 text-white px-8 py-3 rounded-full"
              >
                <Mail size={20} className="mr-2" />
                Get In Touch
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  window.open(portfolioData.personal.github, "_blank")
                }
                className="border-portfolio-300 text-portfolio-600 hover:bg-portfolio-50 px-8 py-3 rounded-full"
              >
                <Github size={20} className="mr-2" />
                View GitHub
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex items-center justify-center lg:justify-start gap-4 text-gray-600"
            >
              <div className="flex items-center gap-1">
                <MapPin size={16} />
                <span className="text-sm">
                  {portfolioData.personal.location}
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Photo Upload */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-portfolio-400 to-blue-400 rounded-full blur opacity-20 animate-glow" />
              <PhotoUpload
                onPhotoChange={setProfilePhoto}
                currentPhoto={profilePhoto}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="cursor-pointer"
            onClick={() => scrollToSection("about")}
          >
            <ChevronDown size={32} className="text-portfolio-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
