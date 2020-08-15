import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-gap: ${(props) => props.theme.unit * 2}rem;
  grid-template-columns: auto;
  grid-template-rows: min-content min-content min-content;
  align-items: center;
  align-content: center;
  justify-content: center;
  margin: 0 auto;
  height: 100vh;
  width: 90vw;
  color: ${(props) => props.theme.colors.text.constrast};

  @media (min-width: ${(props) => props.theme.breakpoints.small}px) {
    grid-template-columns: auto auto;
    grid-template-rows: min-content min-content;
  }
`;

export const Brand = styled.div`
  text-align: center;
  h2{
    font-weight: 500;
    font-size: 1.4rem;
    font-family: Poppins;
    color: ${(props) => props.theme.colors.title.base};
  }
  img{
    height: 3rem;
  }
  
  @media (min-width: ${(props) => props.theme.breakpoints.small}px) {
    text-align: start;
    h2{
      font-size: 2.1rem;
      max-width: 500px;
    }
    img{
      height: 8rem;
    }
  } 
`;

export const Hero = styled.img`
  width: 100%;
`;

export const ButtonContainer = styled.div`
  display: grid;
  grid-gap: ${(props) => props.theme.unit / 2}rem ${(props) => props.theme.unit}rem;
  grid-template-columns: 1fr 1fr;

  @media (min-width: ${(props) => props.theme.breakpoints.small}px) {
    grid-column: span 2;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  } 
`;

export const Counter = styled.div`
  font-size: 1rem;
  grid-column: span 2;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${(props) => props.theme.colors.title.base};
  span{
    img{
      margin-left: 0.25rem;
    }
  }
  @media (min-width: ${(props) => props.theme.breakpoints.small}px) {
    font-size: 0.8rem;
    justify-content: flex-end;
  } 
`;
