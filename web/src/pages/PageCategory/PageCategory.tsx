import React from 'react';
import { Wrapper } from './PageCategory.style';

export type PageCategoryProps = {};

export function PageCategory(_props: PageCategoryProps) {
    return (
        <Wrapper className="PageCategory-wrapper" data-testid="PageCategory-wrapper">
            PageCategory
        </Wrapper>
    );
}

export default PageCategory;
