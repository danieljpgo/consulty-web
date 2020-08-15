import React, { useState } from 'react';
import { Container, Content, InputsContainer } from './styles';
import Button from '../../../common/components/Button';
import Fieldset from './Fieldset';
import TextField from '../../../common/components/TextField';
import TextAreaField from '../../../common/components/TextAreaField';
import SelectField from '../../../common/components/SelectField';
import warningIcon from '../../../common/assets/icons/warning.svg';
import { days, subject } from '../../../common/utils/constants';

interface Schedule {
  day_of_week: 0 | 1 | 2 | 3 | 4 | 5 | 6,
  from: string,
  to: string,
}

const scheduleDefault: Schedule[] = [{ day_of_week: 0, from: '', to: '' }];

const Form: React.FC = () => {
  const [schedules, setSchedules] = useState<Schedule[]>(scheduleDefault);

  function handleAddSchedule(schedule: Schedule) {
    setSchedules((prev) => [...prev, schedule]);
  }

  return (
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
            options={subject}
            defaultValue="undefined"
          />
          <TextField
            id="price"
            type="text"
            label="Custo da sua hora por aula"
            hint="em R$"
          />
        </Fieldset>
        <Fieldset
          title="Horários disponíveis"
          action="Novo horário"
          onAddSchedule={() => handleAddSchedule(scheduleDefault[0])}
        >
          {schedules.map((schedule: Schedule) => (
            <InputsContainer key={schedule.day_of_week}>
              <SelectField
                id="day"
                label="Dia da semana"
                options={days}
                defaultValue="undefined"
              />
              <TextField
                id="from"
                type="time"
                label="Das"
              />
              <TextField
                id="to"
                type="time"
                label="Até"
              />
            </InputsContainer>
          ))}
        </Fieldset>
      </Content>

      <footer>
        <div>
          <img
            src={warningIcon}
            alt="Aviso"
          />
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
};

export default Form;
