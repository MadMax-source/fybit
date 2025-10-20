'use client';

import { DashboardNav } from '@/components/DashboardNav';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';

export default function AffiliatePage() {
  const referralCode = 'FYBIT-ABC123';
  const referralLink = `https://fybit.com/signup?ref=${referralCode}`;

  const stats = {
    totalReferrals: 24,
    totalEarnings: 1250.50,
    monthEarnings: 320.75,
  };

  const referrals = [
    { id: '1', username: 'user***1', signupDate: '2025-10-15', volume: 5000, commission: 50.00 },
    { id: '2', username: 'user***2', signupDate: '2025-10-14', volume: 3200, commission: 32.00 },
    { id: '3', username: 'user***3', signupDate: '2025-10-12', volume: 8500, commission: 85.00 },
  ];

  const payouts = [
    { id: '1', date: '2025-10-01', amount: 450.25, status: 'completed' },
    { id: '2', date: '2025-09-01', amount: 380.50, status: 'completed' },
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    alert('Referral link copied!');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <DashboardNav />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Affiliate Program</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <h3 className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-2">Total Referrals</h3>
            <div className="text-3xl font-bold text-gray-900 dark:text-white">{stats.totalReferrals}</div>
          </Card>
          <Card>
            <h3 className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-2">Total Earnings</h3>
            <div className="text-3xl font-bold text-green-600">${stats.totalEarnings.toFixed(2)}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">USDT</div>
          </Card>
          <Card>
            <h3 className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-2">This Month</h3>
            <div className="text-3xl font-bold text-blue-600">${stats.monthEarnings.toFixed(2)}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">USDT</div>
          </Card>
        </div>

        <Card className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Your Referral Link</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Share your unique referral link and earn up to 30% commission on your referrals&apos; trading fees.
          </p>

          <div className="flex items-center space-x-2 mb-6">
            <input
              type="text"
              value={referralLink}
              readOnly
              className="flex-1 px-4 py-3 border rounded-lg bg-gray-50 dark:bg-gray-900/50 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white font-mono text-sm"
            />
            <Button onClick={copyToClipboard}>Copy Link</Button>
          </div>

          <div className="flex items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 dark:bg-gray-700 mx-auto mb-4 flex items-center justify-center text-gray-500">
                QR Code
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Scan to share</p>
            </div>
          </div>
        </Card>

        <Card className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Commission Structure</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700">
                <tr className="text-sm text-gray-600 dark:text-gray-400">
                  <th className="text-left p-3">Referral Tier</th>
                  <th className="text-right p-3">Commission Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <td className="p-3 text-gray-700 dark:text-gray-300">Standard (0-10 referrals)</td>
                  <td className="p-3 text-right font-semibold text-gray-900 dark:text-white">20%</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <td className="p-3 text-gray-700 dark:text-gray-300">Silver (11-50 referrals)</td>
                  <td className="p-3 text-right font-semibold text-gray-900 dark:text-white">25%</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <td className="p-3 text-gray-700 dark:text-gray-300">Gold (51+ referrals)</td>
                  <td className="p-3 text-right font-semibold text-gray-900 dark:text-white">30%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        <Card className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Your Referrals</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700">
                <tr className="text-sm text-gray-600 dark:text-gray-400">
                  <th className="text-left p-3">User</th>
                  <th className="text-left p-3">Signup Date</th>
                  <th className="text-right p-3">Trading Volume</th>
                  <th className="text-right p-3">Your Commission</th>
                </tr>
              </thead>
              <tbody>
                {referrals.map((referral) => (
                  <tr key={referral.id} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td className="p-3 font-mono text-gray-700 dark:text-gray-300">{referral.username}</td>
                    <td className="p-3 text-gray-700 dark:text-gray-300">{referral.signupDate}</td>
                    <td className="p-3 text-right text-gray-700 dark:text-gray-300">${referral.volume.toLocaleString()}</td>
                    <td className="p-3 text-right font-semibold text-green-600">${referral.commission.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Payout History</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700">
                <tr className="text-sm text-gray-600 dark:text-gray-400">
                  <th className="text-left p-3">Date</th>
                  <th className="text-right p-3">Amount</th>
                  <th className="text-left p-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {payouts.map((payout) => (
                  <tr key={payout.id} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td className="p-3 text-gray-700 dark:text-gray-300">{payout.date}</td>
                    <td className="p-3 text-right font-semibold text-gray-900 dark:text-white">${payout.amount.toFixed(2)}</td>
                    <td className="p-3">
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold rounded">
                        {payout.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}
