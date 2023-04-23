import _ from 'lodash';
import ROUTER from '../config/router';
import { notifications } from '@mantine/notifications';
import { Properties } from '../types/models/Product';
import { CitiesArr } from '../json/cities';
import { DistrictsArr } from '../json/districts';
import { WardsArr } from '../json/wards';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducer';

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

export const formatProperties = (properties: Properties[] | undefined) => {
  if (!properties) return null;
  const groupedItems = _.groupBy(properties, 'color');

  const sizesAndImagesByColor = _.mapValues(groupedItems, (group) =>
    _.chain(group)
      .groupBy('size')
      .mapValues((sizeGroup) =>
        _.map(sizeGroup, (item) => ({
          imagePath: item.imagePath,
          quantity: item.quantity,
        }))
      )
      .value()
  );

  return sizesAndImagesByColor;
};

export const getColorsOfProduct = (properties: Properties[] | undefined) => {
  if (!properties) return [''];
  return _.uniq(_.map(properties, 'color'));
};

export const formatCitiesJson = () => {
  return _.map(CitiesArr, ({ name_with_type, code }) => ({ label: name_with_type, value: name_with_type, code: code }));
};

export const formatDistrictsJson = () => {
  return _.map(DistrictsArr, ({ name_with_type, code, parent_code }) => ({
    label: name_with_type,
    value: name_with_type,
    code: code,
    parent_code: parent_code,
  }));
};

export const formatWardsJson = () => {
  return _.map(WardsArr, ({ name_with_type, code, parent_code }) => ({
    label: name_with_type,
    value: name_with_type,
    code: code,
    parent_code: parent_code,
  }));
};

export const findCodeFromCityName = (name: string) => {
  const city = _.find(CitiesArr, { name_with_type: name });
  return city ? city.code : null;
};

export const findCodeFromDistrictName = (name: string) => {
  const district = _.find(DistrictsArr, { name_with_type: name });
  return district ? district.code : null;
};

export const getColorImagePath = (color: string) => {
  const item = items.find((item) => item.color === color);
  return item ? item.imagePath : null;
};

export const getNumberProductInCart = () => {
  const cart = useSelector((state: RootState) => state.cart.cart);
  return cart?.products.length;
};
