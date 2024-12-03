import styled from 'styled-components';

export const StyledDetailContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

export const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 2rem;
  margin-bottom: 2rem;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: #1a1a1a;
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.6;

    strong {
      color: #4a4a4a;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    img {
      max-width: 300px;
      margin: 0 auto;
    }
  }
`;

export const StyledSection = styled.section`
  margin-bottom: 2rem;
  h2 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    color: #1a1a1a;
  }
`;

export const StyledCastList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;

  @media (max-width: 576px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const StyledCastCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }

  p {
    padding: 0.8rem;
    margin: 0;
    text-align: center;

    &:first-of-type {
      font-weight: bold;
      color: #2c3e50;
    }

    &:last-of-type {
      font-size: 0.9rem;
      color: #666;
    }
  }

  @media (max-width: 576px) {
    img {
      height: 225px;
    }
  }
`;

export const StyledLoadingContainer = styled.div`
  text-align: center;
  padding: 3rem;
  font-size: 1.2rem;
  color: #666;
`;

export const StyledReviewList = styled.div`
  display: grid;
  gap: 20px;
  margin-top: 20px;
`;

export const StyledReviewCard = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;

  h3 {
    margin: 0 0 10px 0;
    color: #333;
  }

  p {
    margin: 0 0 10px 0;
    line-height: 1.6;
  }

  small {
    color: #666;
  }
`;

export const StyledVideoContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
`;

export const StyledIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: #e50914;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #f40612;
  }
`;
