import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, CreditCard, Sparkles } from 'lucide-react';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

const partners = ['Notion', 'Mailchimp', 'Airtable', 'Gumroad'];

export default function Hero() {
  return (
    <section className="relative mx-auto flex w-full max-w-7xl flex-col gap-14 px-6 pb-20 pt-10 md:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-24 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="flex max-w-2xl flex-col gap-8"
      >
        <Badge className="max-w-max">Your Money. Your Control.</Badge>

        <div className="space-y-6">
          <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
            Take Control of Your Financial Future
          </h1>
          <p className="max-w-xl text-lg leading-8 text-slate-600">
            Take control of your money with Savi. Track your spending, save smartly,
            all in one easy-to-use app.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <Link to="/login" className="rounded-full">
            <Button type="button" className="rounded-full">Download Apps</Button>
          </Link>
          <Link
            to="/login"
            className="inline-flex items-center justify-center rounded-full border border-slate-300/80 bg-white/80 px-6 py-3 text-base font-semibold text-slate-900 transition hover:border-slate-950 hover:bg-slate-100"
          >
            Explore our services
          </Link>
        </div>

        <div className="rounded-[28px] border border-slate-200/80 bg-white/80 p-6 shadow-[0_26px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Trusted by 25K+ businesses teams</p>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {partners.map((name) => (
              <div key={name} className="rounded-3xl bg-slate-50/80 px-4 py-3 text-center text-sm font-medium text-slate-700 shadow-sm shadow-slate-900/5">
                {name}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: 'easeOut' }}
        className="relative mx-auto w-full max-w-xl"
      >
        <div className="absolute right-0 top-10 hidden h-28 w-28 rounded-full bg-indigo-300/30 blur-3xl xl:block" />
        <div className="absolute left-0 top-24 hidden h-36 w-36 rounded-full bg-sky-300/25 blur-3xl xl:block" />

        <div className="relative overflow-hidden rounded-[32px] border border-white/80 bg-white/95 p-6 shadow-[0_40px_90px_rgba(15,23,42,0.12)]">
          <div className="relative grid gap-6 rounded-[28px] bg-slate-950 px-5 py-5 text-white shadow-xl shadow-slate-950/15 sm:px-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm text-slate-300">Good Evening</p>
                <h2 className="text-xl font-semibold">Jordan Osas</h2>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-white/10">
                <Sparkles size={20} />
              </div>
            </div>

            <div className="rounded-[28px] bg-white/10 p-5 backdrop-blur-sm">
              <p className="text-sm text-slate-300">Balance</p>
              <p className="mt-2 text-4xl font-semibold">$1,595.86</p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {['Send', 'Request', 'Transfer', 'History'].map((label) => (
                <button
                  key={label}
                  type="button"
                  className="rounded-3xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="rounded-[28px] bg-slate-50/90 p-5 text-slate-950">
              <div className="flex items-center justify-between text-sm text-slate-500">
                <span>Recent Activity</span>
                <span className="font-medium text-slate-900">Nov 02, 2025</span>
              </div>
              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between rounded-3xl bg-white px-4 py-3 shadow-sm shadow-slate-900/5">
                  <div>
                    <p className="text-sm font-medium">Received Money</p>
                    <p className="text-xs text-slate-500">November 02, 2025</p>
                  </div>
                  <p className="text-sm font-semibold text-slate-950">+$213.00</p>
                </div>
                <div className="flex items-center justify-between rounded-3xl bg-white px-4 py-3 shadow-sm shadow-slate-900/5">
                  <div>
                    <p className="text-sm font-medium">Received Money</p>
                    <p className="text-xs text-slate-500">November 02, 2025</p>
                  </div>
                  <p className="text-sm font-semibold text-slate-950">+$208.02</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -right-10 top-8 hidden h-64 w-52 rounded-[34px] border border-white/80 bg-gradient-to-br from-white to-slate-50/80 p-4 shadow-2xl shadow-slate-900/10 sm:block"
          >
            <div className="flex items-center justify-between rounded-3xl bg-indigo-950 px-4 py-3 text-white shadow-lg shadow-indigo-950/20">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-slate-300">Quick Transfer</p>
                <p className="mt-2 text-lg font-semibold">$297.32</p>
              </div>
              <ShieldCheck size={20} className="text-sky-300" />
            </div>
            <div className="mt-5 space-y-4">
              <div className="rounded-3xl bg-slate-950/5 p-4">
                <p className="text-xs uppercase text-slate-500">Send</p>
                <p className="mt-2 text-sm font-semibold text-slate-900">Olivia</p>
              </div>
              <div className="rounded-3xl bg-slate-950/5 p-4">
                <p className="text-xs uppercase text-slate-500">Request</p>
                <p className="mt-2 text-sm font-semibold text-slate-900">Jackson</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
