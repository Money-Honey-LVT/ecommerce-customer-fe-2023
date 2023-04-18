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
export const SideSelector = () => {
  const { classes } = useStyles();

  return (
    <Center>
      <Card radius={'md'} padding={'xs'} bottom={15} sx={{ position: 'absolute' }} bg={'gray'}>
        <Center mb={5}>
          <Text weight={'bold'}>Thêm nhanh vào giỏ hàng+</Text>
        </Center>
        <Grid justify={'space-between'}>
          {sizes.map((size, index) => (
            <Col key={index} span={3}>
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
