import { isNotEmpty, useForm } from '@mantine/form';
import { ProductInCart } from '../../types/models/Cart';
import { isEqual } from 'lodash';
import { Rating, Textarea, Grid, Col, AspectRatio, Image, Text, Stack, Group, Button } from '@mantine/core';
import { AddReviewPayload } from '../../types/helpers/payload';

interface Props {
  product: ProductInCart | null;
}

export const ReviewForm = ({ product }: Props) => {
  const form = useForm({
    initialValues: {
      rateValue: 5,
      comment: '',
    },
    validate: {},
  });

  const handleSubmitReview = (values: AddReviewPayload) => {
    console.log(values);
  };

  return (
    <form style={{ marginBottom: '30px' }} onSubmit={form.onSubmit((values) => handleSubmitReview(values))}>
      <Grid mb={5}>
        <Col span={2}>
          <AspectRatio ratio={1 / 1}>
            <Image width={'100%'} src={product?.imagePath} withPlaceholder />
          </AspectRatio>
        </Col>
        <Col span={9}>
          <Stack spacing={0}>
            <Text>{product?.name}</Text>
            <Text size={'xs'} c={'gray'}>
              {product?.size} / {product?.color}
            </Text>
          </Stack>
        </Col>
      </Grid>
      <Rating {...form.getInputProps('rateValue')} />
      <Textarea {...form.getInputProps('comment')} label="Bình luận" placeholder="Để lại bình luận của bạn" />
      <Group position="right" mt={10}>
        <Button type={'submit'}>Hoàn thành</Button>
      </Group>
    </form>
  );
};
