import React from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import Theme from '../../../styles/themes/light';
import { Panel } from './styles';

interface Props {
  children: React.ReactNode
}

const Home: React.FC<Props> = (props) => {
  const { children } = props;
  const isDesktop = useMediaQuery(`(min-width: ${Theme.breakpoints.small}px)`);

  return (
    <React.Fragment>
      {children}
      <Panel
        initial={{
          height: '100vh',
        }}
        animate={{
          height: isDesktop ? ' 46.7vh' : '54vh',
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
    </React.Fragment>
  );
};

export default Home;
