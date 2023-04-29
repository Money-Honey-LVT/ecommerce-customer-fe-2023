import { BaseModel } from './BaseModal';

export interface Category extends BaseModel {
  name: string;
  description?: string;
  categoryParentID?: number;
  status?: string;
}
