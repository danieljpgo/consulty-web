import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-gap: ${(props) => props.theme.unit / 4}rem;
  grid-template-rows: auto max-content;
`;

export const Input = styled.input`
  width: 100%;
  height: ${(props) => props.theme.unit * 2}rem;
  padding: 0 ${(props) => props.theme.unit / 2}rem;
  border-radius: ${(props) => props.theme.shapes.borderRadius}rem;
  background-color: ${(props) => props.theme.colors.surface.input};
  border: 1px solid ${(props) => props.theme.colors.lines.constrast};
  font: 1rem Archivo;
`;
