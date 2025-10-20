'use client';

import { useState } from 'react';
import { DashboardNav } from '@/components/DashboardNav';
import { MobileNav } from '@/components/MobileNav';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';

export default function ProfilePage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('user@example.com');
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-16 md:pb-0">
      <DashboardNav />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Profile</h1>

        <Card>
          <div className="flex items-center space-x-6 mb-8">
            <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
              U
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{fullName || 'User'}</h2>
              <p className="text-gray-600 dark:text-gray-400">{email}</p>
              <div className="mt-2">
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold rounded-full">
                  ✓ Email Verified
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Input
              label="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name"
            />

            <Input
              label="Email"
              type="email"
              value={email}
              disabled
            />

            {saved && (
              <div className="p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-600 dark:text-green-400 text-sm">
                Profile updated successfully!
              </div>
            )}

            <Button onClick={handleSave}>
              Save Changes
            </Button>
          </div>
        </Card>
      </div>
      <MobileNav />
    </div>
  );
}
