import {
  Button,
  DialogActions,
  DialogContent,
  IconButton,
  Dialog as MuiDialog,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import classnames from 'classnames';
import React from 'react';
import { Actions, DialogTitle, Wrapper } from './Dialog.style';

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
  noPadding?: boolean;
  titleShadow?: boolean;
};

export function Dialog(props: DialogProps) {
  const {
    title,
    description,
    confirmText = 'Confirm',
    cancelText = 'Cancel',
    confirmColor = 'primary',
    hideActions,
    noPadding,
    titleShadow,
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

  const sx = {
    padding: noPadding ? 0 : 'auto',
    minWidth: '350px',
  };

  const className = classnames({
    titleShadow,
  });

  return (
    <Wrapper className='Dialog-wrapper' data-testid='Dialog-wrapper'>
      <MuiDialog
        open
        onClose={props.onCancel}
        aria-labelledby={title}
        aria-describedby={description}
      >
        {title && (
          <DialogTitle id='alert-dialog-title' className={className}>
            {title}
            <Actions>
              <IconButton aria-label='close' onClick={props.onCancel}>
                <CloseIcon />
              </IconButton>
            </Actions>
          </DialogTitle>
        )}
        <DialogContent sx={sx}>{props.children}</DialogContent>
        {renderActions()}
      </MuiDialog>
    </Wrapper>
  );
}

export default Dialog;
