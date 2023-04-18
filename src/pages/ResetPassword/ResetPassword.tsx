import { Card, Col, Grid, Text, TextInput, Button, MediaQuery, BackgroundImage, Box, Center } from '@mantine/core';
import React from 'react';
import { useForm, isEmail, isNotEmpty } from '@mantine/form';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import ROUTER from '../../config/router';
import _ from 'lodash';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { UserAction } from '../../reducers/user/user.action';
const ResetPassword = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const str = useLocation().search;
  const value = str.split('=')[2];
  const token = _.trimStart(value, '?');

  const form = useForm({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validate: {
      password: isNotEmpty('Bạn chưa nhập mật khẩu'),
      confirmPassword: isNotEmpty('Bạn chưa nhập mật khẩu'),
    },
  });

  const handleSubmit = (formValue: any) => {
    dispatch(
      UserAction.ResetPassword(
        {
          token: token,
          pass: formValue.password,
          confirmPass: formValue.confirmPassword,
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
                    Khôi phục mật khẩu
                  </Text>
                </Col>

                <Col span={12}>
                  <TextInput
                    radius="lg"
                    placeholder="Mật khẩu mới"
                    label="Mật khẩu mới"
                    {...form.getInputProps('password')}
                  ></TextInput>
                </Col>
                <Col span={12}>
                  <TextInput
                    radius="lg"
                    placeholder="Xác nhận mật khẩu"
                    label="Xác nhận mật khẩu"
                    {...form.getInputProps('confirmPassword')}
                  ></TextInput>
                </Col>
                <Col sx={{ marginTop: '10px' }} span={12}>
                  <Button type="submit" fullWidth color="dark" radius="lg">
                    Khôi phục mật khẩu
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

export default ResetPassword;
