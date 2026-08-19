import React, { useState, useEffect } from 'react';
import { Play, Menu, X, Sparkles, ArrowRight } from 'lucide-react';

export default function Navbar({ onStartFocus, onOpenCommandPalette }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled ? 'py-3 glass-panel border-b border-white/10 shadow-2xl' : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group" aria-label="FocusFlow Homepage">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-500 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-200">
              <Play className="w-4 h-4 text-white fill-white translate-x-0.5" />
            </div>
            <span className="font-bold text-xl tracking-tight text-white group-hover:text-indigo-200 transition-colors">
              FocusFlow
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300" aria-label="Main Navigation">
            <button 
              onClick={() => scrollToSection('product')}
              className="hover:text-white transition-colors py-1 cursor-pointer focus-visible:ring-1"
            >
              Product
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="hover:text-white transition-colors py-1 cursor-pointer focus-visible:ring-1"
            >
              How it works
            </button>
            <button 
              onClick={() => scrollToSection('progress')}
              className="hover:text-white transition-colors py-1 cursor-pointer focus-visible:ring-1"
            >
              Progress
            </button>
            <button 
              onClick={onStartFocus}
              className="hover:text-white transition-colors py-1 cursor-pointer flex items-center gap-1.5 focus-visible:ring-1"
            >
              Focus Mode
              <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">Live</span>
            </button>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenCommandPalette}
              className="px-3 py-1.5 text-xs text-slate-400 hover:text-slate-200 bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 rounded-lg flex items-center gap-1.5 transition-colors"
              title="Open Command Palette (Cmd+K)"
              aria-label="Open Command Palette"
            >
              <kbd className="font-mono text-[10px] bg-slate-800 px-1 py-0.5 rounded text-slate-300">⌘K</kbd>
            </button>

            <button
              onClick={onStartFocus}
              className="relative inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-lg shadow-indigo-600/25 hover:shadow-indigo-500/40 transition-all duration-200 cursor-pointer active:scale-95 group"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onStartFocus}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-indigo-600 rounded-lg shadow"
            >
              Start Focus
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/60 rounded-lg transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-white/10 px-4 pt-4 pb-6 mt-3 space-y-3 animate-in slide-in-from-top-2 duration-200">
          <button
            onClick={() => scrollToSection('product')}
            className="block w-full text-left py-2 text-base font-medium text-slate-300 hover:text-white border-b border-slate-800"
          >
            Product
          </button>
          <button
            onClick={() => scrollToSection('how-it-works')}
            className="block w-full text-left py-2 text-base font-medium text-slate-300 hover:text-white border-b border-slate-800"
          >
            How it works
          </button>
          <button
            onClick={() => scrollToSection('progress')}
            className="block w-full text-left py-2 text-base font-medium text-slate-300 hover:text-white border-b border-slate-800"
          >
            Progress
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onStartFocus();
            }}
            className="block w-full text-left py-2 text-base font-medium text-indigo-400 hover:text-indigo-300 flex items-center justify-between"
          >
            <span>Focus Mode Interface</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onStartFocus();
              }}
              className="w-full py-3 text-center text-sm font-semibold text-white bg-indigo-600 rounded-xl shadow-md"
            >
              Get Started →
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
