import styled from 'styled-components';

export const Content = styled.div`
  display: grid;
  grid-gap: ${(props) => props.theme.unit / 2}rem;

  legend{
    display: grid;
    grid-template-columns: max-content max-content;
    justify-content: space-between;

    button{
      display: grid;
      grid-gap: ${(props) => props.theme.unit / 2}rem;
      grid-template-columns: min-content min-content;
      align-items: center;
      justify-content: center;
      border: none;
      background-color: transparent;
      font-size: 0.9rem;
      white-space: nowrap;
      font-weight: 700;
      font-family: Archivo;
      color: ${(props) => props.theme.colors.primary.main};
    }
  }
`;
