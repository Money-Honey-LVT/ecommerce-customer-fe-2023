import { BaseModel } from './BaseModal';
import { Colors, Sizes } from './Product';

export interface Cart extends BaseModel {
  totalAmount: number;
  products: ProductInCart[];
}

export interface ProductInCart {
  cartDetailID: number;
  name: string;
  price: number;
  color: Colors;
  size: Sizes;
  quantity: number;
  imagePath: string;
}
