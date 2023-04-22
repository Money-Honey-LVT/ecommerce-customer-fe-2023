import React from 'react';
import { Product } from '../../types/models/Product';
import {
  Col,
  Grid,
  Image,
  Group,
  Text,
  Badge,
  Divider,
  Stack,
  NumberInput,
  NumberInputHandlers,
  Button,
  ActionIcon,
  Center,
  Container,
} from '@mantine/core';
import { faker } from '@faker-js/faker';
import { formatCurrency } from '../../utils/helpers';
import { Review } from '../../types/models/Review';
import ReviewCard from '../../components/Review/Review';
import { useEffect, useRef, useState } from 'react';
import { IconShoppingCart } from '@tabler/icons-react';
import { ColorSelector } from '../../components/Product/ColorSelector';

interface Props {
  product: Product | null;
}

const ProductDetail = () => {
  const product: Product = {
    id: 123,
    name: 'Áo thun chạy bộ nam Essential Fast & Free Run',
    price: 100000,
    image: faker.image.fashion(),
    description: faker.commerce.productDescription(),
    rating: 4.5,
    quantity: 120,
  };

  const [value, setValue] = useState<any>(1);
  const handlers = useRef<NumberInputHandlers>(null);

  return (
    <Center>
      <Center w={'90%'}>
        <Grid w={'100%'}>
          <Col
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            xs={12}
            sm={12}
            md={6}
            lg={7}
            xl={7}
          >
            <Image
              radius="lg"
              fit="contain"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              src={product?.image}
              withPlaceholder
            ></Image>
          </Col>
          <Col xs={12} sm={12} md={6} lg={5} xl={5}>
            <Stack>
              <Text weight={600} size={32}>
                {product?.name}
              </Text>
              <Text size={'lg'}>{formatCurrency(product.price)}</Text>
              <Text size={'lg'}>Màu sắc:</Text>
              <Group>
                <ColorSelector color="cyan" />
                <ColorSelector color="dark" />
                <ColorSelector color="blue" />
              </Group>
              <Text size={'lg'}>Kích thước áo:</Text>

              <Grid align="center">
                <Col span={4}>
                  <Group spacing={10}>
                    <ActionIcon
                      size={36}
                      radius="lg"
                      variant="filled"
                      color="dark"
                      onClick={() => handlers?.current?.decrement()}
                    >
                      –
                    </ActionIcon>
                    <NumberInput
                      // size="lg"
                      hideControls
                      value={value}
                      onChange={(val) => setValue(val)}
                      handlersRef={handlers}
                      max={10}
                      min={1}
                      step={1}
                      styles={{
                        input: { width: 54, textAlign: 'center' },
                      }}
                      radius="lg"
                    />
                    <ActionIcon
                      size={36}
                      radius="lg"
                      variant="filled"
                      color="dark"
                      onClick={() => handlers?.current?.increment()}
                    >
                      +
                    </ActionIcon>
                  </Group>
                </Col>
                <Col span={8}>
                  <Button w={'100%'} leftIcon={<IconShoppingCart />} h={'fit-content'} radius={'md'}>
                    <Text size={24}>Thêm vào giỏ hàng</Text>
                  </Button>
                </Col>
              </Grid>
            </Stack>
          </Col>
        </Grid>
      </Center>
    </Center>
  );
};

export default ProductDetail;
