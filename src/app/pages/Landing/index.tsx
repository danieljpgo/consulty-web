import React from 'react';
import {
  Container,
  Content,
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

const Home: React.FC = () => (
  <Container>
    <Content>
      <Brand>
        {/* <img
          src={logo}
          alt="Plataforma de estudos"
        /> */}
        <h2>Sua plataforma de estudos online.</h2>
      </Brand>

      {/* <Hero
        src={landing}
        alt="Plataforma de estudos"
      /> */}

      <ButtonContainer>
        <Button
          href=""
          styleVariants="primary"
        >
          <img
            src={studyIcon}
            alt="Estudar"
          />
          <span>Estudar</span>
        </Button>
        <Button
          href=""
          styleVariants="secundary"
        >
          <img
            src={classIcon}
            alt="Estudar"
          />
          <span>Dar aula</span>
        </Button>
      </ButtonContainer>

      <Counter>
        <span>Total de 200 conexões já realizadas</span>
        <img
          src={purpleHeart}
          alt="Coração roxo"
        />
      </Counter>
    </Content>
  </Container>
);

export default Home;
