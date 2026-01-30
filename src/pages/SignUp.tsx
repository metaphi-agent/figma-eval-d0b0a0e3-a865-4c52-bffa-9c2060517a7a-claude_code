import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

export const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    emailOrPhone: '',
    password: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.emailOrPhone.trim()) {
      newErrors.emailOrPhone = 'Email or phone number is required';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    navigate('/');
  };

  return (
    <div className="min-h-[calc(100vh-200px)] flex">
      {/* Left Image */}
      <div className="hidden lg:block w-1/2">
        <img
          src="https://images.unsplash.com/photo-1573855619003-97b4799dcd8b?w=800&h=900&fit=crop"
          alt="Shopping"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Form */}
      <div className="flex-1 flex items-center justify-center px-8 py-20">
        <div className="w-full max-w-[371px]">
          <h1 className="text-4xl font-medium tracking-wider mb-6">Create an account</h1>
          <p className="text-base mb-12">Enter your details below</p>

          <form onSubmit={handleSubmit} className="space-y-10">
            <Input
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
            />
            <Input
              name="emailOrPhone"
              placeholder="Email or Phone Number"
              value={formData.emailOrPhone}
              onChange={handleChange}
              error={errors.emailOrPhone}
            />
            <Input
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
            />

            <Button type="submit" fullWidth disabled={isSubmitting}>
              {isSubmitting ? 'Creating Account...' : 'Create Account'}
            </Button>

            <button
              type="button"
              className="w-full py-4 border border-gray-300 rounded flex items-center justify-center gap-4 hover:bg-gray-50 transition-colors"
            >
              <img src="./assets/icons/google.svg" alt="Google" className="w-6 h-6" />
              <span>Sign up with Google</span>
            </button>
          </form>

          <p className="text-center mt-8 text-text-2">
            Already have account?{' '}
            <Link to="/login" className="text-black underline font-medium">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
