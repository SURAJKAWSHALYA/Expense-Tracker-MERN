import Navbar from '../components/layout/Navbar';
import Hero from '../components/layout/Hero';
import Features from '../components/layout/Features';
import HowItWorks from '../components/layout/HowItWorks';
import Testimonials from '../components/layout/Testimonials';
import Pricing from '../components/layout/Pricing';
import CTA from '../components/layout/CTA';
import Footer from '../components/layout/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />

      <main className="relative">
        <Hero />

        {/* About */}
        <section id="about" className="mx-auto max-w-7xl px-6 pb-24 md:px-8">
          <div className="rounded-[32px] border border-white/80 dark:border-white/10 bg-white/90 dark:bg-slate-900/40 p-10 shadow-[0_45px_100px_rgba(15,23,42,0.08)] dark:shadow-2xl backdrop-blur-md sm:p-14 transition-colors duration-300">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div className="space-y-6">
                <p className="text-sm uppercase tracking-[0.26em] text-indigo-600 dark:text-yellow-400 transition-colors">About CoinKeeper LK</p>
                <h2 className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl transition-colors">
                  A smarter way to track spending and save with confidence.
                </h2>
                <p className="max-w-2xl text-lg leading-8 text-slate-700 dark:text-slate-300 transition-colors">
                  CoinKeeper LK brings your finances into one elegant view, with powerful tools for budgeting, account monitoring, and personal finance insights — all built around simplicity and clarity.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  {['No hidden fees', 'Bank-grade security', 'Works offline', 'Open API'].map((item) => (
                    <span key={item} className="rounded-full border border-indigo-100 dark:border-yellow-400/20 bg-indigo-50 dark:bg-yellow-400/10 px-4 py-2 font-medium text-indigo-700 dark:text-yellow-400 transition-colors">
                      ✓ {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid gap-4">
                <div className="rounded-[28px] bg-gradient-to-br from-slate-950 to-indigo-950 dark:from-fuchsia-600/20 dark:to-cyan-500/20 p-7 text-white shadow-xl border border-transparent dark:border-white/10 backdrop-blur-sm transition-colors">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Built for growth</p>
                  <p className="mt-4 text-xl font-semibold leading-8">Keep your cash flow predictable, wherever you bank.</p>
                </div>
                <div className="rounded-[28px] border border-slate-200/60 dark:border-white/10 bg-slate-50 dark:bg-white/5 p-7 text-slate-950 dark:text-white shadow-lg backdrop-blur-sm transition-colors">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-600 dark:text-slate-400 transition-colors">Focus on what matters</p>
                  <p className="mt-4 text-xl font-semibold leading-8">Spend less time on spreadsheets and more on planning.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <CTA />

        {/* Blog */}
        <section id="blog" className="mx-auto max-w-7xl px-6 pb-24 md:px-8">
          <div className="rounded-[32px] border border-white/80 dark:border-white/10 bg-white/90 dark:bg-slate-900/40 p-10 shadow-[0_45px_100px_rgba(15,23,42,0.08)] dark:shadow-2xl backdrop-blur-md sm:p-14 transition-colors duration-300">
            <div className="space-y-4 text-center mb-12">
              <p className="text-sm uppercase tracking-[0.26em] text-indigo-600 dark:text-yellow-400 transition-colors">Insights</p>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl transition-colors">
                Latest financial wellness stories
              </h2>
              <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-700 dark:text-slate-300 transition-colors">
                Read how modern teams optimize spending, direct savings, and stay ahead with smarter money workflows.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {[
                {
                  tag: 'Budgeting',
                  title: 'Smart Spending Strategies',
                  description: 'Learn how to optimize your monthly outflows with automated tracking and data-backed alerts.',
                  readTime: '5 min read',
                },
                {
                  tag: 'Planning',
                  title: 'Budget Planning Made Easy',
                  description: 'Create budgets that move with your goals while keeping every account in sync.',
                  readTime: '4 min read',
                },
                {
                  tag: 'Teams',
                  title: 'Team Finance Efficiency',
                  description: 'See how businesses organize multi-account workflows for fast, reliable cash oversight.',
                  readTime: '6 min read',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="group flex flex-col gap-4 rounded-[24px] border border-slate-200/80 dark:border-white/10 bg-white dark:bg-white/5 p-7 shadow-[0_18px_50px_rgba(15,23,42,0.06)] dark:shadow-xl transition hover:-translate-y-1 hover:shadow-lg dark:hover:bg-white/10 cursor-pointer backdrop-blur-sm"
                >
                  <span className="inline-block rounded-full bg-indigo-50 dark:bg-yellow-400/10 px-3 py-1 text-xs font-semibold text-indigo-600 dark:text-yellow-400 self-start transition-colors">
                    {item.tag}
                  </span>
                  <h3 className="text-xl font-semibold text-slate-950 dark:text-white transition-colors">{item.title}</h3>
                  <p className="flex-1 text-base leading-7 text-slate-700 dark:text-slate-300 transition-colors">{item.description}</p>
                  <div className="flex items-center justify-between text-xs text-slate-400 dark:text-slate-400 border-t border-slate-100 dark:border-white/10 pt-4 mt-auto transition-colors">
                    <span>{item.readTime}</span>
                    <span className="font-medium text-indigo-600 dark:text-yellow-400 group-hover:text-indigo-700 dark:group-hover:text-yellow-300 transition">Read more →</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
