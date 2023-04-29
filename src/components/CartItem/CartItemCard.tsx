import {
  Card,
  Flex,
  Group,
  Image,
  Select,
  Stack,
  Text,
  ActionIcon,
  NumberInputHandlers,
  rem,
  NumberInput,
  Grid,
  Col,
} from '@mantine/core';
import { IconX } from '@tabler/icons-react';
import { useState, useRef } from 'react';
import { ProductInCart } from '../../types/models/Cart';
import { formatCurrency } from '../../utils/helpers';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { CartAction } from '../../reducers/cart/cart.action';

interface Props {
  product: ProductInCart;
}

const CartItemCard = ({ product }: Props) => {
  const [value, setValue] = useState<number | ''>(product?.quantity);
  const handlers = useRef<NumberInputHandlers>();

  const [color, setColor] = useState(product?.color);
  const [size, setSize] = useState(product?.size);

  const dispatch = useAppDispatch();
  const handleDeleteItem = () => {
    dispatch(
      CartAction.DeleteCart(product.cartDetailID, {
        onSuccess: () => {
          dispatch(CartAction.GetCart());
        },
      })
    );
  };
  return (
    <Card mt={10}>
      <Grid>
        <Col span={5}>
          <Image width={120} height={180} withPlaceholder src={product?.imagePath} />
        </Col>
        <Col span={5}>
          <Stack h={180} justify="space-between">
            <Text size={'sm'} weight={'bold'}>
              {product?.name}
            </Text>
            <Text size={'sm'}>
              {product?.color} / {product?.size}
            </Text>
            <Text size={'sm'}>{formatCurrency(product.price)}</Text>
            <Text size={'sm'}>x{product?.quantity}</Text>
            {/* <Group spacing={5}>
              <ActionIcon
                size={20}
                radius="lg"
                variant="filled"
                color="dark"
                onClick={() => handlers?.current?.decrement()}
              >
                –
              </ActionIcon>
              <NumberInput
                size="xs"
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
                size={20}
                radius="lg"
                variant="filled"
                color="dark"
                onClick={() => handlers?.current?.increment()}
              >
                +
              </ActionIcon>
            </Group> */}
          </Stack>
        </Col>
        <Col span={1}>
          <Stack h={180}>
            <IconX cursor={'pointer'} onClick={handleDeleteItem} />
          </Stack>
        </Col>
      </Grid>
    </Card>
  );
};

export default CartItemCard;
