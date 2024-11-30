import {
  StyledErrorContainer,
  StyledErrorTitle,
  StyledErrorText,
  StyledErrorMessagePre,
  StyledRetryButton,
} from './styled';

function ErrorFallback({ error }: { error: Error }) {
  return (
    <StyledErrorContainer role="alert">
      <StyledErrorTitle>😢 發生錯誤</StyledErrorTitle>
      <StyledErrorText>抱歉，出現了一些問題：</StyledErrorText>
      <StyledErrorMessagePre>{error.message}</StyledErrorMessagePre>
      <StyledRetryButton onClick={() => window.location.reload()}>
        重試
      </StyledRetryButton>
    </StyledErrorContainer>
  );
}

export default ErrorFallback;
