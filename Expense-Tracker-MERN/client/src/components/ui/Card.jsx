export default function Card({ className = '', children }) {
  return (
    <div className={`rounded-[28px] border border-white/80 bg-white/90 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.09)] ${className}`}>
      {children}
    </div>
  );
}
