import React, { useState } from 'react';
import { Container, Content } from './styles';
import Filter, { Filter as FilterValues } from './Filter';
import List from './List';
import api from '../../common/services/api';

export interface Teacher {
  avatar: string,
  bio: string,
  cost: number,
  id: number,
  name: string,
  subject: string,
  user_id: number,
  whatsapp: string,
}

const Teachers: React.FC = () => {
  const [teachers, setTeachers] = useState<Teacher[]>([]);

  async function handleFilterSubmit(filter: FilterValues) {
    const params = {
      week_day: filter.daysOfWeek,
      subject: filter.subject,
      time: filter.time,
    };

    const { data } = await api.get('classes', { params });

    setTeachers(data);
  }

  async function handleWhatsappClick(whatsapp: string, user_id: number) {
    const { data } = await api.post('connections', { user_id });
    window.location.href = `https://wa.me/${whatsapp}`;
  }

  return (
    <Container>
      <h1>
        Estes são os
        <br />
        proffys disponíveis.
      </h1>

      <Content>
        <Filter onSubmit={handleFilterSubmit} />
        <List
          teachers={teachers}
          onWhatsappClick={handleWhatsappClick}
        />
      </Content>
    </Container>
  );
};

export default Teachers;
