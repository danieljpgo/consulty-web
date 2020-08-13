import styled from 'styled-components';

interface Props {
  constrast?: boolean,
}

const Label = styled.label<Props>`
  align-self: self-end;
  font-size: 0.8rem;
  ${(props) => props.constrast && `
    color:${props.theme.colors.text.constrast};
  `}
  display: grid;
  grid-template-columns: max-content max-content;
  grid-gap: ${(props) => props.theme.unit / 4}rem;
`;

export default Label;
