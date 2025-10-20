import Link from 'next/link';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';

export default function AboutPage() {
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
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">About FYBIT</h1>

        <Card className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            FYBIT is a professional cryptocurrency derivatives trading platform designed to provide traders with powerful tools, competitive fees, and a secure environment for leveraged trading.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            We believe in empowering traders with institutional-grade technology while maintaining a user-friendly interface accessible to traders of all experience levels.
          </p>
        </Card>

        <Card className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Us</h2>
          <ul className="space-y-3 text-gray-600 dark:text-gray-400">
            <li>✓ Trade with leverage up to 100× on major cryptocurrencies</li>
            <li>✓ Industry-leading low fees with volume-based discounts</li>
            <li>✓ Advanced security with cold storage and 2FA</li>
            <li>✓ Lightning-fast order execution</li>
            <li>✓ 24/7 customer support</li>
            <li>✓ Competitive affiliate program</li>
          </ul>
        </Card>

        <Card>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Security First</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Your security is our top priority. We employ bank-grade security measures including cold storage for the majority of funds, mandatory 2FA for withdrawals, and regular security audits.
          </p>
        </Card>
      </div>
    </div>
  );
}
