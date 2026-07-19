import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Menu, X, Sun, Moon } from 'lucide-react';
import Button from '../ui/Button';
import { useTheme } from '../../context/ThemeContext';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Features', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Blog', href: '#blog' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
        className={`sticky top-4 z-30 mx-auto w-[min(1120px,calc(100%-1.5rem))] rounded-full border px-6 py-3 backdrop-blur-xl transition-all duration-300 ${
          scrolled
            ? 'border-indigo-100 bg-white/70 dark:border-white/10 dark:bg-slate-900/80 shadow-[0_8px_32px_rgba(79,70,229,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
            : 'border-transparent bg-transparent'
        }`}
      >
        <div className="flex items-center gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 text-slate-950 dark:text-white transition-colors hover:opacity-80">
            <Sparkles size={20} className="text-indigo-600 dark:text-yellow-400" />
            <span className="text-lg font-bold tracking-tight">CoinKeeper LK</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden flex-1 items-center justify-center gap-8 text-sm font-medium text-slate-700 dark:text-slate-300 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative transition-colors duration-200 hover:text-indigo-600 dark:hover:text-white after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-indigo-600 dark:after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Controls */}
          <div className="ml-auto hidden items-center gap-4 md:flex">
            <button
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Link to="/login" className="text-sm font-medium text-slate-700 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-white transition-colors">
              Sign in
            </Link>
            <Link to="/register">
              <Button type="button" className="whitespace-nowrap px-5 py-2.5 text-sm font-semibold">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="ml-auto flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-700 dark:bg-white/5 dark:text-slate-300 transition-colors"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              id="navbar-mobile-toggle"
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-indigo-200 bg-indigo-50/80 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-4 top-20 z-20 rounded-[28px] border border-indigo-200 bg-indigo-50/80 p-6 shadow-xl dark:border-white/10 dark:bg-slate-900/95 dark:shadow-[0_32px_80px_rgba(0,0,0,0.5)] backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-indigo-600 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mt-5 flex flex-col gap-3 border-t border-slate-100 dark:border-white/10 pt-5">
              <Link to="/login" onClick={() => setMobileOpen(false)} className="text-center text-sm font-medium text-slate-700 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-white transition-colors">
                Sign in
              </Link>
              <Link to="/register" onClick={() => setMobileOpen(false)}>
                <Button type="button" className="w-full">
                  Get Started
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
