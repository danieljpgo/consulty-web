import styled from 'styled-components';

export const Container = styled.form`
  display: grid;
  grid-gap: ${(props) => props.theme.unit / 2}rem;
  grid-template-columns: 1fr 1fr;

  div:first-child{
    grid-column: span 2;
  }

  button{
    grid-column: span 2;
    align-self: flex-end;
  } 

  @media(min-width: ${(props) => props.theme.breakpoints.small}px) {
    grid-template-columns: 1fr 1fr 1fr min-content;

    div:first-child{
    grid-column: unset;
  }

    button{
      grid-column: unset;
    }
  }
`;
