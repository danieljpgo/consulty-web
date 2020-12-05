import React from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import { Panel } from '../../components/Panel';
import { Children } from '../../types/children';
import Theme from '../../../styles/themes/light';

interface Props extends Children { }

const Home = (props: Props) => {
  const { children } = props;
  const isDesktop = useMediaQuery(`(min-width: ${Theme.breakpoints.xllarge}px)`);

  return (
    <>
      {children}
      <Panel
        initial={{
          height: '100vh',
        }}
        animate={{
          height: isDesktop ? '47.5vh' : '47vh',
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

export default Home;
