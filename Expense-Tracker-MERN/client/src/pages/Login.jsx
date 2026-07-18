import { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validate()) {
      setLoading(true);
      setTimeout(() => {
        console.log('Login Form Data:', formData);
        setLoading(false);
      }, 1500);
    }
  };

  return (
    <AuthLayout 
      title="Welcome back" 
      subtitle="Enter your details to access your account."
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
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

        <div className="flex flex-col gap-2">
          <Input
            label="Password"
            name="password"
            type="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
            autoComplete="current-password"
          />
          <div className="flex items-center justify-between mt-1 text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="checkbox" 
                className="rounded border-slate-300 dark:border-white/20 bg-slate-50 dark:bg-slate-900/50 text-indigo-600 dark:text-yellow-400 focus:ring-indigo-600/20 dark:focus:ring-yellow-400/20"
              />
              <span className="text-slate-700 dark:text-slate-400 transition-colors">Remember me</span>
            </label>
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-700 dark:text-yellow-400 dark:hover:text-yellow-300 transition-colors">
              Forgot password?
            </a>
          </div>
        </div>

        <Button 
          type="submit" 
          variant="primary" 
          className="mt-2 w-full py-3.5" 
          loading={loading}
        >
          Sign in to your account
        </Button>
      </form>

      <p className="mt-8 text-center text-sm text-slate-700 dark:text-slate-400 transition-colors">
        Don't have an account?{' '}
        <Link 
          to="/register" 
          className="font-semibold text-indigo-600 hover:text-indigo-700 dark:text-yellow-400 dark:hover:text-yellow-300 transition-colors"
        >
          Sign up for free
        </Link>
      </p>
    </AuthLayout>
  );
}