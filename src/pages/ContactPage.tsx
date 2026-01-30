import { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-[1170px] mx-auto px-4">
        {/* Breadcrumb */}
        <div className="text-sm text-[#7D8184] mb-20 flex items-center gap-2">
          <Link to="/" className="hover:text-black">Home</Link>
          <span>/</span>
          <span className="text-black">Contact</span>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="col-span-1 space-y-8 shadow-md rounded p-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#DB4444] rounded-full flex items-center justify-center">
                  <img src="./assets/icons/phone.svg" alt="" className="w-6 h-6 brightness-0 invert" />
                </div>
                <span className="text-base font-medium">Call To Us</span>
              </div>
              <div className="space-y-4 text-sm">
                <p>We are available 24/7, 7 days a week.</p>
                <p className="font-medium">Phone: +8801611112222</p>
              </div>
            </div>

            <div className="border-t border-[#E5E5E5] pt-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#DB4444] rounded-full flex items-center justify-center">
                  <img src="./assets/icons/email.svg" alt="" className="w-6 h-6 brightness-0 invert" />
                </div>
                <span className="text-base font-medium">Write To US</span>
              </div>
              <div className="space-y-4 text-sm">
                <p>Fill out our form and we will contact you within 24 hours.</p>
                <p className="font-medium">Emails: customer@exclusive.com</p>
                <p className="font-medium">Emails: support@exclusive.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-span-2 shadow-md rounded p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-3 gap-4">
                <Input
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <Input
                  type="email"
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
                <Input
                  type="tel"
                  placeholder="Your Phone *"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>

              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full h-52 px-4 py-3 bg-[#F5F5F5] border-0 text-black text-base placeholder:text-[#7D8184] focus:outline-none focus:ring-2 focus:ring-[#DB4444] focus:bg-white transition-colors resize-none"
                required
              />

              <div className="flex justify-end">
                <Button type="submit" variant="primary" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
