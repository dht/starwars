export type PromptParamsConfirm = {
  type: 'confirm'; // future: 'input', 'form', 'custom'
  title: string;
  message: string;
  confirmText?: string;
  confirmColor?: 'primary' | 'secondary' | 'error' | 'success';
  cancelText?: string;
};

export type PromptParams = PromptParamsConfirm;

export type PromptResponse = {
  value: boolean;
  didCancel: boolean;
};
