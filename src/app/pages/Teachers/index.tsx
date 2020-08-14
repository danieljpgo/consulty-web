import React from 'react';
import { Container, Content } from './styles';
import Filter from './Filter';
import List from './List';

const mock = [
  {
    id: '1', name: 'Daniel Jorge', type: 'educação fisica', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin finibus convallis dignissim', history: 'Donec viverra urna vel neque finibus imperdiet. Morbi fermentum nibh neque, aliquet lacinia odio fringilla eu.',
  },
  {
    id: '2', name: 'teste', type: 'educação fisica', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin finibus convallis dignissim', history: 'Donec viverra urna vel neque finibus imperdiet. Morbi fermentum nibh neque, aliquet lacinia odio fringilla eu.',
  },
];

const Teachers: React.FC = () => {
  function handleFilterSubmit(e: any) {
    console.log(e);
  }

  function handleWhatsappClick() {
    console.log('teste');
  }

  return (
    <Container>
      <h1>
        Estes são os
        <br />
        proffys disponíveis.
      </h1>

      <Content>
        <Filter onSubmit={handleFilterSubmit} />
        <List
          teachers={mock}
          onWhatsappClick={() => handleWhatsappClick()}
        />
      </Content>
    </Container>
  );
};

export default Teachers;
