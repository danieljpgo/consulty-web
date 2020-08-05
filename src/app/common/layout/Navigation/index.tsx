import React from 'react';
import { Container } from './styles';

interface Props {
  children: React.ReactNode
}

const Navigation: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <Container>
      {children}
    </Container>
  );
};

export default Navigation;
