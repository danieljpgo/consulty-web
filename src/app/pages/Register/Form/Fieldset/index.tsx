import React from 'react';
import { Container } from './styles';

interface Props {
  title: string,
  children: React.ReactNode,
}

const Fieldset: React.FC<Props> = (props) => {
  const { title, children } = props;

  return (
    <Container>
      <legend>
        <h3>Seus Dados</h3>
      </legend>
      <hr />
      <div>
        {children}
      </div>
    </Container>
  );
};

export default Fieldset;
