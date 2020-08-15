import React, { TextareaHTMLAttributes } from 'react';
import { Container, TextArea } from './styles';
import Label from '../Label';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string,
  hint?: string,
  constrast?: boolean,
  error?: string,
}

const defaultProps = {
  constrast: false,
};

const TextAreaField: React.FC<Props> = (props) => {
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
      <TextArea {...inputProps} />
      {error && <ErrorLabel />}
    </Container>
  );
};

TextAreaField.defaultProps = defaultProps;

export default TextAreaField;
