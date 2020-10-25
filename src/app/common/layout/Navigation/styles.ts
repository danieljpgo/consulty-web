import styled from 'styled-components';

export const Content = styled.main`
  width: calc(100vw - ${(props) => props.theme.unit * 2}rem);
  height: calc(100% - 3rem);
  max-width: 700px;
  margin: 0 auto;
  z-index: 2;
  @media (min-width: ${(props) => props.theme.breakpoints.small}px) {
    height: 15.5rem;
  }
`;
