import { useState } from 'react';
import clsx from 'clsx';
import { Eye, EyeOff } from 'lucide-react';

export default function Input({
  label,
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  error,
  rightElement,
  autoComplete,
  className = '',
  ...props
}) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';
  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className={clsx('flex flex-col gap-1.5', className)}>
      {label && (
        <label htmlFor={name} className="text-sm font-medium text-slate-300">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          id={name}
          name={name}
          type={inputType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className={clsx(
            'w-full rounded-xl border bg-slate-900/50 px-4 py-3 text-sm text-white transition-all outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-[#020617]',
            error 
              ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20' 
              : 'border-white/10 hover:border-white/20 focus:border-yellow-400 focus:ring-yellow-400/20',
            (isPassword || rightElement) && 'pr-12'
          )}
          {...props}
        />
        
        {isPassword && !rightElement && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1.5 text-slate-400 transition hover:bg-white/10 hover:text-white"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}

        {rightElement && !isPassword && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            {rightElement}
          </div>
        )}
      </div>
      
      {error && (
        <p className="mt-1 text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}
