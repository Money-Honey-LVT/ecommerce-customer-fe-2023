import { AppShell, LoadingOverlay } from '@mantine/core';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import CustomHeader from '../CustomHeader';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useEffect } from 'react';
import { CategoryAction } from '../../reducers/category/category.action';
import { checkLogin } from '../../utils/helpers';
import { CartAction } from '../../reducers/cart/cart.action';
import { UserAction } from '../../reducers/user/user.action';

const AppLayout = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(CategoryAction.GetAllCategory());
    if (checkLogin()) {
      dispatch(CartAction.GetCart());
      dispatch(UserAction.GetProfile());
    }
  }, []);

  return (
    <AppShell navbarOffsetBreakpoint="sm" asideOffsetBreakpoint="sm" header={<CustomHeader />}>
      <Suspense fallback={<LoadingOverlay visible />}>
        <Outlet />
      </Suspense>
    </AppShell>
  );
};

export default AppLayout;
