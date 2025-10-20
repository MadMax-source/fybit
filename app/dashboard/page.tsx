'use client';

import { useState } from 'react';
import { DashboardNav } from '@/components/DashboardNav';
import { MobileNav } from '@/components/MobileNav';
import { MarketList } from '@/components/MarketList';
import { TradingChart } from '@/components/TradingChart';
import { OrderBook } from '@/components/OrderBook';
import { OrderEntry } from '@/components/OrderEntry';
import { PositionsPanel } from '@/components/PositionsPanel';
import { OrdersPanel } from '@/components/OrdersPanel';

export default function DashboardPage() {
  const [selectedMarket, setSelectedMarket] = useState('BTC/USDT');
  const [activeTab, setActiveTab] = useState<'positions' | 'orders'>('positions');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-16 md:pb-0">
      <DashboardNav />

      <div className="flex h-[calc(100vh-4rem)]">
        <div className="hidden md:block w-64 border-r border-gray-200 dark:border-gray-700 overflow-hidden">
          <MarketList onSelectMarket={setSelectedMarket} />
        </div>

        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 overflow-auto">
            <div className="lg:col-span-2 space-y-4">
              <TradingChart market={selectedMarket} />

              <div>
                <div className="flex space-x-4 mb-4 border-b border-gray-200 dark:border-gray-700">
                  <button
                    onClick={() => setActiveTab('positions')}
                    className={`px-4 py-2 font-medium transition-colors ${
                      activeTab === 'positions'
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                    }`}
                  >
                    Positions
                  </button>
                  <button
                    onClick={() => setActiveTab('orders')}
                    className={`px-4 py-2 font-medium transition-colors ${
                      activeTab === 'orders'
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                    }`}
                  >
                    Open Orders
                  </button>
                </div>

                {activeTab === 'positions' ? <PositionsPanel /> : <OrdersPanel />}
              </div>
            </div>

            <div className="space-y-4">
              <OrderEntry market={selectedMarket} />
              <OrderBook />
            </div>
          </div>
        </div>
      </div>
      <MobileNav />
    </div>
  );
}
