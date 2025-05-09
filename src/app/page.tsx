import React from 'react';
import HeroSection from '@/components/HeroSection';
import Timeline from '@/components/Timeline';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import ContactForm from '@/components/ContactForm';
import DarkModeToggle from '@/components/DarkModeToggle';
import { ThemeProvider } from 'next-themes';

// As this is the root layout for the app router, we need to wrap it with ThemeProvider
// For a cleaner structure, one might create a specific client component for ThemeProvider and DarkModeToggle

export default function HomePage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <DarkModeToggle />
        <HeroSection />
        <Timeline />
        <Skills />
        <Projects />
        <ContactForm />
        {/* Add a simple footer as well */}
        <footer className="w-full py-8 text-center bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Alex Silva. Todos os direitos reservados (Site Fictício).</p>
        </footer>
      </main>
    </ThemeProvider>
  );
}

