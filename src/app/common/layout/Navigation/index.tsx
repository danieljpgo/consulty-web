import React from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import Theme from '../../../styles/themes/light';
import { Panel } from '../../components/Panel';
import { Children } from '../../types/children';
import { Content } from './styles';
import Header from './Header';

interface Props extends Children { }

const Navigation = (props: Props) => {
  const { children } = props;
  const isDesktop = useMediaQuery(`(min-width: ${Theme.breakpoints.small}px)`);

  return (
    <>
      <Header />
      <Content>
        {children}
      </Content>
      <Panel
        initial={{
          height: '100vh',
        }}
        animate={{
          height: isDesktop ? '15.5rem' : '17.5rem',
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
    </>
  );
};

export default Navigation;
