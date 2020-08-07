import React from 'react';
import { Container } from './styles';

interface Props {
  children: React.ReactNode,
  to: string;
  styleVariants: 'primary' | 'secundary'
}

const Button: React.FC<Props> = (props) => {
  const { children, styleVariants, to } = props;

  return (
    <Container
      to={to}
      $styleVariants={styleVariants}
    >
      {children}
    </Container>
  );
};

export default Button;
