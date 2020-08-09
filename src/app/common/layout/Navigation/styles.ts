import styled from 'styled-components';

export const Content = styled.main`
  width: calc(100vw - ${(props) => props.theme.unit * 2}rem);
  height: calc(100% - 3rem);
  max-width: 700px;
  margin: 0 auto;
  z-index: 2;
  
  ::before{
    content: '';
    height: 13.4rem;
    width: 100%;
    left: 0;
    top: 0;
    position: absolute;
    background-color: ${(props) => props.theme.colors.primary.main};
    z-index: -1;

    @media (min-width: ${(props) => props.theme.breakpoints.small}px) {
      height: 15.5rem;
    }
  }
`;
