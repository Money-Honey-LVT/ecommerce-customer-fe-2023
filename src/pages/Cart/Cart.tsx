import { Col, Divider, Grid, Text, Input, Select, Card, Group, Checkbox, Image, Button } from '@mantine/core';
import React from 'react';
import CartItemCard from '../../components/CartItem/CartItemCard';
import { User } from '../../types/models/Customer';
import { useForm, isEmail, isNotEmpty } from '@mantine/form';
import { useState } from 'react';
import {
  findCodeFromCityName,
  findCodeFromDistrictName,
  formatCitiesJson,
  formatCurrency,
  formatDistrictsJson,
  formatWardsJson,
} from '../../utils/helpers';
import { City, District, Ward } from '../Account/UserInfo/UserInfo';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducer';
import { IconTruckDelivery } from '@tabler/icons-react';
import MomoIcon from '../../assets/images/momo.png';
import ZalopayIcon from '../../assets/images/ZaloPay-vuong.png';
import VnpayIcon from '../../assets/images/vnpay.png';
import _ from 'lodash';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { Order } from '../../reducers/order/order.action';

interface Props {
  user: User | null;
}

const Cart = ({ user }: Props) => {
  const dispatch = useAppDispatch();

  const form = useForm({
    initialValues: {
      fullName: user?.fullName,
      email: user?.email,
      phone: user?.phone,
      address: user?.address,
      city: user?.city,
      district: user?.district,
      ward: user?.ward,
    },
    validate: {},
  });

  const [selectedCity, setSelectedCity] = useState(user?.city || '');
  const [selectedDistrict, setSelectedDistrict] = useState(user?.district || '');
  const [selectedWard, setSelectedWard] = useState(user?.ward || '');

  const cities: City[] = formatCitiesJson();
  const districts: District[] = formatDistrictsJson().filter(
    (district) => district.parent_code === findCodeFromCityName(selectedCity)
  );
  const wards: Ward[] = formatWardsJson().filter(
    (ward) => ward.parent_code == findCodeFromDistrictName(selectedDistrict)
  );

  const handleCityChange = (value: string) => {
    setSelectedCity(value);
    setSelectedDistrict('');
    setSelectedWard('');
  };

  const handleDistrictChange = (value: string) => {
    setSelectedDistrict(value);
    setSelectedWard('');
  };

  const handleWardChange = (value: string) => {
    setSelectedWard(value);
  };

  const cart = useSelector((state: RootState) => state.cart.cart);
  console.log(cart);

  const [selectedMethod, setSelectedMethod] = useState('');

  const handleCheckboxChange = (value: string) => {
    setSelectedMethod(value);
  };

  const handleOrder = () => {
    const products = _.map(cart?.products, ({ productID, productDetailID, quantity, price }) => ({
      productID,
      productDetailID,
      quantity,
      price,
    }));

    const addresses = [form.getInputProps('address').value, selectedWard, selectedDistrict, selectedCity];
    const payload = {
      address: _.join(addresses, ', '),
      products: products,
      method: selectedMethod,
    };

    dispatch(Order.MakeOrder(payload));
  };

  return (
    <Grid>
      <Col sm={12} lg={6} sx={{}} pr={50}>
        <Text size={28} weight={700} mb={30}>
          Thông tin vận chuyển
        </Text>
        <Grid>
          <Col span={3}>Họ tên</Col>
          <Col span={9}>
            <Input {...form.getInputProps('fullName')} readOnly />
          </Col>
          <Col span={3}>Email</Col>
          <Col span={9}>
            <Input {...form.getInputProps('email')} readOnly />
          </Col>
          <Col span={3}>Số điện thoại</Col>
          <Col span={9}>
            <Input {...form.getInputProps('phone')} placeholder="SĐT của bạn" readOnly />
          </Col>
          <Col span={3}>Địa chỉ</Col>
          <Col span={9}>
            <Input {...form.getInputProps('address')} placeholder="Địa chỉ của bạn" />
          </Col>
          <Col span={3}>Tỉnh/Thành</Col>
          <Col span={3}>
            <Select placeholder="Chọn Tỉnh/Thành" data={cities} value={selectedCity} onChange={handleCityChange} />
          </Col>
          <Col span={3}>
            <Select
              placeholder="Chọn Quận/Huyện"
              data={districts}
              value={selectedDistrict}
              onChange={handleDistrictChange}
              disabled={!selectedCity}
            />
          </Col>
          <Col span={3}>
            <Select
              placeholder="Chọn Phường/Xã"
              data={wards}
              value={selectedWard}
              onChange={handleWardChange}
              disabled={!selectedDistrict}
            />
          </Col>
        </Grid>
        <Text size={28} weight={700} mt={50}>
          Hình thức thanh toán
        </Text>
        <Card withBorder radius={'md'}>
          <Grid align="center">
            <Col xs={2} md={1}>
              <Checkbox
                radius={'xl'}
                value="momo"
                checked={selectedMethod === 'momo'}
                onChange={() => handleCheckboxChange('momo')}
              />
            </Col>
            <Col xs={4} md={2}>
              <Image src={MomoIcon} withPlaceholder width={50} />
            </Col>
            <Col xs={6} md={7}>
              <Text size={'lg'}>Thanh toán Momo</Text>
            </Col>
          </Grid>
        </Card>
        <Card withBorder radius={'md'} mt={30}>
          <Grid align="center">
            <Col xs={2} md={1}>
              <Checkbox
                radius={'xl'}
                value="zalopay"
                checked={selectedMethod === 'zalopay'}
                onChange={() => handleCheckboxChange('zalopay')}
              />
            </Col>
            <Col xs={4} md={2}>
              <Image src={ZalopayIcon} withPlaceholder width={50} />
            </Col>
            <Col xs={6} md={7}>
              <Text size={'lg'}>Thanh toán ZaloPay</Text>
            </Col>
          </Grid>
        </Card>
        <Card withBorder radius={'md'} mt={30}>
          <Grid align="center">
            <Col xs={2} md={1}>
              <Checkbox
                radius={'xl'}
                value="vnpay"
                checked={selectedMethod === 'vnpay'}
                onChange={() => handleCheckboxChange('vnpay')}
              />
            </Col>
            <Col xs={4} md={2}>
              <Image src={VnpayIcon} withPlaceholder width={50} />
            </Col>
            <Col xs={6} md={7}>
              <Text size={'lg'}>Thanh toán VnPay</Text>
            </Col>
          </Grid>
        </Card>
        <Button
          fullWidth
          radius={'md'}
          mt={30}
          p={'md'}
          h={'fit-content'}
          sx={{ fontSize: 'lg' }}
          onClick={() => handleOrder()}
        >
          {`Thanh toán ${formatCurrency(cart?.totalAmount)} ${
            selectedMethod ? `(${selectedMethod.toLocaleUpperCase()})` : ''
          }`}
        </Button>
      </Col>

      <Col sm={12} lg={5}>
        <Text size={28} weight={700}>
          Giỏ hàng
        </Text>
        {cart?.products ? (
          cart?.products.map((product, index) => <CartItemCard key={index} product={product} />)
        ) : (
          <Text>Trong giỏ chưa có sản phẩm nào</Text>
        )}
      </Col>
    </Grid>
  );
};

export default Cart;
