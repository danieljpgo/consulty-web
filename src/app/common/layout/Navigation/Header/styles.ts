import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.header)`
  height: 3rem;
  display: flex;
`;

export const Content = styled.div`
  width: calc(100vw - ${(props) => props.theme.unit * 2}rem);
  max-width: 960px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: min-content min-content;
  align-items: center;
  justify-content: space-between;
  a{
    display: flex;
    padding: 10px 0;
    svg{
      height: 1.25rem;
      stroke: ${(props) => props.theme.colors.text.constrast};
    }
  }
`;

export const Brand = styled.h3`
  font-family: Poppins;
  color: ${(props) => props.theme.colors.text.constrast};
  line-height: 1;
`;
