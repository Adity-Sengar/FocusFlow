import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Target, Zap, Clock } from 'lucide-react';

export default function Hero({ onStartFocus, onExploreWorkspace }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[250px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-indigo-500/30 text-indigo-300 text-xs sm:text-sm font-medium mb-8 shadow-inner shadow-indigo-500/10"
        >
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span>Built for focused work</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.1]"
        >
          Make progress.{' '}
          <span className="bg-gradient-to-r from-indigo-300 via-indigo-200 to-slate-400 bg-clip-text text-transparent block sm:inline">
            Not plans.
          </span>
        </motion.h1>

        {/* Supporting Copy */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed"
        >
          FocusFlow turns ambitious goals into focused work, helping you decide what matters, stay in the zone, and actually finish what you start.
        </motion.p>

        {/* CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
        >
          <button
            onClick={onStartFocus}
            className="w-full sm:w-auto px-7 py-3.5 text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-xl shadow-indigo-600/30 hover:shadow-indigo-500/40 transition-all duration-200 cursor-pointer active:scale-98 flex items-center justify-center gap-2 group"
          >
            <span>Start a Focus Session</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onExploreWorkspace}
            className="w-full sm:w-auto px-6 py-3.5 text-base font-medium text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800/90 border border-slate-800 hover:border-slate-700 rounded-xl transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Explore the workspace</span>
          </button>
        </motion.div>

        {/* Value Micro-props (Honest product attributes) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 pt-8 border-t border-white/5 flex flex-wrap items-center justify-center gap-8 text-xs text-slate-400 font-medium"
        >
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-indigo-400" />
            <span>Goal to Task breakdown</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-purple-400" />
            <span>Distraction-free timer</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-400" />
            <span>Real-time focus analytics</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
