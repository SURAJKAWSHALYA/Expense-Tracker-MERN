import { motion } from 'framer-motion';
import clsx from 'clsx';

export default function Button({ variant = 'solid', size = 'md', children, className = '', ...props }) {
  const base = 'inline-flex items-center justify-center gap-2 font-semibold transition-transform duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500';
  const variants = {
    solid: 'bg-slate-950 text-white shadow-xl shadow-slate-950/10 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-slate-950/20',
    outline: 'border border-slate-300/80 bg-white/80 text-slate-950 hover:border-slate-950 hover:text-slate-950 hover:bg-slate-100',
    ghost: 'text-slate-700 hover:text-slate-950',
  };
  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-full',
    md: 'px-6 py-3 text-base rounded-full',
    lg: 'px-8 py-3.5 text-base rounded-full',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={clsx(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}
