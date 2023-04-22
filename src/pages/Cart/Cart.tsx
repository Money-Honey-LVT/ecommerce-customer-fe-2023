import { Col, Divider, Grid, Text, Input, Select } from '@mantine/core';
import React from 'react';
import CartItemCard from '../../components/CartItem/CartItemCard';
import { User } from '../../types/models/Customer';
import { useForm, isEmail, isNotEmpty } from '@mantine/form';
import { useState } from 'react';
import {
  findCodeFromCityName,
  findCodeFromDistrictName,
  formatCitiesJson,
  formatDistrictsJson,
  formatWardsJson,
} from '../../utils/helpers';
import { City, District, Ward } from '../Account/UserInfo/UserInfo';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducer';

interface Props {
  user: User | null;
}

const Cart = ({ user }: Props) => {
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

  return (
    <Grid>
      <Col sm={12} lg={6} sx={{}} pr={50}>
        <Text size={28} weight={700} mb={30}>
          Thông tin vận chuyển
        </Text>
        <Grid>
          <Col span={3}>Họ tên</Col>
          <Col span={9}>
            <Input {...form.getInputProps('fullName')} />
          </Col>
          <Col span={3}>Email</Col>
          <Col span={9}>
            <Input {...form.getInputProps('email')} />
          </Col>
          <Col span={3}>Số điện thoại</Col>
          <Col span={9}>
            <Input {...form.getInputProps('phone')} placeholder="SĐT của bạn" />
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
        <Text size={28} weight={700} my={30}>
          Hình thức thanh toán
        </Text>
      </Col>

      <Col sm={12} lg={5}>
        <Text size={28} weight={700}>
          Giỏ hàng
        </Text>
        {cart?.products.map((product, index) => (
          <CartItemCard key={index} product={product} />
        ))}
      </Col>
    </Grid>
  );
};

export default Cart;
