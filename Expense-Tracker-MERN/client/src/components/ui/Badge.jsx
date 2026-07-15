export default function Badge({ children, className = '' }) {
  return (
    <div className={`inline-flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-slate-800 shadow-sm shadow-slate-900/5 ${className}`}>
      {children}
    </div>
  );
}
