import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Terminal, Volume2, Moon, Zap, X, Search, Check } from 'lucide-react';

export default function EasterEgg({ isOpen, onClose, onStartFocus }) {
  const [konamiUnlocked, setKonamiUnlocked] = useState(false);
  const [konamiSequence, setKonamiSequence] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [zenAudioActive, setZenAudioActive] = useState(false);

  const KONAMI_CODE = [
    'ArrowUp', 'ArrowUp', 
    'ArrowDown', 'ArrowDown', 
    'ArrowLeft', 'ArrowRight', 
    'ArrowLeft', 'ArrowRight', 
    'b', 'a'
  ];

  // Konami Code detector
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Check Command+K shortcut
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        onClose(prev => !prev);
        return;
      }

      // Track sequence for Konami Code
      const newSequence = [...konamiSequence, e.key];
      if (newSequence.length > KONAMI_CODE.length) {
        newSequence.shift();
      }
      setKonamiSequence(newSequence);

      if (newSequence.join('') === KONAMI_CODE.join('')) {
        setKonamiUnlocked(true);
        onClose(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [konamiSequence, onClose]);

  if (!isOpen) return null;

  const commands = [
    {
      id: 'focus',
      label: 'Start 25:00 Focus Session',
      category: 'Action',
      icon: Zap,
      action: () => {
        onClose(false);
        onStartFocus('Binary Trees');
      }
    },
    {
      id: 'zen',
      label: zenAudioActive ? 'Stop Zen Ambient Soundscape 🎵' : 'Enable Zen Ambient Soundscape 🎵 (Bonus Secret)',
      category: 'Easter Egg',
      icon: Volume2,
      action: () => {
        setZenAudioActive(!zenAudioActive);
      }
    },
    {
      id: 'konami',
      label: 'Konami Secret Code (Unlocked: ↑ ↑ ↓ ↓ ← → ← → B A)',
      category: 'Bonus Round',
      icon: Sparkles,
      action: () => {
        setKonamiUnlocked(true);
      }
    }
  ];

  const filteredCommands = commands.filter(c => 
    c.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/70 backdrop-blur-md">
        
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: -20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: -20 }}
          className="w-full max-w-lg glass-panel rounded-2xl border border-indigo-500/30 shadow-2xl overflow-hidden glow-border"
        >
          {/* Header Input */}
          <div className="p-4 border-b border-white/10 flex items-center gap-3 bg-slate-900/90">
            <Search className="w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Type a command or secret..."
              className="w-full bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none"
              autoFocus
            />
            <button onClick={() => onClose(false)} className="text-slate-400 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Konami Banner if activated */}
          {(konamiUnlocked || zenAudioActive) && (
            <div className="p-3 bg-gradient-to-r from-purple-900/40 via-indigo-900/40 to-slate-900/40 border-b border-indigo-500/30 text-xs text-indigo-200 flex items-center justify-between">
              <span className="flex items-center gap-1.5 font-mono">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                Bonus Easter Egg Activated! High-focus state granted.
              </span>
              <span className="px-1.5 py-0.5 rounded bg-indigo-500/20 text-[10px] font-mono text-indigo-300">
                Acdyon Bonus 🎁
              </span>
            </div>
          )}

          {/* List */}
          <div className="p-2 space-y-1 max-h-80 overflow-y-auto">
            {filteredCommands.map(cmd => {
              const Icon = cmd.icon;
              return (
                <button
                  key={cmd.id}
                  onClick={cmd.action}
                  className="w-full p-3 rounded-xl hover:bg-indigo-600/20 text-left transition-colors flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-800/80 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-medium text-white">{cmd.label}</p>
                      <span className="text-[10px] font-mono text-slate-400">{cmd.category}</span>
                    </div>
                  </div>
                  <kbd className="text-[10px] font-mono text-slate-500 bg-slate-800 px-1.5 py-0.5 rounded">Select</kbd>
                </button>
              );
            })}
          </div>

          <div className="p-3 border-t border-white/5 bg-slate-950/80 text-[11px] text-slate-500 font-mono flex items-center justify-between">
            <span>Tip: Try Konami code ↑ ↑ ↓ ↓ ← → ← → B A</span>
            <span>Esc to exit</span>
          </div>

        </motion.div>

      </div>
    </AnimatePresence>
  );
}
