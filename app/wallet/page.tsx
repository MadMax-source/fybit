'use client';

import { useState } from 'react';
import { DashboardNav } from '@/components/DashboardNav';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';

export default function WalletPage() {
  const [activeTab, setActiveTab] = useState<'deposit' | 'withdraw' | 'history'>('deposit');
  const [selectedCurrency, setSelectedCurrency] = useState('BTC');

  const balances = [
    { currency: 'BTC', balance: 0.00000, usdValue: 0.00 },
    { currency: 'ETH', balance: 0.00000, usdValue: 0.00 },
    { currency: 'USDT', balance: 0.00, usdValue: 0.00 },
  ];

  const transactions = [
    { id: '1', type: 'deposit', currency: 'BTC', amount: 0.5, status: 'completed', time: '2025-10-18 10:30', txHash: '0xabc123...' },
    { id: '2', type: 'withdraw', currency: 'USDT', amount: 1000, status: 'pending', time: '2025-10-18 09:15', txHash: null },
    { id: '3', type: 'trade_fee', currency: 'USDT', amount: -5.25, status: 'completed', time: '2025-10-18 08:45', txHash: null },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <DashboardNav />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Wallet</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {balances.map((balance) => (
            <Card key={balance.currency}>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{balance.currency}</h3>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
                    {balance.balance.toFixed(balance.currency === 'USDT' ? 2 : 5)}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    ≈ ${balance.usdValue.toFixed(2)}
                  </div>
                </div>
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 font-bold">
                  {balance.currency[0]}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card>
          <div className="flex space-x-4 mb-6 border-b border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setActiveTab('deposit')}
              className={`px-4 py-2 font-medium transition-colors ${
                activeTab === 'deposit'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Deposit
            </button>
            <button
              onClick={() => setActiveTab('withdraw')}
              className={`px-4 py-2 font-medium transition-colors ${
                activeTab === 'withdraw'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Withdraw
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`px-4 py-2 font-medium transition-colors ${
                activeTab === 'history'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              History
            </button>
          </div>

          {activeTab === 'deposit' && (
            <div className="max-w-2xl">
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Select Currency
                </label>
                <div className="flex space-x-2">
                  {['BTC', 'ETH', 'USDT'].map((currency) => (
                    <button
                      key={currency}
                      onClick={() => setSelectedCurrency(currency)}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        selectedCurrency === currency
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      {currency}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                  Deposit Address
                </h3>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-4 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500">
                    QR Code
                  </div>
                </div>

                <div className="flex items-center space-x-2 mb-4">
                  <input
                    type="text"
                    value="1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"
                    readOnly
                    className="flex-1 px-3 py-2 border rounded-lg bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm"
                  />
                  <Button size="sm">Copy</Button>
                </div>

                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <p>• Minimum deposit: 0.0001 BTC</p>
                  <p>• Confirmations required: 3</p>
                  <p>• Estimated arrival time: 10-30 minutes</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'withdraw' && (
            <div className="max-w-2xl">
              <div className="mb-6 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg">
                <p className="text-sm text-amber-800 dark:text-amber-400">
                  Withdrawals require 2FA verification and KYC completion
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Select Currency
                  </label>
                  <select
                    value={selectedCurrency}
                    onChange={(e) => setSelectedCurrency(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                  >
                    <option value="BTC">BTC</option>
                    <option value="ETH">ETH</option>
                    <option value="USDT">USDT</option>
                  </select>
                </div>

                <Input
                  label="Destination Address"
                  placeholder="Enter withdrawal address"
                />

                <Input
                  label="Amount"
                  type="number"
                  placeholder="Enter amount"
                />

                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Available: 0.00000 {selectedCurrency}
                </div>

                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 space-y-2 text-sm">
                  <div className="flex justify-between text-gray-700 dark:text-gray-300">
                    <span>Network Fee:</span>
                    <span className="font-semibold">0.0005 BTC</span>
                  </div>
                  <div className="flex justify-between text-gray-700 dark:text-gray-300">
                    <span>You will receive:</span>
                    <span className="font-semibold">-- BTC</span>
                  </div>
                </div>

                <Button className="w-full" disabled>
                  Request Withdrawal
                </Button>
              </div>
            </div>
          )}

          {activeTab === 'history' && (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700">
                  <tr className="text-sm text-gray-600 dark:text-gray-400">
                    <th className="text-left p-3">Type</th>
                    <th className="text-left p-3">Currency</th>
                    <th className="text-right p-3">Amount</th>
                    <th className="text-left p-3">Status</th>
                    <th className="text-left p-3">Time</th>
                    <th className="text-left p-3">TX Hash</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((tx) => (
                    <tr key={tx.id} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                      <td className="p-3 text-gray-700 dark:text-gray-300 capitalize">{tx.type.replace('_', ' ')}</td>
                      <td className="p-3 font-semibold text-gray-900 dark:text-white">{tx.currency}</td>
                      <td className={`p-3 text-right font-semibold ${tx.amount < 0 ? 'text-red-600' : 'text-green-600'}`}>
                        {tx.amount > 0 ? '+' : ''}{tx.amount}
                      </td>
                      <td className="p-3">
                        <span className={`px-2 py-1 text-xs font-semibold rounded ${
                          tx.status === 'completed'
                            ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                            : tx.status === 'pending'
                            ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400'
                            : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                        }`}>
                          {tx.status}
                        </span>
                      </td>
                      <td className="p-3 text-gray-600 dark:text-gray-400 text-sm">{tx.time}</td>
                      <td className="p-3 text-blue-600 text-sm font-mono">
                        {tx.txHash || '--'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
