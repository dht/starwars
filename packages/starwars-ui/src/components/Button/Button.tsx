import { Wrapper } from './Button.style';
import { Button as MuiButton } from '@mui/material';

export type ButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
};

export function Button(props: ButtonProps) {
  const { type = 'button', disabled } = props;

  return (
    <Wrapper className='Button-wrapper' data-testid='Button-wrapper'>
      <MuiButton
        type={type}
        variant='contained'
        color='inherit'
        onClick={props.onClick}
        disabled={disabled}
      >
        {props.children}
      </MuiButton>
    </Wrapper>
  );
}

export default Button;
