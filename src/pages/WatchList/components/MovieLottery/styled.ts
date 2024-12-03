import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLotteryButton = styled.button`
  background-color: #ff6b6b;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin: 20px 0;
  transition: background-color 0.2s;

  &:hover {
    background-color: #ff5252;
  }
`;

export const StyledLotteryResult = styled.div`
  background-color: #f8f9fa;
  padding: 16px;
  border-radius: 8px;
  margin: 16px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
`;

export const StyledMovieLink = styled(Link)`
  margin-left: 16px;
  text-decoration: none;
`;

export const StyledWatchButton = styled.button`
  padding: 0.6rem 1.2rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 2px 8px rgba(52, 152, 219, 0.3);
  }
`;
