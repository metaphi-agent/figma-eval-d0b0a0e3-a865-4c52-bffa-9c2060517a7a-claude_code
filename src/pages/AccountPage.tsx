import { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

export default function AccountPage() {
  const [formData, setFormData] = useState({
    firstName: 'Md',
    lastName: 'Rimel',
    email: 'rimel1111@gmail.com',
    address: 'Kingston, 5236, United State',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Changes saved!');
  };

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-[1170px] mx-auto px-4">
        {/* Breadcrumb */}
        <div className="text-sm text-[#7D8184] mb-12 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/" className="hover:text-black">Home</Link>
            <span>/</span>
            <span className="text-black">My Account</span>
          </div>
          <span>Welcome! <span className="text-[#DB4444]">Md Rimel</span></span>
        </div>

        {/* Account Content */}
        <div className="grid grid-cols-4 gap-16">
          {/* Sidebar */}
          <div className="col-span-1 space-y-6">
            <div>
              <h3 className="font-medium mb-4">Manage My Account</h3>
              <nav className="pl-8 space-y-2 text-[#7D8184]">
                <Link to="/account" className="block text-[#DB4444]">My Profile</Link>
                <Link to="/account" className="block hover:text-black">Address Book</Link>
                <Link to="/account" className="block hover:text-black">My Payment Options</Link>
              </nav>
            </div>
            <div>
              <h3 className="font-medium mb-4">My Orders</h3>
              <nav className="pl-8 space-y-2 text-[#7D8184]">
                <Link to="/account" className="block hover:text-black">My Returns</Link>
                <Link to="/account" className="block hover:text-black">My Cancellations</Link>
              </nav>
            </div>
            <div>
              <h3 className="font-medium">My WishList</h3>
            </div>
          </div>

          {/* Profile Form */}
          <div className="col-span-3 shadow-sm rounded p-20">
            <h2 className="text-xl font-medium text-[#DB4444] mb-6">Edit Your Profile</h2>

            <form onSubmit={handleSave} className="space-y-6">
              <div className="grid grid-cols-2 gap-12">
                <Input
                  label="First Name"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
                <Input
                  label="Last Name"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-12">
                <Input
                  label="Email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <Input
                  label="Address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                />
              </div>

              <div className="space-y-4 pt-4">
                <Input
                  label="Password Changes"
                  type="password"
                  placeholder="Current Password"
                  value={formData.currentPassword}
                  onChange={(e) => setFormData({ ...formData, currentPassword: e.target.value })}
                />
                <Input
                  type="password"
                  placeholder="New Password"
                  value={formData.newPassword}
                  onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
                />
                <Input
                  type="password"
                  placeholder="Confirm New Password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                />
              </div>

              <div className="flex justify-end gap-8 pt-4">
                <button type="button" className="text-base hover:underline">
                  Cancel
                </button>
                <Button type="submit" variant="primary">
                  Save Changes
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
