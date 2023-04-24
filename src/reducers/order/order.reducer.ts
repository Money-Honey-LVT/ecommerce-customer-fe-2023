import { Reducer } from 'react';
import { OrderAction, OrderActionType, OrderState } from './order.types';

const initialState: OrderState = {
  isFetching: false,
  order: null,
};

const orderReducer: Reducer<OrderState, OrderAction> = (state = initialState, action) => {
  switch (action.type) {
    case OrderActionType.ORDER_PENDING:
      return { ...state, isFetching: true };
    case OrderActionType.ORDER_SUCCESS:
    case OrderActionType.ORDER_FAIL:
      return { ...state, isFetching: false };
    default:
      return state;
  }
};

export default orderReducer;
