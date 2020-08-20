import React, { Fragment } from 'react';
import { Content } from './styles';

interface Props {
  title: string,
  children: React.ReactNode,
  action?: string,
  disabled?: boolean,
  onAddSchedule?: () => void,
}

const defaultProps = {
  title: 'Untitle',
  onAddSchedule: () => null,
};

const Fieldset: React.FC<Props> = (props) => {
  const {
    title,
    action,
    children,
    disabled,
    onAddSchedule,
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
        <Fragment>
          {children}
        </Fragment>
      </Content>
    </fieldset>
  );
};

Fieldset.defaultProps = defaultProps;

export default Fieldset;
