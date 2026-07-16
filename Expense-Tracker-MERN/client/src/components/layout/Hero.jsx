import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Sparkles, TrendingUp, Zap } from 'lucide-react';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

const partners = ['Notion', 'Stripe', 'Airtable', 'Gumroad'];

const stats = [
  { value: '500K+', label: 'Active Users' },
  { value: '$2.4B', label: 'Tracked Monthly' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '4.9 ★', label: 'App Store Rating' },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 pb-24 pt-10 md:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-20 lg:py-28"
    >
      {/* ── Left copy ── */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="flex max-w-2xl flex-col gap-8"
      >
        <Badge className="max-w-max gap-1.5">
          <Zap size={13} className="text-indigo-500" />
          Your Money. Your Control.
        </Badge>

        <div className="space-y-5">
          <h1 className="max-w-[14ch] text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-[3.75rem]">
            Take Control of Your{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-500 bg-clip-text text-transparent">
              Financial Future
            </span>
          </h1>
          <p className="max-w-xl text-lg leading-8 text-slate-600">
            Track your spending, plan budgets, and grow your savings — all in one elegant dashboard built for real financial clarity.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4">
          <Link to="/register" className="rounded-full">
            <Button type="button" id="hero-get-started" className="rounded-full px-7 py-3.5 text-base">
              Get Started Free
              <ArrowRight size={16} />
            </Button>
          </Link>
          <a
            href="#services"
            id="hero-explore-services"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300/80 bg-white/80 px-6 py-3.5 text-base font-semibold text-slate-900 transition hover:border-slate-950 hover:bg-slate-100"
          >
            Explore features
          </a>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-[20px] border border-slate-200/60 bg-white/80 px-4 py-3.5 text-center shadow-sm shadow-slate-900/5 backdrop-blur-sm">
              <p className="text-xl font-semibold text-slate-950">{stat.value}</p>
              <p className="mt-0.5 text-xs text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Trusted by */}
        <div className="rounded-[24px] border border-slate-200/60 bg-white/70 p-5 shadow-sm backdrop-blur-xl">
          <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Trusted by teams at</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {partners.map((name) => (
              <div key={name} className="rounded-2xl bg-slate-50/90 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm shadow-slate-900/5">
                {name}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── Right dashboard card ── */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: 'easeOut' }}
        className="relative mx-auto w-full max-w-md lg:max-w-[420px]"
      >
        {/* Blobs */}
        <div className="absolute right-0 top-10 hidden h-32 w-32 rounded-full bg-indigo-300/25 blur-3xl xl:block" />
        <div className="absolute left-0 top-28 hidden h-36 w-36 rounded-full bg-sky-300/20 blur-3xl xl:block" />
        <div className="absolute bottom-8 right-4 hidden h-24 w-24 rounded-full bg-violet-300/20 blur-3xl xl:block" />

        <div className="relative overflow-hidden rounded-[32px] border border-white/80 bg-white/95 p-5 shadow-[0_40px_90px_rgba(15,23,42,0.14)]">
          {/* Dark card */}
          <div className="relative grid gap-5 rounded-[26px] bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 px-5 py-5 text-white shadow-xl shadow-slate-950/20">
            {/* Header */}
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs text-slate-400">Good Evening 🌙</p>
                <h2 className="mt-0.5 text-lg font-semibold">Jordan Osas</h2>
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/10">
                <Sparkles size={18} />
              </div>
            </div>

            {/* Balance */}
            <div className="rounded-[22px] bg-white/8 p-5 backdrop-blur-sm ring-1 ring-white/10">
              <p className="text-xs text-slate-400 uppercase tracking-widest">Total Balance</p>
              <p className="mt-2 text-4xl font-semibold tabular-nums">$1,595.86</p>
              <div className="mt-3 flex items-center gap-1.5 text-emerald-400 text-xs font-medium">
                <TrendingUp size={12} />
                +8.4% from last month
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-4 gap-2">
              {['Send', 'Request', 'Transfer', 'History'].map((label) => (
                <button
                  key={label}
                  type="button"
                  className="rounded-2xl border border-white/10 bg-white/8 py-3 text-xs font-semibold text-white transition hover:bg-white/15 hover:-translate-y-0.5"
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Recent Activity */}
            <div className="rounded-[22px] bg-slate-50/90 p-4 text-slate-950">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="font-medium uppercase tracking-wide">Recent Activity</span>
                <span className="text-slate-400">Nov 2025</span>
              </div>
              <div className="mt-3 space-y-2">
                {[
                  { label: 'Grocery — Whole Foods', amount: '-$84.50', color: 'text-rose-600' },
                  { label: 'Salary Deposit', amount: '+$3,200.00', color: 'text-emerald-600' },
                  { label: 'Netflix Subscription', amount: '-$15.99', color: 'text-rose-600' },
                ].map((tx) => (
                  <div key={tx.label} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-sm shadow-slate-900/5">
                    <p className="text-xs font-medium text-slate-800">{tx.label}</p>
                    <p className={`text-xs font-semibold ${tx.color}`}>{tx.amount}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating mini card */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -right-12 top-6 hidden w-[170px] rounded-[26px] border border-white/80 bg-gradient-to-br from-white to-slate-50/80 p-4 shadow-2xl shadow-slate-900/12 sm:block"
          >
            <div className="flex items-center justify-between rounded-2xl bg-gradient-to-br from-indigo-950 to-violet-900 px-3 py-3 text-white shadow-lg">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-300">Quick Pay</p>
                <p className="mt-1.5 text-base font-semibold">$297.32</p>
              </div>
              <ShieldCheck size={16} className="text-sky-300" />
            </div>
            <div className="mt-3 space-y-2">
              <div className="rounded-2xl bg-slate-100/70 px-3 py-2.5">
                <p className="text-[10px] uppercase text-slate-500">Send to</p>
                <p className="mt-1 text-xs font-semibold text-slate-900">Olivia M.</p>
              </div>
              <div className="rounded-2xl bg-slate-100/70 px-3 py-2.5">
                <p className="text-[10px] uppercase text-slate-500">Request</p>
                <p className="mt-1 text-xs font-semibold text-slate-900">Jackson K.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
