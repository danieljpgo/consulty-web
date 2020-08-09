import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content, Brand } from './styles';
import backImg from '../../../assets/icons/back.svg';
import logo from '../../../assets/images/logo.svg';

const Header: React.FC = () => (
  <Container>
    <Content>
      <Link to="/">
        <img
          src={backImg}
          alt="Voltar para a home"
        />
      </Link>
      <Brand>
        <img
          src={logo}
          alt="Logo"
        />
      </Brand>
    </Content>
  </Container>
);

export default Header;
