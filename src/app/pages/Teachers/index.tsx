import React from 'react';
import { Container, Content } from './styles';
import Filter from './Filter';
import List from './List';

const Teachers: React.FC = () => {
  function handleFilterSubmit(e: any) {
    console.log(e);
  }

  return (
    <Container>
      <h1>
        Estes são os proffys disponíveis.
      </h1>

      <Content>
        <Filter onSubmit={handleFilterSubmit} />
        <List />
      </Content>
    </Container>
  );
};

export default Teachers;
