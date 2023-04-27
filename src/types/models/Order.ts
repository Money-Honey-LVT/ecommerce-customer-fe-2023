import { BaseModel } from './BaseModal';
import { ProductInCart } from './Cart';
import { Rating } from './Rating';

export interface Order extends BaseModel {
  orderID: number;
  customerId?: number;
  staffId?: number;
  status?: OrderStatus;
  orderDate?: string;
  price?: number;
  categoryId?: number;
  products: ProductInCart[];
  reviews: Rating[];
}

export enum OrderStatus {
  PENDING = 'PENDING',
  CANCELLED = 'CANCELLED',
  DELIVERING = 'DELIVERING',
  DELIVERED = 'DELIVERED',
}
