'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      category: 'Getting Started',
      questions: [
        { q: 'How do I create an account?', a: 'Click the Sign Up button, enter your email and password, verify your email, and complete KYC verification to start trading.' },
        { q: 'What documents do I need for KYC?', a: 'You need a valid government-issued ID (passport, driver\'s license, or national ID) and a selfie for verification.' },
        { q: 'How long does verification take?', a: 'KYC verification typically takes 1-24 hours. You will be notified via email once approved.' },
      ]
    },
    {
      category: 'Trading',
      questions: [
        { q: 'What is leverage trading?', a: 'Leverage allows you to trade with borrowed funds, amplifying both potential gains and losses. FYBIT offers up to 100× leverage.' },
        { q: 'What markets can I trade?', a: 'You can trade BTC, ETH, and other major cryptocurrencies with USDT or BTC as collateral.' },
        { q: 'What are the trading fees?', a: 'Fees start at 0.02% for makers and 0.04% for takers, with discounts for high-volume traders.' },
      ]
    },
    {
      category: 'Deposits & Withdrawals',
      questions: [
        { q: 'How do I deposit funds?', a: 'Go to Wallet, select Deposit, choose your currency, and send funds to the provided address. Wait for blockchain confirmations.' },
        { q: 'Are there deposit fees?', a: 'No, all deposits are free. You only pay network transaction fees.' },
        { q: 'How long do withdrawals take?', a: 'Withdrawals are processed within 24 hours after security checks. Blockchain confirmation times vary.' },
        { q: 'Why is my withdrawal pending?', a: 'Withdrawals require 2FA verification and may undergo additional security checks for large amounts.' },
      ]
    },
    {
      category: 'Security',
      questions: [
        { q: 'How do I enable 2FA?', a: 'Go to Security settings, click Enable 2FA, scan the QR code with Google Authenticator, and enter the verification code.' },
        { q: 'Is my money safe?', a: 'Yes. We use cold storage for the majority of funds, industry-standard encryption, and regular security audits.' },
        { q: 'What if I lose my 2FA device?', a: 'Contact support immediately with your account details and backup codes to regain access.' },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-blue-600">FYBIT</Link>
            <Link href="/"><Button variant="secondary" size="sm">Back to Home</Button></Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Frequently Asked Questions</h1>

        {faqs.map((category, catIndex) => (
          <div key={catIndex} className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{category.category}</h2>
            <div className="space-y-3">
              {category.questions.map((faq, qIndex) => {
                const index = catIndex * 100 + qIndex;
                const isOpen = openIndex === index;

                return (
                  <Card key={qIndex} padding={false} className="overflow-hidden">
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full text-left p-4 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                    >
                      <span className="font-semibold text-gray-900 dark:text-white">{faq.q}</span>
                      <svg
                        className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 text-gray-600 dark:text-gray-400">
                        {faq.a}
                      </div>
                    )}
                  </Card>
                );
              })}
            </div>
          </div>
        ))}

        <Card className="mt-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Still have questions?</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">Our support team is here to help</p>
          <Link href="/contact">
            <Button>Contact Support</Button>
          </Link>
        </Card>
      </div>
    </div>
  );
}
