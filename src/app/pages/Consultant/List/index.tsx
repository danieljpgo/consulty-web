import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Container, Alert } from './styles';
import Item from './Item';
import { Consultant } from '../index';
import { stagger, staggerX, fadeInUp } from '../../../common/utils/animations';

interface Props {
  consultants: Consultant[],
  onWhatsappClick: (whatsapp: string, user_id: number) => void,
}

const List: React.FC<Props> = (props) => {
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
        variants={staggerX}
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
