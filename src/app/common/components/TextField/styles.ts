import styled from 'styled-components';

interface LabelProps {
  constrast?: boolean,
}

export const Container = styled.div`
  display: grid;
  grid-gap: ${(props) => props.theme.unit / 4}rem;
  grid-template-rows: auto max-content;
`;

export const Label = styled.label<LabelProps>`
  align-self: self-end;
  font-size: 0.8rem;
  ${(props) => props.constrast && `
    color:${props.theme.colors.text.constrast};
  `}
  display: grid;
  grid-template-columns: max-content max-content;
  grid-gap: ${(props) => props.theme.unit / 4}rem;
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
