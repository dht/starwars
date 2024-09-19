import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Form, FormProps } from './Form';
import { BaseComponentDriver } from 'testing-base';

export class FormDriver extends BaseComponentDriver {
    private props: Partial<FormProps> = {};

    constructor() {
        super('Form');
    }

    when: any = {
        rendered: () => {
            render(<Form {...(this.props as FormProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Form {...(this.props as FormProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<FormProps>) => {
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
