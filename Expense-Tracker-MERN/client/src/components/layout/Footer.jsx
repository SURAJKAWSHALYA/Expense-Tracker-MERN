export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-7xl px-6 pb-12 pt-10 md:px-8">
      <div className="rounded-[32px] border border-white/80 bg-white/85 p-8 text-slate-700 shadow-[0_32px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-slate-400">Ready to get started?</p>
            <p className="mt-3 text-2xl font-semibold text-slate-950">Build smarter financial habits with TruePath.</p>
          </div>
          <button type="button" className="inline-flex items-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-slate-950/15 hover:bg-slate-900">
            Start free trial
          </button>
        </div>
      </div>
    </footer>
  );
}
