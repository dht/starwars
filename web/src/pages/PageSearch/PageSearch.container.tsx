import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageSearch } from './PageSearch';

export type PageSearchContainerProps = {};

export function PageSearchContainer(_props: PageSearchContainerProps) {
  const navigate = useNavigate();

  const callbacks = useMemo(
    () => ({
      onGroupClick: (group: string) => {
        navigate(`/category/${group}`);
      },
    }),
    []
  );

  return <PageSearch callbacks={callbacks} />;
}

export default PageSearchContainer;
