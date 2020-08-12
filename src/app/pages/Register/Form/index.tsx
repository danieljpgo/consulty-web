import React from 'react';
import { Container, Content } from './styles';
import Button from '../../../common/components/Button';
import Fieldset from './Fieldset';
import TextField from '../../../common/components/TextField';
import TextAreaField from '../../../common/components/TextAreaField';
import SelectField from '../../../common/components/SelectField';

const Form: React.FC = () => (
  <Container>
    <Content>
      <Fieldset title="Seus dados">
        <TextField
          id="name"
          type="text"
          label="Nome completo"
        />
        <TextField
          id="picture"
          type="text"
          label="Link da sua foto"
          hint="comece com http://"
        />
        <TextField
          id="whatsapp"
          type="text"
          label="Whatsapp"
          hint="somente números"
        />
        <TextAreaField
          id="bio"
          label="Biografia"
        />
      </Fieldset>

      <Fieldset title="Sobre a aula">
        <SelectField
          id="subject"
          label="Matéria"
          options={[{ label: 'Selecione qual você quer ensinar', value: 'undefined' }]}
        />
        <TextField
          id="price"
          type="text"
          label="Custo da sua hora por aula"
          hint="em R$"
        />
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
