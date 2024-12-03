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
`;

export const StyledSortSelect = styled.select`
  padding: 8px 12px;
  margin: 10px 0;
  margin-left: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: white;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    border-color: #666;
  }

  &:focus {
    outline: none;
    border-color: #0066cc;
    box-shadow: 0 0 0 2px rgba(0, 102, 204, 0.2);
  }
`;
