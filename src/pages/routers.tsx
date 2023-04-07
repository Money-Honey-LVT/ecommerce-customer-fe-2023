import { LoadingOverlay, useMantineTheme } from '@mantine/core';
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import ROUTER from '../config/router';
import AppLayout from '../containers/AppLayout';

const Login = React.lazy(() => import('./Login'));
const Home = React.lazy(() => import('./Home'));
const ProductDetail = React.lazy(() => import('./ProductDetail'));
const Cart = React.lazy(() => import('./Cart'));
const ProductsList = React.lazy(() => import('./ProductsList'));
const Profile = React.lazy(() => import('./Profile'));

const _404NotFound = React.lazy(() => import('../components/common/_404NotFound'));

const AppRoutes: React.FC = () => {
  const theme = useMantineTheme();

  return (
    <Routes>
      <Route path={ROUTER.HOME.INDEX} element={<AppLayout />}>
        <Route
          path={ROUTER.AUTH.LOGIN}
          element={
            <Suspense fallback={<LoadingOverlay visible />}>
              <Login />
            </Suspense>
          }
        />
        <Route path={ROUTER.CART.INDEX} element={<Cart />} />
        <Route path={ROUTER.AUTH.PROFILE} element={<Profile />} />
        <Route path={ROUTER.PRODUCT.ITEM} element={<ProductDetail />} />
        <Route path={ROUTER.PRODUCT.PRODUCTS_LIST} element={<ProductsList />} />
        <Route path={ROUTER.HOME.INDEX} element={<Home />} />
        <Route path="*" element={<_404NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
