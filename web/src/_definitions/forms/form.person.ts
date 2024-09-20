import { FormConfig } from 'form-system';

export const config: FormConfig = {
  id: 'person',
  title: 'Create Person',
  description: 'Add your addition to the Star Wars universe:',
  submitText: 'Create',
  minWidth: 600,
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
    {
      name: 'height',
      label: 'Height',
      type: 'number',
      required: true,
    },
    {
      name: 'mass',
      label: 'Mass',
      type: 'number',
      required: true,
    },
    {
      name: 'birth_year',
      label: 'Birth Year',
      type: 'text',
      required: true,
    },
  ],
};
