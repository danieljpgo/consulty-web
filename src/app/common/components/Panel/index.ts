import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Panel = styled(motion.div)`
  width: 100%;
  left: 0;
  top: 0;
  position: absolute;
  background-color: ${(props) => props.theme.colors.primary.main};
  z-index: -1;
`;
