import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Button from '../ui/Button';

export default function CTA() {
  return (
    <motion.section
      id="tools"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
      className="mx-auto w-full max-w-7xl px-6 pb-24 md:px-8"
    >
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-fuchsia-900/40 via-slate-900/40 to-cyan-900/40 p-10 shadow-2xl backdrop-blur-md border border-white/10 sm:p-14">
        {/* Background decorations */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl mix-blend-screen" />
          <div className="absolute left-0 bottom-0 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl mix-blend-screen" />
        </div>

        <div className="relative grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-sm font-medium text-yellow-400 backdrop-blur-sm">
              <Sparkles size={13} />
              Premium Fintech Experience
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Build your financial future with confidence.
            </h2>
            <p className="max-w-xl text-lg leading-8 text-slate-300">
              Join thousands of modern teams that streamline spending, monitor cash flow, and stay ahead with intuitive budgeting tools built for growth.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/register">
                <Button id="cta-get-started" type="button" className="gap-2 bg-yellow-400 text-slate-950 hover:bg-yellow-300 rounded-full px-8 py-3.5 text-base font-bold shadow-lg shadow-yellow-400/20">
                  Get Started Free
                  <ArrowRight size={16} />
                </Button>
              </Link>
              <Link to="/login" className="text-sm font-medium text-slate-400 underline-offset-4 hover:text-white hover:underline transition">
                Already have an account?
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-[28px] bg-white/5 px-6 py-8 ring-1 ring-white/10 backdrop-blur-sm sm:px-8">
            <div className="rounded-[22px] bg-white/5 p-5 ring-1 ring-white/10">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Monthly active users</p>
              <p className="mt-3 text-4xl font-semibold text-white tabular-nums">500k+</p>
              <p className="mt-1 text-xs text-cyan-400">↑ 12% this quarter</p>
            </div>
            <div className="rounded-[22px] bg-white/5 p-5 ring-1 ring-white/10">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Trusted by businesses</p>
              <p className="mt-3 text-4xl font-semibold text-white tabular-nums">25k+</p>
              <p className="mt-1 text-xs text-cyan-400">↑ Worldwide</p>
            </div>
            <div className="rounded-[22px] bg-white/5 p-5 ring-1 ring-white/10">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Transactions processed</p>
              <p className="mt-3 text-4xl font-semibold text-white tabular-nums">$2.4B</p>
              <p className="mt-1 text-xs text-cyan-400">↑ Monthly average</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
