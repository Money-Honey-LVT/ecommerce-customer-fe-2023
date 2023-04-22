import { AppShell, LoadingOverlay } from '@mantine/core';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import CustomHeader from '../CustomHeader';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useEffect } from 'react';
import { CategoryAction } from '../../reducers/category/category.action';

const AppLayout = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(CategoryAction.GetAllCategory());
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
