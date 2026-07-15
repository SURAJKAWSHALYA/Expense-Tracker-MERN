import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Button from '../ui/Button';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Tools', href: '#tools' },
  { label: 'Blog', href: '#blog' },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
      className="sticky top-4 z-30 mx-auto w-[min(1120px,calc(100%-1.5rem))] rounded-full border border-white/40 bg-white/70 px-6 py-3 shadow-glow backdrop-blur-xl"
    >
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3 text-slate-950">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-xl shadow-slate-950/15">
            <Sparkles size={18} />
          </div>
          <span className="text-lg font-semibold tracking-tight">TruePath</span>
        </div>

        <nav className="hidden flex-1 items-center justify-center gap-8 text-sm font-medium text-slate-600 md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="transition-colors duration-200 hover:text-slate-950">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto">
          <Link to="/register">
            <Button type="button" className="whitespace-nowrap px-6 py-3 text-sm font-semibold">
              Get Started
              <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
