import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Menu, X } from 'lucide-react';
import Button from '../ui/Button';

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
            ? 'border-white/10 bg-slate-900/80 shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
            : 'border-white/5 bg-transparent'
        }`}
      >
        <div className="flex items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3 text-white">
            <Sparkles size={20} className="text-yellow-400" />
            <span className="text-lg font-bold tracking-tight">CoinKeeper LK</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden flex-1 items-center justify-center gap-8 text-sm font-medium text-slate-300 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative transition-colors duration-200 hover:text-white after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="ml-auto hidden items-center gap-3 md:flex">
            <Link to="/login" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Sign in
            </Link>
            <Link to="/register">
              <Button type="button" className="whitespace-nowrap px-5 py-2.5 text-sm font-semibold">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            id="navbar-mobile-toggle"
            type="button"
            className="ml-auto flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:bg-white/10 hover:text-white md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
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
            className="fixed inset-x-4 top-20 z-20 rounded-[28px] border border-white/10 bg-slate-900/95 p-6 shadow-[0_32px_80px_rgba(0,0,0,0.5)] backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mt-5 flex flex-col gap-3 border-t border-white/10 pt-5">
              <Link to="/login" onClick={() => setMobileOpen(false)} className="text-center text-sm font-medium text-slate-300 hover:text-white">
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
