import styled from 'styled-components';

export const StyledDetailContainer = styled.div`
  padding: 20px;
`;

export const StyledHeader = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;

  img {
    border-radius: 8px;
  }

  div {
    flex: 1;

    h1 {
      margin: 0 0 10px 0;
    }

    p {
      margin: 5px 0;
    }
  }
`;

export const StyledSection = styled.div`
  margin-top: 20px;

  h2 {
    margin-bottom: 10px;
  }
`;

export const StyledCastList = styled.div`
  display: flex;
  gap: 20px;
`;

export const StyledCastCard = styled.div`
  text-align: center;
  img {
    width: 150px;
    border-radius: 8px;
  }
  p {
    margin: 5px 0;
  }
`;
