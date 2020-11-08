import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';
import { stagger, upInOut } from '../../common/utils/animations';
import classIcon from '../../common/assets/icons/give-classes.svg';
import landing from '../../common/assets/images/landing.svg';
import studyIcon from '../../common/assets/icons/study.svg';
import Button from '../../common/components/Button';
import api from '../../common/services/api';
import {
  Container,
  Brand,
  Hero,
  Footer,
  Counter,
  Welcome,
} from './styles';

const Landing: React.FC = () => {
  const [totalConnection, setTotalConnection] = useState(0);
  const history = useHistory();

  useEffect(() => {
    const getTotalConnection = async () => {
      const { data } = await api.get('connections/count');
      setTotalConnection(data.total);
    };

    getTotalConnection();
  }, []);

  function handleClick(path: string) {
    history.push(path);
  }

  const labelConnection = `Total de ${totalConnection} conexões já realizadas`;

  return (
    <Container
      variants={stagger}
      initial="hidden"
      animate="show"
      exit="out"
    >
      <Brand>
        <motion.h1 variants={upInOut}>Consulty</motion.h1>
        <motion.h2 variants={upInOut}>Sua plataforma de estudos online.</motion.h2>
      </Brand>
      <Hero
        src={landing}
        variants={upInOut}
        alt="Plataforma de estudos"
      />
      <Footer>
        <Welcome>
          <p>Seja bem-vindo.</p>
          <h2>O que deseja fazer?</h2>
        </Welcome>
        <Counter>
          {labelConnection}
        </Counter>
        <Button
          type="button"
          alt="Estudar"
          icon={studyIcon}
          size="large"
          styleVariants="primary"
          onClick={() => handleClick('/consultant')}
        >
          Estudar
        </Button>
        <Button
          type="button"
          alt="Dar aula"
          icon={classIcon}
          size="large"
          styleVariants="secundary"
          onClick={() => handleClick('/register')}
        >
          Dar aula
        </Button>
      </Footer>
    </Container>
  );
};

export default Landing;
