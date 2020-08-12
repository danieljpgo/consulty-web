import styled from 'styled-components';

export const Container = styled.form`
  display: grid;
  grid-gap: ${(props) => props.theme.unit / 2}rem;
  grid-template-columns: 1fr 1fr 1fr;
`;
