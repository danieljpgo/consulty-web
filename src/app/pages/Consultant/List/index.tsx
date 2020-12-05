import React from 'react';
import { staggerList } from '../../../common/utils/animations';
import { Consultant } from '../index';
import Item from './Item';
import { Container, Alert } from './styles';

interface Props {
  consultants: Consultant[],
  onWhatsappClick: (whatsapp: string, user_id: number) => void,
}

const List = (props: Props) => {
  const { consultants, onWhatsappClick } = props;

  return (
    <div>
      {!consultants.length && (
        <Alert>
          Nenhum consultor encontrado
          <br />
          com sua pesquisa
        </Alert>
      )}
      <Container
        variants={staggerList}
        initial="hidden"
        animate="show"
        exit="out"
      >
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
    </div>
  );
};

export default List;
