import { Col, Grid, useMantineTheme, rem } from '@mantine/core';
import { Voucher } from '../../types/models/Voucher';
import VoucherCard from './VoucherCard';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';

const VoucherList = () => {
  const vouchers: Voucher[] = [
    {
      id: '123',
      code: 'UPS2023',
      quantity: 20,
      saleoff: 30,
      description: 'Giảm giá lên đến 30% cho đơn hàng có giá trị từ 500k trở lên',
    },
    {
      id: '123',
      code: 'UPS2023',
      quantity: 20,
      saleoff: 30,
      description: 'Giảm giá lên đến 30% cho đơn hàng có giá trị từ 500k trở lên',
    },
    {
      id: '123',
      code: 'UPS2023',
      quantity: 20,
      saleoff: 30,
      description: 'Giảm giá lên đến 30% cho đơn hàng có giá trị từ 500k trở lên',
    },
    {
      id: '123',
      code: 'UPS2023',
      quantity: 20,
      saleoff: 30,
      description: 'Giảm giá lên đến 30% cho đơn hàng có giá trị từ 500k trở lên',
    },
    {
      id: '123',
      code: 'UPS2023',
      quantity: 20,
      saleoff: 30,
      description: 'Giảm giá lên đến 30% cho đơn hàng có giá trị từ 500k trở lên',
    },
  ];

  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  const slides = vouchers.map((voucher, index) => (
    <Carousel.Slide key={index}>
      <VoucherCard voucher={voucher} key={index} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize="25%"
      breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: rem(2) }]}
      slideGap="xl"
      align="start"
      slidesToScroll={mobile ? 1 : 2}
      mt={30}
    >
      {slides}
    </Carousel>
  );
};

export default VoucherList;
