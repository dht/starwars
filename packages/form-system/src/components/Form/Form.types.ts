export type FormConfig = {
  id: string;
  title: string;
  description: string;
  fields: FormField[];
  submitText: string;
  sideImageUrl?: string;
  minWidth?: number;
};

export type FormField = {
  name: string;
  label: string;
  type: 'text' | 'number' | 'date';
  required?: boolean;
};
