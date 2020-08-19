import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';
import { upInOut } from '../../utils/animations';

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
    type,
    disabled,
    onClick,
    // ...buttonProps
  } = props;

  return (
    <Container
      type={type}
      size={size}
      disabled={disabled}
      styleVariants={styleVariants}
      variants={upInOut}
      // initial="hidden"
      // animate="show"
      // exit="out"
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 1,
      }}
      onClick={onClick}
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
