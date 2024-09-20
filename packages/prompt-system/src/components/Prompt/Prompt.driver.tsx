import { fireEvent, render } from '@testing-library/react';
import { BaseComponentDriver } from 'testing-base';
import { Prompt, PromptProps } from './Prompt';

export class PromptDriver extends BaseComponentDriver {
  private props: Partial<PromptProps> = {};

  constructor() {
    super('Prompt');
  }

  when: any = {
    rendered: () => {
      render(<Prompt {...(this.props as PromptProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<Prompt {...(this.props as PromptProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<PromptProps>) => {
      this.props = props;
      return this;
    },
  };

  get = {
    WrapperClassName: () => {
      return this.wrapper.className;
    },
    label: () => {
      return this.wrapper.innerHTML;
    },
  };
}
