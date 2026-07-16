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
      {/* Header */}
      <motion.div variants={cardVariants} className="mb-14 text-center">
        <p className="text-sm uppercase tracking-[0.26em] text-indigo-600">Transparent pricing</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Plans for every stage
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-slate-600">
          Start free, upgrade when you need more. No hidden fees, cancel anytime.
        </p>

        {/* Toggle */}
        <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-slate-200/80 bg-white/80 p-1 px-2 shadow-sm">
          <button
            id="pricing-monthly-toggle"
            type="button"
            onClick={() => setYearly(false)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${!yearly ? 'bg-slate-950 text-white shadow-md' : 'text-slate-600 hover:text-slate-900'}`}
          >
            Monthly
          </button>
          <button
            id="pricing-yearly-toggle"
            type="button"
            onClick={() => setYearly(true)}
            className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition ${yearly ? 'bg-slate-950 text-white shadow-md' : 'text-slate-600 hover:text-slate-900'}`}
          >
            Yearly
            <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-xs text-emerald-700">Save 20%</span>
          </button>
        </div>
      </motion.div>

      <div className="grid gap-5 lg:grid-cols-3">
        {plans.map((plan) => (
          <motion.div
            key={plan.name}
            variants={cardVariants}
            whileHover={{ y: plan.highlighted ? 0 : -6, transition: { duration: 0.25 } }}
            className={`relative flex flex-col gap-6 rounded-[28px] p-8 ${
              plan.highlighted
                ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white shadow-[0_32px_80px_rgba(15,23,42,0.25)] ring-1 ring-white/10'
                : 'border border-white/80 bg-white/90 shadow-[0_24px_60px_rgba(15,23,42,0.08)]'
            }`}
          >
            {plan.badge && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="flex items-center gap-1 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-1.5 text-xs font-semibold text-white shadow-lg shadow-indigo-500/30">
                  <Zap size={11} />
                  {plan.badge}
                </span>
              </div>
            )}

            <div>
              <p className={`text-sm font-semibold uppercase tracking-widest ${plan.highlighted ? 'text-indigo-300' : 'text-indigo-600'}`}>
                {plan.name}
              </p>
              <div className="mt-3 flex items-end gap-1">
                <span className={`text-5xl font-semibold tabular-nums ${plan.highlighted ? 'text-white' : 'text-slate-950'}`}>
                  ${yearly ? plan.price.yearly : plan.price.monthly}
                </span>
                <span className={`mb-2 text-sm ${plan.highlighted ? 'text-slate-400' : 'text-slate-500'}`}>/mo</span>
              </div>
              <p className={`mt-2 text-sm leading-6 ${plan.highlighted ? 'text-slate-400' : 'text-slate-600'}`}>
                {plan.description}
              </p>
            </div>

            <ul className="flex flex-col gap-3">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <div className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${plan.highlighted ? 'bg-indigo-500/20 text-indigo-300' : 'bg-indigo-50 text-indigo-600'}`}>
                    <Check size={11} />
                  </div>
                  <span className={`text-sm leading-6 ${plan.highlighted ? 'text-slate-300' : 'text-slate-700'}`}>{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <Link to={plan.ctaLink} id={`pricing-cta-${plan.name.toLowerCase()}`}>
                {plan.highlighted ? (
                  <button
                    type="button"
                    className="w-full rounded-full bg-white py-3.5 text-sm font-semibold text-slate-950 shadow-xl transition hover:-translate-y-0.5 hover:shadow-2xl"
                  >
                    {plan.cta}
                  </button>
                ) : (
                  <Button type="button" variant="outline" className="w-full py-3.5 text-sm">
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
