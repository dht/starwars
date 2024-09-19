import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PageSearch, PageSearchProps } from './PageSearch';
import { BaseComponentDriver } from 'testing-base';

export class PageSearchDriver extends BaseComponentDriver {
    private props: Partial<PageSearchProps> = {};

    constructor() {
        super('PageSearch');
    }

    when: any = {
        rendered: () => {
            render(<PageSearch {...(this.props as PageSearchProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<PageSearch {...(this.props as PageSearchProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<PageSearchProps>) => {
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
