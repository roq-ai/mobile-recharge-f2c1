import { TransactionInterface } from 'interfaces/transaction';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface AccountInterface {
  id?: string;
  balance: number;
  currency: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  transaction?: TransactionInterface[];
  user?: UserInterface;
  _count?: {
    transaction?: number;
  };
}

export interface AccountGetQueryInterface extends GetQueryInterface {
  id?: string;
  currency?: string;
  user_id?: string;
}
