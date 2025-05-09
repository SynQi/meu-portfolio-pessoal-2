"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Example: Replace with actual API endpoint for form submission
    // try {
    //   const response = await fetch('/api/contact', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData),
    //   });
    //   if (response.ok) {
    //     setSubmitMessage('Mensagem enviada com sucesso!');
    //     setFormData({ name: '', email: '', message: '' }); // Clear form
    //   } else {
    //     setSubmitMessage('Ocorreu um erro ao enviar a mensagem. Tente novamente.');
    //   }
    // } catch (error) {
    //   setSubmitMessage('Ocorreu um erro de rede. Verifique sua conexão.');
    // }

    // Mock success for demonstration
    setSubmitMessage('Mensagem enviada com sucesso! (Simulação)');
    setFormData({ name: '', email: '', message: '' }); // Clear form

    setIsSubmitting(false);
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  const formItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.section 
      id="contact"
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
          Entre em Contato
        </motion.h2>
        <motion.form 
          onSubmit={handleSubmit} 
          className="max-w-lg mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div className="mb-4" variants={formItemVariants}>
            <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Nome</label>
            <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
          </motion.div>
          <motion.div className="mb-4" variants={formItemVariants}>
            <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Email</label>
            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
          </motion.div>
          <motion.div className="mb-6" variants={formItemVariants}>
            <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Mensagem</label>
            <textarea name="message" id="message" rows={4} value={formData.message} onChange={handleChange} required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"></textarea>
          </motion.div>
          <motion.div className="text-center" variants={formItemVariants}>
            <motion.button 
              type="submit" 
              disabled={isSubmitting} 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 ease-in-out disabled:opacity-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
            </motion.button>
          </motion.div>
          {submitMessage && 
            <motion.p 
              className="mt-4 text-center text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {submitMessage}
            </motion.p>
          }
        </motion.form>
      </div>
    </motion.section>
  );
};

export default ContactForm;

