import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Dialog as MuiDialog,
} from '@mui/material';
import React from 'react';
import { Wrapper } from './Dialog.style';

export type DialogProps = {
  title: string;
  description?: string;
  children?: React.ReactNode;
  onSubmit: (value: boolean | Json) => void;
  onCancel: () => void;
  confirmText?: string;
  cancelText?: string;
  confirmColor?: 'primary' | 'secondary' | 'success' | 'error';
  hideActions?: boolean;
};

export function Dialog(props: DialogProps) {
  const {
    title,
    description,
    confirmText = 'Confirm',
    cancelText = 'Cancel',
    confirmColor = 'primary',
    hideActions,
  } = props;

  function renderActions() {
    if (hideActions) {
      return null;
    }

    return (
      <DialogActions>
        <Button onClick={props.onCancel}>{cancelText}</Button>
        <Button color={confirmColor} onClick={props.onSubmit} autoFocus>
          {confirmText}
        </Button>
      </DialogActions>
    );
  }

  return (
    <Wrapper className='Dialog-wrapper' data-testid='Dialog-wrapper'>
      <MuiDialog
        open
        onClose={props.onCancel}
        aria-labelledby={title}
        aria-describedby={description}
      >
        <DialogTitle id='alert-dialog-title'>{title}</DialogTitle>
        <DialogContent sx={{ minWidth: '350px' }}>{props.children}</DialogContent>
        {renderActions()}
      </MuiDialog>
    </Wrapper>
  );
}

export default Dialog;
