import React from 'react';
import { Container, Alert } from './styles';
import Item from './Item';
import { Consultant } from '../index';

interface Props {
  consultants: Consultant[],
  onWhatsappClick: (whatsapp: string, user_id: number) => void,
}

const defaultProps = {
  consultants: [],
};

const List: React.FC<Props> = (props) => {
  const { consultants, onWhatsappClick } = props;

  return (
    <Container>
      {!consultants.length && (
        <Alert>
          Nenhum consultor encontrado
          <br />
          com sua pesquisa
        </Alert>
      )}
      {consultants.map((teacher) => (
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
