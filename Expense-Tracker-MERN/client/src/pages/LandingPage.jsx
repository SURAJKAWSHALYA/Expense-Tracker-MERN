import Navbar from '../components/layout/Navbar';
import Hero from '../components/layout/Hero';
import Features from '../components/layout/Features';
import CTA from '../components/layout/CTA';
import Footer from '../components/layout/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen overflow-hidden pb-16">
      <Navbar />
      <main className="relative">
        <section id="home">
          <Hero />
        </section>
        <section id="about" className="mx-auto max-w-7xl px-6 py-24 md:px-8">
          <div className="rounded-[32px] border border-white/80 bg-white/90 p-10 shadow-[0_45px_100px_rgba(15,23,42,0.08)] sm:p-12">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div className="space-y-6">
                <p className="text-sm uppercase tracking-[0.26em] text-indigo-600">About TruePath</p>
                <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                  A smarter way to track spending and save with confidence.
                </h2>
                <p className="max-w-2xl text-lg leading-8 text-slate-600">
                  TruePath brings your finances into one elegant view, with powerful tools for budgeting, account monitoring, and personal finance insights.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="rounded-[28px] bg-slate-950 p-6 text-white shadow-xl shadow-slate-950/15">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Built for growth</p>
                  <p className="mt-4 text-xl font-semibold">Keep your cash flow predictable, wherever you bank.</p>
                </div>
                <div className="rounded-[28px] bg-slate-50 p-6 text-slate-950 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Focus on what matters</p>
                  <p className="mt-4 text-xl font-semibold">Spend less time on spreadsheets and more on planning.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="services">
          <Features />
        </section>
        <section id="tools">
          <CTA />
        </section>
        <section id="blog" className="mx-auto max-w-7xl px-6 pb-24 md:px-8">
          <div className="rounded-[32px] border border-white/80 bg-white/90 p-10 shadow-[0_45px_100px_rgba(15,23,42,0.08)] sm:p-12">
            <div className="space-y-6 text-center">
              <p className="text-sm uppercase tracking-[0.26em] text-indigo-600">Insights</p>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Latest financial wellness stories
              </h2>
              <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-600">
                Read how modern teams optimize spending, direct savings, and stay ahead with smarter money workflows.
              </p>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {[
                { title: 'Smart Spending Strategies', description: 'Learn how to optimize your monthly outflows with automated tracking and data-backed alerts.' },
                { title: 'Budget Planning Made Easy', description: 'Create budgets that move with your goals while keeping every account in sync.' },
                { title: 'Team Finance Efficiency', description: 'See how businesses organize multi-account workflows for fast, reliable cash oversight.' },
              ].map((item) => (
                <div key={item.title} className="rounded-[28px] border border-slate-200/80 bg-white p-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
                  <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-4 text-base leading-7 text-slate-600">{item.description}</p>
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
