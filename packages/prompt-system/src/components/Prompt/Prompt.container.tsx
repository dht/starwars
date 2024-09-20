import { useMemo } from 'react';
import ReactDOM from 'react-dom';
import { Prompt } from './Prompt';
import { usePromptReceiver } from './Prompt.hooks';

export type PromptContainerProps = {};

export function PromptContainer(_props: PromptContainerProps) {
  const { show, params, onSubmit, onCancel } = usePromptReceiver();

  const callbacks = useMemo(
    () => ({
      onSubmit: (value: boolean | Json) => {
        onSubmit(value);
      },
      onCancel: () => {
        onCancel();
      },
    }),
    [onSubmit, onCancel]
  );

  const promptElement = document.getElementById('prompt');

  if (!promptElement) {
    return null;
  }

  return ReactDOM.createPortal(
    <Prompt show={show} params={params} callbacks={callbacks} />,
    promptElement
  );
}

export default PromptContainer;
