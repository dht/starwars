import { TableConfig } from 'table-system';

export const config: TableConfig = {
  id: 'people',
  columns: [
    {
      field: 'name',
      headerName: 'Name',
      width: 150,
      editable: true,
    },
    {
      field: 'height',
      headerName: 'Height',
      type: 'number',
      width: 150,
      editable: true,
    },
    {
      field: 'mass',
      headerName: 'Mass',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'birth_year',
      headerName: 'Birth Year',
      width: 110,
      editable: true,
    },
  ],
};
