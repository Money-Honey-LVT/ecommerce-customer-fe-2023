import { BaseModel } from './BaseModal';

export interface Voucher extends BaseModel {
  code: string;
  quantity: number;
  description: string;
}
