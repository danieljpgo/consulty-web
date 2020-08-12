import React, { InputHTMLAttributes, Fragment } from 'react';
import { Input } from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string,
}

const TextField: React.FC<Props> = (props) => {
  const { label, ...inputProps } = props;

  return (
    <Fragment>
      {label && (
        <label htmlFor={inputProps.id}>{label}</label>
      )}
      <Input {...inputProps} />
    </Fragment>
  );
};

export default TextField;
