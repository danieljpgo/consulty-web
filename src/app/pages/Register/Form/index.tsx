import React from 'react';
import {
  Formik,
  FormikHelpers,
  Field,
  FieldArray,
  FormikErrors,
} from 'formik';
import * as yup from 'yup';
import { Container, Form as FormContent, InputsContainer } from './styles';
import Button from '../../../common/components/Button';
import Fieldset from './Fieldset';
import TextField from '../../../common/components/TextField';
import TextAreaField from '../../../common/components/TextAreaField';
import SelectField from '../../../common/components/SelectField';
import warningIcon from '../../../common/assets/icons/warning.svg';
import { days, subject } from '../../../common/utils/constants';
import { errorRequired } from '../../../common/utils/errors';

interface Schedule {
  dayOfWeek: '0' | '1' | '2' | '3' | '4' | '5' | '6',
  from: string,
  to: string,
}

interface FormProps {
  name: string,
  picture: string,
  whatsapp: string,
  bio: string,
  subject: string,
  price: string,
  schedules: Schedule[],
}

const initialValues: FormProps = {
  name: '',
  picture: '',
  whatsapp: '',
  bio: '',
  subject: '',
  price: '',
  schedules: [{ dayOfWeek: '1', from: '', to: '' }],
};

const validationSchema = yup.object({
  name: yup.string().required(errorRequired('nome')),
  picture: yup.string().required(errorRequired('foto')),
  whatsapp: yup.string().required(errorRequired('whatsapp')),
  bio: yup.string().required(errorRequired('biografia')),
  subject: yup.string().required(errorRequired('matéria')),
  price: yup.string().required(errorRequired('preço')),
  schedules: yup.array().of(yup.object().shape({
    dayOfWeek: yup.string()
      .oneOf(['0', '1', '2', '3', '4', '5', '6'], 'selecione uma data valida.')
      .required(errorRequired('dia da semana')),
    from: yup.string().required(errorRequired('campo')),
    to: yup.string().required(errorRequired('campo')),
  })),
});

const Form: React.FC = () => {
  function handleFormSubmit(values: FormProps, helper: FormikHelpers<FormProps>) {
    console.log(values);
    console.log(helper);
  }

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, helper) => handleFormSubmit(values, helper)}
      >
        {({
          values, errors, handleSubmit, touched,
        }) => (
            <FormContent onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            >
              <Fieldset title="Seus dados">
                <Field
                  id="name"
                  name="name"
                  type="text"
                  label="Nome completo"
                  error={touched.name && errors.name}
                  as={TextField}
                />
                <Field
                  id="picture"
                  name="picture"
                  type="text"
                  label="Link da sua foto"
                  hint="comece com http://"
                  error={touched.picture && errors.picture}
                  as={TextField}
                />
                <Field
                  id="whatsapp"
                  name="whatsapp"
                  type="text"
                  label="Whatsapp"
                  hint="somente números"
                  error={touched.whatsapp && errors.whatsapp}
                  as={TextField}
                />
                <Field
                  id="bio"
                  name="bio"
                  label="Biografia"
                  error={touched.bio && errors.bio}
                  as={TextAreaField}
                />
              </Fieldset>
              <Fieldset title="Sobre a aula">
                <Field
                  id="subject"
                  name="subject"
                  label="Matéria"
                  options={subject}
                  error={touched.subject && errors.subject}
                  as={SelectField}
                />
                <Field
                  id="price"
                  name="price"
                  type="text"
                  label="Custo da sua hora por aula"
                  hint="em R$"
                  error={touched.price && errors.price}
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
                          error={touched.schedules
                            && touched.schedules[index]?.dayOfWeek
                            && errors.schedules
                            && (errors.schedules as FormikErrors<Schedule[]>)[index]?.dayOfWeek}
                          as={SelectField}
                        />
                        <Field
                          id={`schedules.${index}.from`}
                          name={`schedules.${index}.from`}
                          type="time"
                          label="Das"
                          error={
                            touched.schedules
                            && touched.schedules[index]?.from
                            && errors.schedules
                            && (errors.schedules as FormikErrors<Schedule[]>)[index]?.from
                          }
                          as={TextField}
                        />
                        <Field
                          id={`schedules.${index}.to`}
                          name={`schedules.${index}.to`}
                          type="time"
                          label="Até"
                          error={
                            touched.schedules
                            && touched.schedules[index]?.to
                            && errors.schedules
                            && (errors.schedules as FormikErrors<Schedule[]>)[index]?.to
                          }
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
                {JSON.stringify(touched, null, 2)}
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
