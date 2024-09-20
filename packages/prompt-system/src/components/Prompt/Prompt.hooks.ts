import { useEffect, useState } from 'react';
import { addListener, invokeEvent } from 'shared-base';
import { prompt } from './Prompt.actions';
import { PromptParams } from './Prompt.types';

export function usePromptReceiver() {
  const [show, setShow] = useState(false);
  const [params, setParams] = useState<PromptParams | null>(null);

  useEffect(() => {
    const unlisten = addListener('prompt/show', (ev) => {
      const { params } = ev;
      setShow(true);
      setParams(params);
    });

    return () => {
      unlisten();
    };
  }, []);

  const onSubmit = (value: boolean | Json) => {
    setShow(false);

    invokeEvent('prompt/response', {
      value,
      didCancel: false,
    });
  };

  const onCancel = () => {
    setShow(false);

    invokeEvent('prompt/response', {
      value: false,
      didCancel: true,
    });
  };

  return {
    show,
    params,
    onSubmit,
    onCancel,
  };
}

export function usePrompt() {
  return prompt;
}
