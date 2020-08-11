import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-gap: ${(props) => props.theme.unit}rem;
  padding-top: ${(props) => props.theme.unit}rem;

  @media (min-width: ${(props) => props.theme.breakpoints.small}px) {  
    grid-gap: 2.6rem;
    padding-top: ${(props) => props.theme.unit * 2}rem;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-gap: ${(props) => props.theme.unit / 2}rem;

  h1{
    font-size: 1.8rem;
    font-family: Archivo;
    color: ${(props) => props.theme.colors.text.constrast};
    max-width: 20rem;
  }

  span {
    color: ${(props) => props.theme.colors.text.constrast};
  }
`;
