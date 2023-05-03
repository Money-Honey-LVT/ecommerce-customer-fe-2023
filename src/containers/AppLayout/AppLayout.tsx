import { AppShell, LoadingOverlay } from '@mantine/core';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import CustomHeader from '../CustomHeader';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useEffect } from 'react';
import { CategoryAction } from '../../reducers/category/category.action';
import { checkLogin, notiType, renderNotification } from '../../utils/helpers';
import { CartAction } from '../../reducers/cart/cart.action';
import { useSocketContext } from '../../hooks/contexts';
import { useDidUpdate } from '@mantine/hooks';

const AppLayout = () => {
  const dispatch = useAppDispatch();
  const { connectWs, closeWs, message } = useSocketContext();

  useEffect(() => {
    dispatch(CategoryAction.GetAllCategory());
    if (checkLogin()) {
      dispatch(CartAction.GetCart());
    }
    connectWs();
    return closeWs;
  }, []);

  useDidUpdate(() => {
    if (!message) return;
    renderNotification('Thông báo', `Bạn có đơn hàng mới cập nhật`, notiType.SUCCESS);
  }, [message]);

  return (
    <AppShell navbarOffsetBreakpoint="sm" asideOffsetBreakpoint="sm" header={<CustomHeader />}>
      <Suspense fallback={<LoadingOverlay visible />}>
        <Outlet />
      </Suspense>
    </AppShell>
  );
};

export default AppLayout;
