import styled from 'styled-components';

export const StyledErrorContainer = styled.div`
  text-align: center;
  padding: 2rem;
  margin: 2rem auto;
  max-width: 600px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const StyledErrorTitle = styled.h2`
  color: #e74c3c;
  margin-bottom: 1rem;
`;

export const StyledErrorText = styled.p`
  color: #666;
  margin-bottom: 1rem;
`;

export const StyledErrorMessagePre = styled.pre`
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 4px;
  margin: 1rem 0;
  color: #721c24;
  white-space: pre-wrap;
  word-break: break-word;
`;

export const StyledRetryButton = styled.button`
  background: #3498db;
  color: white;
  border: none;
  padding: 0.5rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.2s ease;

  &:hover {
    background: #2980b9;
  }
`;
