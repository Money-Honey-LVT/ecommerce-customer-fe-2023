import React from 'react';
import { Grid, Image, Col, Button, Stack, Flex } from '@mantine/core';
import { IconShoppingCart, IconArrowNarrowRight } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import ROUTER from '../../config/router';
import Features from '../../components/Features/Features';
import CategorySlider from '../../components/CategorySlider/CategorySlider';
import VoucherList from '../../components/Vouchers/VouchersList';
import Search from '../../components/Search/Search';

const Home = () => {
  const navigate = useNavigate();
  return (
    <Stack>
      <CategorySlider />

      <VoucherList />

      <Search />

      <Flex justify={'center'}>
        <Button
          onClick={() => navigate(ROUTER.PRODUCT.ALL_PRODUCTS)}
          color="dark"
          radius="lg"
          mt={30}
          leftIcon={<IconShoppingCart />}
          rightIcon={<IconArrowNarrowRight />}
          size="md"
          w={'fit-content'}
        >
          Xem tất cả sản phẩm
        </Button>
      </Flex>
      <Features title="Tại Sao?" subTitle="Lí do bạn nên mua sắm ở đây" />
    </Stack>
  );
};

export default Home;
