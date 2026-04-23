"use client";

import { motion } from "framer-motion";
import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Forecasting India's EV Future",
    description: "Predicted EV market growth to ₹5 lakh crore by 2030 (36% CAGR) using time-series forecasting models on 2001–2024 data.",
    tags: ["Time Series", "Machine Learning", "Python"],
    link: "https://github.com/TanmayDhar36/Forecasting-India-s-UQBNOrnQlzo3ftqm0Jj5Sf9zEHlPApapd-rWsAHREzkweiTw"
  },
  {
    title: "Hand Sign Language Detection",
    description: "Real-time ASL hand gesture recognition (A-Z, 0-9) using MediaPipe for hand tracking and Random Forest for classification.",
    tags: ["Computer Vision", "MediaPipe", "Random Forest"],
    link: "https://github.com/TanmayDhar36/HAND-SIGN-LANGUAGE-DETECTION"
  },
  {
    title: "Air Quality Index Prediction",
    description: "Built and tuned regression models to predict localized AQI levels and visualized prediction errors to assist environmental decisions.",
    tags: ["Regression", "Data Preprocessing", "Python"],
    link: "https://github.com/TanmayDhar36/AQI_Prediction"
  },
  {
    title: "Water Quality Analysis",
    description: "Machine learning case study to analyze and predict water quality metrics based on environmental data factors.",
    tags: ["Classification", "EDA", "Machine Learning"],
    link: "https://github.com/TanmayDhar36/ML-Case-Study-on-Water-Quality-Analysis"
  },
  {
    title: "Twitter Sentiment Analysis",
    description: "Built an end-to-end NLP pipeline classifying sentiments using TF-IDF and ML classifiers to support brand sentiment monitoring.",
    tags: ["NLP", "TF-IDF", "Machine Learning"],
    link: "https://github.com/TanmayDhar36/TwitterSentimentAnalysis",
    live: "https://twettersentimentanalysis.onrender.com/"
  },
  {
    title: "Bike Sharing Demand Prediction",
    description: "Applied multiple regression models to predict bike sharing demand based on weather, time, and seasonal variables.",
    tags: ["Regression", "Predictive Modeling"],
    link: "https://github.com/TanmayDhar36/ML_Bike_Sharing_Demand_Prediction_Regression_Project"
  },
  {
    title: "Afame Tech Sales Dashboard",
    description: "Designed an interactive Tableau dashboard for tracking revenue trends, seasonality, and inventory planning.",
    tags: ["Tableau", "Data Visualization", "SQL"],
    link: "https://github.com/TanmayDhar36/Sales_Data_Analysis_Afame_Technology"
  },
  {
    title: "Google Play App Analysis",
    description: "Performed EDA and sentiment analysis to uncover pricing and category patterns affecting app ratings and installs.",
    tags: ["EDA", "Data Analysis", "Pandas"],
    link: "https://github.com/TanmayDhar36/Google_Play_Store_App_Review_Analysis"
  },
];

const TiltCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = React.useState(0);
  const [rotateY, setRotateY] = React.useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    setRotateX(yPct * -15); // Max 15deg rotation
    setRotateY(xPct * 15);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => window.open(project.link, "_blank")}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ perspective: 1000 }}
      className="block relative w-full h-full cursor-pointer group"
    >
      <motion.div
        animate={{ rotateX, rotateY }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="glass-panel p-8 rounded-3xl border border-white/5 hover:border-[#C9A84C]/30 transition-colors flex flex-col h-full transform-gpu"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div style={{ transform: "translateZ(30px)" }}>
          <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-gradient-gold transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-300 mb-6 leading-relaxed flex-grow text-sm">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-auto pt-4">
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="text-xs font-bold px-3 py-1 rounded-full bg-white/5 text-[#C9A84C] border border-[#C9A84C]/20"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="mt-6 flex items-center gap-4">
            <span className="text-sm font-bold text-white flex items-center gap-2">
              <FaGithub className="text-xl" /> GitHub
            </span>
            {project.live && (
              <a 
                href={project.live} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()} 
                className="text-sm font-bold text-[#C9A84C] flex items-center gap-1 hover:text-white transition-colors"
              >
                <span>Live Demo</span> <FaExternalLinkAlt className="text-xs" />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#121212] relative z-20 isolate overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gradient-gold text-sm font-bold tracking-widest uppercase mb-2">My Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Featured <span className="text-[#2D6A4F]">Projects</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <TiltCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
