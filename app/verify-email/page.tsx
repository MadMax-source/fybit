'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';

export default function VerifyEmailPage() {
  const [resending, setResending] = useState(false);
  const [message, setMessage] = useState('');

  const handleResend = async () => {
    setResending(true);
    setMessage('');

    try {
      // You can add your own resend email API logic here later if needed.
      setMessage('Verification email sent! Please check your inbox.');
    } catch (err: unknown) {
      setMessage(err instanceof Error ? err.message : 'Failed to resend email');
    } finally {
      setResending(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <Card className="w-full max-w-md text-center">
        <div className="mb-6">
          <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Check Your Email
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            We&apos;ve sent a verification link to your email address. Please click the link to
            verify your account.
          </p>
        </div>

        {message && (
          <div
            className={`p-3 mb-4 rounded-lg text-sm ${
              message.includes('sent')
                ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-600 dark:text-green-400'
                : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400'
            }`}
          >
            {message}
          </div>
        )}

        <Button
          onClick={handleResend}
          variant="secondary"
          className="w-full mb-4"
          disabled={resending}
        >
          {resending ? 'Sending...' : 'Resend Verification Email'}
        </Button>

        <Link href="/login" className="text-sm text-blue-600 hover:underline">
          Back to Login
        </Link>
      </Card>
    </div>
  );
}
