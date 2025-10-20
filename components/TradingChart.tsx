'use client';

import { useState } from 'react';
import { Card } from './Card';

export function TradingChart({ market }: { market: string }) {
  const [timeframe, setTimeframe] = useState('1h');

  const timeframes = ['1m', '5m', '15m', '1h', '4h', '1D'];

  return (
    <Card padding={false} className="h-[500px] flex flex-col">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">{market}</h3>
          <div className="text-2xl font-bold text-green-600 mt-1">$43,250.50</div>
          <div className="text-sm text-green-600">+$1,052.50 (+2.50%)</div>
        </div>

        <div className="flex space-x-2">
          {timeframes.map((tf) => (
            <button
              key={tf}
              onClick={() => setTimeframe(tf)}
              className={`px-3 py-1 text-sm rounded transition-colors ${
                timeframe === tf
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {tf}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center bg-gray-50 dark:bg-gray-900/50">
        <div className="text-center text-gray-500 dark:text-gray-400">
          <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
          </svg>
          <p className="text-sm">TradingView Chart Placeholder</p>
          <p className="text-xs mt-1">Chart integration coming soon</p>
        </div>
      </div>
    </Card>
  );
}
