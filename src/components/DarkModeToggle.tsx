"use client";
import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';

const DarkModeToggle: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Ensure component is mounted before rendering UI to prevent hydration mismatch
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <motion.button
      aria-label={theme === 'dark' ? 'Ativar Modo Claro' : 'Ativar Modo Escuro'}
      title={theme === 'dark' ? 'Ativar Modo Claro' : 'Ativar Modo Escuro'}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 fixed top-4 right-4 z-50 text-2xl"
      whileHover={{ scale: 1.1, rotate: theme === 'dark' ? 15 : -15 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.5 }}
    >
      {theme === 'dark' ? '🌞' : '🌙'}
    </motion.button>
  );
};

export default DarkModeToggle;

