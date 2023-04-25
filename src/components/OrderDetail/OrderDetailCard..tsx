import { Card, Col, Divider, Grid, Group, Text, Image, AspectRatio, Stack, Button, Modal } from '@mantine/core';
import { Order, OrderStatus } from '../../types/models/Order';
import { formatCurrency, parserOrderStatus } from '../../utils/helpers';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { OrderAction } from '../../reducers/order/order.action';
import { useDisclosure } from '@mantine/hooks';
import { ReviewModal } from '../ReviewModal/ReviewModal';
interface Props {
  order: Order | null;
}

export const OrderDetailCard = ({ order }: Props) => {
  const dispatch = useAppDispatch();
  const [opened, { open, close }] = useDisclosure(false);

  const handleCancelOrder = () => {
    if (!order?.orderID) {
      return;
    }
    dispatch(
      OrderAction.CancelOrder(order?.orderID, {
        onSuccess: () => dispatch(OrderAction.GetOrder()),
      })
    );
  };

  const renderButton = (status: OrderStatus | undefined) => {
    switch (status) {
      case undefined:
      case OrderStatus.CANCELLED:
        return <Button>Đánh giá</Button>;
      case OrderStatus.DELIVERING:
      case OrderStatus.DELIVERED:
        return <Button>Đánh giá</Button>;
      case OrderStatus.PENDING:
        return <Button onClick={handleCancelOrder}>Huỷ đơn</Button>;
    }
  };

  return (
    <>
      <Card withBorder py={'xs'} mb={15}>
        <Card.Section>
          <Group position={'right'}>
            <Text mt={'md'} mr={'md'} c={'red'} weight={'bold'}>
              {parserOrderStatus(order?.status)}
            </Text>
          </Group>
        </Card.Section>
        <Divider my={10} />
        {order?.products.map((product, id) => (
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
        ))}
        <Divider my={10} />
        <Group position="right">
          <Text size={'lg'} c={'red'} weight={'bold'} align="right">
            {`Thành tiền: ${formatCurrency(order?.price)}`}
          </Text>
        </Group>
        <Group position="right" mt={10}>
          {renderButton(order?.status)}
        </Group>
      </Card>

      <Modal centered opened={opened} onClose={close} title="Đánh giá sản phẩm">
        <ReviewModal products={order?.products} />
      </Modal>
    </>
  );
};
