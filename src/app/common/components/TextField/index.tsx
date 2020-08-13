import React, { InputHTMLAttributes } from 'react';
import { Container, Input } from './styles';
import Label from '../Label';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string,
  hint?: string,
  constrast?: boolean,
}

const defaultProps = {
  constrast: false,
};

const TextField: React.FC<Props> = (props) => {
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
      <Input {...inputProps} />
    </Container>
  );
};

TextField.defaultProps = defaultProps;

export default TextField;
