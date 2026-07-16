import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Menu, X } from 'lucide-react';
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
            ? 'border-slate-200/60 bg-white/85 shadow-[0_8px_32px_rgba(15,23,42,0.12)]'
            : 'border-white/40 bg-white/70 shadow-glow'
        }`}
      >
        <div className="flex items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3 text-slate-950">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/25">
              <Sparkles size={17} />
            </div>
            <span className="text-lg font-semibold tracking-tight">TruePath</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden flex-1 items-center justify-center gap-8 text-sm font-medium text-slate-600 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative transition-colors duration-200 hover:text-slate-950 after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-indigo-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="ml-auto hidden items-center gap-3 md:flex">
            <Link to="/login" className="text-sm font-medium text-slate-600 hover:text-slate-950 transition-colors">
              Sign in
            </Link>
            <Link to="/register">
              <Button type="button" className="whitespace-nowrap px-5 py-2.5 text-sm font-semibold">
                Get Started
                <ArrowRight size={15} />
              </Button>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            id="navbar-mobile-toggle"
            type="button"
            className="ml-auto flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/80 bg-white/80 text-slate-700 transition hover:bg-slate-100 md:hidden"
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
            className="fixed inset-x-4 top-20 z-20 rounded-[28px] border border-white/60 bg-white/95 p-6 shadow-[0_32px_80px_rgba(15,23,42,0.14)] backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mt-5 flex flex-col gap-3 border-t border-slate-100 pt-5">
              <Link to="/login" onClick={() => setMobileOpen(false)} className="text-center text-sm font-medium text-slate-600">
                Sign in
              </Link>
              <Link to="/register" onClick={() => setMobileOpen(false)}>
                <Button type="button" className="w-full">
                  Get Started Free
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
