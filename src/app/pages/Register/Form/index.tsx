import React from 'react';
import { Container, Content } from './styles';
import Button from '../../../common/components/Button';
import Fieldset from './Fieldset';

const Form: React.FC = () => (
  <Container>
    <Content>
      <Fieldset title="Seus dados">
        a
      </Fieldset>
      <Fieldset title="Sobre a aula">
        a
      </Fieldset>
      <Fieldset title="Horários disponíveis">
        a
      </Fieldset>
    </Content>
    <footer>
      <div>
        <div>a</div>
        <div>Importante !</div>
        <div>Preencha todos os dados</div>
      </div>

      <Button
        type="button"
        size="small"
        styleVariants="secundary"
      >
        Salvar cadastro
      </Button>
    </footer>
  </Container>
);

export default Form;
