import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Dialog, DialogProps } from './Dialog';
import { BaseComponentDriver } from 'testing-base';

export class DialogDriver extends BaseComponentDriver {
    private props: Partial<DialogProps> = {};

    constructor() {
        super('Dialog');
    }

    when: any = {
        rendered: () => {
            render(<Dialog {...(this.props as DialogProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Dialog {...(this.props as DialogProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<DialogProps>) => {
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
