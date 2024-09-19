import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Field, FieldProps } from './Field';
import { BaseComponentDriver } from 'testing-base';

export class FieldDriver extends BaseComponentDriver {
    private props: Partial<FieldProps> = {};

    constructor() {
        super('Field');
    }

    when: any = {
        rendered: () => {
            render(<Field {...(this.props as FieldProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Field {...(this.props as FieldProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<FieldProps>) => {
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
