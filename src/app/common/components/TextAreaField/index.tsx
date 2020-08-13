import React, { TextareaHTMLAttributes } from 'react';
import { Container, TextArea } from './styles';
import Label from '../Label';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string,
  hint?: string,
  constrast?: boolean,
}

const defaultProps = {
  constrast: false,
};

const TextAreaField: React.FC<Props> = (props) => {
  const {
    label,
    hint,
    constrast,
    ...inputProps
  } = props;

  return (
    <Container>
      {label && (
        <Label
          constrast={constrast}
          htmlFor={inputProps.id}
        >
          <span>{label}</span>
          {hint && (
            <span>{`(${hint})`}</span>
          )}
        </Label>
      )}
      <TextArea {...inputProps} />
    </Container>
  );
};

TextAreaField.defaultProps = defaultProps;

export default TextAreaField;
