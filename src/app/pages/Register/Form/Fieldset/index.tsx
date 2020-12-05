import React from 'react';
import { Content } from './styles';

interface Props {
  title: string,
  children: React.ReactNode,
  action?: string,
  disabled?: boolean,
  onAddSchedule?: () => void,
}

const Fieldset = (props: Props) => {
  const {
    action,
    children,
    disabled,
    title = 'Untitle',
    onAddSchedule = () => null,
  } = props;

  return (
    <fieldset>
      <Content>
        <legend>
          <h3>{title}</h3>
          {action && (
            <button
              type="button"
              disabled={disabled}
              onClick={onAddSchedule}
            >
              <span>+</span>
              <span>{action}</span>
            </button>
          )}
        </legend>
        <hr />
        <>
          {children}
        </>
      </Content>
    </fieldset>
  );
};

export default Fieldset;
