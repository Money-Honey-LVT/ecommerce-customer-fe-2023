import { Button, Col, Grid, Input, Select, Text } from '@mantine/core';
import { useForm, isEmail, isNotEmpty } from '@mantine/form';
import { CitiesArr } from '../../../json/cities';
import { useState } from 'react';
import { DistrictsArr } from '../../../json/districts';
import { User } from '../../../types/models/Customer';

interface Props {
  user: User | null;
}
const UserInfo = ({ user }: Props) => {
  const form = useForm({
    initialValues: {
      fullname: 'Mai Anh Đức',
      email: 'anhduc22601@gmial.com',
      phone: '',
      address: '',
      province: '',
      city: '',
    },
    validate: {},
  });
  const [city, setCity] = useState<string | null>(null);
  return (
    <>
      <Text weight={'bolder'} size={'xl'} mb={20}>
        Thông tin cá nhân
      </Text>
      <form>
        <Grid w={'80%'}>
          <Col span={3}>Họ tên</Col>
          <Col span={9}>
            <Input radius="xl" {...form.getInputProps('fullname')} />
          </Col>
          <Col span={3}>Email</Col>
          <Col span={9}>
            <Input radius="xl" {...form.getInputProps('email')} />
          </Col>
          <Col span={3}>Số điện thoại</Col>
          <Col span={9}>
            <Input radius="xl" {...form.getInputProps('phone')} placeholder="SĐT của bạn" />
          </Col>
          <Col span={3}>Số điện thoại</Col>
          <Col span={9}>
            <Input radius="xl" {...form.getInputProps('phone')} placeholder="SĐT của bạn" />
          </Col>
          <Col span={3}>Tỉnh/Thành</Col>
          <Col span={3}>
            <Select data={CitiesArr} placeholder="Chọn Tỉnh" onChange={(value) => setCity(value)} />
          </Col>
          <Col span={3}>
            <Select data={DistrictsArr} placeholder="Chọn Thành Phố" onChange={(value) => setCity(value)} />
          </Col>
          <Col span={3}>
            <Select data={CitiesArr} placeholder="Chọn Phường/Xã" onChange={(value) => setCity(value)} />
          </Col>
          <Col span={12} mt={10}>
            <Button px={'lg'} py={'xs'} radius={'lg'} h={'fit-content'}>
              <Text>Cập nhật tài khoản</Text>
            </Button>
          </Col>
        </Grid>
      </form>
    </>
  );
};
export default UserInfo;
