import { Link } from 'react-router-dom';
import { Sparkles, Twitter, Github, Linkedin } from 'lucide-react';

const footerLinks = {
  Product: ['Features', 'Pricing', 'Security', 'Changelog'],
  Company: ['About', 'Blog', 'Careers', 'Press'],
  Support: ['Help Center', 'Contact', 'Privacy', 'Terms'],
};

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-7xl px-6 pb-12 pt-4 md:px-8">
      <div className="rounded-[32px] border border-indigo-200 dark:border-white/10 bg-indigo-50/80 dark:bg-slate-900/40 p-10 text-slate-700 dark:text-slate-300 shadow-[0_24px_60px_rgba(79,70,229,0.08)] dark:shadow-2xl backdrop-blur-md sm:p-12 transition-colors duration-300">
        {/* Top CTA strip */}
        <div className="flex flex-col gap-6 border-b border-indigo-200 dark:border-white/10 pb-10 md:flex-row md:items-center md:justify-between transition-colors">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-indigo-600 dark:text-yellow-400 transition-colors">Ready to get started?</p>
            <p className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white transition-colors">Build smarter financial habits with CoinKeeper LK.</p>
          </div>
          <Link
            to="/register"
            id="footer-cta"
            className="inline-flex items-center gap-2 rounded-full bg-indigo-600 dark:bg-yellow-400 px-6 py-3 text-sm font-bold text-white dark:text-slate-950 shadow-xl shadow-indigo-600/20 dark:shadow-yellow-400/20 transition hover:-translate-y-0.5 hover:shadow-2xl hover:bg-indigo-500 dark:hover:bg-yellow-300"
          >
            Start free trial
          </Link>
        </div>

        {/* Links grid */}
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-slate-950 dark:text-white transition-colors">
              <Sparkles size={20} className="text-indigo-600 dark:text-yellow-400" />
              <span className="text-base font-bold tracking-tight">CoinKeeper LK</span>
            </div>
            <p className="text-sm leading-6 text-slate-700 dark:text-slate-400 transition-colors">
              Smart expense tracking for individuals and teams. Your money, under control.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {[
                { Icon: Twitter, href: '#', label: 'Twitter' },
                { Icon: Github, href: '#', label: 'GitHub' },
                { Icon: Linkedin, href: '#', label: 'LinkedIn' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-indigo-200 dark:border-white/20 bg-slate-50 dark:bg-white/5 text-slate-400 shadow-sm transition hover:border-indigo-600 hover:text-indigo-600 dark:hover:border-yellow-400 dark:hover:text-yellow-400"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-950 dark:text-white transition-colors">{category}</p>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-slate-700 dark:text-slate-400 transition hover:text-indigo-600 dark:hover:text-yellow-400">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-indigo-200 dark:border-white/10 pt-8 text-xs text-slate-700 sm:flex-row transition-colors">
          <p>© {new Date().getFullYear()} CoinKeeper LK. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-indigo-600 dark:hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-indigo-600 dark:hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-indigo-600 dark:hover:text-slate-300 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
