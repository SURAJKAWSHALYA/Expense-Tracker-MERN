import { motion } from 'framer-motion';
import { Activity, ShieldCheck, LayoutGrid } from 'lucide-react';

const features = [
  {
    title: 'Expense Tracking',
    description: 'Easily track your daily, weekly, and monthly expenses to stay in control of where your money goes.',
    icon: Activity,
  },
  {
    title: 'Budget Planning',
    description: 'Set clear budgets, monitor progress, and avoid overspending with smart, intuitive budgeting tools.',
    icon: LayoutGrid,
  },
  {
    title: 'Multi-Account Support',
    description: 'Manage all your bank accounts in one place, track transfers, and keep everything synced.',
    icon: ShieldCheck,
  },
];

export default function Features() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="mx-auto w-full max-w-7xl px-6 pb-24 md:px-8"
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.article
              key={feature.title}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="group flex h-full flex-col gap-5 rounded-[28px] border border-white/80 bg-white/90 p-8 shadow-[0_32px_70px_rgba(15,23,42,0.08)]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-950 text-white shadow-lg shadow-slate-950/15">
                <Icon size={24} />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-slate-950">{feature.title}</h3>
                <p className="text-base leading-7 text-slate-600">{feature.description}</p>
              </div>
              <div className="mt-auto">
                <span className="text-sm font-semibold text-indigo-600 transition group-hover:text-indigo-700">
                  Learn more →
                </span>
              </div>
            </motion.article>
          );
        })}
      </div>
    </motion.section>
  );
}
