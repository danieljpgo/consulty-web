import styled from 'styled-components';

interface Props {
  constrast?: boolean,
  error?: boolean,
}

const Label = styled.label<Props>`
  align-self: self-end;
  font-size: 0.8rem;
  color: ${(props) => props.theme.colors.subtext.base};
  display: grid;
  grid-template-columns: max-content max-content;
  grid-gap: ${(props) => props.theme.unit / 4}rem;
  ${(props) => props.constrast && `
    color:${props.theme.colors.text.constrast};
  `}
  ${(props) => props.error && `
    color:${props.theme.colors.warning};
    grid-template-columns: 1fr;
  `}
`;

export default Label;
