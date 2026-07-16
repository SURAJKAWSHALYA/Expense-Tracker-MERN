import { motion } from 'framer-motion';
import { UserPlus, Link2, BarChart3, Target } from 'lucide-react';

const steps = [
  {
    step: '01',
    title: 'Create Your Account',
    description: 'Sign up in under 60 seconds. No credit card required. Just your email and a secure password.',
    icon: UserPlus,
  },
  {
    step: '02',
    title: 'Connect Your Accounts',
    description: 'Securely link your bank accounts, cards, and wallets. TruePath syncs everything automatically.',
    icon: Link2,
  },
  {
    step: '03',
    title: 'Set Your Budgets',
    description: 'Define spending limits per category. Our AI suggests budgets based on your historical patterns.',
    icon: Target,
  },
  {
    step: '04',
    title: 'Track & Grow',
    description: 'Watch your financial health improve with real-time insights, trend reports, and savings goals.',
    icon: BarChart3,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function HowItWorks() {
  return (
    <motion.section
      id="how-it-works"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants}
      className="mx-auto w-full max-w-7xl px-6 pb-24 md:px-8"
    >
      <div className="rounded-[32px] border border-white/80 bg-white/90 p-10 shadow-[0_45px_100px_rgba(15,23,42,0.08)] sm:p-14">
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-14 text-center">
          <p className="text-sm uppercase tracking-[0.26em] text-indigo-600">Simple process</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Up and running in minutes
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-slate-600">
            Four simple steps separate you from complete financial clarity.
          </p>
        </motion.div>

        <div className="relative grid gap-8 lg:grid-cols-4">
          {/* Connector line (desktop) */}
          <div className="absolute top-8 left-0 right-0 hidden h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent lg:block" style={{ top: '2.75rem' }} />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div key={step.step} variants={itemVariants} className="relative flex flex-col items-center gap-5 text-center">
                {/* Step circle */}
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/25 z-10">
                  <Icon size={22} />
                  <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] font-bold text-indigo-600 shadow-sm">
                    {step.step.replace('0', '')}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-slate-950">{step.title}</h3>
                  <p className="text-sm leading-6 text-slate-600">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
