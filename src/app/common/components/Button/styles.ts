import styled, { css } from 'styled-components';

interface Props {
  styleVariants: 'primary' | 'secundary',
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

export const Container = styled.a<Props>`
  /* width: 30rem; */
  /* height: 10.4rem; */
  border-radius: 0.8rem;
  font: 700 2.0rem Archivo;

  ${(props) => variants[props.styleVariants]}
`;
