import styled from 'styled-components';
import { DialogTitle as MuiDialogTitle } from '@mui/material';

export const Wrapper = styled.div`
  flex: 1;
`;

export const Actions = styled.div``;

export const DialogTitle = styled(MuiDialogTitle)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  &.titleShadow {
    box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.05);
  }
`;
