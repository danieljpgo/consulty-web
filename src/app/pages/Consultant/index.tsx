import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Content } from './styles';
import Filter, { Filter as FilterValues } from './Filter';
import List from './List';
import api from '../../common/services/api';
import { stagger, upInOut } from '../../common/utils/animations';

export interface Consultant {
  avatar: string,
  bio: string,
  cost: number,
  id: number,
  name: string,
  subject: string,
  user_id: number,
  whatsapp: string,
}

const Consultants: React.FC = () => {
  const [consultants, setConsultants] = useState<Consultant[]>([]);

  async function handleFilterSubmit(filter: FilterValues) {
    const params = {
      week_day: filter.daysOfWeek,
      subject: filter.subject,
      time: filter.time,
    };

    const { data } = await api.get('classes', { params });

    setConsultants(data);
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
      <motion.h1 variants={upInOut}>
        Estes são os
        <br />
        consultores disponíveis.
      </motion.h1>

      <Content>
        <Filter onSubmit={handleFilterSubmit} />
        <List
          consultants={consultants}
          onWhatsappClick={handleWhatsappClick}
        />
      </Content>
    </Container>
  );
};

export default Consultants;
