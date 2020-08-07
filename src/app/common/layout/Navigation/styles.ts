import styled from 'styled-components';

export const Content = styled.main`
  width: 90vw;
  height: calc(100% - 60px);
  max-width: 700px;
  margin: 0 auto;
  z-index: 2;
  
  ::before{
    content: '';
    height: 15rem;
    width: 100%;
    left: 0;
    top: 0;
    position: absolute;
    background-color: ${(props) => props.theme.colors.primary.main};
    z-index: -1;
  }
`;
