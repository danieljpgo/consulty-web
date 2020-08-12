import styled from 'styled-components';

export const Container = styled.form`
  display: grid;
  grid-gap: ${(props) => props.theme.unit / 2}rem;
  grid-template-columns: 1fr 1fr 1fr;
  
  div{
    display: grid;
    grid-gap: ${(props) => props.theme.unit / 4}rem;
    grid-template-rows: auto max-content;

    label{
      align-self: self-end;
      color:${(props) => props.theme.colors.text.constrast};
      font-size: 0.8rem;
    }
  }
`;
