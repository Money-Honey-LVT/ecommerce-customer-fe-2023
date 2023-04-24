import { ThunkAction } from 'redux-thunk';
import { RootState } from '../../redux/reducer';

export interface OrderState {
  isFetching: boolean;
  order: any;
}

export enum OrderActionType {
  ORDER_PENDING = 'ORDER_PENDING',
  ORDER_SUCCESS = 'ORDER_SUCCESS',
  ORDER_FAIL = 'ORDER_FAIL',
}

export interface OrderActionPending {
  type: OrderActionType.ORDER_PENDING;
}
export interface OrderActionSuccess {
  type: OrderActionType.ORDER_SUCCESS;
}
export interface OrderActionFail {
  type: OrderActionType.ORDER_FAIL;
}

export type OrderAction = OrderActionPending | OrderActionFail | OrderActionSuccess;

export type OrderThunkAction = ThunkAction<void, RootState, any, OrderAction>;
