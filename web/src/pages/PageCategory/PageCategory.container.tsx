// import { selectors, useDispatch, useSelector } from 'starwars-store';
import React, { useMemo } from 'react';
import { PageCategory } from './PageCategory';

export type PageCategoryContainerProps = {};

export function PageCategoryContainer(_props: PageCategoryContainerProps) {
  // const dispatch = useDispatch();
  // const appState = useSelector(selectors.raw.$rawAppState);

  const callbacks = useMemo(
    () => ({
      onLogoClick: () => {
        alert(2);
      },
    }),
    []
  );

  return <PageCategory onLogoClick={callbacks.onLogoClick} />;
}

export default PageCategoryContainer;
