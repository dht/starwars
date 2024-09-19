import React from 'react';
import { Wrapper } from './Field.style';
import { FormField } from '../Form/Form.types';
import { useController, UseControllerProps } from 'react-hook-form';

export type FieldProps = {
  field: FormField;
  control: any;
};

export function Field(props: UseControllerProps<FieldProps>) {
  const { field, fieldState } = useController(props);

  return (
    <Wrapper className='Field-wrapper' data-testid='Field-wrapper'>
      <input placeholder={props.name} />
      <p>{fieldState.isTouched && 'Touched'}</p>
      <p>{fieldState.isDirty && 'Dirty'}</p>
      <p>{fieldState.invalid ? 'invalid' : 'valid'}</p>
    </Wrapper>
  );
}

export default Field;
