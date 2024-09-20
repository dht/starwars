import { useEffect, useRef, useState } from 'react';
import { addListener, invokeEvent } from 'shared-base';
import { PromptParams, PromptParamsConfirm, PromptResponse } from './Prompt.types';

export function usePrompt() {
  const ref = useRef<(value: PromptResponse) => void>();

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

      ref.current = resolve;
    });
  };

  useEffect(() => {
    const unlisten = addListener('prompt/response', (ev) => {
      const { value, didCancel } = ev;

      if (!ref.current) return;

      ref.current({
        value,
        didCancel,
      });
    });

    return () => {
      unlisten();
    };
  }, []);

  return {
    confirm,
  };
}

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

  const onSubmit = (value: boolean | string) => {
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
