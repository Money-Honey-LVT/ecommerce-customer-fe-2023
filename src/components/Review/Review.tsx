import { Review } from '../../types/models/Review';
import { IconStar, IconStarFilled } from '@tabler/icons-react';
import { Grid, Col, Text, Divider } from '@mantine/core';

export const fakeData: Review = {
  id: '123',
  author: 'Anh Cảnh ở Ninh Bình',
  date: '4/20/2023',
  comment: 'Anh sống nhưu thế đấy',
  rating: 2,
};

interface Props {
  review: Review | null;
}

const ReviewCard = ({ review }: Props) => {
  const renderRatingsList = (rating: number | undefined) => {
    if (!rating) return null;
    const stars = [];

    for (let i = 1; i <= rating; i++) {
      stars.push(<IconStarFilled color="yellow" />);
    }

    let remainingStars = 5 - stars.length;

    for (let i = 1; i <= remainingStars; i++) {
      stars.push(<IconStar />);
    }

    return <div>{stars}</div>;
  };
  return (
    <>
      <Grid>
        <Col xs={12} sm={3} md={2} lg={2} xl={2} sx={{ display: 'flex', alignItems: 'center' }} span={2}>
          <Col span={12}>
            <Text sx={{ marginBottom: '5px' }} weight={600}>
              {review?.author}
            </Text>
            <Text color="gray" sx={{ marginBottom: '5px' }} size="xs" weight={600}>
              {review?.date}
            </Text>
            {renderRatingsList(review?.rating)}
          </Col>
        </Col>
        <Col xs={12} sm={9} md={10} lg={10} xl={10} sx={{ display: 'flex', alignItems: 'center' }} span={10}>
          <Text weight={600}>"{review?.comment}"</Text>
        </Col>
      </Grid>
      <Divider />
    </>
  );
};

export default ReviewCard;
