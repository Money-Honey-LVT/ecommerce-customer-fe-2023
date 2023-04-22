import { Card, Center, Col, Grid, Text, createStyles } from '@mantine/core';
import { addCartPayload } from '../../types/helpers/payload';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { CartAction } from '../../reducers/cart/cart.action';

const useStyles = createStyles((theme) => ({
  card: {
    ':hover': {
      background: 'black',
      color: 'white',
    },
  },
}));

interface Props {
  productId: number;
  color: string;
  sizes: string[];
}

export const SideSelector = ({ productId, color, sizes }: Props) => {
  const { classes } = useStyles();
  const dispatch = useAppDispatch();

  const handleAddToCart = (size: string) => {
    const payload: addCartPayload = {
      productId: productId,
      color: color,
      size: size,
      quantity: 1,
    };
    dispatch(
      CartAction.AddCart(payload, {
        onSuccess: () => {
          dispatch(CartAction.GetCart());
        },
      })
    );
  };

  return (
    <Center>
      <Card radius={'md'} padding={'xs'} bottom={15} sx={{ position: 'absolute' }} bg={'gray'}>
        <Center mb={5}>
          <Text weight={'bold'}>Thêm nhanh vào giỏ hàng+</Text>
        </Center>
        <Grid justify={'space-between'}>
          {sizes.map((size, index) => (
            <Col key={index} span={3} onClick={() => handleAddToCart(size)}>
              <Card radius={'md'} padding={5} className={classes.card}>
                <Center>
                  <Text weight={'500'}>{size}</Text>
                </Center>
              </Card>
            </Col>
          ))}
        </Grid>
      </Card>
    </Center>
  );
};
