import { LoadingOverlay } from '@mantine/core';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <Suspense fallback={<LoadingOverlay visible />}>
      <Outlet></Outlet>
    </Suspense>
  );
};

export default AuthLayout;
