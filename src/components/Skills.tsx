"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface SkillProps {
  name: string;
  level: number; // Percentage from 0 to 100
}

const SkillBar: React.FC<SkillProps> = ({ name, level }) => {
  const barVariants = {
    hidden: { width: 0 },
    visible: { width: `${level}%`, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <motion.div 
      className="mb-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-gray-700 dark:text-gray-300">{name}</span>
        <span className="text-sm font-medium text-blue-700 dark:text-blue-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <motion.div 
          className="bg-blue-600 h-2.5 rounded-full"
          variants={barVariants}
        ></motion.div>
      </div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  const technicalSkills = [
    { name: 'React & Next.js', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Node.js & Express', level: 85 },
    { name: 'Python & Django/Flask', level: 80 },
    { name: 'Bancos de Dados (SQL & NoSQL)', level: 88 },
    { name: 'Docker & Kubernetes', level: 75 },
    { name: 'AWS/Cloud', level: 70 },
  ];

  const softSkills = [
    { name: 'Comunicação', level: 95 },
    { name: 'Trabalho em Equipe', level: 92 },
    { name: 'Resolução de Problemas', level: 90 },
    { name: 'Pensamento Crítico', level: 88 },
    { name: 'Adaptabilidade', level: 85 },
  ];

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  return (
    <motion.section 
      id="skills"
      className="py-16 bg-gray-50 dark:bg-gray-850"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4 md:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          Minhas Habilidades
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div variants={sectionVariants}>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">Técnicas</h3>
            {technicalSkills.map((skill, index) => (
              <SkillBar key={`tech-${index}`} name={skill.name} level={skill.level} />
            ))}
          </motion.div>
          <motion.div variants={sectionVariants}>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">Interpessoais</h3>
            {softSkills.map((skill, index) => (
              <SkillBar key={`soft-${index}`} name={skill.name} level={skill.level} />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;

