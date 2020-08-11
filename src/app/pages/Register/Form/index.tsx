import React from 'react';
import { Container, Content } from './styles';
import Button from '../../../common/components/Button';
import Fieldset from './Fieldset';

const Form: React.FC = () => (
  <Container>
    <Content>
      <Fieldset title="teste">
        a
      </Fieldset>
      <Fieldset title="teste">
        a
      </Fieldset>
      <Fieldset title="teste">
        a
      </Fieldset>
    </Content>
    <footer>
      <div>
        <div>a</div>
        <div>b</div>
      </div>

      <Button
        type="button"
        size="small"
        styleVariants="secundary"
      >
        Salvar
      </Button>
    </footer>
  </Container>
);

export default Form;
