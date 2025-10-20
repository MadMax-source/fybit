'use client';

import { Card } from './Card';

export function OrderBook() {
  const asks = [
    { price: 43255.50, amount: 0.5234, total: 22634.52 },
    { price: 43254.00, amount: 1.2341, total: 53392.34 },
    { price: 43252.50, amount: 0.8765, total: 37907.44 },
    { price: 43251.00, amount: 2.3456, total: 101458.06 },
    { price: 43250.00, amount: 0.6543, total: 28302.08 },
  ];

  const bids = [
    { price: 43249.00, amount: 1.5678, total: 67802.82 },
    { price: 43248.00, amount: 0.9876, total: 42710.50 },
    { price: 43247.00, amount: 2.1234, total: 91828.52 },
    { price: 43246.00, amount: 0.7654, total: 33104.08 },
    { price: 43245.00, amount: 1.4321, total: 61934.25 },
  ];

  return (
    <Card padding={false} className="h-[400px] flex flex-col">
      <div className="p-3 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Order Book</h3>
      </div>

      <div className="flex-1 overflow-auto">
        <div className="grid grid-cols-3 gap-2 px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">
          <div>Price (USDT)</div>
          <div className="text-right">Amount (BTC)</div>
          <div className="text-right">Total</div>
        </div>

        <div className="px-3">
          {asks.reverse().map((ask, i) => (
            <div key={i} className="grid grid-cols-3 gap-2 py-1 text-xs hover:bg-gray-50 dark:hover:bg-gray-800/50">
              <div className="text-red-600 font-medium">{ask.price.toLocaleString()}</div>
              <div className="text-right text-gray-700 dark:text-gray-300">{ask.amount.toFixed(4)}</div>
              <div className="text-right text-gray-600 dark:text-gray-400">{ask.total.toLocaleString()}</div>
            </div>
          ))}

          <div className="py-2 my-1 border-y border-gray-200 dark:border-gray-700">
            <div className="text-lg font-bold text-green-600 text-center">43,250.50</div>
          </div>

          {bids.map((bid, i) => (
            <div key={i} className="grid grid-cols-3 gap-2 py-1 text-xs hover:bg-gray-50 dark:hover:bg-gray-800/50">
              <div className="text-green-600 font-medium">{bid.price.toLocaleString()}</div>
              <div className="text-right text-gray-700 dark:text-gray-300">{bid.amount.toFixed(4)}</div>
              <div className="text-right text-gray-600 dark:text-gray-400">{bid.total.toLocaleString()}</div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
