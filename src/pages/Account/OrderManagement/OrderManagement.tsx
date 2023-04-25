import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../hooks/use-app-dispatch';
import { OrderAction } from '../../../reducers/order/order.action';
import { RootState } from '../../../redux/reducer';
import { useEffect } from 'react';
import { OrderDetailCard } from '../../../components/OrderDetail/OrderDetailCard.';
import { Order } from '../../../types/models/Order';

const OrderManagement = () => {
  const dispatch = useAppDispatch();

  const getOrder = () => {
    dispatch(OrderAction.GetOrder());
  };

  useEffect(() => getOrder(), []);

  const { orders, isFetching } = useSelector((state: RootState) => state.order);

  return orders.map((order, index) => <OrderDetailCard order={order} key={index} />);
};

export default OrderManagement;
