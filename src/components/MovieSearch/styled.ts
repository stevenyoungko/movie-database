import styled from 'styled-components';

export const StyledSearchForm = styled.form`
  display: flex;
  margin-bottom: 2rem;
  gap: 1rem;
  max-width: 600px;
  margin: 0 auto 2rem;

  input {
    flex: 1;
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    border: 2px solid #e1e1e1;
    border-radius: 6px;
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border-color: #007bff;
      box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.2);
    }
  }

  button {
    padding: 0.5rem 1.5rem;
    font-size: 0.9rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: #0056b3;
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(0);
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;

    button {
      width: 100%;
    }
  }
`;

export const StyledSearchPrompt = styled.div`
  text-align: center;
  padding: 3rem 2rem;
  color: #6b7280;
  font-size: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  &::before {
    content: '🔍';
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  background-color: rgba(243, 244, 246, 0.8);
  border-radius: 12px;
  margin: 2rem auto;
  max-width: 600px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  transition: transform 0.2s ease;
  &:hover {
    transform: translateY(-2px);
  }
`;
