import { addListener, invokeEvent } from 'shared-base';
import { PromptParamsConfirm, PromptParamsForm, PromptResponse } from './Prompt.types';

let promise: (value: PromptResponse | PromiseLike<PromptResponse>) => void;

const confirm = (params: Partial<PromptParamsConfirm>) => {
  return new Promise<PromptResponse>((resolve) => {
    invokeEvent('prompt/show', {
      params: {
        type: 'confirm',
        title: 'Are you sure?',
        confirmText: 'Yes',
        confirmColor: 'primary',
        cancelText: 'Cancel',
        ...params,
      },
    });

    promise = resolve;

    const unlisten = addListener('prompt/response', (ev) => {
      const { value, didCancel } = ev;

      promise({
        value,
        didCancel,
      });

      unlisten();
    });
  });
};

const form = (params: Partial<PromptParamsForm>) => {
  return new Promise<PromptResponse>((resolve) => {
    invokeEvent('prompt/show', {
      params: {
        type: 'form',
        title: 'Form',

        ...params,
      },
    });

    promise = resolve;

    const unlisten = addListener('prompt/response', (ev) => {
      const { value, didCancel } = ev;

      promise({
        value,
        didCancel,
      });

      unlisten();
    });
  });
};

export const prompt = {
  confirm,
  form,
};
