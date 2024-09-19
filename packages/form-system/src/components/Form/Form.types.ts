export type FormConfig = {
  id: string;
  title: string;
  description: string;
  fields: FormField[];
  submitText: string;
};

export type FormField = {
  name: string;
  label: string;
  type: 'text' | 'number' | 'date';
  required?: boolean;
};
