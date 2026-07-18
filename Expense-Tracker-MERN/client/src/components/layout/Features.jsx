import { motion } from 'framer-motion';
import { Activity, ShieldCheck, LayoutGrid, Bell, PieChart, RefreshCw } from 'lucide-react';

const features = [
  {
    title: 'Expense Tracking',
    description: 'Log and categorize every transaction automatically. Get daily, weekly, and monthly breakdowns at a glance.',
    icon: Activity,
    color: 'from-fuchsia-500 to-pink-600',
    tag: 'Core',
  },
  {
    title: 'Budget Planning',
    description: 'Set smart budgets by category. Get real-time alerts before you overspend and visual progress tracking.',
    icon: LayoutGrid,
    color: 'from-cyan-400 to-blue-500',
    tag: 'Popular',
  },
  {
    title: 'Multi-Account Sync',
    description: 'Connect all your bank accounts and cards in one place. Transfers, balances, and history — fully synced.',
    icon: RefreshCw,
    color: 'from-yellow-400 to-amber-500',
    tag: 'New',
  },
  {
    title: 'Smart Alerts',
    description: 'Receive instant notifications for unusual spending, upcoming bills, and savings milestones.',
    icon: Bell,
    color: 'from-amber-400 to-orange-500',
    tag: 'Smart',
  },
  {
    title: 'Analytics & Reports',
    description: 'Visualize your financial health with beautiful charts, trend analysis, and downloadable reports.',
    icon: PieChart,
    color: 'from-fuchsia-400 to-purple-500',
    tag: 'Insights',
  },
  {
    title: 'Bank-Grade Security',
    description: '256-bit encryption, biometric auth, and real-time fraud detection keep your money and data safe.',
    icon: ShieldCheck,
    color: 'from-blue-400 to-indigo-500',
    tag: 'Security',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function Features() {
  return (
    <motion.section
      id="services"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants}
      className="mx-auto w-full max-w-7xl px-6 pb-24 md:px-8"
    >
      {/* Section header */}
      <motion.div variants={cardVariants} className="mb-14 text-center">
        <p className="text-sm uppercase tracking-[0.26em] text-yellow-400">Everything you need</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Powerful features, beautifully simple
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
          CoinKeeper LK combines smart automation with an elegant interface so managing your finances feels effortless.
        </p>
      </motion.div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <motion.article
              key={feature.title}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/40 p-8 shadow-2xl backdrop-blur-md"
            >
              {/* Tag */}
              <span className="absolute right-5 top-5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">
                {feature.tag}
              </span>

              {/* Icon */}
              <div className={`flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br ${feature.color} text-white shadow-lg`}>
                <Icon size={22} />
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                <p className="text-base leading-7 text-slate-300">{feature.description}</p>
              </div>

              <div className="mt-auto">
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-yellow-400 transition group-hover:gap-2 group-hover:text-yellow-300">
                  Learn more
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </span>
              </div>
            </motion.article>
          );
        })}
      </div>
    </motion.section>
  );
}
