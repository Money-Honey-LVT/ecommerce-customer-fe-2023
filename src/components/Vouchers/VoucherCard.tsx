import { Button, Card, Col, Grid, Group, Stack, Text } from '@mantine/core';
import { Voucher } from '../../types/models/Voucher';

interface Props {
  voucher: Voucher | null;
}

const VoucherCard = ({ voucher }: Props) => {
  return (
    <Card withBorder radius={'md'} shadow={'md'}>
      <Card.Section>
        <Grid>
          <Col span={4} sx={{ borderRight: '1px dotted black' }}>
            <Stack align="center">
              <Text c={'yellow'}>(Còn {voucher?.quantity} lượt)</Text>
              <Text weight={'bolder'} size={'lg'}>
                {voucher?.code}
              </Text>
            </Stack>
          </Col>
          <Col span={8}>
            <Text>{voucher?.description}</Text>
          </Col>
        </Grid>
      </Card.Section>
      <Card.Section mt={20} bg={'dark'} p={'sm'} c={'white'}>
        <Group position={'apart'}>
          <Text weight={'bolder'} size={'lg'}>
            {voucher?.code}
          </Text>
          <Button px={'xl'} radius={'lg'} variant="white">
            Lưu mã
          </Button>
        </Group>
      </Card.Section>
    </Card>
  );
};

export default VoucherCard;
