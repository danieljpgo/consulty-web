import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Container, Content, Brand } from './styles';
import backImg from '../../../assets/icons/back.svg';
import logo from '../../../assets/images/logo.svg';

const Header: React.FC = () => (
  <Container>
    <Content>
      <motion.div
        whileHover={{
          x: 20,
        }}
        whileTap={{
          x: 0,
        }}
      >
        <Link to="/">
          <img
            src={backImg}
            alt="Voltar para a home"
          />
        </Link>
      </motion.div>

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
