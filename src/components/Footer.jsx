import React from 'react';
import { Play } from 'lucide-react';

export default function Footer({ onStartFocus }) {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-12 border-t border-white/10 bg-[#06070a] text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          
          {/* Brand Info */}
          <div className="space-y-3 max-w-sm">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
                <Play className="w-3.5 h-3.5 fill-white translate-x-0.5" />
              </div>
              <span className="font-bold text-lg text-white tracking-tight">FocusFlow</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              A workspace for turning ambitious goals into focused work.
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center gap-8 text-xs font-medium">
            <button 
              onClick={() => scrollToSection('product')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Product
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              How it works
            </button>
            <button 
              onClick={onStartFocus}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Focus Mode
            </button>
          </div>

        </div>

        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} FocusFlow. Hiring Assessment Project.</p>
          <div className="flex items-center gap-4">
            <span>Built with React, Vite & Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
