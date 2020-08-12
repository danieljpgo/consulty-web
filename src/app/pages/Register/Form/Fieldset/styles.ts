import styled from 'styled-components';

export const Content = styled.div`
  display: grid;
  grid-gap: ${(props) => props.theme.unit / 2}rem;
`;
