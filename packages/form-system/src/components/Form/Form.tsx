import { useForm } from 'react-hook-form';
import { Button, TextField } from 'starwars-ui';
import { Actions, Content, SideImage, Wrapper } from './Form.style';
import { FormConfig, FormField } from './Form.types';
import { randomNumber, randomWord } from './Form.utils';

export type FormProps = {
  config: FormConfig;
  onSave: (data: Json) => void;
  onCancel: () => void;
};

export function Form(props: FormProps) {
  const { config } = props;
  const { fields = [], submitText, sideImageUrl, minWidth } = config;
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
        fullWidth
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
        <Button link onClick={onRandom}>
          Random
        </Button>
        <Button type='submit'>{submitText}</Button>
      </Actions>
    );
  }

  const style = {
    minWidth: minWidth ? `${minWidth}px` : 'auto',
  };

  return (
    <Wrapper
      className='Form-wrapper'
      data-testid='Form-wrapper'
      style={style}
      onSubmit={handleSubmit(onSubmit)}
    >
      <SideImage style={{ backgroundImage: `url(${sideImageUrl})` }}></SideImage>
      <Content>
        {renderFields()}
        {renderSubmit()}
      </Content>
    </Wrapper>
  );
}

export default Form;
