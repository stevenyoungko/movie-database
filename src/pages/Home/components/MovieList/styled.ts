import styled from 'styled-components';

export const StyledMovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
  padding: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1rem;
  }
`;

export const StyledMovieCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  }

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 12px 12px 0 0;
  }

  h3 {
    font-size: 1.1rem;
    margin: 1rem;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  p {
    color: #666;
    margin: 0 1rem 1rem;
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    img {
      height: 225px;
    }

    h3 {
      font-size: 1rem;
    }
  }
`;

export const LoadingSpinner = styled.div`
  text-align: center;
  padding: 2rem;
  color: #007bff;
`;

export const StyledNoMoviesMessage = styled.div`
  width: 100%;
  text-align: center;
  padding: 2rem;
  color: #666;
  font-size: 1.1rem;
`;
