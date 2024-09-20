import { Wrapper } from './Button.style';
import { Button as MuiButton } from '@mui/material';

export type ButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  link?: boolean;
};

export function Button(props: ButtonProps) {
  const { type = 'button', link, disabled } = props;

  return (
    <Wrapper className='Button-wrapper' data-testid='Button-wrapper'>
      <MuiButton
        type={type}
        variant={link ? 'text' : 'contained'}
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
