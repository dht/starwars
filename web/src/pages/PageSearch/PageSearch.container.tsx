import { selectors, useDispatch, useSelector } from 'starwars-store';
import React, { useMemo } from 'react';
import { PageSearch } from './PageSearch';

export type PageSearchContainerProps = {};

export function PageSearchContainer(_props: PageSearchContainerProps) {
  const dispatch = useDispatch();
  const appState = useSelector(selectors.raw.$rawAppState);

  const callbacks = useMemo(
    () => ({
      onClick: () => {},
    }),
    []
  );

  return <PageSearch />;
}

export default PageSearchContainer;
