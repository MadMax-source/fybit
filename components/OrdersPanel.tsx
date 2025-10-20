'use client';

import { Card } from './Card';
import { Button } from './Button';

const mockOrders = [
  {
    id: '1',
    market: 'BTC/USDT',
    type: 'limit',
    side: 'buy',
    price: 42500,
    amount: 0.5,
    filled: 0.2,
    status: 'open',
    time: '2025-10-18 10:30:00',
  },
];

export function OrdersPanel() {
  return (
    <Card padding={false} className="min-h-[300px]">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Open Orders</h3>
      </div>

      {mockOrders.length === 0 ? (
        <div className="p-8 text-center text-gray-500 dark:text-gray-400">
          <svg className="w-12 h-12 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          <p>No open orders</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700">
              <tr className="text-xs text-gray-600 dark:text-gray-400">
                <th className="text-left p-3">Market</th>
                <th className="text-left p-3">Type</th>
                <th className="text-left p-3">Side</th>
                <th className="text-right p-3">Price</th>
                <th className="text-right p-3">Amount</th>
                <th className="text-right p-3">Filled</th>
                <th className="text-left p-3">Time</th>
                <th className="text-right p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {mockOrders.map((order) => (
                <tr key={order.id} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="p-3 font-semibold text-gray-900 dark:text-white">{order.market}</td>
                  <td className="p-3 text-gray-700 dark:text-gray-300 capitalize">{order.type}</td>
                  <td className="p-3">
                    <span className={`px-2 py-1 text-xs font-semibold rounded ${
                      order.side === 'buy'
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                        : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                    }`}>
                      {order.side.toUpperCase()}
                    </span>
                  </td>
                  <td className="p-3 text-right text-gray-700 dark:text-gray-300">${order.price.toLocaleString()}</td>
                  <td className="p-3 text-right text-gray-700 dark:text-gray-300">{order.amount}</td>
                  <td className="p-3 text-right text-gray-700 dark:text-gray-300">{order.filled} / {order.amount}</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400 text-sm">{order.time}</td>
                  <td className="p-3 text-right">
                    <Button size="sm" variant="secondary">Cancel</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Card>
  );
}
