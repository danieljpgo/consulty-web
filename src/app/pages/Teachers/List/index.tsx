import React from 'react';
import { Container, Alert } from './styles';
import Item from './Item';
import { Teacher } from '../index';

interface Props {
  teachers: Teacher[],
  onWhatsappClick: (whatsapp: string, user_id: number) => void,
}

const defaultProps = {
  teachers: [],
};

const List: React.FC<Props> = (props) => {
  const { teachers, onWhatsappClick } = props;

  return (
    <Container>
      {!teachers.length && (
        <Alert>
          Nenhum professor encontrado
          <br />
          com sua pesquisa
        </Alert>
      )}
      {teachers.map((teacher) => (
        <Item
          key={teacher.id}
          name={teacher.name}
          subject={teacher.subject}
          bio={teacher.bio}
          avatar={teacher.avatar}
          whatsapp={teacher.whatsapp}
          cost={teacher.cost}
          user_id={teacher.user_id}
          onWhatsappClick={onWhatsappClick}
        />
      ))}
    </Container>
  );
};

List.defaultProps = defaultProps;

export default List;
