import React from 'react';
import {
  Formik, FormikHelpers, Field, FieldArray,
} from 'formik';
import { Container, Form as FormContent, InputsContainer } from './styles';
import Button from '../../../common/components/Button';
import Fieldset from './Fieldset';
import TextField from '../../../common/components/TextField';
import TextAreaField from '../../../common/components/TextAreaField';
import SelectField from '../../../common/components/SelectField';
import warningIcon from '../../../common/assets/icons/warning.svg';
import { days, subject } from '../../../common/utils/constants';

interface Schedule {
  dayOfWeek: 0 | 1 | 2 | 3 | 4 | 5 | 6,
  from: string,
  to: string,
}

interface FormProps {
  name: string,
  picture: string,
  whatsapp: string,
  bio: string,
  subject: string,
  schedules: Schedule[],
}

const initialValues: FormProps = {
  name: '',
  picture: '',
  whatsapp: '',
  bio: '',
  subject: '',
  schedules: [{ dayOfWeek: 0, from: '', to: '' }],
};

const Form: React.FC = () => {
  // function handleAddSchedule(schedule: Schedule) {
  //   setSchedules((prev) => [...prev, schedule]);
  // }

  function handleFormSubmit(values: FormProps, helper: FormikHelpers<FormProps>) {
    console.log(values);
    console.log(helper);
  }

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, helper) => handleFormSubmit(values, helper)}
      >
        {({ values, errors, handleSubmit }) => (
          <FormContent onSubmit={handleSubmit}>
            <Fieldset title="Seus dados">
              <Field
                id="name"
                name="name"
                type="text"
                label="Nome completo"
                as={TextField}
              />
              <Field
                id="picture"
                name="picture"
                type="text"
                label="Link da sua foto"
                hint="comece com http://"
                as={TextField}
              />
              <Field
                id="whatsapp"
                name="whatsapp"
                type="text"
                label="Whatsapp"
                hint="somente números"
                as={TextField}
              />
              <Field
                id="bio"
                name="bio"
                label="Biografia"
                as={TextAreaField}
              />
            </Fieldset>
            <Fieldset title="Sobre a aula">
              <Field
                id="subject"
                name="subject"
                label="Matéria"
                options={subject}
                as={SelectField}
              />
              <Field
                id="price"
                name="price"
                type="text"
                label="Custo da sua hora por aula"
                hint="em R$"
                as={TextField}
              />
            </Fieldset>
            <FieldArray name="schedules">
              {({ push }) => (
                <Fieldset
                  title="Horários disponíveis"
                  action="Novo horário"
                  onAddSchedule={() => push(initialValues.schedules[0])}
                >
                  {values.schedules.map((schedule: Schedule, index) => (
                    <InputsContainer key={index.toString()}>
                      <Field
                        id={`schedules.${index}.dayOfWeek`}
                        name={`schedules.${index}.dayOfWeek`}
                        label="Dia da semana"
                        options={days}
                        as={SelectField}
                      />
                      <Field
                        id={`schedules.${index}.from`}
                        name={`schedules.${index}.from`}
                        type="time"
                        label="Das"
                        as={TextField}
                      />
                      <Field
                        id={`schedules.${index}.to`}
                        name={`schedules.${index}.to`}
                        type="time"
                        label="Até"
                        as={TextField}
                      />
                    </InputsContainer>
                  ))}
                </Fieldset>
              )}
            </FieldArray>
            <pre>
              {JSON.stringify(values, null, 2)}
              {JSON.stringify(errors, null, 2)}
            </pre>
          </FormContent>
        )}
      </Formik>

      <footer>
        <div>
          <img
            src={warningIcon}
            alt="Aviso"
          />
          <div>Importante !</div>
          <div>Preencha todos os dados</div>
        </div>
        <Button
          type="button"
          size="small"
          styleVariants="secundary"
        >
          Salvar cadastro
        </Button>
      </footer>
    </Container>
  );
};

export default Form;
