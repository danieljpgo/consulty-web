import styled from 'styled-components';

export const Container = styled.fieldset`
  display: grid;
  grid-gap: ${(props) => props.theme.unit}rem;
`;
