import { Box, styled } from '@mui/material';
import { ReactNode } from 'react';

type PageWrapperProps = {
  children: ReactNode;
};

const StyledPageWrapper = styled(Box)<PageWrapperProps>({
  maxWidth: '1440px',
  width: '100%',
  minHeight: '100vh',
  padding: '24px 140px 52px',
  backgroundImage: 'url(/background.svg)',
  backgroundSize: '722px',
  backgroundRepeat: 'no-repeat',
  borderRadius: '50%'
});

export const PageWrapper = ({ children }: PageWrapperProps) => (
  <StyledPageWrapper>{children}</StyledPageWrapper>
);
