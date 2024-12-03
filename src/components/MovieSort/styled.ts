import styled from 'styled-components';

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
