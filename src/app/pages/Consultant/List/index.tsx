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
      {consultants.map((consultant) => (
        <Item
          key={consultant.id}
          name={consultant.name}
          subject={consultant.subject}
          bio={consultant.bio}
          avatar={consultant.avatar}
          whatsapp={consultant.whatsapp}
          cost={consultant.cost}
          user_id={consultant.user_id}
          onWhatsappClick={onWhatsappClick}
        />
      ))}
    </Container>
  );
};

List.defaultProps = defaultProps;

export default List;
