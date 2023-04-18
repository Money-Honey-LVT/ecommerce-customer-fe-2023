import { BaseModel } from './BaseModal';

export interface User extends BaseModel {
  fullname: string;
  email: string;
  phone?: string;
  address?: string;
  province?: string;
  city?: string;
}

export enum UserRole {
  CUSTOMER = 'CUSTOMER',
}
