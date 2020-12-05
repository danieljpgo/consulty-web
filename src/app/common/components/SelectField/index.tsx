import React, { SelectHTMLAttributes } from 'react';
import Label from '../Label';
import { Container, Select, Option } from './styles';

interface Option {
  label: string,
  value: string,
}

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string,
  hint?: string,
  constrast?: boolean,
  error?: string,
  options: Option[]
}

const SelectField = (props: Props) => {
  const {
    label,
    hint,
    error,
    options = [],
    constrast = false,
    ...selectProps
  } = props;

  const TextLabel = () => (
    <Label
      constrast={constrast}
      htmlFor={selectProps.id}
    >
      {label}
      {hint && (<span>{`(${hint})`}</span>)}
    </Label>
  );

  const ErrorLabel = () => (
    <Label
      error
      htmlFor={selectProps.id}
    >
      {error}
    </Label>
  );

  return (
    <Container constrast={constrast}>
      {label && <TextLabel />}

      <Select {...selectProps}>
        {options.map((option) => (
          <Option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </Option>
        ))}
      </Select>

      {error && <ErrorLabel />}
    </Container>
  );
};

export default SelectField;
