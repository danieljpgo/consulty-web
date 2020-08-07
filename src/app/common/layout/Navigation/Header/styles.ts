import styled from 'styled-components';

export const Container = styled.header`
  padding: 0 1.5rem;
  height: 3.4rem;
  display: flex;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: min-content min-content;
  align-items: center;
  justify-content: space-between;
  a{
    display: flex;
    img{
      height: 1.25rem;
    }
  }
`;

export const Brand = styled.div`
  img{
    height: 1rem;
    display: flex;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.small}px) {
    img{
      height: 0.8rem;
    }
  }
`;
