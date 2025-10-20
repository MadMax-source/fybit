export interface User {
  id: string;
  email: string;
  full_name?: string;
  avatar_url?: string;
  kyc_status: 'not_submitted' | 'pending' | 'verified' | 'rejected';
  kyc_rejection_reason?: string;
  two_fa_enabled: boolean;
  created_at: string;
}

export interface Wallet {
  id: string;
  user_id: string;
  currency: 'BTC' | 'ETH' | 'USDT';
  balance: number;
  deposit_address?: string;
  updated_at: string;
}

export interface Transaction {
  id: string;
  user_id: string;
  type: 'deposit' | 'withdraw' | 'trade_fee';
  currency: string;
  amount: number;
  status: 'pending' | 'completed' | 'failed';
  tx_hash?: string;
  created_at: string;
}

export interface Position {
  id: string;
  user_id: string;
  market: string;
  direction: 'long' | 'short';
  entry_price: number;
  current_price: number;
  amount: number;
  leverage: number;
  pnl: number;
  liquidation_price: number;
  created_at: string;
}

export interface Order {
  id: string;
  user_id: string;
  market: string;
  type: 'market' | 'limit';
  side: 'buy' | 'sell';
  price?: number;
  amount: number;
  filled: number;
  status: 'open' | 'filled' | 'cancelled';
  created_at: string;
}

export interface Market {
  symbol: string;
  name: string;
  last_price: number;
  change_24h: number;
  volume_24h: number;
  high_24h: number;
  low_24h: number;
}

export interface Affiliate {
  id: string;
  user_id: string;
  referral_code: string;
  total_referrals: number;
  total_earnings: number;
  month_earnings: number;
}

export interface OrderBookEntry {
  price: number;
  amount: number;
  total: number;
}

export interface Trade {
  id: string;
  market: string;
  price: number;
  amount: number;
  side: 'buy' | 'sell';
  timestamp: string;
}
