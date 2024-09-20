import { useMemo } from 'react';
import { DataGrid, DeleteIcon, GridRowModel, IconButton } from 'starwars-ui';
import { Wrapper } from './Table.style';
import { TableConfig } from './Table.types';

export type TableProps = {
  config: TableConfig;
  data: any[];
  loading?: boolean;
  onItemChange: (id: string, change: Json) => void;
  onItemDelete: (id: string) => void;
};

export function Table(props: TableProps) {
  const { config, data, loading } = props;

  const processRowUpdate = (newRow: GridRowModel, _oldRow: GridRowModel) => {
    props.onItemChange(newRow.id, newRow);
    return newRow;
  };

  const columns = useMemo(
    () => [
      ...config.columns,
      {
        field: 'actions',
        headerName: 'Actions',
        width: 100,
        renderCell: (params: any) => (
          <IconButton onClick={() => props.onItemDelete(params.id)}>
            <DeleteIcon />
          </IconButton>
        ),
        sortable: false,
        filterable: false,
      },
    ],
    [config.columns, data]
  );

  return (
    <Wrapper className='Table-wrapper' data-testid='Table-wrapper'>
      <DataGrid
        rows={data}
        columns={columns}
        loading={loading}
        rowHeight={40}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        sx={{ backgroundColor: 'white', maxHeight: '550px', minHeight: '300px' }}
        disableRowSelectionOnClick
        processRowUpdate={processRowUpdate}
      />
    </Wrapper>
  );
}

export default Table;
