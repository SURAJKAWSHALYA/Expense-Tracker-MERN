import { useState } from 'react';
import { Link } from 'react-router-dom';
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

  // Simple password strength hint
  const getPasswordStrength = (password) => {
    if (!password) return null;
    if (password.length < 6) return { text: 'Weak', color: 'text-red-400' };
    if (password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password)) {
      return { text: 'Strong', color: 'text-emerald-400' };
    }
    return { text: 'Good', color: 'text-amber-400' };
  };

  const strength = getPasswordStrength(formData.password);

  const validate = () => {
    const newErrors = {};
    
    if (!formData.name) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

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
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    if (!formData.termsAccepted) {
      newErrors.termsAccepted = 'You must accept the terms and conditions';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
    
    // Clear error when user starts typing/interacting
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validate()) {
      setLoading(true);
      // Simulate API call
      setTimeout(() => {
        console.log('Register Form Data:', formData);
        setLoading(false);
      }, 1500);
    }
  };

  return (
    <AuthLayout 
      title="Create an account" 
      subtitle="Join us to start managing your finances effectively."
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
            <p className="mt-1.5 text-xs text-slate-400">
              Password strength:{' '}
              <span className={`font-medium ${strength.color}`}>
                {strength.text}
              </span>
            </p>
          )}
        </div>

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

        <div className="mt-2 flex flex-col gap-1">
          <label className="flex items-start gap-2 cursor-pointer">
            <input 
              type="checkbox" 
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              className="mt-1 rounded border-white/20 bg-slate-900/50 text-yellow-400 focus:ring-yellow-400/20"
            />
            <span className="text-sm text-slate-400">
              I agree to the{' '}
              <a href="#" className="font-medium text-yellow-400 hover:text-yellow-300">Terms of Service</a>
              {' '}and{' '}
              <a href="#" className="font-medium text-yellow-400 hover:text-yellow-300">Privacy Policy</a>
            </span>
          </label>
          {errors.termsAccepted && (
            <p className="text-xs text-red-400">{errors.termsAccepted}</p>
          )}
        </div>

        <Button 
          type="submit" 
          variant="primary" 
          className="mt-4 w-full py-3.5" 
          loading={loading}
        >
          Create account
        </Button>
      </form>

      <p className="mt-8 text-center text-sm text-slate-400">
        Already have an account?{' '}
        <Link 
          to="/login" 
          className="font-semibold text-yellow-400 hover:text-yellow-300 transition-colors"
        >
          Sign in instead
        </Link>
      </p>
    </AuthLayout>
  );
}