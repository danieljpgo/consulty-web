import styled from 'styled-components';

export const Container = styled.div`
  color: ${(props) => props.theme.colors.text.constrast};
  display: grid;
  justify-content: center;
  align-items: center;
  /* height: 100vh; */
`;

export const Content = styled.div`

`;

export const Brand = styled.div`
  text-align: center;
  margin-bottom: 3.2rem;
  h2{
    font-weight: 500;
    font-size: 2.4rem;
    margin-top: 1rem;
  }
  img{
    height: 10rem;
  }
`;

export const Hero = styled.img`
  width: 100%;
`;

export const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: min-content min-content;
  grid-gap: 3rem;

  a {
    display: grid;
    grid-template-columns: min-content min-content;
    grid-template-rows: min-content;
    align-items: center;
    align-content: center;
    align-items: center;
    justify-content: center;
    img {
      width: 4rem;
    }
  }
`;

export const Counter = styled.div`
  font-size: 1.8rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;
