import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

export default function SignUpPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
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
    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/');
    }, 1000);
  };

  const handleGoogleSignIn = () => {
    console.log('Google sign in');
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Image */}
      <div className="w-1/2 bg-[#CBE4E8] flex items-center justify-center p-16">
        <div className="max-w-lg">
          <div className="text-9xl">🛒</div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-1/2 flex items-center justify-center p-16">
        <div className="w-full max-w-md space-y-12">
          <div className="space-y-6">
            <h1 className="text-4xl font-medium text-black">Create an account</h1>
            <p className="text-base text-black">Enter your details below</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-10">
            <Input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              error={errors.name}
            />

            <Input
              type="email"
              placeholder="Email or Phone Number"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              error={errors.email}
            />

            <Input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              error={errors.password}
            />

            <Button
              type="submit"
              variant="primary"
              fullWidth
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Creating Account...' : 'Create Account'}
            </Button>

            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="w-full py-4 border-2 border-[#E5E5E5] rounded flex items-center justify-center gap-4 hover:bg-[#F5F5F5] transition-colors"
            >
              <img src="./assets/icons/google.svg" alt="" className="w-6 h-6" />
              <span className="text-base">Sign up with Google</span>
            </button>

            <p className="text-center text-base text-[#7D8184]">
              Already have account?{' '}
              <Link to="/login" className="text-black font-medium border-b-2 border-black hover:opacity-70 transition-opacity">
                Log in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
