import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-gap: 2rem;
  padding-top: 2.6rem;

  h1{
    font-size: 1.8rem;
    font-family: Archivo;
    color: ${(props) => props.theme.colors.text.constrast};
    max-width: 20rem;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.small}px) {  
    grid-gap: 2.6rem;
    padding-top: 2rem;
  }
`;

export const Content = styled.div`
  
`;
