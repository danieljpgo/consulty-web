import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.form)`
  display: grid;
  border-radius: ${(props) => props.theme.shapes.borderRadius}rem;
  background-color: ${(props) => props.theme.colors.surface.base};
  border: solid 1px ${(props) => props.theme.colors.lines.constrast};

  footer{
    border-radius:
      0
      0
      ${(props) => props.theme.shapes.borderRadius}rem
      ${(props) => props.theme.shapes.borderRadius}rem;
    border-top: solid 1px ${(props) => props.theme.colors.lines.constrast};
    padding: ${(props) => props.theme.unit}rem;
    background-color: ${(props) => props.theme.colors.surface.constrast};
    
    display: grid;
    grid-template-columns: min-content;
    justify-content: flex-end;

    > div{
      display: none
    }
    
    @media(min-width: ${(props) => props.theme.breakpoints.small}px) {
      grid-template-columns: max-content auto;
      grid-gap: ${(props) => props.theme.unit}rem;
      justify-content: space-between;
      padding: ${(props) => props.theme.unit}rem ${(props) => props.theme.unit * 1.5}rem;
      > div {
        display: grid;
        grid-template-columns: auto auto;
        grid-column-gap: ${(props) => props.theme.unit / 2}rem;
        align-items: center;
        color: ${(props) => props.theme.colors.subtext.base};
        img{
          grid-row: span 2;
        }
      }
    }
  }
`;

export const Content = styled.div`
  display: grid;
  grid-gap: ${(props) => props.theme.unit}rem;
  padding: ${(props) => props.theme.unit}rem;

  @media(min-width: ${(props) => props.theme.breakpoints.small}px) {
    padding: ${(props) => props.theme.unit}rem ${(props) => props.theme.unit * 1.5}rem;
  }
`;

export const ListInputs = styled(motion.div)`
  display: grid;
  grid-gap: ${(props) => props.theme.unit / 2}rem;
`;

export const InputsContainer = styled(motion.div)`
  display: grid;
  grid-gap: ${(props) => props.theme.unit / 2}rem;
  grid-template-columns: 1fr fr;
  align-items: flex-start;

  div:first-child{
    grid-column: span 2;
  }

  @media(min-width: ${(props) => props.theme.breakpoints.small}px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
