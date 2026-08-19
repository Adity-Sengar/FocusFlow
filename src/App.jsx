import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductPreview from './components/ProductPreview';
import FocusMode from './components/FocusMode';
import HowItWorks from './components/HowItWorks';
import ProgressSection from './components/ProgressSection';
import CTA from './components/CTA';
import Footer from './components/Footer';
import EasterEgg from './components/EasterEgg';

export default function App() {
  const [isFocusModalOpen, setIsFocusModalOpen] = useState(false);
  const [activeFocusTask, setActiveFocusTask] = useState('Binary Trees');
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  const handleStartFocus = (taskName = 'Binary Trees') => {
    setActiveFocusTask(taskName);
    setIsFocusModalOpen(true);
  };

  const handleExploreWorkspace = () => {
    const productElement = document.getElementById('product');
    if (productElement) {
      productElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#090a0f] text-slate-100 relative bg-grid-pattern bg-radial-glow selection:bg-indigo-500/30 selection:text-indigo-200">
      
      {/* Sticky Header Navbar */}
      <Navbar 
        onStartFocus={() => handleStartFocus('Binary Trees')}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      {/* Main Landing Page Sections */}
      <main id="main-content">
        <Hero 
          onStartFocus={() => handleStartFocus('Binary Trees')}
          onExploreWorkspace={handleExploreWorkspace}
        />

        <ProductPreview 
          onStartFocus={(taskName) => handleStartFocus(taskName)}
        />

        <HowItWorks />

        <ProgressSection />

        <CTA 
          onStartFocus={() => handleStartFocus('Binary Trees')}
        />
      </main>

      {/* Minimal Footer */}
      <Footer 
        onStartFocus={() => handleStartFocus('Binary Trees')}
      />

      {/* Interactive Focus Mode Timer Modal */}
      <FocusMode 
        isOpen={isFocusModalOpen}
        onClose={() => setIsFocusModalOpen(false)}
        taskName={activeFocusTask}
      />

      {/* Easter Egg / Command Palette (Cmd+K / Konami Code) */}
      <EasterEgg 
        isOpen={isCommandPaletteOpen}
        onClose={setIsCommandPaletteOpen}
        onStartFocus={(taskName) => handleStartFocus(taskName)}
      />

    </div>
  );
}
