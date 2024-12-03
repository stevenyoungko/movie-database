import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const StyledHomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const StyledHomeLink = styled(Link)`
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 10px 20px;
  background-color: #2c3e50;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  &:hover {
    background-color: #34495e;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
