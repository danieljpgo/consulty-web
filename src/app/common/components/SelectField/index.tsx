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
    ...selectProps
  } = props;

  return (
    <Container>
      {label && (
        <Label
          constrast={constrast}
          htmlFor={selectProps.id}
        >
          <span>{label}</span>
          {hint && (
            <span>{`(${hint})`}</span>
          )}
        </Label>
      )}
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
    </Container>
  );
};

SelectField.defaultProps = defaultProps;

export default SelectField;
