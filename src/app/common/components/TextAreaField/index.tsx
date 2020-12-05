import React, { TextareaHTMLAttributes } from 'react';
import Label from '../Label';
import { Container, TextArea } from './styles';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string,
  hint?: string,
  constrast?: boolean,
  error?: string,
}

const TextAreaField = (props: Props) => {
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

      <TextArea {...inputProps} />

      {error && <ErrorLabel />}
    </Container>
  );
};

export default TextAreaField;
