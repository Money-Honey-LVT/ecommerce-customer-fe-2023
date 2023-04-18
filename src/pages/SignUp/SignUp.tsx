import { Card, Col, Grid, Text, TextInput, Button, MediaQuery, BackgroundImage, Box, Center } from '@mantine/core';
import React from 'react';
import { useForm, isEmail, isNotEmpty } from '@mantine/form';
import { useNavigate } from 'react-router-dom';
import ROUTER from '../../config/router';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { UserAction } from '../../reducers/user/user.action';
import { UserRole } from '../../types/models/Customer';

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const form = useForm({
    initialValues: {
      email: '',
      username: '',
      fullname: '',
      password: '',
    },
    validate: {
      email: isEmail('Bạn cần nhập email hợp lệ') && isNotEmpty('Bạn chưa nhập tên email'),
      password: isNotEmpty('Bạn chưa nhập mật khẩu'),
      username: isNotEmpty('Bạn chưa nhập tên đăng nhập'),
      fullname: isNotEmpty('Bạn chưa nhập họ tên'),
    },
  });

  const handleSubmit = (values: any) => {
    dispatch(
      UserAction.SignUp(
        {
          username: values.username,
          password: values.password,
          fullname: values.fullname,
          email: values.email,
          role: UserRole.CUSTOMER,
        },
        navigate
      )
    );
  };

  return (
    <Grid style={{ height: '100vh' }} align="center" justify="center">
      <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
        <Grid.Col p={0} md={7}>
          <BackgroundImage src={''}>
            <Box
              sx={{
                minHeight: '100vh',
                maxHeight: '100vh',
              }}
            ></Box>
          </BackgroundImage>
        </Grid.Col>
      </MediaQuery>

      <Grid.Col xs={12} md={5}>
        <Center>
          <Card withBorder padding="xl" radius="lg" shadow="xl" w={360}>
            <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
              <Grid>
                <Col span={12}>
                  <Text align="center" weight={700} size="xl">
                    Đăng kí tài khoản
                  </Text>
                </Col>

                <Col span={12}>
                  <TextInput radius="lg" placeholder="Email" label="Email" {...form.getInputProps('email')}></TextInput>
                </Col>
                <Col span={12}>
                  <TextInput
                    radius="lg"
                    placeholder="Họ Tên"
                    label="Họ Tên"
                    {...form.getInputProps('fullname')}
                  ></TextInput>
                </Col>
                <Col span={12}>
                  <TextInput
                    radius="lg"
                    placeholder="Tên đăng nhập"
                    label="Tên đăng nhập"
                    {...form.getInputProps('username')}
                  ></TextInput>
                </Col>
                <Col span={12}>
                  <TextInput
                    radius="lg"
                    placeholder="Mật khẩu"
                    label="Mật khẩu"
                    type="password"
                    {...form.getInputProps('password')}
                  ></TextInput>
                </Col>
                <Col sx={{ marginTop: '10px' }} span={12}>
                  <Button type="submit" fullWidth color="dark" radius="lg">
                    Đăng Ký
                  </Button>
                </Col>
                <Col span={12}>
                  <Button onClick={() => navigate(ROUTER.AUTH.LOGIN)} color="black" fullWidth variant="white">
                    Bạn đã có tài khoản? Đăng nhập
                  </Button>
                </Col>
              </Grid>
            </form>
          </Card>
        </Center>
      </Grid.Col>
    </Grid>
  );
};

export default SignUp;
