import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Freelance Designer',
    avatar: 'SC',
    avatarBg: 'from-pink-400 to-rose-500',
    rating: 5,
    quote:
      'CoinKeeper LK completely changed how I manage irregular income. I finally feel in control of my finances — and my savings have grown 40% in three months.',
  },
  {
    name: 'Marcus Williams',
    role: 'Startup Founder',
    avatar: 'MW',
    avatarBg: 'from-indigo-400 to-violet-500',
    rating: 5,
    quote:
      "We use CoinKeeper LK across our entire team to track expenses and manage cash flow. It's the most intuitive finance tool we've ever used. Absolutely love it.",
  },
  {
    name: 'Priya Patel',
    role: 'Software Engineer',
    avatar: 'PP',
    avatarBg: 'from-emerald-400 to-teal-500',
    rating: 5,
    quote:
      "The budget alerts and visual breakdowns helped me pay off my student loan two years early. CoinKeeper LK is the finance app I didn't know I needed.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function Testimonials() {
  return (
    <motion.section
      id="testimonials"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants}
      className="mx-auto w-full max-w-7xl px-6 pb-24 md:px-8"
    >
      <motion.div variants={cardVariants} className="mb-14 text-center">
        <p className="text-sm uppercase tracking-[0.26em] text-yellow-400">Loved by users</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Real stories, real results
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-slate-300">
          Join over 500,000 people who've taken control of their money with CoinKeeper LK.
        </p>
      </motion.div>

      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.map((t) => (
          <motion.div
            key={t.name}
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="flex flex-col gap-6 rounded-[28px] border border-white/10 bg-slate-900/40 p-8 shadow-2xl backdrop-blur-md"
          >
            {/* Stars */}
            <div className="flex gap-0.5">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="flex-1 text-base leading-7 text-slate-300">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div className={`flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br ${t.avatarBg} text-sm font-semibold text-white shadow-md`}>
                {t.avatar}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{t.name}</p>
                <p className="text-xs text-slate-400">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
