import React from 'react';
import * as yup from 'yup';
import { Formik, Field } from 'formik';
import { motion } from 'framer-motion';
import { Container } from './styles';
import TextField from '../../../common/components/TextField';
import SelectField from '../../../common/components/SelectField';
import { days, subject } from '../../../common/utils/constants';
import Button from '../../../common/components/Button';
import { errorRequired } from '../../../common/utils/errors';
import { upInOut } from '../../../common/utils/animations';

export interface Filter {
  subject: string,
  daysOfWeek: '-1' | '0' | '1' | '2' | '3' | '4' | '5' | '6',
  time: string,
}

interface Props {
  onSubmit: (values: Filter) => void;
}

const initialValues: Filter = {
  subject: '',
  daysOfWeek: '-1',
  time: '',
};

const validationSchema = yup.object({
  subject: yup
    .string()
    .required(errorRequired('tema')),
  daysOfWeek: yup
    .string()
    .oneOf(['0', '1', '2', '3', '4', '5', '6'], 'selecione uma data valida.')
    .required(errorRequired('dia da semana')),
  time: yup
    .string()
    .required(errorRequired('time')),
});

const Filter: React.FC<Props> = (props) => {
  const { onSubmit } = props;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => onSubmit(values)}
    >
      {({ handleSubmit, isValid }) => (
        <Container onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
          <motion.div variants={upInOut}>
            <Field
              id="subject"
              name="subject"
              label="Temas"
              options={subject}
              constrast
              as={SelectField}
            />
          </motion.div>
          <motion.div variants={upInOut}>
            <Field
              id="daysOfWeek"
              name="daysOfWeek"
              label="Dia da Semana"
              options={days}
              constrast
              as={SelectField}
            />
          </motion.div>
          <motion.div variants={upInOut}>
            <Field
              id="time"
              name="time"
              type="time"
              label="Tempo"
              constrast
              as={TextField}
            />
          </motion.div>
          <Button
            type="submit"
            size="small"
            disabled={!isValid}
            styleVariants="secundary"
          >
            Buscar
          </Button>
        </Container>
      )}
    </Formik>
  );
};

export default Filter;
