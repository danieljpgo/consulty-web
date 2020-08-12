import React from 'react';
import { Container, Content } from './styles';
import Form from './Form';

const Register: React.FC = () => (
  <Container>
    <Content>
      <h1>
        Que incrível que você quer dar aulas.
      </h1>
      <span>
        O primeiro passo, é preencher esse formulário de inscrição.
      </span>
    </Content>
    <Form />
  </Container>
);

export default Register;
