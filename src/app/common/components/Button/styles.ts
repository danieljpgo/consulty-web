import styled, { css } from 'styled-components';

interface Props {
  styleVariants: 'primary' | 'secundary',
  size: 'small' | 'large'
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
      background-color: ${(props) => props.theme.colors.secundary.dark};
    }
  `,
};

const size = {
  small: css`
    padding: ${(props) => props.theme.unit / 2}rem;
    font-size: 1rem;
    img {
      width: 1.4rem;
    }

    @media (min-width: ${(props) => props.theme.breakpoints.small}px) {
      padding: ${(props) => props.theme.unit / 2}rem ${(props) => props.theme.unit}rem;
    }
  `,
  large: css`
    padding: ${(props) => props.theme.unit}rem;
    font-size: 1.4rem;
    img {
      width: 2rem;
    }
  `,
};

export const Container = styled.button<Props>`
  display: grid;
  grid-gap: ${(props) => props.theme.unit / 4}rem;
  grid-template-columns: min-content min-content;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: ${(props) => props.theme.shapes.borderRadius}rem;
  white-space: nowrap;
  font-weight: 700;
  font-family: Archivo;
  color: ${(props) => props.theme.colors.text.constrast};
  
  ${(props) => variants[props.styleVariants]}
  ${(props) => size[props.size]}
`;
