import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface RechargeInterface {
  id?: string;
  amount: number;
  currency: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface RechargeGetQueryInterface extends GetQueryInterface {
  id?: string;
  currency?: string;
  user_id?: string;
}
