import React from 'react';
import { Container } from './styles';

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode,
  styleVariants: 'primary' | 'secundary'
}

const Button: React.FC<Props> = (props) => {
  const { children, styleVariants } = props;

  return (
    <Container
      {...props}
      styleVariants={styleVariants}
    >
      {children}
    </Container>
  );
};

export default Button;
