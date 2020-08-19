import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Content } from './styles';
import Filter, { Filter as FilterValues } from './Filter';
import List from './List';
import api from '../../common/services/api';
import { stagger } from '../../common/utils/animations';

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
    await api.post('connections', { user_id });
    window.location.href = `https://wa.me/${whatsapp}`;
  }

  return (
    <Container
      variants={stagger}
      initial="hidden"
      animate="show"
      exit="out"
    >
      <motion.h1>
        Estes são os
        <br />
        proffys disponíveis.
      </motion.h1>

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
