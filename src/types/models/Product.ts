import { BaseModel } from './BaseModal';

export interface Product extends BaseModel {
  name: string;
  image: string;
  price: number;
  description: string;
  rating: number;
  category?: string;
  quantity: number;
  status?: string;
}
