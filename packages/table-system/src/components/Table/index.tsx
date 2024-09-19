import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const Table = lazy(() => import('./Table.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.table',
  name: 'Table',
  description: 'Table',
  component: (instance: IElement) => <Table {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
