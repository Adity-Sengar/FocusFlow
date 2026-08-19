import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, TrendingUp, Check, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Plan',
      subtitle: 'Turn your goals into clear, manageable tasks.',
      description: 'Break down complex quarterly milestones into actionable focus blocks. Decide what matters today before opening a single tab.',
      icon: Target,
      tag: 'Goal Decomposition'
    },
    {
      number: '02',
      title: 'Focus',
      subtitle: 'Start a focused session and work without distractions.',
      description: 'Enter a dedicated focus zone with minimal visual clutter, an active countdown timer, and single-task commitment.',
      icon: Zap,
      tag: 'Deep Work Session'
    },
    {
      number: '03',
      title: 'Track',
      subtitle: 'See your progress build over time.',
      description: 'Watch your daily focused minutes aggregate into visible momentum without superficial streak pressure or vanity metrics.',
      icon: TrendingUp,
      tag: 'Honest Momentum'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-32 relative border-t border-white/5 bg-[#090a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Your day, without the chaos.
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            A simple 3-step workflow designed to eliminate decision fatigue and protect your focus.
          </p>
        </div>

        {/* 3 Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="glass-panel glass-panel-hover rounded-2xl p-8 border border-white/10 flex flex-col justify-between relative group"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-3xl font-extrabold text-indigo-400/80 group-hover:text-indigo-300 transition-colors">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm font-semibold text-indigo-200/90 mb-4">
                    {step.subtitle}
                  </p>
                  
                  {/* Description */}
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Footer Tag */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    {step.tag}
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
