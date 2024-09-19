import { Wrapper } from './Button.style';
import MuiButton from '@mui/material/Button';

export type ButtonProps = {
  children?: React.ReactNode;
};

export function Button(props: ButtonProps) {
  return (
    <Wrapper className='Button-wrapper' data-testid='Button-wrapper'>
      <MuiButton variant='contained'>{props.children}</MuiButton>;
    </Wrapper>
  );
}

export default Button;
