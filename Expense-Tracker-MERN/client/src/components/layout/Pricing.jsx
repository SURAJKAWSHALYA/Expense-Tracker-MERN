import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';
import Button from '../ui/Button';

const plans = [
  {
    name: 'Starter',
    price: { monthly: 0, yearly: 0 },
    description: 'Perfect for individuals just getting started.',
    features: [
      'Up to 2 bank accounts',
      'Basic expense tracking',
      'Monthly budget planner',
      'Email support',
    ],
    cta: 'Get Started Free',
    ctaLink: '/register',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: { monthly: 9, yearly: 7 },
    description: 'Everything you need for serious financial growth.',
    features: [
      'Unlimited bank accounts',
      'Smart auto-categorization',
      'Advanced analytics & reports',
      'Bill tracking & reminders',
      'Priority support',
      'Export to CSV/PDF',
    ],
    cta: 'Start 14-day Trial',
    ctaLink: '/register',
    highlighted: true,
    badge: 'Most Popular',
  },
  {
    name: 'Business',
    price: { monthly: 29, yearly: 22 },
    description: 'Built for teams managing shared finances.',
    features: [
      'Everything in Pro',
      'Up to 10 team members',
      'Shared dashboards',
      'Role-based access',
      'Dedicated account manager',
      'Custom integrations',
    ],
    cta: 'Contact Sales',
    ctaLink: '/register',
    highlighted: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <motion.section
      id="pricing"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      className="mx-auto w-full max-w-7xl px-6 pb-24 md:px-8"
    >
      <motion.div variants={cardVariants} className="mb-14 text-center">
        <p className="text-sm uppercase tracking-[0.26em] text-indigo-600 dark:text-yellow-400 transition-colors">Transparent pricing</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl transition-colors">
          Plans for every stage
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-slate-700 dark:text-slate-300 transition-colors">
          Start free, upgrade when you need more. No hidden fees, cancel anytime.
        </p>

        <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-indigo-200 dark:border-white/10 bg-indigo-50/60 dark:bg-slate-900/60 p-1 px-2 shadow-sm backdrop-blur-md transition-colors">
          <button
            onClick={() => setYearly(false)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${!yearly ? 'bg-indigo-600 text-white dark:bg-yellow-400 dark:text-slate-950 shadow-md' : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'}`}
          >
            Monthly
          </button>
          <button
            onClick={() => setYearly(true)}
            className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition ${yearly ? 'bg-indigo-600 text-white dark:bg-yellow-400 dark:text-slate-950 shadow-md' : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'}`}
          >
            Yearly
            <span className="rounded-full bg-emerald-500/15 dark:bg-slate-950/20 px-2 py-0.5 text-xs text-emerald-700 dark:text-yellow-500 font-bold dark:mix-blend-luminosity">Save 20%</span>
          </button>
        </div>
      </motion.div>

      <div className="grid gap-5 lg:grid-cols-3">
        {plans.map((plan) => (
          <motion.div
            key={plan.name}
            variants={cardVariants}
            whileHover={{ y: plan.highlighted ? 0 : -6, transition: { duration: 0.25 } }}
            className={`relative flex flex-col gap-6 rounded-[28px] p-8 backdrop-blur-md transition-colors duration-300 ${
              plan.highlighted
                ? 'bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-900 dark:from-fuchsia-600/30 dark:to-cyan-500/30 text-white shadow-[0_32px_80px_rgba(79,70,229,0.25)] dark:shadow-2xl border border-transparent dark:border-white/20'
                : 'border border-indigo-200 dark:border-white/10 bg-indigo-50/70 dark:bg-slate-900/40 shadow-[0_24px_60px_rgba(79,70,229,0.08)] dark:shadow-xl'
            }`}
          >
            {plan.badge && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="flex items-center gap-1 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 dark:from-yellow-400 dark:to-amber-500 px-4 py-1.5 text-xs font-bold text-white dark:text-slate-950 shadow-lg shadow-pink-500/30 dark:shadow-yellow-500/30">
                  <Zap size={12} />
                  {plan.badge}
                </span>
              </div>
            )}

            <div>
              <p className={`text-sm font-semibold uppercase tracking-widest ${plan.highlighted ? 'text-indigo-200 dark:text-cyan-300' : 'text-indigo-600 dark:text-yellow-400'}`}>
                {plan.name}
              </p>
              <div className="mt-3 flex items-end gap-1">
                <span className={`text-5xl font-semibold tabular-nums ${plan.highlighted ? 'text-white' : 'text-slate-950 dark:text-white'}`}>
                  ${yearly ? plan.price.yearly : plan.price.monthly}
                </span>
                <span className={`mb-2 text-sm ${plan.highlighted ? 'text-indigo-200 dark:text-slate-300' : 'text-slate-700 dark:text-slate-400'}`}>/mo</span>
              </div>
              <p className={`mt-2 text-sm leading-6 ${plan.highlighted ? 'text-indigo-100 dark:text-slate-200' : 'text-slate-700 dark:text-slate-300'}`}>
                {plan.description}
              </p>
            </div>

            <ul className="flex flex-col gap-3">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <div className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${plan.highlighted ? 'bg-indigo-400/30 text-indigo-100 dark:bg-cyan-500/30 dark:text-cyan-200' : 'bg-indigo-50 text-indigo-600 dark:bg-white/10 dark:text-yellow-400'}`}>
                    <Check size={11} />
                  </div>
                  <span className={`text-sm leading-6 ${plan.highlighted ? 'text-white' : 'text-slate-700 dark:text-slate-300'}`}>{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <Link to={plan.ctaLink}>
                {plan.highlighted ? (
                  <button
                    type="button"
                    className="w-full rounded-full bg-indigo-50/80 dark:bg-yellow-400 py-3.5 text-sm font-bold text-indigo-900 dark:text-slate-950 shadow-xl transition hover:-translate-y-0.5 hover:bg-slate-50 dark:hover:bg-yellow-300"
                  >
                    {plan.cta}
                  </button>
                ) : (
                  <Button type="button" variant="secondary" className="w-full py-3.5 text-sm font-bold">
                    {plan.cta}
                  </Button>
                )}
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
