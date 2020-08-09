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
    input{
      width: 100%;
      height: ${(props) => props.theme.unit * 2}rem;
      border-radius: ${(props) => props.theme.shapes.borderRadius}rem;
      background-color: ${(props) => props.theme.colors.surface.input};
      border: 1px solid ${(props) => props.theme.colors.lines.constrast};
      outline: 0px;
      padding: 0 ${(props) => props.theme.unit / 2}rem;;
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
