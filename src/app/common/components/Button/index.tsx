import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode,
  icon?: string,
  alt?: string,
  size: 'small' | 'large',
  styleVariants: 'primary' | 'secundary'
}

const Button: React.FC<Props> = (props) => {
  const {
    children,
    icon,
    alt,
    size,
    styleVariants,
    ...buttonProps
  } = props;

  return (
    <Container
      {...buttonProps}
      size={size}
      styleVariants={styleVariants}
    >
      {icon && (
        <img alt={alt} src={icon} />
      )}
      <span>{children}</span>
    </Container>
  );
};

Button.defaultProps = {
  type: 'button',
  alt: 'icon',
  size: 'large',
  styleVariants: 'primary',
  onClick: () => { },
};

export default Button;
