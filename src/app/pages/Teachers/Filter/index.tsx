import React from 'react';
import { Container } from './styles';
import TextField from '../../../common/components/TextField';

interface Props {
  onSubmit: (e: any) => void;
}

const Filter: React.FC<Props> = (props) => {
  const { onSubmit } = props;

  return (
    <Container
      onSubmit={onSubmit}
    >
      <div>
        <TextField
          label="Matérias"
          type="text"
          id="subject"
        />
      </div>
      <div>
        <TextField
          label="Dia da Semana"
          type="text"
          id="week_day"
        />
      </div>
      <div>
        <TextField
          label="Tempo"
          type="text"
          id="time"
        />
      </div>
    </Container>
  );
};

export default Filter;
