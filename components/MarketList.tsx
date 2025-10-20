'use client';

import { useState } from 'react';
import { Card } from './Card';

const markets = [
  { symbol: 'BTC/USDT', price: 43250.50, change: 2.45 },
  { symbol: 'ETH/USDT', price: 2280.30, change: -1.23 },
  { symbol: 'BTC/ETH', price: 18.95, change: 3.67 },
  { symbol: 'SOL/USDT', price: 98.45, change: 5.23 },
  { symbol: 'BNB/USDT', price: 312.80, change: -0.85 },
];

export function MarketList({ onSelectMarket }: { onSelectMarket: (market: string) => void }) {
  const [search, setSearch] = useState('');
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const filteredMarkets = markets.filter((m) =>
    m.symbol.toLowerCase().includes(search.toLowerCase())
  );

  const toggleFavorite = (symbol: string) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(symbol)) {
      newFavorites.delete(symbol);
    } else {
      newFavorites.add(symbol);
    }
    setFavorites(newFavorites);
  };

  return (
    <Card padding={false} className="h-full flex flex-col">
      <div className="p-3 border-b border-gray-200 dark:border-gray-700">
        <input
          type="text"
          placeholder="Search markets..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
        />
      </div>

      <div className="flex-1 overflow-auto">
        {filteredMarkets.map((market) => (
          <button
            key={market.symbol}
            onClick={() => onSelectMarket(market.symbol)}
            className="w-full px-3 py-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 border-b border-gray-100 dark:border-gray-700 text-left"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(market.symbol);
                  }}
                  className="text-gray-400 hover:text-yellow-500"
                >
                  {favorites.has(market.symbol) ? '★' : '☆'}
                </button>
                <div>
                  <div className="font-semibold text-sm text-gray-900 dark:text-white">
                    {market.symbol}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    ${market.price.toLocaleString()}
                  </div>
                </div>
              </div>
              <div className={`text-sm font-semibold ${market.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {market.change >= 0 ? '+' : ''}{market.change}%
              </div>
            </div>
          </button>
        ))}
      </div>
    </Card>
  );
}
