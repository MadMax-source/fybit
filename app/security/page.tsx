'use client';

import { useState } from 'react';
import { DashboardNav } from '@/components/DashboardNav';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';

export default function SecurityPage() {
  const [twoFaEnabled, setTwoFaEnabled] = useState(false);
  const [showQR, setShowQR] = useState(false);

  const sessions = [
    { id: '1', device: 'Chrome on Windows', location: 'New York, US', ip: '192.168.1.1', lastActive: '2 minutes ago', current: true },
    { id: '2', device: 'Safari on iPhone', location: 'New York, US', ip: '192.168.1.2', lastActive: '1 hour ago', current: false },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <DashboardNav />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Security</h1>

        <div className="space-y-6">
          <Card>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Two-Factor Authentication (2FA)
            </h2>

            {!twoFaEnabled ? (
              <div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Add an extra layer of security to your account by enabling 2FA.
                </p>
                <Button onClick={() => setShowQR(true)}>
                  Enable 2FA
                </Button>

                {showQR && (
                  <div className="mt-6 p-6 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                      Scan QR Code with Google Authenticator
                    </h3>

                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-4 flex items-center justify-center">
                      <div className="w-48 h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500">
                        QR Code
                      </div>
                    </div>

                    <Input
                      label="Enter 6-digit code"
                      placeholder="000000"
                      maxLength={6}
                    />

                    <div className="mt-4 flex space-x-2">
                      <Button onClick={() => {
                        setTwoFaEnabled(true);
                        setShowQR(false);
                      }}>
                        Verify & Enable
                      </Button>
                      <Button variant="secondary" onClick={() => setShowQR(false)}>
                        Cancel
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-semibold rounded-full">
                    ✓ Enabled
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  2FA is currently active on your account.
                </p>
                <Button variant="danger" onClick={() => setTwoFaEnabled(false)}>
                  Disable 2FA
                </Button>
              </div>
            )}
          </Card>

          <Card>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Change Password
            </h2>

            <div className="space-y-4 max-w-md">
              <Input
                label="Current Password"
                type="password"
                placeholder="Enter current password"
              />

              <Input
                label="New Password"
                type="password"
                placeholder="Enter new password"
              />

              <Input
                label="Confirm New Password"
                type="password"
                placeholder="Confirm new password"
              />

              <Button>
                Update Password
              </Button>
            </div>
          </Card>

          <Card>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Active Sessions
            </h2>

            <div className="space-y-4">
              {sessions.map((session) => (
                <div
                  key={session.id}
                  className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg"
                >
                  <div>
                    <div className="flex items-center space-x-2">
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {session.device}
                      </div>
                      {session.current && (
                        <span className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-semibold rounded">
                          Current
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {session.location} • {session.ip}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                      Last active: {session.lastActive}
                    </div>
                  </div>
                  {!session.current && (
                    <Button size="sm" variant="secondary">
                      Revoke
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
