import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Container,
  Brand,
  Hero,
  ButtonContainer,
  Counter,
} from './styles';
import landing from '../../common/assets/images/landing.svg';
import logo from '../../common/assets/images/logo.svg';
import Button from '../../common/components/Button';
import studyIcon from '../../common/assets/icons/study.svg';
import classIcon from '../../common/assets/icons/give-classes.svg';
import purpleHeart from '../../common/assets/icons/purple-heart.svg';
import api from '../../common/services/api';
import { stagger, upInOut } from '../../common/utils/animations';

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
        <motion.img
          src={logo}
          variants={upInOut}
          alt="Plataforma de estudos"
        />
        <motion.h2 variants={upInOut}>Sua plataforma de estudos online.</motion.h2>
      </Brand>

      <Hero
        src={landing}
        variants={upInOut}
        alt="Plataforma de estudos"
      />

      <ButtonContainer>
        <Button
          type="button"
          alt="Estudar"
          icon={studyIcon}
          size="large"
          styleVariants="primary"
          onClick={() => handleClick('/teachers')}
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

        <Counter>
          <span>
            {labelConnection}
            <img
              src={purpleHeart}
              alt="Coração roxo"
            />
          </span>
        </Counter>
      </ButtonContainer>
    </Container>
  );
};

export default Landing;
// animate={{
//   x: [0, 3, 7, 3, 7, 3, 0],
// }}
// exit={{ opacity: 0 }}
// transition={{
//   yoyo: Infinity,
//   repeatDelay: 4,
// }}
