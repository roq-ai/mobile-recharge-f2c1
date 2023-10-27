import { UserInterface } from 'interfaces/user';
import { AccountInterface } from 'interfaces/account';
import { GetQueryInterface } from 'interfaces';

export interface TransactionInterface {
  id?: string;
  amount: number;
  currency: string;
  user_id: string;
  account_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  account?: AccountInterface;
  _count?: {};
}

export interface TransactionGetQueryInterface extends GetQueryInterface {
  id?: string;
  currency?: string;
  user_id?: string;
  account_id?: string;
}
