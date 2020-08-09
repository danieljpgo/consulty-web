import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-gap: ${(props) => props.theme.unit * 1.5}rem;;
  padding-top: ${(props) => props.theme.unit}rem;

  h1{
    font-size: 1.8rem;
    font-family: Archivo;
    color: ${(props) => props.theme.colors.text.constrast};
    max-width: 20rem;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.small}px) {  
    grid-gap: 2.6rem;
    padding-top: ${(props) => props.theme.unit * 2}rem;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-gap: ${(props) => props.theme.unit}rem;
`;
