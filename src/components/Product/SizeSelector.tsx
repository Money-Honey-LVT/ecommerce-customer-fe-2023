import { Card, Center, Col, Grid, Text, createStyles } from '@mantine/core';

const sizes = ['S', 'M', 'L', 'XXl'];

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
}
export const SideSelector = ({ productId, color }: Props) => {
  const { classes } = useStyles();

  const handleAddToCart = (size: string) => {
    console.log({
      productId: productId,
      color: color,
      size: size,
      quantity: 1,
    });
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
