import { BaseModel } from './BaseModal';
import { Review } from './Review';

export interface Product extends BaseModel {
  name: string;
  price: number;
  description: string;
  rating: number;
  categoryID?: number;
  quantity: number;
  status?: string;
  reviews: Review[];
  properties: Properties[];
}

export enum Colors {
  RED = 'RED',
  BLACK = 'BLACK',
  BLUE = 'BLUE',
  GREEN = 'GREEN',
  YELLOW = 'YELLOW',
}

export enum Sizes {
  XS = 'XS',
  S = 'S',
  M = 'M',
  L = 'L',
  XL = 'XL',
  XXL = 'XXL',
}

export interface Properties {
  color: Colors;
  imagePath: string;
  quantity: number;
  size: Sizes;
}
