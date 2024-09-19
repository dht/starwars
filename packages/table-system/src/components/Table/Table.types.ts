import { GridColDef } from '@mui/x-data-grid';

export type TableConfig = {
  id: string;
  columns: TableColumn[];
};

export type TableColumn = GridColDef & {};
