import { BaseModel } from './BaseModal';

export interface Review extends BaseModel {
  author: string;
  date: string;
  comment: string;
  rating: number;
}
