import { LoadingOverlay, useMantineTheme } from '@mantine/core';
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import ROUTER from '../config/router';
import AppLayout from '../containers/AppLayout';
import AuthLayout from '../containers/AuthLayout/AuthLayout';
import ActiveUser from './ActiveUser/ActiveUser';

const Login = React.lazy(() => import('./Login'));
const SignUp = React.lazy(() => import('./SignUp'));
const ForgotPassword = React.lazy(() => import('./ForgotPassword'));
const ResetPassword = React.lazy(() => import('./ResetPassword'));

const Home = React.lazy(() => import('./Home'));
const ProductDetail = React.lazy(() => import('./ProductDetail'));
const Cart = React.lazy(() => import('./Cart'));
const ProductsList = React.lazy(() => import('./ProductsList'));
const AccountLayout = React.lazy(() => import('./Account'));
const UserInfo = React.lazy(() => import('./Account/UserInfo/UserInfo'));
const Orders = React.lazy(() => import('./Account/Orders/Orders'));

const _404NotFound = React.lazy(() => import('../components/common/_404NotFound'));

const AppRoutes: React.FC = () => {
  const theme = useMantineTheme();

  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path={ROUTER.AUTH.LOGIN} element={<Login />} />
        <Route path={ROUTER.AUTH.SIGNUP} element={<SignUp />} />
        <Route path={ROUTER.AUTH.ACTIVE_USER} element={<ActiveUser />} />
        <Route path={ROUTER.AUTH.FORGOTPASSWORD} element={<ForgotPassword />} />
        <Route path={ROUTER.AUTH.RESETPASSWORD} element={<ResetPassword />} />
      </Route>

      <Route element={<AppLayout />}>
        <Route path={ROUTER.CART.INDEX} element={<Cart />} />
        <Route element={<AccountLayout />}>
          <Route path={ROUTER.PROFILE.INFO} element={<UserInfo user={null} />} />
          <Route path={ROUTER.PROFILE.ORDERS} element={<Orders />} />
          <Route path={ROUTER.PROFILE.VOUCHER_WALLET} element={null} />
        </Route>
        <Route path={ROUTER.PRODUCT.PRODUCT_DETAILS} element={<ProductDetail />} />
        <Route path={ROUTER.PRODUCT.ALL_PRODUCTS} element={<ProductsList />} />
        <Route path={ROUTER.HOME.INDEX} element={<Home />} />
        <Route path="*" element={<_404NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
