import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AuthLayout from '../layouts/AuthLayout';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false,
  });
  
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const getPasswordStrength = (password) => {
    if (!password) return null;
    if (password.length < 6) return { text: 'Weak', color: 'text-red-500 dark:text-red-400' };
    if (password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password)) {
      return { text: 'Strong', color: 'text-emerald-500 dark:text-emerald-400' };
    }
    return { text: 'Good', color: 'text-amber-500 dark:text-amber-400' };
  };

  const strength = getPasswordStrength(formData.password);

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    else if (formData.name.trim().length < 2) newErrors.name = 'Name must be at least 2 characters';

    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    
    if (!formData.termsAccepted) newErrors.termsAccepted = 'You must accept the terms and conditions';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);
      setTimeout(() => {
        console.log('Register Form Data:', formData);
        setLoading(false);
      }, 1500);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <AuthLayout 
      title="Create an account" 
      subtitle="Join us to start managing your finances effectively."
    >
      <motion.div 
        variants={containerVariants} 
        initial="hidden" 
        animate="show" 
        className="flex flex-col gap-3"
      >
        {/* Social Logins */}
        <div className="flex flex-col sm:flex-row gap-2">
          <motion.div variants={itemVariants} className="flex-1">
            <button type="button" className="w-full flex items-center justify-center gap-2 rounded-xl border border-slate-300 dark:border-white/10 bg-white dark:bg-slate-900/50 px-4 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm">
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Google
            </button>
          </motion.div>
          <motion.div variants={itemVariants} className="flex-1">
            <button type="button" className="w-full flex items-center justify-center gap-2 rounded-xl border border-slate-300 dark:border-white/10 bg-white dark:bg-slate-900/50 px-4 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm">
              <svg className="h-5 w-5 dark:fill-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.26-.74 3.58-.8 1.58.07 2.87.69 3.78 1.83-3.27 1.95-2.73 6.43.51 7.73-.66 1.67-1.55 3.3-2.95 3.41zm-2.85-13.62c-.74.92-1.79 1.48-2.85 1.44-.2-1.25.35-2.42 1.05-3.25.75-.92 1.89-1.53 2.97-1.48.24 1.25-.43 2.37-1.17 3.29z" />
              </svg>
              Apple
            </button>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="flex items-center gap-4 py-0">
          <div className="flex-1 h-px bg-slate-200 dark:bg-white/10"></div>
          <span className="text-xs text-slate-500 font-medium">OR</span>
          <div className="flex-1 h-px bg-slate-200 dark:bg-white/10"></div>
        </motion.div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Input
              label="Full Name"
              name="name"
              type="text"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
              autoComplete="name"
            />
            <Input
              label="Email address"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              autoComplete="email"
            />
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <Input
                label="Password"
                name="password"
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                error={errors.password}
                autoComplete="new-password"
              />
              {strength && !errors.password && (
                <p className="mt-1.5 text-[11px] text-slate-700 dark:text-slate-400">
                  Strength:{' '}
                  <span className={`font-medium ${strength.color}`}>
                    {strength.text}
                  </span>
                </p>
              )}
            </div>
            <div>
              <Input
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
                error={errors.confirmPassword}
                autoComplete="new-password"
              />
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-1 flex flex-col gap-0.5">
            <label className="flex items-start gap-2 cursor-pointer">
              <input 
                type="checkbox" 
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                className="mt-1 rounded border-indigo-200 dark:border-white/20 bg-slate-50 dark:bg-slate-900/50 text-indigo-600 dark:text-yellow-400 focus:ring-indigo-600/20 dark:focus:ring-yellow-400/20"
              />
              <span className="text-sm text-slate-700 dark:text-slate-400 transition-colors">
                I agree to the{' '}
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-700 dark:text-yellow-400 dark:hover:text-yellow-300">Terms of Service</a>
                {' '}and{' '}
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-700 dark:text-yellow-400 dark:hover:text-yellow-300">Privacy Policy</a>
              </span>
            </label>
            {errors.termsAccepted && (
              <p className="text-xs text-red-500 dark:text-red-400">{errors.termsAccepted}</p>
            )}
          </motion.div>

          <motion.div variants={itemVariants}>
            <Button 
              type="submit" 
              variant="primary" 
              className="mt-1 w-full py-2.5" 
              loading={loading}
            >
              Create account
            </Button>
          </motion.div>
        </form>

        <motion.p variants={itemVariants} className="mt-1 text-center text-sm text-slate-700 dark:text-slate-400 transition-colors">
          Already have an account?{' '}
          <Link 
            to="/login" 
            className="font-semibold text-indigo-600 hover:text-indigo-700 dark:text-yellow-400 dark:hover:text-yellow-300 transition-colors"
          >
            Sign in instead
          </Link>
        </motion.p>
      </motion.div>
    </AuthLayout>
  );
}