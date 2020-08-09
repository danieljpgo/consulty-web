import React from 'react';
import { Container } from './styles';
import Item from './Item';

const mock = [
  {
    id: '1', name: 'Daniel Jorge', type: 'educação fisica', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin finibus convallis dignissim', history: 'Donec viverra urna vel neque finibus imperdiet. Morbi fermentum nibh neque, aliquet lacinia odio fringilla eu.',
  },
  {
    id: '2', name: 'teste', type: 'educação fisica', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin finibus convallis dignissim', history: 'Donec viverra urna vel neque finibus imperdiet. Morbi fermentum nibh neque, aliquet lacinia odio fringilla eu.',
  },
];

// interface Props {

// }

const List: React.FC = () => (
  <Container>
    {mock.map((teacher) => (
      <Item
        key={teacher.id}
        id={teacher.id}
        name={teacher.name}
        type={teacher.type}
        description={teacher.description}
        history={teacher.history}
      />
    ))}
  </Container>
);
export default List;
