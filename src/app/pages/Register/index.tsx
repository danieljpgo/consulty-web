import React from 'react';
import { motion } from 'framer-motion';
import { Container, Content } from './styles';
import Form from './Form';
import { stagger, upInOut } from '../../common/utils/animations';

const Register: React.FC = () => (
  <Container
    variants={stagger}
    initial="hidden"
    animate="show"
    exit="out"
  >
    <Content>
      <motion.h1 variants={upInOut}>
        Que incrível que você quer dar aulas.
      </motion.h1>
      <motion.span variants={upInOut}>
        O primeiro passo, é preencher esse formulário de inscrição.
      </motion.span>
    </Content>
    <Form />
  </Container>
);

export default Register;
