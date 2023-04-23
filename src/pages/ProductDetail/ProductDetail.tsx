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
import { formatCurrency, getColorsOfProduct } from '../../utils/helpers';
import { Review } from '../../types/models/Review';
import ReviewCard from '../../components/Review/Review';
import { useEffect, useRef, useState } from 'react';
import { IconShoppingCart } from '@tabler/icons-react';
import { ColorSelector } from '../../components/Product/ColorSelector';
import { useParams } from 'react-router-dom';
import { API_URLS } from '../../config/constants/api';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { ProductAction } from '../../reducers/product/product.actions';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducer';

const ProductDetail = () => {
  const [value, setValue] = useState<any>(1);
  const handlers = useRef<NumberInputHandlers>(null);

  const productId = useParams().id;

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(ProductAction.GetProductById(parseInt(productId || '')));
  }, []);

  const product = useSelector((state: RootState) => state.products.productById);

  
  const colors = getColorsOfProduct(product?.properties);

  const [colorSelect, setColorSelect] = useState(colors[0]);

  const handleSelectColor = (color: string) => {
    setColorSelect(color);
  };
  const isColorSelected = (color: string) => {
    if (!colors) return false;
    const bool = colorSelect === color ? true : false;
    return bool;
  };
  const getColorImagePath = (color: string) => {
    const item = product?.properties.find((item) => item.color === color);
    return item ? item.imagePath : null;
  };

  const getSizesByColor = (color: string) => {
    const sizes = new Set();
    product?.properties.forEach((item) => {
      if (item.color === color && item.quantity > 0) {
        sizes.add(item.size);
      }
    });
    return [...sizes];
  };

  if (product)
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
                src={getColorImagePath(colorSelect)}
                withPlaceholder
              ></Image>
            </Col>
            <Col xs={12} sm={12} md={6} lg={5} xl={5}>
              <Stack>
                <Text weight={600} size={32}>
                  {product?.name}
                </Text>
                <Text size={'lg'}>{formatCurrency(product?.price)}</Text>
                <Text size={'lg'}>Màu sắc:</Text>
                <Group>
                  {colors?.map((color, index) => (
                    <ColorSelector
                      key={index}
                      color={color}
                      isSelected={isColorSelected(color)}
                      onClick={() => handleSelectColor(color)}
                    />
                  ))}
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
  else return null;
};

export default ProductDetail;
