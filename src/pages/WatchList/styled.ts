import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

export const StyledTitle = styled.h1`
  color: #2c3e50;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`;

export const StyledMovieList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const StyledMovieItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 8px;
  background-color: #f8f9fa;
  transition: all 0.2s ease;

  &:hover {
    transform: translateX(10px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const StyledMovieLink = styled(Link)`
  color: #34495e;
  text-decoration: none;
  font-size: 1.1rem;
  cursor: pointer;

  &:hover {
    color: #3498db;
  }
`;

export const StyledEmptyMessage = styled.p`
  text-align: center;
  color: #7f8c8d;
  font-size: 1.1rem;
  margin-top: 2rem;
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

  &:active {
    transform: translateY(0);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.3);
  }
`;

export const StyledWatchListLink = styled(Link)`
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 10px 20px;
  background-color: #2c3e50;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  &:hover {
    background-color: #34495e;
  }
`;

export const StyledSortButton = styled.button`
  margin: 20px 0;
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(0);
  }

  svg {
    font-size: 18px;
  }
`;
