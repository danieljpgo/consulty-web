import React, { Fragment } from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import Theme from '../../../styles/themes/light';
import { Panel } from '../../components/Panel';
import { Content } from './styles';
import Header from './Header';

interface Props {
  children: React.ReactNode
}

const Navigation: React.FC<Props> = (props) => {
  const { children } = props;
  const isDesktop = useMediaQuery(`(min-width: ${Theme.breakpoints.small}px)`);

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
    </Fragment>
  );
};

export default Navigation;
