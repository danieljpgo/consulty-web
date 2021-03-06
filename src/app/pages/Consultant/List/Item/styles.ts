import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  display: grid;
  border-radius: ${(props) => props.theme.shapes.borderRadius}rem;
  background-color: ${(props) => props.theme.colors.surface.base};
  border: solid 1px ${(props) => props.theme.colors.lines.constrast};

  > div{
    display: grid;
    grid-gap: ${(props) => props.theme.unit / 2}rem;
    padding: ${(props) => props.theme.unit}rem;
    header{
      display: grid;
      grid-column-gap: ${(props) => props.theme.unit / 2}rem;
      grid-template-columns: 4.5rem 1fr;
      img{
        grid-row: span 2;
        width: 100%;
        border-radius: 50%;
        object-fit: cover;
        min-width: 71px;
        min-height: 71px;
      }
      strong{
        align-self: flex-end;
        font-family: Archivo;
        font-size: 1.2rem;    
        color: ${(props) => props.theme.colors.title.main}
      }
      span {
        align-self: flex-start;
      }
    }
  }

  footer{
    padding: ${(props) => props.theme.unit}rem;
    border-radius:
      0
      0
      ${(props) => props.theme.shapes.borderRadius}rem
      ${(props) => props.theme.shapes.borderRadius}rem;
    background-color: ${(props) => props.theme.colors.surface.constrast};
    display: grid;
    grid-template-columns: max-content auto;
    grid-gap: ${(props) => props.theme.unit / 2}rem;
    justify-content: space-between;
    border-top: solid 1px ${(props) => props.theme.colors.lines.constrast};
    > div {
      display: grid;
      grid-template-columns: auto;
      grid-column-gap: ${(props) => props.theme.unit / 2}rem;
      align-items: center;
      span{
        color: ${(props) => props.theme.colors.subtext.base};
        align-self: flex-end;
      }
      strong {
        color: ${(props) => props.theme.colors.primary.main};
        align-self: flex-start;
      }
    }

    @media (min-width: ${(props) => props.theme.breakpoints.small}px) {
      > div {
      grid-template-columns: auto auto;
        span{
          align-self: center;
        }
        strong {
          align-self: center;
        }
      }
    }

    @media (max-width: 388px) {
      grid-template-columns: 1fr;
    }
  }
`;
