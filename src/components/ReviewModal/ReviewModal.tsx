import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { ProductInCart } from '../../types/models/Cart';
import { Rating, Grid, Col, Image, AspectRatio, Stack, Text } from '@mantine/core';

interface Props {
  products: ProductInCart[] | undefined;
}

export const ReviewModal = ({ products }: Props) => {
  const dispatch = useAppDispatch();
  const product = products[0];
  return (
    <form>
      <Grid>
        <Col span={1}>
          <AspectRatio ratio={1 / 1}>
            <Image width={'100%'} src={product.imagePath} withPlaceholder />
          </AspectRatio>
        </Col>
        <Col span={9}>
          <Stack spacing={0}>
            <Text>{product.name}</Text>
            <Text size={'xs'} c={'gray'}>
              {product.size} / {product.color}
            </Text>
            <Text>x {product.quantity}</Text>
          </Stack>
        </Col>
        <Col span={2}>
          <Stack h={'100%'} justify={'flex-end'}>
            <Text align="right">{formatCurrency(product.price)}</Text>
          </Stack>
        </Col>
      </Grid>
    </form>
  );
};
