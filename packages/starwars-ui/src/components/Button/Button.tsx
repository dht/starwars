import { Wrapper } from './Button.style';
import MuiButton from '@mui/material/Button';

export type ButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

export function Button(props: ButtonProps) {
  const { disabled } = props;

  return (
    <Wrapper className='Button-wrapper' data-testid='Button-wrapper'>
      <MuiButton variant='contained' color='inherit' onClick={props.onClick} disabled={disabled}>
        {props.children}
      </MuiButton>
      ;
    </Wrapper>
  );
}

export default Button;
