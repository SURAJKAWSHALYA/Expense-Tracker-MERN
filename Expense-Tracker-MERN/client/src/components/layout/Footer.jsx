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
      <div className="rounded-[32px] border border-white/80 bg-white/85 p-10 text-slate-700 shadow-[0_32px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-12">
        {/* Top CTA strip */}
        <div className="flex flex-col gap-6 border-b border-slate-100 pb-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-slate-400">Ready to get started?</p>
            <p className="mt-2 text-2xl font-semibold text-slate-950">Build smarter financial habits with TruePath.</p>
          </div>
          <Link
            to="/register"
            id="footer-cta"
            className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-slate-950/15 transition hover:-translate-y-0.5 hover:shadow-2xl"
          >
            Start free trial
          </Link>
        </div>

        {/* Links grid */}
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-md">
                <Sparkles size={15} />
              </div>
              <span className="text-base font-semibold text-slate-950">TruePath</span>
            </div>
            <p className="text-sm leading-6 text-slate-500">
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
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition hover:border-slate-300 hover:text-slate-900"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-950">{category}</p>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-slate-500 transition hover:text-slate-950">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-slate-100 pt-8 text-xs text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} TruePath. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-slate-700 transition">Privacy Policy</a>
            <a href="#" className="hover:text-slate-700 transition">Terms of Service</a>
            <a href="#" className="hover:text-slate-700 transition">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
