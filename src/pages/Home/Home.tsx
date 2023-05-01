import { BackgroundImage, Button, Card, CardSection, Col, Flex, Grid, Stack } from '@mantine/core';
import { IconArrowNarrowRight, IconShoppingCart } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import CategorySlider from '../../components/CategorySlider/CategorySlider';
import Features from '../../components/Features/Features';
import Search from '../../components/Search/Search';
import ROUTER from '../../config/router';

const Home = () => {
  const navigate = useNavigate();
  return (
    <Stack>
      <CategorySlider />

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
