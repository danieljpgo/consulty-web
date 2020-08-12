import React, { Fragment } from 'react';
import { Content } from './styles';

interface Props {
  title: string,
  children: React.ReactNode,
}

const defaultProps = {
  title: 'Untitle',
};

const Fieldset: React.FC<Props> = (props) => {
  const { title, children } = props;

  return (
    <fieldset>
      <Content>
        <legend>
          <h3>{title}</h3>
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
