import React from 'react';
import { Container } from './styles';
import Button from '../../../../common/components/Button';
import whatsappIcon from '../../../../common/assets/icons/whatsapp.svg';
import { fadeInUp } from '../../../../common/utils/animations';

interface Props {
  name: string,
  avatar: string,
  subject: string,
  bio: string,
  whatsapp: string,
  cost: number,
  user_id: number,
  onWhatsappClick: (whatsapp: string, user_id: number) => void,
}

const Item: React.FC<Props> = (props) => {
  const {
    name,
    avatar,
    subject,
    bio,
    whatsapp,
    cost,
    user_id,
    onWhatsappClick,
  } = props;

  return (
    <Container variants={fadeInUp}>
      <div>
        <header>
          <img
            alt={name}
            src={avatar}
          />
          <strong>{name}</strong>
          <span>{subject}</span>
        </header>
        <p>{bio}</p>
      </div>
      <footer>
        <div>
          <span>Preço/hora</span>
          <strong>{`R$ ${cost}`}</strong>
        </div>
        <Button
          type="button"
          icon={whatsappIcon}
          alt="Whatsapp"
          size="small"
          styleVariants="secundary"
          onClick={() => onWhatsappClick(whatsapp, user_id)}
        >
          Entrar em contato
        </Button>
      </footer>
    </Container>
  );
};

export default Item;
