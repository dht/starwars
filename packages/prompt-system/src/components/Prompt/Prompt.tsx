import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { Wrapper } from './Prompt.style';
import { PromptParams } from './Prompt.types';

export type PromptProps = {
  show: boolean;
  params: PromptParams | null;
  callbacks: {
    onSubmit: (value: boolean | string) => void;
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

  function onConfirm() {
    callbacks.onSubmit(true);
  }

  return (
    <Wrapper className='Prompt-wrapper' data-testid='Prompt-wrapper'>
      <Dialog
        open
        onClose={callbacks.onCancel}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>{title}</DialogTitle>
        <DialogContent sx={{ minWidth: '350px' }}>
          <DialogContentText id='alert-dialog-description'>{message}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={callbacks.onCancel}>{cancelText}</Button>
          <Button color={confirmColor} onClick={onConfirm} autoFocus>
            {confirmText}
          </Button>
        </DialogActions>
      </Dialog>
    </Wrapper>
  );
}

export default Prompt;
