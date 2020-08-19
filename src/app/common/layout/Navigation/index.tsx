import React, { Fragment } from 'react';
import { Content, Panel } from './styles';
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
      <Panel
        initial={{
          height: '100vh',
        }}
        animate={{
          height: '15.5rem',
          transition: {
            duration: 0.2,
            type: 'spring',
          },
        }}
        exit={{
          height: '100vh',
          transition: {
            duration: 0.2,
          },
        }}
      />
    </Fragment>
  );
};

export default Navigation;
