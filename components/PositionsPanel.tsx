'use client';

import { Card } from './Card';
import { Button } from './Button';

const mockPositions = [
  {
    id: '1',
    market: 'BTC/USDT',
    direction: 'long',
    entryPrice: 42800,
    currentPrice: 43250.50,
    amount: 0.5,
    leverage: 10,
    pnl: 225.25,
    pnlPercent: 5.26,
    liquidationPrice: 38520,
  },
  {
    id: '2',
    market: 'ETH/USDT',
    direction: 'short',
    entryPrice: 2320,
    currentPrice: 2280.30,
    amount: 5,
    leverage: 5,
    pnl: 198.50,
    pnlPercent: 8.56,
    liquidationPrice: 2552,
  },
];

export function PositionsPanel() {
  return (
    <Card padding={false} className="min-h-[300px]">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Open Positions</h3>
      </div>

      {mockPositions.length === 0 ? (
        <div className="p-8 text-center text-gray-500 dark:text-gray-400">
          <svg className="w-12 h-12 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <p>No open positions</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700">
              <tr className="text-xs text-gray-600 dark:text-gray-400">
                <th className="text-left p-3">Market</th>
                <th className="text-left p-3">Direction</th>
                <th className="text-right p-3">Entry Price</th>
                <th className="text-right p-3">Current Price</th>
                <th className="text-right p-3">Amount</th>
                <th className="text-right p-3">Leverage</th>
                <th className="text-right p-3">PnL</th>
                <th className="text-right p-3">Liq. Price</th>
                <th className="text-right p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {mockPositions.map((position) => (
                <tr key={position.id} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="p-3 font-semibold text-gray-900 dark:text-white">{position.market}</td>
                  <td className="p-3">
                    <span className={`px-2 py-1 text-xs font-semibold rounded ${
                      position.direction === 'long'
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                        : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                    }`}>
                      {position.direction.toUpperCase()}
                    </span>
                  </td>
                  <td className="p-3 text-right text-gray-700 dark:text-gray-300">${position.entryPrice.toLocaleString()}</td>
                  <td className="p-3 text-right text-gray-700 dark:text-gray-300">${position.currentPrice.toLocaleString()}</td>
                  <td className="p-3 text-right text-gray-700 dark:text-gray-300">{position.amount}</td>
                  <td className="p-3 text-right text-gray-700 dark:text-gray-300">{position.leverage}×</td>
                  <td className="p-3 text-right">
                    <div className={position.pnl >= 0 ? 'text-green-600' : 'text-red-600'}>
                      <div className="font-semibold">${position.pnl.toFixed(2)}</div>
                      <div className="text-xs">{position.pnl >= 0 ? '+' : ''}{position.pnlPercent.toFixed(2)}%</div>
                    </div>
                  </td>
                  <td className="p-3 text-right text-red-600 font-medium">${position.liquidationPrice.toLocaleString()}</td>
                  <td className="p-3 text-right">
                    <Button size="sm" variant="danger">Close</Button>
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
