import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { Dialog as MuiDialog } from '@mui/material';
import React from 'react';
import { Wrapper } from './Dialog.style';

export type DialogProps = {
  title: string;
  description: string;
  children?: React.ReactNode;
  onClose: () => void;
};

export function Dialog(props: DialogProps) {
  const { title, description } = props;

  return (
    <Wrapper className='Dialog-wrapper' data-testid='Dialog-wrapper'>
      <MuiDialog open onClose={props.onClose}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          {description && <DialogContentText>{description}</DialogContentText>}
          {props.children}
        </DialogContent>
      </MuiDialog>
    </Wrapper>
  );
}

export default Dialog;
