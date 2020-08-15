import React from 'react';
import { Container } from './styles';
import TextField from '../../../common/components/TextField';
import SelectField from '../../../common/components/SelectField';
import { days, subject } from '../../../common/utils/constants';

interface Props {
  onSubmit: (e: any) => void;
}

const Filter: React.FC<Props> = (props) => {
  const { onSubmit } = props;

  return (
    <Container onSubmit={onSubmit}>
      <div>
        <SelectField
          id="subject"
          label="Matérias"
          options={subject}
          defaultValue="undefined"
          constrast
        />
      </div>
      <div>
        <SelectField
          id="week_day"
          label="Dia da Semana"
          options={days}
          defaultValue="undefined"
          constrast
        />
      </div>
      <div>
        <TextField
          id="time"
          type="time"
          label="Tempo"
          constrast
        />
      </div>
    </Container>
  );
};

export default Filter;
