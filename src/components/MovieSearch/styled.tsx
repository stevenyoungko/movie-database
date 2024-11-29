import styled from 'styled-components';

export const StyledSearchForm = styled.form`
  display: flex;
  margin-bottom: 20px;
  input {
    flex: 1;
    padding: 10px;
    font-size: 16px;
  }
  button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
    &:hover {
      background-color: #0056b3;
    }
  }
`;

export const StyledMovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

export const StyledMovieCard = styled.div`
  text-align: center;
  img {
    width: 100%;
    border-radius: 8px;
  }
  h3 {
    font-size: 18px;
    margin: 10px 0;
  }
  p {
    color: #666;
  }
`;
