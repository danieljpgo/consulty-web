import React from 'react';
import { Container, Alert } from './styles';
import Item from './Item';

interface Props {
  teachers: any[],
  onWhatsappClick: () => void,
}

const defaultProps = {
  teachers: [],
};

const List: React.FC<Props> = (props) => {
  const { teachers, onWhatsappClick } = props;

  return (
    <Container>
      {!teachers.length && (
        <Alert>
          Nenhum professor encontrado
          <br />
          com sua pesquisa
        </Alert>
      )}
      {teachers.map((teacher) => (
        <Item
          key={teacher.id}
          id={teacher.id}
          name={teacher.name}
          type={teacher.type}
          description={teacher.description}
          history={teacher.history}
          onWhatsappClick={onWhatsappClick}
        />
      ))}
    </Container>
  );
};

List.defaultProps = defaultProps;

export default List;
