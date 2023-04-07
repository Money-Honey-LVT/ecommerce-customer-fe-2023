import { AppShell, LoadingOverlay } from '@mantine/core';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import CustomHeader from '../CustomHeader';

const AppLayout = () => {
  return (
    <AppShell navbarOffsetBreakpoint="sm" asideOffsetBreakpoint="sm" header={<CustomHeader />}>
      <Suspense fallback={<LoadingOverlay visible />}>
        <Outlet />
      </Suspense>
    </AppShell>
  );
};

export default AppLayout;
