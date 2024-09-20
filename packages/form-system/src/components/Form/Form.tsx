import { useForm } from 'react-hook-form';
import { Button, TextField } from 'starwars-ui';
import { Actions, Wrapper } from './Form.style';
import { FormConfig, FormField } from './Form.types';
import { randomNumber, randomWord } from './Form.utils';

export type FormProps = {
  config: FormConfig;
  onSave: (data: Json) => void;
  onCancel: () => void;
};

export function Form(props: FormProps) {
  const { config } = props;
  const { fields = [], submitText } = config;
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm({
    mode: 'onSubmit',
  });

  const onSubmit = (data: any) => {
    props.onSave(data);
  };

  // for development purposes only
  // fills the form with random data
  function onRandom() {
    fields.forEach((field: FormField) => {
      const { type } = field;
      const value = type === 'number' ? randomNumber(0, 100) : randomWord();
      setValue(field.name, value);
    });
  }

  function renderField(field: FormField) {
    const { name, required } = field;

    return (
      <TextField
        key={name}
        {...register(name, { required })}
        label={field.label}
        autoComplete='off'
        variant='filled'
        error={!!errors[name]}
        size='small'
        helperText={errors[name]?.message as string}
      />
    );
  }

  function renderFields() {
    return fields.map((field: FormField) => renderField(field));
  }

  function renderSubmit() {
    return (
      <Actions>
        <Button onClick={onRandom}>Random</Button>
        <Button type='submit'>{submitText}</Button>
      </Actions>
    );
  }

  return (
    <Wrapper className='Form-wrapper' data-testid='Form-wrapper' onSubmit={handleSubmit(onSubmit)}>
      {renderFields()}
      {renderSubmit()}
    </Wrapper>
  );
}

export default Form;
