import { BaseModel } from './BaseModal';
import { ProductInCart } from './Cart';

export interface Order extends BaseModel {
  orderID: number;
  customerId?: number;
  staffId?: number;
  status?: OrderStatus;
  orderDate?: string;
  price?: number;
  categoryId?: number;
  products: ProductInCart[];
}

export enum OrderStatus {
  PENDING = 'PENDING',
  CANCELLED = 'CANCELLED',
  DELIVERING = 'DELIVERING',
  DELIVERED = 'DELIVERED',
}
