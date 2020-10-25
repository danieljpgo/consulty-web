import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: min-content min-content min-content;
  align-items: center;
  align-content: center;
  justify-content: center;
  margin: 0 auto;
  height: 100vh;
  width: 90vw;
  color: ${(props) => props.theme.colors.text.constrast};
  grid-gap: ${(props) => props.theme.unit / 2}rem;

  @media (min-width: ${(props) => props.theme.breakpoints.xsmall}px) {
    grid-gap: ${(props) => props.theme.unit}rem;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.large}px) {
    grid-template-columns: auto auto;
    grid-template-rows: min-content min-content;
    grid-gap: ${(props) => props.theme.unit * 2}rem;
  }
`;

export const Brand = styled(motion.div)`
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
  @media (min-width: ${(props) => props.theme.breakpoints.large}px) {
    text-align: start;
    padding-top: ${(props) => props.theme.unit * 2.8}rem;
    display: grid;
    gap: ${(props) => props.theme.unit}rem;
    h2{
      font-size: 1.8rem;
      max-width: 480px;
    }
    img{
      height: 5rem;
    }
  } 
`;

export const Hero = styled(motion.img)`
  width: 100%;
  @media (min-width: ${(props) => props.theme.breakpoints.large}px) {
    max-width: 35vw;
  }
`;

export const Footer = styled(motion.div)`
  display: grid;
  grid-template-areas:
        "welcome welcome"
        ". ."
        "counter counter";
  grid-gap: ${(props) => props.theme.unit / 2}rem;
  @media (min-width: ${(props) => props.theme.breakpoints.small}px) {
    grid-gap: ${(props) => props.theme.unit}rem;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.large}px) {
    grid-gap: ${(props) => props.theme.unit}rem;
    grid-template-areas: "welcome counter . .";
    grid-column: span 2;
  }
`;

export const Welcome = styled(motion.div)`
  grid-area: welcome;
  color: ${(props) => props.theme.colors.title.base};
  align-self: center;
  line-height: 1.2;
  text-align: center;
  p {
    font-size: 1.2rem;
  }
  h3 {
    font-size: 1.2rem;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.large}px) {
    text-align: start;
  }
`;

export const Counter = styled(motion.div)`
  grid-area: counter;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${(props) => props.theme.colors.title.base};
  @media (min-width: ${(props) => props.theme.breakpoints.large}px) {
    max-width: 170px;
    text-align: end;
    justify-self: flex-end;
    font-size: 0.8rem;
  } 
`;
