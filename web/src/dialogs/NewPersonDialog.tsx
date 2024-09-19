import { Form } from 'form-system';
import { forms } from '../_definitions';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Json } from '../types';
import { invokeEvent } from 'shared-base';

export function NewPersonDialog() {
  const navigate = useNavigate();

  const callbacks = useMemo(
    () => ({
      onSave: (data: Json) => {
        invokeEvent('create/person', data);
      },
      onCancel: () => {
        navigate(-1);
      },
    }),
    []
  );

  return (
    <Form
      config={forms.person}
      isModal={true}
      onSave={callbacks.onSave}
      onCancel={callbacks.onCancel}
    />
  );
}
