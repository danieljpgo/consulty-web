import React from 'react';
import { Container } from './styles';

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
        <label htmlFor="subject">Matérias</label>
        <input
          type="text"
          id="subject"
        />
      </div>
      <div>
        <label htmlFor="week_day">Dia da Semana</label>
        <input
          type="text"
          id="week_day"
        />
      </div>
      <div>
        <label htmlFor="time">Tempo</label>
        <input
          type="text"
          id="time"
        />
      </div>
    </Container>
  );
};

export default Filter;
