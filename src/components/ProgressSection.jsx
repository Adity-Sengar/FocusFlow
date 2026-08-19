import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Calendar, CheckSquare, BarChart3, TrendingUp, Info } from 'lucide-react';

export default function ProgressSection() {
  const [selectedDay, setSelectedDay] = useState('Wed');

  const weeklyData = [
    { day: 'Mon', hours: 2.5, sessions: 5, color: 'from-indigo-500 to-indigo-600' },
    { day: 'Tue', hours: 3.8, sessions: 8, color: 'from-indigo-500 to-purple-600' },
    { day: 'Wed', hours: 4.2, sessions: 9, color: 'from-purple-500 to-indigo-500' },
    { day: 'Thu', hours: 1.5, sessions: 3, color: 'from-indigo-600 to-slate-600' },
    { day: 'Fri', hours: 3.0, sessions: 6, color: 'from-indigo-500 to-purple-600' },
    { day: 'Sat', hours: 0.8, sessions: 2, color: 'from-slate-600 to-indigo-600' },
    { day: 'Sun', hours: 1.2, sessions: 3, color: 'from-indigo-600 to-purple-600' },
  ];

  const maxHours = Math.max(...weeklyData.map(d => d.hours));
  const activeDayObj = weeklyData.find(d => d.day === selectedDay) || weeklyData[2];

  return (
    <section id="progress" className="py-20 md:py-32 relative border-t border-white/5 bg-[#08090d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Honest Analytics</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            See your progress, not just your plans.
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Track actual hours spent in focus mode with clear weekly trends.
          </p>
        </div>

        {/* Analytics Card Frame */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto glass-panel rounded-2xl p-6 sm:p-10 border border-white/10 shadow-2xl relative"
        >
          {/* Header Banner with DEMO Data Label */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-8 border-b border-white/10 gap-4">
            <div>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                DEMO WORKSPACE ANALYTICS
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Weekly Focus Time
              </h3>
            </div>
            
            <div className="flex items-center gap-2 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800 text-xs text-slate-400">
              <Info className="w-3.5 h-3.5 text-indigo-400" />
              <span>Numbers represent demo workspace activity</span>
            </div>
          </div>

          {/* Key Metrics Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-8">
            
            <div className="p-5 rounded-xl bg-slate-900/60 border border-white/5">
              <div className="flex items-center justify-between text-slate-400 mb-2">
                <span className="text-xs font-medium uppercase tracking-wider">Total Focus Time</span>
                <Clock className="w-4 h-4 text-indigo-400" />
              </div>
              <p className="text-3xl font-extrabold text-white font-mono">
                17.0 <span className="text-sm font-sans text-slate-400 font-normal">hrs</span>
              </p>
              <p className="text-xs text-emerald-400 mt-2 flex items-center gap-1 font-medium">
                <TrendingUp className="w-3.5 h-3.5" />
                +3.2 hrs vs last week
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-white/5">
              <div className="flex items-center justify-between text-slate-400 mb-2">
                <span className="text-xs font-medium uppercase tracking-wider">Focus Sessions</span>
                <Calendar className="w-4 h-4 text-purple-400" />
              </div>
              <p className="text-3xl font-extrabold text-white font-mono">
                36 <span className="text-sm font-sans text-slate-400 font-normal">sessions</span>
              </p>
              <p className="text-xs text-slate-400 mt-2 font-medium">
                Avg 28 min per session
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-white/5">
              <div className="flex items-center justify-between text-slate-400 mb-2">
                <span className="text-xs font-medium uppercase tracking-wider">Tasks Finished</span>
                <CheckSquare className="w-4 h-4 text-emerald-400" />
              </div>
              <p className="text-3xl font-extrabold text-white font-mono">
                19 <span className="text-sm font-sans text-slate-400 font-normal">completed</span>
              </p>
              <p className="text-xs text-emerald-400 mt-2 font-medium">
                100% focused resolution
              </p>
            </div>

          </div>

          {/* SVG/CSS Bar Chart Section */}
          <div className="pt-6 border-t border-white/5">
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-sm font-bold text-white">Daily Focus Distribution (Mon – Sun)</h4>
              <span className="text-xs text-indigo-300 font-mono">Selected: {activeDayObj.day} ({activeDayObj.hours} hrs, {activeDayObj.sessions} sessions)</span>
            </div>

            {/* Custom Bar Chart */}
            <div className="h-48 flex items-end justify-between gap-3 sm:gap-6 px-2 pt-6 pb-2">
              {weeklyData.map((item) => {
                const heightPercent = (item.hours / maxHours) * 100;
                const isSelected = item.day === selectedDay;
                return (
                  <div
                    key={item.day}
                    onClick={() => setSelectedDay(item.day)}
                    className="flex-1 flex flex-col items-center gap-2 group cursor-pointer"
                  >
                    {/* Tooltip on hover */}
                    <div className={`text-[11px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-200 transition-opacity ${
                      isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}>
                      {item.hours}h
                    </div>

                    {/* Bar container */}
                    <div className="w-full bg-slate-800/60 rounded-t-lg h-36 flex items-end p-1 relative overflow-hidden">
                      <div
                        className={`w-full rounded-t-md bg-gradient-to-t ${item.color} transition-all duration-300 ${
                          isSelected ? 'brightness-125 ring-1 ring-indigo-400' : 'opacity-80 group-hover:opacity-100'
                        }`}
                        style={{ height: `${heightPercent}%` }}
                      />
                    </div>

                    {/* Label */}
                    <span className={`text-xs font-medium font-mono transition-colors ${
                      isSelected ? 'text-indigo-400 font-bold' : 'text-slate-400 group-hover:text-white'
                    }`}>
                      {item.day}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
