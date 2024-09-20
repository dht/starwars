import { FormConfig } from 'form-system';

export type PromptParamsBase = {
  type: 'confirm' | 'form';
  title: string;
  message?: string;
  confirmText?: string;
  confirmColor?: 'primary' | 'secondary' | 'error' | 'success';
  cancelText?: string;
};

export type PromptParamsConfirm = PromptParamsBase & {
  type: 'confirm';
  message: string;
};

export type PromptParamsForm = PromptParamsBase & {
  type: 'form';
  formConfig: FormConfig;
};

export type PromptParams = PromptParamsConfirm | PromptParamsForm;

export type PromptResponse = {
  value: boolean | Json;
  didCancel: boolean;
};
