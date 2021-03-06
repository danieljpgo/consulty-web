import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  display: grid;
  grid-gap: ${(props) => props.theme.unit}rem;
  padding-top: ${(props) => props.theme.unit}rem;
  padding-bottom: ${(props) => props.theme.unit}rem;

  @media (min-width: ${(props) => props.theme.breakpoints.small}px) {  
    grid-gap: ${(props) => props.theme.unit}rem;
    padding-top: ${(props) => props.theme.unit / 2}rem;
    padding-bottom: ${(props) => props.theme.unit * 2}rem;
  }

  footer{
    > div{
      display: grid;
      grid-column-gap: ${(props) => props.theme.unit / 2}rem;
      grid-template-columns: min-content auto;

      font-size: 0.8rem;
      div:first-child{
        grid-row: span 2;
      }
    }
  }
`;

export const Content = styled(motion.div)`
  display: grid;
  grid-gap: ${(props) => props.theme.unit / 2}rem;

  h1{
    font-size: 1.8rem;
    color: ${(props) => props.theme.colors.text.constrast};
    max-width: 20rem;
  }
  span {
    color: ${(props) => props.theme.colors.text.constrast};
    max-width: 20rem;
  }
`;
