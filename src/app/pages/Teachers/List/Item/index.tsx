import React from 'react';
import { Container } from './styles';
import Button from '../../../../common/components/Button';
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

  function handleWhatsappClick() {
    console.log('click');
  }

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
          <strong>R$ 20,00</strong>
        </div>
        <Button
          type="button"
          icon={whatsappIcon}
          alt="Whatsapp"
          size="small"
          styleVariants="secundary"
          onClick={() => handleWhatsappClick()}
        >
          Entrar em contato
        </Button>
      </footer>
    </Container>
  );
};

export default Item;
