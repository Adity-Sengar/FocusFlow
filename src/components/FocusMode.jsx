import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, RotateCcw, CheckCircle2, X, Sparkles, Volume2, VolumeX, Shield, Trophy } from 'lucide-react';

export default function FocusMode({ isOpen, onClose, taskName = 'Binary Trees' }) {
  const INITIAL_SECONDS = 25 * 60; // 25 minutes
  const [secondsLeft, setSecondsLeft] = useState(INITIAL_SECONDS);
  const [isRunning, setIsRunning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const timerRef = useRef(null);

  // Timer lifecycle effect with clean interval clearing
  useEffect(() => {
    if (isRunning && secondsLeft > 0) {
      timerRef.current = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            setIsRunning(false);
            setIsFinished(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [isRunning, secondsLeft]);

  // Reset timer on open or task change
  useEffect(() => {
    if (isOpen) {
      setSecondsLeft(INITIAL_SECONDS);
      setIsRunning(false);
      setIsFinished(false);
    }
  }, [isOpen, taskName]);

  // Keyboard shortcut listener (Space = Pause/Start, Esc = Close)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.code === 'Space' && !isFinished) {
        e.preventDefault();
        setIsRunning(prev => !prev);
      } else if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isFinished, onClose]);

  if (!isOpen) return null;

  const formatTime = (totalSecs) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const progressPercent = ((INITIAL_SECONDS - secondsLeft) / INITIAL_SECONDS) * 100;

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleResume = () => {
    setIsRunning(true);
  };

  const handleFinish = () => {
    setIsRunning(false);
    setIsFinished(true);
  };

  const handleReset = () => {
    setIsRunning(false);
    setIsFinished(false);
    setSecondsLeft(INITIAL_SECONDS);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
        
        {/* Modal Container */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 10 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 10 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-xl glass-panel border border-indigo-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden glow-border"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-8">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-ping" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-300">
                FOCUS MODE
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setSoundEnabled(!soundEnabled)}
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/60 transition-colors"
                title={soundEnabled ? "Mute ambient audio" : "Unmute ambient audio"}
              >
                {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 text-slate-600" />}
              </button>
              
              <button
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/60 transition-colors cursor-pointer"
                aria-label="Close Focus Mode"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Main Content Area */}
          {!isFinished ? (
            <div className="text-center space-y-8 py-2">
              
              {/* Task Tag */}
              <div>
                <span className="text-xs font-medium text-slate-400 uppercase tracking-widest block mb-1">
                  CURRENT TASK
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {taskName}
                </h3>
              </div>

              {/* Timer Radial Display */}
              <div className="relative w-64 h-64 mx-auto flex items-center justify-center">
                {/* SVG Ring Progress */}
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="44"
                    className="stroke-slate-800"
                    strokeWidth="6"
                    fill="transparent"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="44"
                    className="stroke-indigo-500 transition-all duration-1000 ease-linear"
                    strokeWidth="6"
                    strokeDasharray={276}
                    strokeDashoffset={276 - (276 * progressPercent) / 100}
                    strokeLinecap="round"
                    fill="transparent"
                  />
                </svg>

                {/* Center Digital Clock */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-mono text-5xl sm:text-6xl font-extrabold text-white tracking-tighter">
                    {formatTime(secondsLeft)}
                  </span>
                  <span className="text-xs font-mono text-indigo-300 mt-1 uppercase tracking-widest">
                    {isRunning ? 'Session Active' : secondsLeft === INITIAL_SECONDS ? 'Ready to Focus' : 'Paused'}
                  </span>
                </div>
              </div>

              {/* Control Action Buttons */}
              <div className="flex items-center justify-center gap-4 pt-4">
                {!isRunning && secondsLeft === INITIAL_SECONDS && (
                  <button
                    onClick={handleStart}
                    className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl shadow-lg shadow-indigo-600/40 transition-all cursor-pointer flex items-center gap-2 text-base active:scale-95"
                  >
                    <Play className="w-5 h-5 fill-white" />
                    <span>Start Session</span>
                  </button>
                )}

                {isRunning && (
                  <button
                    onClick={handlePause}
                    className="px-7 py-3.5 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-2xl shadow-lg shadow-amber-600/30 transition-all cursor-pointer flex items-center gap-2 text-base active:scale-95"
                  >
                    <Pause className="w-5 h-5 fill-white" />
                    <span>Pause</span>
                  </button>
                )}

                {!isRunning && secondsLeft < INITIAL_SECONDS && (
                  <button
                    onClick={handleResume}
                    className="px-7 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl shadow-lg shadow-indigo-600/40 transition-all cursor-pointer flex items-center gap-2 text-base active:scale-95"
                  >
                    <Play className="w-5 h-5 fill-white" />
                    <span>Resume</span>
                  </button>
                )}

                <button
                  onClick={handleFinish}
                  className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold rounded-2xl transition-all cursor-pointer text-sm"
                >
                  Finish
                </button>

                {secondsLeft < INITIAL_SECONDS && (
                  <button
                    onClick={handleReset}
                    className="p-3 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-xl transition-colors"
                    title="Reset Timer"
                  >
                    <RotateCcw className="w-5 h-5" />
                  </button>
                )}
              </div>

              <p className="text-xs text-slate-500 font-mono">
                Press <kbd className="bg-slate-800 px-1.5 py-0.5 rounded text-slate-300">Space</kbd> to toggle start/pause • <kbd className="bg-slate-800 px-1.5 py-0.5 rounded text-slate-300">Esc</kbd> to exit
              </p>

            </div>
          ) : (
            /* Finished Completion View */
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-8 space-y-6"
            >
              <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto shadow-xl shadow-emerald-500/10">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h3 className="text-3xl font-extrabold text-white flex items-center justify-center gap-2">
                  <span>✓ Session completed</span>
                </h3>
                <p className="text-indigo-300 font-mono text-lg font-semibold mt-2">
                  +25 minutes focused
                </p>
                <p className="text-slate-400 text-sm mt-1 max-w-sm mx-auto">
                  Great job staying in the zone on <strong>{taskName}</strong>! Your progress has been updated in today's analytics.
                </p>
              </div>

              <div className="pt-4 flex items-center justify-center gap-3">
                <button
                  onClick={handleReset}
                  className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-xl transition-all shadow-md cursor-pointer"
                >
                  Start Another Session
                </button>
                <button
                  onClick={onClose}
                  className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 text-sm font-medium rounded-xl transition-all cursor-pointer"
                >
                  Return to Workspace
                </button>
              </div>
            </motion.div>
          )}

        </motion.div>

      </div>
    </AnimatePresence>
  );
}
