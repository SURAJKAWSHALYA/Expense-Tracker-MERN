import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import womanCards from '../assets/images/woman-cards.png';
import manCard from '../assets/images/man-card.png';
import womanLaptop from '../assets/images/woman-laptop.png';

export default function AuthLayout({ children, title, subtitle }) {
  const floatAnim1 = {
    y: [0, -10, 0],
    transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' }
  };
  const floatAnim2 = {
    y: [0, 15, 0],
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }
  };
  const floatAnim3 = {
    y: [0, -15, 0],
    transition: { duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 dark:bg-[#020617] p-4 sm:p-8 transition-colors duration-300">
      
      {/* The Full Page Box */}
      <div className="flex w-full max-w-[92vw] xl:max-w-[1400px] 2xl:max-w-[1600px] max-h-[95vh] h-auto md:h-[90vh] md:max-h-[800px] overflow-hidden rounded-[2.5rem] bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-white/10 shadow-2xl dark:shadow-[0_0_60px_rgba(0,0,0,0.5)] backdrop-blur-xl">
        
        {/* Left side - Branding (Hidden on mobile) */}
        <div className="hidden w-1/2 flex-col justify-between relative lg:flex p-10 xl:p-12 bg-indigo-50/50 dark:bg-black/20 border-r border-slate-100 dark:border-white/5">
        {/* Background Gradients */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Light mode blobs */}
          <div className="absolute -left-[10%] top-[10%] h-[600px] w-[600px] rounded-full bg-indigo-200/40 blur-[100px] dark:hidden" />
          <div className="absolute -right-[20%] bottom-[10%] h-[500px] w-[500px] rounded-full bg-purple-200/40 blur-[100px] dark:hidden" />
          
          {/* Dark mode glows */}
          <div className="absolute -left-[10%] top-[20%] h-[500px] w-[500px] rounded-full bg-fuchsia-600/20 blur-[100px] mix-blend-screen hidden dark:block" />
          <div className="absolute -right-[10%] bottom-[10%] h-[400px] w-[400px] rounded-full bg-cyan-500/20 blur-[80px] mix-blend-screen hidden dark:block" />
        </div>

        <Link to="/" className="relative z-10 flex items-center gap-3 text-slate-950 dark:text-white hover:opacity-80 transition-opacity w-max">
          <Sparkles size={24} className="text-indigo-600 dark:text-yellow-400" />
          <span className="text-2xl font-bold tracking-tight">CoinKeeper LK</span>
        </Link>

        <div className="relative z-10 w-full flex-1 flex items-center justify-center py-4">
          <div className="relative w-full max-w-[450px] aspect-square">
            {/* Animated Photo Collage */}
            
            {/* Main Center Image */}
            <motion.div
              animate={floatAnim1}
              className="absolute left-[10%] top-[15%] w-[65%] rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(79,70,229,0.2)] dark:shadow-2xl border-4 border-white dark:border-slate-800 z-20"
            >
              <img src={womanCards} alt="User with cards" className="w-full h-auto object-cover aspect-[4/5]" />
            </motion.div>

            {/* Top Right Floating Image */}
            <motion.div
              animate={floatAnim2}
              className="absolute right-0 top-0 w-[45%] rounded-[24px] overflow-hidden shadow-[0_20px_40px_rgba(79,70,229,0.15)] dark:shadow-xl border-4 border-white dark:border-slate-800 z-10"
            >
              <img src={manCard} alt="Trusted client" className="w-full h-auto object-cover aspect-square" />
            </motion.div>

            {/* Bottom Right Floating Image */}
            <motion.div
              animate={floatAnim3}
              className="absolute right-[5%] bottom-[10%] w-[55%] rounded-[24px] overflow-hidden shadow-[0_20px_40px_rgba(79,70,229,0.15)] dark:shadow-xl border-4 border-white dark:border-slate-800 z-30"
            >
              <img src={womanLaptop} alt="Client using laptop" className="w-full h-auto object-cover aspect-[4/3]" />
              
              {/* Overlay Badge */}
              <div className="absolute -bottom-4 -left-4 bg-indigo-600 dark:bg-yellow-400 text-white dark:text-slate-950 p-4 rounded-full shadow-lg border-4 border-white dark:border-slate-800 w-24 h-24 flex flex-col items-center justify-center">
                <span className="font-bold text-lg leading-tight">1.5k+</span>
                <span className="text-[10px] font-medium opacity-90 text-center leading-tight">Trusted<br/>Clients</span>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="relative z-10 text-sm text-slate-700 dark:text-slate-700">
          © {new Date().getFullYear()} CoinKeeper LK. All rights reserved.
        </div>
      </div>

      {/* Right side - Form */}
      <div className="flex w-full flex-col justify-start sm:justify-center px-6 py-6 sm:px-10 lg:w-1/2 xl:px-16 2xl:px-24 relative z-10 overflow-y-auto overflow-x-hidden custom-scrollbar">
        
        <div className="mx-auto w-full max-w-[420px] my-auto sm:my-0">
          
          {/* Mobile Header (Hidden on Desktop) */}
          <Link to="/" className="mb-8 flex items-center justify-center gap-3 lg:hidden text-slate-950 dark:text-white hover:opacity-80 transition-opacity w-full">
            <Sparkles size={28} className="text-indigo-600 dark:text-yellow-400" />
            <span className="text-2xl font-bold tracking-tight">CoinKeeper LK</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="mb-6 text-center sm:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white transition-colors">
                {title}
              </h2>
              {subtitle && (
                <p className="mt-2 text-slate-700 dark:text-slate-400 transition-colors">
                  {subtitle}
                </p>
              )}
            </div>

            {children}
          </motion.div>
        </div>
      </div>
      
      </div> {/* End Full Page Box */}
    </div>
  );
}
