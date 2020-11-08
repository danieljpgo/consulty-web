import styled from 'styled-components';

export const Container = styled.div`
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
