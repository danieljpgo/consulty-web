import React, { ButtonHTMLAttributes } from 'react';
import { upInOut } from '../../utils/animations';
import { Container } from './styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: 'small' | 'large',
  styleVariants: 'primary' | 'secundary'
  alt?: string,
  icon?: string,
}

const Button = (props: Props) => {
  const {
    icon,
    children,
    alt = 'icon',
    size = 'large',
    type = 'button',
    disabled = false,
    styleVariants = 'primary',
    onClick,
  } = props;

  return (
    <Container
      type={type}
      size={size}
      disabled={disabled}
      styleVariants={styleVariants}
      variants={upInOut}
      initial="hidden"
      animate="show"
      exit="out"
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
      onClick={onClick}
    >
      {icon && (<img alt={alt} src={icon} />)}
      <span>{children}</span>
    </Container>
  );
};

export default Button;
