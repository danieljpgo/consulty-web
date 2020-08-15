import React, { SelectHTMLAttributes } from 'react';
import { Container, Select, Option } from './styles';
import Label from '../Label';

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

const defaultProps = {
  constrast: false,
  options: [],
};

const SelectField: React.FC<Props> = (props) => {
  const {
    label,
    hint,
    options,
    constrast,
    error,
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
    <Container>
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

SelectField.defaultProps = defaultProps;

export default SelectField;
