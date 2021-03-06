import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  display: grid;
  grid-gap: ${(props) => props.theme.unit}rem;;
  padding-top: ${(props) => props.theme.unit}rem;
  padding-bottom: ${(props) => props.theme.unit}rem;

  h1{
    font-size: 1.8rem;
    color: ${(props) => props.theme.colors.text.constrast};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.small}px) {  
    grid-gap: ${(props) => props.theme.unit * 2}rem;
    padding-top: ${(props) => props.theme.unit * 2}rem;
    padding-bottom: ${(props) => props.theme.unit * 2}rem;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-gap: ${(props) => props.theme.unit}rem;
`;
