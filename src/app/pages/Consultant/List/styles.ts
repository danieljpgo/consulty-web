import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  display: grid;
  grid-gap: ${(props) => props.theme.unit}rem;
`;

export const Alert = styled.div`
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
