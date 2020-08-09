import React from 'react';
import { Container } from './styles';
import Button from '../../../../common/components/LinkButton';
import whatsappIcon from '../../../../common/assets/icons/whatsapp.svg';

interface Props {
  id: string,
  name: string,
  type: string,
  description: string,
  history: string,
}

const Item: React.FC<Props> = (props) => {
  const {
    id,
    name,
    type,
    description,
    history,
  } = props;

  return (
    <Container>
      <div>
        <header>
          <img
            alt={name}
            src="https://avatars0.githubusercontent.com/u/37938090?s=460&u=139da297b51ea25e70597485f65d346cc86ec2a5&v=4"
          />
          <strong>{name}</strong>
          <span>{type}</span>
        </header>
        <p>{description}</p>
        <p>{history}</p>
      </div>
      <footer>
        <div>
          <span>Preço/hora</span>
          <span>R$ 20,00</span>
        </div>
        <Button
          to=""
          styleVariants="secundary"
        >
          <img
            src={whatsappIcon}
            alt="Whatsapp"
          />
          <span>Entrar em contato</span>
        </Button>
      </footer>
    </Container>
  );
};

export default Item;
