import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { AutoComplete, AutoCompleteProps } from './AutoComplete';
import { BaseComponentDriver } from 'testing-base';

export class AutoCompleteDriver extends BaseComponentDriver {
    private props: Partial<AutoCompleteProps> = {};

    constructor() {
        super('AutoComplete');
    }

    when: any = {
        rendered: () => {
            render(<AutoComplete {...(this.props as AutoCompleteProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<AutoComplete {...(this.props as AutoCompleteProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<AutoCompleteProps>) => {
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
