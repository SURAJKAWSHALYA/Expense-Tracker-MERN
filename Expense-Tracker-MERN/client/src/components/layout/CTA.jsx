import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

export default function CTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
      className="mx-auto w-full max-w-7xl px-6 pb-20 md:px-8"
    >
      <div className="rounded-[32px] border border-white/80 bg-white/90 p-10 shadow-[0_45px_100px_rgba(15,23,42,0.08)] sm:p-12">
        <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.26em] text-indigo-600">Premium Fintech Experience</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Build your financial future with confidence.
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              Join thousands of modern teams that streamline spending, monitor cash flow, and stay ahead with intuitive budgeting tools built for growth.
            </p>
          </div>

          <div className="flex flex-col gap-4 rounded-[28px] bg-slate-950 px-6 py-8 text-white shadow-xl shadow-slate-950/15 sm:px-8">
            <div className="rounded-[26px] bg-white/5 p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-300">Monthly active users</p>
              <p className="mt-3 text-3xl font-semibold">500k+</p>
            </div>
            <div className="rounded-[26px] bg-white/5 p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-300">Trusted by teams worldwide</p>
              <p className="mt-3 text-3xl font-semibold">25k+ businesses</p>
            </div>
            <Link to="/register" className="w-full">
              <Button type="button" className="w-full py-3 text-base font-semibold">
                Start free trial
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
