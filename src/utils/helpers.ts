import _ from 'lodash';
import ROUTER from '../config/router';
import { notifications } from '@mantine/notifications';

export const randomArray = (number: number): number[] => Array.from({ length: number }, (_, i) => i + 1);

export const formatCurrency = (number: number | undefined) => {
  if (!number) return '0';
  const formattedNumber = _.replace(_.round(number, 0).toString(), /\B(?=(\d{3})+(?!\d))/g, '.') + ' đ';
  return formattedNumber;
};

export const formatDateFromISOString = (string: string | undefined) => {
  if (!string) return '';
  return string.split('T')[0];
};

export const checkLogin = () => {
  return localStorage.getItem('token') ? true : false;
};

export const getRouterByTabValue = (string: string | null) => {
  if (!string) return ROUTER.PROFILE.INFO;
  switch (string) {
    case 'info':
      return ROUTER.PROFILE.INFO;
    case 'orders':
      return ROUTER.PROFILE.ORDERS;
    case 'voucher-wallet':
      return ROUTER.PROFILE.VOUCHER_WALLET;
    default:
      return ROUTER.PROFILE.INFO;
  }
};

export enum notiType {
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

const getColorByType = (type: notiType) => {
  switch (type) {
    case notiType.SUCCESS:
      return 'green';
    case notiType.ERROR:
      return 'red';
  }
};

export const renderNotification = (title: string, description: string, type: notiType) => {
  notifications.show({
    title: title,
    message: description,
    color: getColorByType(type),
    withCloseButton: true,
    autoClose: 1200,
  });
};
