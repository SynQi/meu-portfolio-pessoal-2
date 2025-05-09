"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  date: string;
  title: string;
  company: string;
  description: string;
  isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ date, title, company, description, isLast }) => {
  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div 
      className="relative pl-8 sm:pl-32 py-6 group"
      variants={itemVariants}
    >
      {/* Vertical line */}
      {!isLast && (
        <motion.div 
          className="absolute left-0 sm:left-16 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700 group-hover:bg-blue-500 transition-colors duration-300"
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        ></motion.div>
      )}
      {/* Dot */}
      <motion.div 
        className="absolute left-[-0.30rem] sm:left-[3.70rem] w-3 h-3 bg-gray-400 dark:bg-gray-600 rounded-full group-hover:bg-blue-600 dark:group-hover:bg-blue-400 transition-colors duration-300 transform group-hover:scale-125"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      ></motion.div>
      
      <div className="mb-4">
        <time className="block mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
          {date}
        </time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {title} at <span className="text-blue-600 dark:text-blue-400">{company}</span>
        </h3>
      </div>
      <p className="text-base font-normal text-gray-600 dark:text-gray-300">
        {description}
      </p>
    </motion.div>
  );
};

const Timeline: React.FC = () => {
  const experiences = [
    {
      date: 'Março 2022 - Presente',
      title: 'Engenheiro de Software Sênior',
      company: 'Tech Solutions Inc.',
      description: 'Liderando o desenvolvimento de aplicações web full-stack, utilizando React, Node.js e microsserviços. Focado em arquitetura escalável e performance.',
    },
    {
      date: 'Janeiro 2020 - Fevereiro 2022',
      title: 'Desenvolvedor Full-Stack Pleno',
      company: 'Inova Web Ltda.',
      description: 'Desenvolvimento e manutenção de plataformas de e-commerce, otimização de interfaces de usuário e integração com APIs de terceiros.',
    },
    {
      date: 'Junho 2018 - Dezembro 2019',
      title: 'Desenvolvedor Front-end Júnior',
      company: 'Startup Visionária',
      description: 'Criação de interfaces responsivas e interativas para produtos SaaS, colaborando em um ambiente ágil e dinâmico.',
    },
  ];

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } },
  };

  return (
    <motion.section 
      id="experience"
      className="py-16 bg-white dark:bg-gray-800"
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
          Minha Trajetória Profissional
        </motion.h2>
        <div className="relative">
          {experiences.map((exp, index) => (
            <TimelineItem
              key={index}
              date={exp.date}
              title={exp.title}
              company={exp.company}
              description={exp.description}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Timeline;

