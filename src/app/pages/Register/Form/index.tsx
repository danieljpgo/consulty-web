import React from 'react';
import {
  Formik,
  Field,
  FieldArray,
  FormikErrors,
} from 'formik';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';
import { Container, Content, InputsContainer } from './styles';
import Button from '../../../common/components/Button';
import Fieldset from './Fieldset';
import TextField from '../../../common/components/TextField';
import TextAreaField from '../../../common/components/TextAreaField';
import SelectField from '../../../common/components/SelectField';
import warningIcon from '../../../common/assets/icons/warning.svg';
import { days, subject as subjectItems } from '../../../common/utils/constants';
import { errorRequired, brazilianCellRegex, nameRegex } from '../../../common/utils/errors';
import api from '../../../common/services/api';

interface Schedule {
  daysOfWeek: '0' | '1' | '2' | '3' | '4' | '5' | '6',
  from: string,
  to: string,
}

interface FormProps {
  name: string,
  avatar: string,
  whatsapp: string,
  bio: string,
  subject: string,
  cost: string,
  schedules: Schedule[],
}

const initialValues: FormProps = {
  name: '',
  avatar: '',
  whatsapp: '',
  bio: '',
  subject: '',
  cost: '',
  schedules: [{
    daysOfWeek: '0', from: '', to: '',
  }],
};

function uniqueTest(ref: yup.TestContext, value: any): boolean {
  const array = (ref as any).from[1].value.schedules;
  return !(array.find((schedule: Schedule, index: number) => (
    (index !== (ref.options as any).index) && schedule.daysOfWeek === value)));
}

const validationSchema = yup.object({
  name: yup
    .string()
    .matches(nameRegex, 'inserir nome e sobrenome.')
    .min(5, 'inserir o nome completo.')
    .required(errorRequired('nome')),
  avatar: yup
    .string()
    .url('inserir um url válida.')
    .required(errorRequired('foto')),
  whatsapp: yup
    .string()
    .matches(brazilianCellRegex, 'inserir um número de telefone válido.')
    .required(errorRequired('whatsapp')),
  bio: yup
    .string()
    .required(errorRequired('biografia')),
  subject: yup
    .string()
    .required(errorRequired('matéria')),
  cost: yup
    .number()
    .positive('apenas valores positivos.')
    .integer('inserir um valor inteiro.')
    .required(errorRequired('preço')),
  schedules: yup
    .array()
    .of(yup.object({
      daysOfWeek: yup
        .string()
        .oneOf(['0', '1', '2', '3', '4', '5', '6'], 'selecione uma data valida.')
        .test('unique', 'dia da semana já selecionado.', function (value) { return uniqueTest(this, value); })
        .required(errorRequired('dia da semana')),
      from: yup
        .string()
        .required(errorRequired('campo')),
      to: yup
        .string()
        .required(errorRequired('campo')),
    })),
});

const Form: React.FC = () => {
  const history = useHistory();

  function handleFormSubmit(values: FormProps) {
    const {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      schedules,
    } = values;

    const body = {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      schedule: schedules.map((item) => ({
        week_day: Number(item.daysOfWeek),
        to: item.to,
        from: item.from,
      })),
    };

    api
      .post('classes', body)
      .then(() => history.push('/'))
      .catch(console.log);
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => handleFormSubmit(values)}
    >
      {({
        values, errors, handleSubmit, touched,
      }) => (
          <Container
            onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}
          >
            <Content>
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
                  id="avatar"
                  name="avatar"
                  type="text"
                  label="Link da sua foto"
                  hint="comece com http://"
                  error={touched.avatar && errors.avatar}
                  as={TextField}
                />
                <Field
                  id="whatsapp"
                  name="whatsapp"
                  type="text"
                  label="Whatsapp"
                  hint="somente números com DD"
                  error={touched.whatsapp && errors.whatsapp}
                  maxLength="11"
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
                  options={subjectItems}
                  error={touched.subject && errors.subject}
                  as={SelectField}
                />
                <Field
                  id="cost"
                  name="cost"
                  type="number"
                  label="Custo da sua hora por aula"
                  hint="em R$"
                  error={touched.cost && errors.cost}
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
                    {values.schedules.map((schedule, index) => (
                      <InputsContainer key={index.toString()}>
                        <Field
                          id={`schedules.${index}.daysOfWeek`}
                          name={`schedules.${index}.daysOfWeek`}
                          label="Dia da semana"
                          options={days}
                          error={errors.schedules
                            && (errors.schedules as FormikErrors<Schedule[]>)[index]?.daysOfWeek}
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
            </Content>
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
                type="submit"
                size="small"
                styleVariants="secundary"
              >
                Salvar cadastro
            </Button>
            </footer>
          </Container>
        )}
    </Formik>
  );
};

export default Form;
