import styled from 'styled-components';

interface Props {
  constrast?: boolean,
}

export const Container = styled.div<Props>`
  display: grid;
  grid-gap: ${(props) => props.theme.unit / 4}rem;
  grid-template-rows: auto max-content;

  :focus-within{
    label:first-child{
      color: ${(props) => !props.constrast && props.theme.colors.primary.main};
      font-weight: 700;
    }
    select{
      border: solid 2px ${(props) => props.theme.colors.primary.main};
    }
  }
`;

export const Select = styled.select`
  width: 100%;
  height: ${(props) => props.theme.unit * 2}rem;
  padding: 0 ${(props) => props.theme.unit / 2}rem;
  border-radius: ${(props) => props.theme.shapes.borderRadius}rem;
  background-color: ${(props) => props.theme.colors.surface.input};
  border: 1px solid ${(props) => props.theme.colors.lines.constrast};
  font: 1rem Archivo;
`;

export const Option = styled.option`
  height: ${(props) => props.theme.unit * 2}rem;
  background-color: ${(props) => props.theme.colors.surface.input};
  border: 1px solid ${(props) => props.theme.colors.lines.constrast};
  font: 1rem Archivo;
`;
