import React from 'react';
import { Wrapper } from './Table.style';
import { DataGrid } from '@mui/x-data-grid';
import { columns, rows } from './Table.config';

export type TableProps = {};

export function Table(_props: TableProps) {
  return (
    <Wrapper className='Table-wrapper' data-testid='Table-wrapper'>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {},
          },
        }}
        sx={{ backgroundColor: 'white', maxHeight: '500px' }}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Wrapper>
  );
}

export default Table;
