import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Play, 
  CheckCircle2, 
  Circle, 
  Clock, 
  Flame, 
  Folder, 
  ArrowRight, 
  TrendingUp, 
  MoreHorizontal,
  ChevronRight,
  Sparkles
} from 'lucide-react';

export default function ProductPreview({ onStartFocus }) {
  const [activeTask, setActiveTask] = useState('Binary Trees');
  const [tasks, setTasks] = useState([
    { id: '1', name: 'Binary Trees', goal: 'Data Structures', duration: '45m', completed: false, focusTime: '42 min' },
    { id: '2', name: 'System Design Architecture', goal: 'Backend Engineering', duration: '60m', completed: false, focusTime: '35 min' },
    { id: '3', name: 'CSS Grid & Flexbox Polish', goal: 'Frontend Mastery', duration: '30m', completed: true, focusTime: '30 min' },
    { id: '4', name: 'API Rate Limiting', goal: 'Backend Engineering', duration: '40m', completed: false, focusTime: '15 min' }
  ]);

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const selectedTaskObj = tasks.find(t => t.name === activeTask) || tasks[0];

  return (
    <section id="product" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <span>DEMO WORKSPACE PREVIEW</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Your workspace built for deep work
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            Organize ambitious goals into focused sessions without complex project management overhead.
          </p>
        </div>

        {/* Realistic Workspace Dashboard Frame */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="relative max-w-5xl mx-auto rounded-2xl glass-panel border border-white/10 shadow-2xl overflow-hidden glow-border"
        >
          {/* Dashboard Window Bar */}
          <div className="bg-slate-900/90 px-4 py-3 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-xs font-mono text-slate-400 font-medium">FocusFlow Workspace v1.4</span>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="px-2 py-0.5 text-[11px] font-mono font-medium rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                DEMO DATA
              </span>
              <button 
                onClick={() => onStartFocus(selectedTaskObj.name)}
                className="text-xs font-semibold px-3 py-1 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span>Launch Mode</span>
                <Play className="w-3 h-3 fill-white" />
              </button>
            </div>
          </div>

          {/* Dashboard Grid Content */}
          <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-6 bg-[#0c0e17]/90">
            
            {/* Left Column: Today's Focus & Active Task Card */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Active Hero Focus Card */}
              <div className="p-6 rounded-xl bg-gradient-to-br from-indigo-950/40 via-slate-900/60 to-slate-900/90 border border-indigo-500/20 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 pointer-events-none opacity-20 text-indigo-400">
                  <Flame className="w-24 h-24 stroke-1" />
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-indigo-300 uppercase tracking-wider">
                    <Folder className="w-3.5 h-3.5" />
                    <span>Today's Focus • {selectedTaskObj.goal}</span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">Target: {selectedTaskObj.duration}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {selectedTaskObj.name}
                </h3>

                {/* Progress Stats */}
                <div className="mt-6 space-y-2">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-slate-300 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-indigo-400" />
                      Focused Time: <strong className="text-white">{selectedTaskObj.focusTime}</strong>
                    </span>
                    <span className="text-indigo-400 font-mono font-semibold">78% Complete</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full h-3 rounded-full bg-slate-800/80 overflow-hidden p-0.5 border border-white/5">
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-400 transition-all duration-500 shadow-sm shadow-indigo-500/50" 
                      style={{ width: '78%' }} 
                    />
                  </div>
                </div>

                {/* Interactive Continue CTA Button */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <span>In progress session</span>
                  </div>
                  
                  <button
                    onClick={() => onStartFocus(selectedTaskObj.name)}
                    className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-lg shadow-md shadow-indigo-600/30 transition-all flex items-center gap-2 cursor-pointer hover:translate-x-0.5 active:scale-95 group"
                    aria-label={`Continue focus session for ${selectedTaskObj.name}`}
                  >
                    <span>Continue</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Task List Table */}
              <div className="rounded-xl glass-panel p-5 border border-white/5">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                    <span>Recent Session Tasks</span>
                    <span className="text-xs text-slate-400 font-normal">({tasks.length})</span>
                  </h4>
                  <span className="text-xs text-slate-400 font-mono">Click to preview active</span>
                </div>

                <div className="space-y-2">
                  {tasks.map(task => (
                    <div 
                      key={task.id}
                      onClick={() => setActiveTask(task.name)}
                      className={`p-3 rounded-lg border transition-all cursor-pointer flex items-center justify-between ${
                        activeTask === task.name 
                          ? 'bg-indigo-950/30 border-indigo-500/40 text-white' 
                          : 'bg-slate-900/40 border-white/5 hover:border-white/10 text-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleTask(task.id);
                          }}
                          className="text-slate-400 hover:text-indigo-400 transition-colors"
                        >
                          {task.completed ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          ) : (
                            <Circle className="w-4 h-4" />
                          )}
                        </button>
                        <div>
                          <p className={`text-xs sm:text-sm font-medium ${task.completed ? 'line-through text-slate-500' : ''}`}>
                            {task.name}
                          </p>
                          <span className="text-[11px] text-slate-400">{task.goal}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-slate-400">{task.focusTime}</span>
                        <ChevronRight className={`w-4 h-4 ${activeTask === task.name ? 'text-indigo-400' : 'text-slate-600'}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Status & Stats */}
            <div className="space-y-6">
              
              {/* Productivity Status Box */}
              <div className="p-5 rounded-xl glass-panel border border-white/5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Productivity Status</span>
                  <Flame className="w-4 h-4 text-amber-400" />
                </div>
                
                <div>
                  <p className="text-2xl font-bold text-white flex items-center gap-2">
                    Flow State
                    <span className="text-xs font-normal px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300">Optimal</span>
                  </p>
                  <p className="text-xs text-slate-400 mt-1">Based on 3 uninterrupted Pomodoro sessions today.</p>
                </div>

                <div className="pt-3 border-t border-white/5 space-y-2 text-xs">
                  <div className="flex justify-between text-slate-300">
                    <span>Daily Goal (2h 30m):</span>
                    <span className="font-mono text-indigo-300 font-semibold">1h 42m (68%)</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Current Streak:</span>
                    <span className="font-mono text-amber-300 font-semibold">5 Days 🔥</span>
                  </div>
                </div>
              </div>

              {/* Quick Launch Card */}
              <div className="p-5 rounded-xl bg-gradient-to-tr from-indigo-900/30 to-purple-900/20 border border-indigo-500/20 space-y-3">
                <div className="flex items-center gap-2 text-indigo-300 text-xs font-semibold">
                  <Sparkles className="w-4 h-4" />
                  <span>Ready for a focused sprint?</span>
                </div>
                <p className="text-xs text-slate-300">
                  Click below to open the live 25-minute Pomodoro timer interface and test the application interaction.
                </p>
                <button
                  onClick={() => onStartFocus(selectedTaskObj.name)}
                  className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-lg transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>Start Focus Session</span>
                </button>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
