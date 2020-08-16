import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
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
    <Container>
      <Brand>
        <img
          src={logo}
          alt="Plataforma de estudos"
        />
        <h2>Sua plataforma de estudos online.</h2>
      </Brand>

      <Hero
        src={landing}
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
