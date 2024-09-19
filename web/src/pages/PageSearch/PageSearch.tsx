import React from 'react';
import { Wrapper } from './PageSearch.style';

export type PageSearchProps = {};

export function PageSearch(_props: PageSearchProps) {
    return (
        <Wrapper className="PageSearch-wrapper" data-testid="PageSearch-wrapper">
            PageSearch
        </Wrapper>
    );
}

export default PageSearch;
