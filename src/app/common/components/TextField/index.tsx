import React, { InputHTMLAttributes } from 'react';
import { Container, Input } from './styles';
import Label from '../Label';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string,
  hint?: string,
  constrast?: boolean,
  error?: string,
}

const defaultProps = {
  constrast: false,
};

const TextField: React.FC<Props> = (props) => {
  const {
    label,
    hint,
    constrast,
    error,
    ...inputProps
  } = props;

  const TextLabel = () => (
    <Label
      constrast={constrast}
      htmlFor={inputProps.id}
    >
      {label}
      {hint && (<span>{`(${hint})`}</span>)}
    </Label>
  );

  const ErrorLabel = () => (
    <Label
      error
      htmlFor={inputProps.id}
    >
      {error}
    </Label>
  );

  return (
    <Container>
      {label && <TextLabel />}
      <Input {...inputProps} />
      {error && <ErrorLabel />}
    </Container>
  );
};

TextField.defaultProps = defaultProps;

export default TextField;
