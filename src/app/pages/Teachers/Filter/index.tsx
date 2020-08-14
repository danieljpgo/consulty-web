import React from 'react';
import { Container } from './styles';
import TextField from '../../../common/components/TextField';

interface Props {
  onSubmit: (e: any) => void;
}

const Filter: React.FC<Props> = (props) => {
  const { onSubmit } = props;

  return (
    <Container onSubmit={onSubmit}>
      <div>
        <TextField
          id="subject"
          type="text"
          label="Matérias"
          constrast
        />
      </div>
      <div>
        <TextField
          id="week_day"
          type="text"
          label="Dia da Semana"
          constrast
        />
      </div>
      <div>
        <TextField
          id="time"
          type="text"
          label="Tempo"
          constrast
        />
      </div>
    </Container>
  );
};

export default Filter;
