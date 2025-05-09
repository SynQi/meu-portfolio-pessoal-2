"use client";
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  return (
    <motion.section 
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-100 dark:bg-gray-900 p-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
        Olá, eu sou <span className="text-blue-600 dark:text-blue-400">Alex Silva</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl">
        Desenvolvedor Full-Stack Apaixonado por Criar Soluções Inovadoras e Experiências Digitais Incríveis.
      </p>
      <motion.button 
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Veja Meus Projetos
      </motion.button>
    </motion.section>
  );
};

export default HeroSection;

