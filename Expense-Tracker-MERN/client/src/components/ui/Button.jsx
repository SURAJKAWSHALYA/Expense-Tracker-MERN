import { motion } from 'framer-motion';
import clsx from 'clsx';
import { Loader2 } from 'lucide-react';

export default function Button({ 
  variant = 'primary', 
  size = 'md', 
  loading = false, 
  disabled = false, 
  children, 
  className = '', 
  ...props 
}) {
  const base = 'relative inline-flex items-center justify-center gap-2 font-bold transition-all duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:focus-visible:outline-yellow-400 overflow-hidden';
  
  const variants = {
    // Light mode: Deep Indigo. Dark mode: Bright yellow.
    primary: 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-600/30 hover:bg-indigo-500 dark:bg-yellow-400 dark:text-slate-950 dark:shadow-yellow-400/20 dark:hover:shadow-yellow-400/30 dark:hover:bg-yellow-300 disabled:bg-slate-200 disabled:text-slate-400 dark:disabled:bg-slate-800 dark:disabled:text-slate-700 disabled:hover:translate-y-0 disabled:hover:shadow-none disabled:shadow-none',
    
    // Light mode: clean outline. Dark mode: glass outline.
    secondary: 'border border-slate-300 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-900/50 dark:text-white dark:hover:border-slate-500 dark:hover:bg-slate-800 disabled:bg-slate-50 disabled:text-slate-400 disabled:border-slate-300 dark:disabled:bg-slate-900 dark:disabled:text-slate-700 dark:disabled:border-slate-800',
    
    // Ghost
    ghost: 'text-slate-700 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-white/10 disabled:text-slate-400 disabled:hover:bg-transparent dark:disabled:text-slate-700 dark:disabled:hover:bg-transparent',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-full',
    md: 'px-6 py-3 text-base rounded-full',
    lg: 'px-8 py-4 text-lg rounded-full',
  };

  const isDisabled = disabled || loading;

  return (
    <motion.button
      whileHover={isDisabled ? {} : { scale: 1.02 }}
      whileTap={isDisabled ? {} : { scale: 0.98 }}
      disabled={isDisabled}
      className={clsx(base, variants[variant], sizes[size], isDisabled && 'cursor-not-allowed opacity-80', className)}
      {...props}
    >
      {loading && <Loader2 className="h-4 w-4 animate-spin" />}
      <span className={clsx(loading && 'opacity-0', 'flex items-center gap-2')}>
        {children}
      </span>
      {loading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <Loader2 className="h-5 w-5 animate-spin" />
        </span>
      )}
    </motion.button>
  );
}
