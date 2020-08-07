import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

interface Props {
  $styleVariants: 'primary' | 'secundary',
}

const variants = {
  primary: css`
    background-color: ${(props) => props.theme.colors.primary.lighter};
    :hover{
      background-color: ${(props) => props.theme.colors.primary.light};
    }
  `,
  secundary: css`
    background-color: ${(props) => props.theme.colors.secundary.main};
    :hover{
  text-decoration: none;
      background-color: ${(props) => props.theme.colors.secundary.dark};
    }
  `,
};

export const Container = styled(Link) <Props>`
  border-radius: ${(props) => props.theme.shapes.borderRadius}px;
  text-decoration: none;
  font: 700 1.0rem Archivo;
  color: ${(props) => props.theme.colors.text.constrast};

  ${(props) => variants[props.$styleVariants]}
`;
