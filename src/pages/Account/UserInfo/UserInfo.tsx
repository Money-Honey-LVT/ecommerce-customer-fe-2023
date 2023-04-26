import { Button, Col, Grid, Input, Select, Text } from '@mantine/core';
import { useForm, isEmail, isNotEmpty } from '@mantine/form';
import { CitiesArr } from '../../../json/cities';
import { useEffect, useState } from 'react';
import { DistrictsArr } from '../../../json/districts';
import { User } from '../../../types/models/Customer';
import { useAppDispatch } from '../../../hooks/use-app-dispatch';
import { UserAction } from '../../../reducers/user/user.action';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/reducer';
import {
  findCodeFromCityName,
  findCodeFromDistrictName,
  formatCitiesJson,
  formatDistrictsJson,
  formatWardsJson,
} from '../../../utils/helpers';
import { UpdateProfilePayload } from '../../../types/helpers/payload';

interface Props {
  user: User | null;
}

export interface City {
  label: string;
  value: string;
  code: string;
}

export interface District {
  label: string;
  value: string;
  code: string;
  parent_code: string;
}

export interface Ward {
  label: string;
  value: string;
  code: string;
  parent_code: string;
}

const UserInfo = ({ user }: Props) => {
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

  const handleSubmit = (values: any) => {
    const payload: UpdateProfilePayload = {
      fullName: values.fullName,
      email: values.email,
      phone: values.phone,
      address: values.address,
      city: selectedCity,
      district: selectedDistrict,
      ward: selectedWard,
    };

    dispatch(
      UserAction.UpdateProfile(payload, {
        onSuccess: () => {
          dispatch(UserAction.GetProfile());
        },
      })
    );
  };

  if (user)
    return (
      <>
        <Text weight={'bolder'} size={'xl'} mb={20}>
          Thông tin cá nhân
        </Text>
        <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
          <Grid w={'80%'}>
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
            <Col span={12} mt={10}>
              <Button type="submit" px={'lg'} py={'xs'} radius={'lg'} h={'fit-content'}>
                <Text>Cập nhật tài khoản</Text>
              </Button>
            </Col>
          </Grid>
        </form>
      </>
    );
  else return null;
};
export default UserInfo;
