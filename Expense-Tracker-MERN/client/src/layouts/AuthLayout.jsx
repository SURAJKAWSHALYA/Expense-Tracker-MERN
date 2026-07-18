import { Link } from 'react-router-dom';
import { Sparkles, CheckCircle2, Activity, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  'Track every penny with zero effort.',
  'Bank-grade 256-bit encryption.',
  'Smart AI-driven budget insights.',
];

export default function AuthLayout({ children, title, subtitle }) {
  const floatAnimation = {
    y: [0, -15, 0],
    rotate: [-2, 2, -2],
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' }
  };

  return (
    <div className="flex min-h-screen bg-[#020617]">
      {/* Left side - Branding (Hidden on mobile) */}
      <div className="hidden w-1/2 flex-col justify-between overflow-hidden relative lg:flex p-12">
        {/* Background Glowing Orbs */}
        <div className="absolute inset-0 z-0">
          <div className="absolute -left-[10%] top-[20%] h-[500px] w-[500px] rounded-full bg-fuchsia-600/20 blur-[100px] mix-blend-screen" />
          <div className="absolute -right-[10%] bottom-[10%] h-[400px] w-[400px] rounded-full bg-cyan-500/20 blur-[80px] mix-blend-screen" />
        </div>

        <div className="relative z-10 flex items-center gap-3 text-white">
          <Sparkles size={24} className="text-yellow-400" />
          <span className="text-2xl font-bold tracking-tight">CoinKeeper LK</span>
        </div>

        <div className="relative z-10 w-full flex items-center justify-center">
          {/* Floating Card element representing the app */}
          <motion.div
            animate={floatAnimation}
            className="w-80 rounded-[24px] border border-white/10 bg-slate-900/60 p-8 shadow-2xl backdrop-blur-md"
            style={{ transform: 'rotate(-4deg)' }}
          >
            <p className="text-sm font-medium text-amber-500/90 tracking-wide">Total Balance</p>
            <p className="mt-2 text-4xl font-bold text-white tracking-tight">1,125,000 <span className="text-lg text-slate-400 font-normal">LKR</span></p>
            <div className="mt-8 flex gap-3">
              <div className="flex-1 flex justify-center items-center rounded-xl bg-white/10 py-3 text-slate-300 border border-white/5">
                <Activity size={20} />
              </div>
              <div className="flex-1 flex justify-center items-center rounded-xl bg-white/10 py-3 text-slate-300 border border-white/5">
                <FileText size={20} />
              </div>
            </div>
            
            <div className="mt-8 space-y-3 opacity-60">
               <div className="h-6 w-full rounded-md bg-white/10"></div>
               <div className="h-6 w-3/4 rounded-md bg-white/10"></div>
            </div>
          </motion.div>
        </div>

        <div className="relative z-10 text-sm text-slate-500">
          © {new Date().getFullYear()} CoinKeeper LK. All rights reserved.
        </div>
      </div>

      {/* Right side - Form */}
      <div className="flex w-full flex-col justify-center px-6 py-12 lg:w-1/2 lg:px-12 xl:px-24 bg-slate-950/50 backdrop-blur-3xl border-l border-white/5">
        <div className="mx-auto w-full max-w-md">
          {/* Mobile Header (Hidden on Desktop) */}
          <div className="mb-10 flex items-center gap-3 lg:hidden">
            <Sparkles size={24} className="text-yellow-400" />
            <span className="text-2xl font-bold tracking-tight text-white">CoinKeeper LK</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="mb-8">
              <h2 className="text-3xl font-bold tracking-tight text-white">
                {title}
              </h2>
              {subtitle && (
                <p className="mt-2 text-slate-400">
                  {subtitle}
                </p>
              )}
            </div>

            {children}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
