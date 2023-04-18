import { BaseModel } from './BaseModal';

export interface Order extends BaseModel {
  customerId?: number;
  staffId?: number;
  status?: OrderStatus;
  orderDate?: string;
  price?: number;
  categoryId?: number;
}

export enum OrderStatus {
  pending = 'PENDING',
  rejected = 'REJECTED',
  delivering = 'DELIVERING',
  delivered = 'DELIVERED',
}
