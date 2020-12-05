import React, { InputHTMLAttributes } from 'react';
import Label from '../Label';
import { Container, Input } from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string,
  hint?: string,
  constrast?: boolean,
  error?: string,
}

const TextField = (props: Props) => {
  const {
    label,
    hint,
    error,
    constrast = false,
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
    <Container constrast={constrast}>
      {label && <TextLabel />}

      <Input {...inputProps} />

      {error && <ErrorLabel />}
    </Container>
  );
};

export default TextField;
