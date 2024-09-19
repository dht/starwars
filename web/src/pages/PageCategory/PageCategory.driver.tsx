import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PageCategory, PageCategoryProps } from './PageCategory';
import { BaseComponentDriver } from 'testing-base';

export class PageCategoryDriver extends BaseComponentDriver {
    private props: Partial<PageCategoryProps> = {};

    constructor() {
        super('PageCategory');
    }

    when: any = {
        rendered: () => {
            render(<PageCategory {...(this.props as PageCategoryProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<PageCategory {...(this.props as PageCategoryProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<PageCategoryProps>) => {
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
