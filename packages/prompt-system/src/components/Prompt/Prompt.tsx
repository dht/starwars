import { Wrapper } from './Prompt.style';
import { PromptParams } from './Prompt.types';
import { Form } from 'form-system';
import { Dialog, DialogContentText } from 'starwars-ui';

export type PromptProps = {
  show: boolean;
  params: PromptParams | null;
  callbacks: {
    onSubmit: (value: boolean | Json) => void;
    onCancel: () => void;
  };
};

export function Prompt(props: PromptProps) {
  const { show, params, callbacks } = props;

  if (!show || !params) {
    return null;
  }

  const {
    title,
    message,
    confirmText = 'Confirm',
    cancelText = 'Cancel',
    confirmColor = 'primary',
  } = params;

  function onSubmit(value: boolean | Json) {
    callbacks.onSubmit(value);
  }

  function onConfirm() {
    onSubmit(true);
  }

  function renderInner() {
    switch (params?.type) {
      case 'confirm':
        return <DialogContentText id='alert-dialog-description'>{message}</DialogContentText>;
      case 'form':
        return <Form config={params.formConfig} onSave={onSubmit} onCancel={callbacks.onCancel} />;
      default:
    }
  }

  return (
    <Wrapper className='Prompt-wrapper' data-testid='Prompt-wrapper'>
      <Dialog
        title={title}
        onCancel={callbacks.onCancel}
        onSubmit={onConfirm}
        confirmText={confirmText}
        cancelText={cancelText}
        confirmColor={confirmColor}
        hideActions={params.type === 'form'}
      >
        {renderInner()}
      </Dialog>
    </Wrapper>
  );
}

export default Prompt;
