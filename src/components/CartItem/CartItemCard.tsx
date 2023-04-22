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
} from '@mantine/core';
import { IconX } from '@tabler/icons-react';
import { useState, useRef } from 'react';
const size = [
  { value: 'X', label: 'X' },
  { value: 'M', label: 'M' },
  { value: 'L', label: 'L' },
];

const color = [
  { value: 'RED', label: 'RED' },
  { value: 'BLUE', label: 'BLUE' },
  { value: 'GREEN', label: 'GREEN' },
];

const CartItemCard = () => {
  const [value, setValue] = useState<number | ''>(0);
  const handlers = useRef<NumberInputHandlers>();

  return (
    <Card mt={10}>
      <Flex align={'center'} justify={'space-between'}>
        <Image width={120} height={180} withPlaceholder />
        <Stack h={180} justify="space-between">
          <Text size={'sm'} weight={'bold'}>
            Áo thun chạy bộ nam Essential Fast & Free Run
          </Text>
          <Group>
            <Select data={color} w={100} />
            <Select data={size} w={70} />
          </Group>
          <Group spacing={5}>
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
          </Group>
        </Stack>
        <Stack h={180}>
          <IconX cursor={'pointer'} />
        </Stack>
      </Flex>
    </Card>
  );
};

export default CartItemCard;
