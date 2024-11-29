import type { Review } from '../../types/movie';
import { StyledSection, StyledReviewList, StyledReviewCard } from './styled';

interface ReviewSectionProps {
  reviews: Review[];
}

const ReviewSection = ({ reviews }: ReviewSectionProps) => {
  return (
    <StyledSection>
      <h2>評論</h2>
      <StyledReviewList>
        {reviews.length > 0 ? (
          reviews.slice(0, 5).map((review) => (
            <StyledReviewCard key={review.id}>
              <h3>{review.author}</h3>
              <p>
                {review.content.length > 300
                  ? `${review.content.substring(0, 300)}...`
                  : review.content}
              </p>
              <small>{new Date(review.created_at).toLocaleDateString()}</small>
            </StyledReviewCard>
          ))
        ) : (
          <p>目前沒有評論</p>
        )}
      </StyledReviewList>
    </StyledSection>
  );
};

export default ReviewSection;
