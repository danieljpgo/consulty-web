import styled from 'styled-components';

export const Container = styled.form`
  display: grid;
  grid-gap: 0.8rem;
  grid-template-columns: 1fr 1fr 1fr;
  
  div{
    display: grid;
    grid-gap: 0.4rem;
    grid-template-rows: auto max-content;

    label{
      align-self: self-end;
      color:${(props) => props.theme.colors.text.constrast};
      font-size: 0.8rem;
    }
    input{
      width: 100%;
      height: 2.5rem;
      border-radius: 0.3rem;
      background-color: ${(props) => props.theme.colors.surface.input};
      border: 1px solid ${(props) => props.theme.colors.lines.constrast};
      outline: 0px;
      padding: 0 0.6rem;
      font: 1rem Archivo;
    }

    /* @TODO voltar aqui depois */
    /* :focus-within {
      label{
        color: #D4C2FF;
      }
    } */
  }
`;
