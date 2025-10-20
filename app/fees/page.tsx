import Link from 'next/link';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';

export default function FeesPage() {
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
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Fee Structure</h1>

        <Card className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Trading Fees</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 text-gray-900 dark:text-white">30-Day Volume (USDT)</th>
                  <th className="text-right py-3 text-gray-900 dark:text-white">Maker Fee</th>
                  <th className="text-right py-3 text-gray-900 dark:text-white">Taker Fee</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 dark:text-gray-400">
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3">&lt; 1,000,000</td>
                  <td className="text-right">0.020%</td>
                  <td className="text-right">0.040%</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3">1,000,000 - 10,000,000</td>
                  <td className="text-right">0.015%</td>
                  <td className="text-right">0.035%</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3">10,000,000 - 50,000,000</td>
                  <td className="text-right">0.010%</td>
                  <td className="text-right">0.030%</td>
                </tr>
                <tr>
                  <td className="py-3">&gt; 50,000,000</td>
                  <td className="text-right">0.005%</td>
                  <td className="text-right">0.025%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        <Card className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Deposit & Withdrawal Fees</h2>
          <div className="space-y-3 text-gray-600 dark:text-gray-400">
            <div className="flex justify-between">
              <span>BTC Deposits</span>
              <span className="font-semibold">Free</span>
            </div>
            <div className="flex justify-between">
              <span>ETH Deposits</span>
              <span className="font-semibold">Free</span>
            </div>
            <div className="flex justify-between">
              <span>USDT Deposits</span>
              <span className="font-semibold">Free</span>
            </div>
            <div className="flex justify-between pt-3 border-t border-gray-200 dark:border-gray-700">
              <span>BTC Withdrawals</span>
              <span className="font-semibold">0.0005 BTC</span>
            </div>
            <div className="flex justify-between">
              <span>ETH Withdrawals</span>
              <span className="font-semibold">0.005 ETH</span>
            </div>
            <div className="flex justify-between">
              <span>USDT Withdrawals</span>
              <span className="font-semibold">5 USDT</span>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Affiliate Program</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Earn up to 30% commission on your referrals trading fees. Join our affiliate program and start earning passive income.
          </p>
          <Link href="/signup">
            <Button>Join Affiliate Program</Button>
          </Link>
        </Card>
      </div>
    </div>
  );
}
