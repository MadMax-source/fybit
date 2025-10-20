'use client';

import { useState } from 'react';
import { Card } from './Card';
import { Button } from './Button';
import { Input } from './Input';

export function OrderEntry({ market }: { market: string }) {
  const [orderType, setOrderType] = useState<'market' | 'limit'>('limit');
  const [side, setSide] = useState<'buy' | 'sell'>('buy');
  const [leverage, setLeverage] = useState(10);
  const [amount, setAmount] = useState('');
  const [price, setPrice] = useState('43250.50');

  const handlePlaceOrder = () => {
    alert(`Order placed: ${side.toUpperCase()} ${amount} ${market} at ${orderType === 'limit' ? price : 'market price'} with ${leverage}× leverage`);
  };

  return (
    <Card className="h-full">
      <div className="flex space-x-2 mb-4">
        <button
          onClick={() => setOrderType('market')}
          className={`flex-1 py-2 text-sm font-medium rounded transition-colors ${
            orderType === 'market'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
          }`}
        >
          Market
        </button>
        <button
          onClick={() => setOrderType('limit')}
          className={`flex-1 py-2 text-sm font-medium rounded transition-colors ${
            orderType === 'limit'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
          }`}
        >
          Limit
        </button>
      </div>

      <div className="flex space-x-2 mb-4">
        <button
          onClick={() => setSide('buy')}
          className={`flex-1 py-3 text-sm font-semibold rounded transition-colors ${
            side === 'buy'
              ? 'bg-green-600 text-white'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
          }`}
        >
          Buy / Long
        </button>
        <button
          onClick={() => setSide('sell')}
          className={`flex-1 py-3 text-sm font-semibold rounded transition-colors ${
            side === 'sell'
              ? 'bg-red-600 text-white'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
          }`}
        >
          Sell / Short
        </button>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Leverage: {leverage}×
        </label>
        <input
          type="range"
          min="1"
          max="100"
          value={leverage}
          onChange={(e) => setLeverage(Number(e.target.value))}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
          <span>1×</span>
          <span>25×</span>
          <span>50×</span>
          <span>100×</span>
        </div>
      </div>

      {orderType === 'limit' && (
        <div className="mb-4">
          <Input
            type="number"
            label="Price (USDT)"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter price"
          />
        </div>
      )}

      <div className="mb-4">
        <Input
          type="number"
          label="Amount (BTC)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
        />
        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          Available: 0.00000 BTC
        </div>
      </div>

      <div className="mb-4 p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg space-y-2 text-sm">
        <div className="flex justify-between text-gray-700 dark:text-gray-300">
          <span>Margin Required:</span>
          <span className="font-semibold">--</span>
        </div>
        <div className="flex justify-between text-gray-700 dark:text-gray-300">
          <span>Est. Liquidation Price:</span>
          <span className="font-semibold text-red-600">--</span>
        </div>
      </div>

      <Button
        onClick={handlePlaceOrder}
        variant={side === 'buy' ? 'success' : 'danger'}
        className="w-full"
        disabled={!amount || (orderType === 'limit' && !price)}
      >
        Place {side === 'buy' ? 'Buy' : 'Sell'} Order
      </Button>
    </Card>
  );
}
