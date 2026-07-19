import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Activity, FileText } from 'lucide-react';
import Button from '../ui/Button';

export default function Hero() {
  const floatAnimation1 = {
    y: [0, -15, 0],
    rotate: [-2, 2, -2],
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' }
  };
  
  const floatAnimation2 = {
    y: [0, 15, 0],
    rotate: [2, -2, 2],
    transition: { duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }
  };
  
  const floatAnimation3 = {
    y: [0, -10, 0],
    rotate: [-1, 3, -1],
    transition: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }
  };

  return (
    <section
      id="home"
      className="relative mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 pb-24 pt-10 md:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-20 lg:py-28"
    >
      {/* ── Left copy ── */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="flex max-w-2xl flex-col gap-8 relative z-10"
      >
        <div className="flex items-center gap-3 text-slate-950 dark:text-white mb-2 transition-colors">
          <Sparkles size={28} className="text-indigo-600 dark:text-yellow-400" />
          <span className="text-2xl font-bold tracking-tight">CoinKeeper LK</span>
        </div>

        <div className="space-y-5">
          <h1 className="max-w-[14ch] text-5xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-6xl lg:text-[4.2rem] leading-[1.1] transition-colors">
            Take Control of Your{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-fuchsia-400 dark:to-cyan-400 bg-clip-text text-transparent drop-shadow-sm">
              Financial Future
            </span>
            <br />with CoinKeeper LK
          </h1>
          <p className="max-w-xl text-lg leading-8 text-slate-700 dark:text-slate-300 transition-colors">
            Track, budget, and manage all your accounts from one elegant dashboard - built for financial clarity in Sri Lanka.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4 mt-2">
          <Link to="/register" className="rounded-full w-full sm:w-auto">
            <Button type="button" id="hero-get-started" className="w-full sm:w-auto">
              Get Started
            </Button>
          </Link>
        </div>
      </motion.div>

      {/* ── Right side - Floating glass cards ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative mx-auto w-full max-w-md lg:max-w-[500px] h-[500px] flex items-center justify-center z-10"
      >
        {/* Glows */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[400px] h-[500px] bg-indigo-500/25 dark:bg-fuchsia-600/30 blur-[100px] rounded-full mix-blend-multiply dark:mix-blend-screen animate-pulse" />
          <div className="absolute w-[300px] h-[400px] bg-sky-400/30 dark:bg-cyan-500/30 blur-[80px] rounded-full mix-blend-multiply dark:mix-blend-screen translate-x-12 translate-y-12" />
        </div>

        {/* Card 1: Total Balance */}
        <motion.div
          animate={floatAnimation1}
          className="absolute z-30 w-64 sm:w-72 rounded-[24px] border border-indigo-200 dark:border-white/10 bg-indigo-50/80 dark:bg-slate-900/60 p-5 sm:p-6 shadow-[0_20px_50px_rgba(79,70,229,0.2)] dark:shadow-2xl backdrop-blur-xl transition-colors"
          style={{ transform: 'rotate(-4deg)' }}
        >
          <p className="text-sm font-medium text-slate-700 dark:text-amber-500/90 tracking-wide">Total Balance</p>
          <p className="mt-2 text-3xl font-bold text-slate-950 dark:text-white tracking-tight">1,125,000 <span className="text-lg text-slate-400 font-normal">LKR</span></p>
          <div className="mt-5 flex gap-3">
            <button className="flex-1 flex justify-center items-center rounded-xl bg-slate-100 dark:bg-white/10 py-2.5 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/20 transition border border-transparent dark:border-white/5">
              <Activity size={18} />
            </button>
            <button className="flex-1 flex justify-center items-center rounded-xl bg-slate-100 dark:bg-white/10 py-2.5 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/20 transition border border-transparent dark:border-white/5">
              <FileText size={18} />
            </button>
          </div>
        </motion.div>

        {/* Card 2: Accounts */}
        <motion.div
          animate={floatAnimation2}
          className="absolute left-2 sm:left-0 top-6 sm:top-10 z-20 w-56 sm:w-64 sm:-translate-x-12 sm:-translate-y-8 rounded-[20px] border border-indigo-200 dark:border-white/10 bg-indigo-50/85 dark:bg-slate-800/80 p-4 sm:p-5 shadow-[0_20px_40px_rgba(79,70,229,0.15)] dark:shadow-2xl backdrop-blur-xl transition-colors"
          style={{ transform: 'rotate(-12deg) scale(0.9)' }}
        >
          <div className="flex justify-between items-center mb-4">
            <p className="text-xs font-semibold text-slate-950 dark:text-white">Accounts</p>
            <span className="text-[10px] text-indigo-600 dark:text-cyan-400">+ Add Account</span>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-end border-b border-slate-100 dark:border-white/10 pb-3">
              <div>
                <p className="text-xs text-slate-950 dark:text-white">Commercial Bank</p>
                <p className="text-[10px] text-slate-700 dark:text-slate-400">LKR - 40285</p>
              </div>
              <p className="text-sm font-semibold text-slate-950 dark:text-white">72,839.00</p>
            </div>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-xs text-slate-950 dark:text-white">HNB</p>
                <p className="text-[10px] text-slate-700 dark:text-slate-400">LKR - 0024</p>
              </div>
              <p className="text-sm font-semibold text-slate-950 dark:text-white">15,235.50</p>
            </div>
          </div>
        </motion.div>

        {/* Card 3: Company Balance */}
        <motion.div
          animate={floatAnimation3}
          className="absolute right-2 sm:right-0 bottom-6 sm:bottom-10 z-20 w-56 sm:w-64 sm:translate-x-12 sm:translate-y-12 rounded-[20px] border border-indigo-200 dark:border-white/10 bg-indigo-50/85 dark:bg-slate-900/80 p-4 sm:p-5 shadow-[0_20px_40px_rgba(79,70,229,0.2)] dark:shadow-2xl backdrop-blur-xl transition-colors"
          style={{ transform: 'rotate(8deg)' }}
        >
          <p className="text-sm font-medium text-slate-700 dark:text-pink-400/90 tracking-wide">Company Balance</p>
          <p className="mt-2 text-2xl font-bold text-slate-950 dark:text-white tracking-tight">750,000 <span className="text-sm text-slate-400 font-normal">LKR</span></p>
          <div className="mt-4 flex gap-2">
            <button className="flex-1 flex justify-center items-center rounded-xl bg-slate-100 dark:bg-white/5 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10 transition">
              <Activity size={16} />
            </button>
            <button className="flex-1 flex justify-center items-center rounded-xl bg-slate-100 dark:bg-white/5 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10 transition">
              <FileText size={16} />
            </button>
          </div>
        </motion.div>
        
        {/* Faded Background Element */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          className="absolute bottom-10 sm:bottom-4 left-1/2 -translate-x-1/2 z-0 w-48 sm:w-60 rounded-[20px] bg-slate-200/50 dark:bg-white/5 p-4 backdrop-blur-sm border border-white/50 dark:border-white/5 transition-colors"
          style={{ transform: 'rotate(-15deg) scale(0.85) translate(-20px, 40px)' }}
        >
           <div className="space-y-2 opacity-50">
             <div className="h-6 w-full rounded-md bg-indigo-50/80 dark:bg-white/10"></div>
             <div className="h-6 w-full rounded-md bg-indigo-50/80 dark:bg-white/10"></div>
             <div className="h-6 w-3/4 rounded-md bg-indigo-50/80 dark:bg-white/10"></div>
           </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
