import React, { Fragment } from 'react';
import { Content } from './styles';
import Header from './Header';

interface Props {
  children: React.ReactNode
}

const Navigation: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <Fragment>
      <Header />
      <Content>
        {children}
      </Content>
    </Fragment>
  );
};

export default Navigation;
