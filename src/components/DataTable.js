import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'age', headerName: 'Age', width: 130 },
  { field: 'email', headerName: 'Email', width: 200 },
];

const rows = [
  { id: 1, name: 'Jon', age: 35, email: 'jon@example.com' },
  { id: 2, name: 'Cersei', age: 42, email: 'cersei@example.com' },
  { id: 3, name: 'Jaime', age: 45, email: 'jaime@example.com' },
];

const DataTable = () => {
  return <div style={{ height: 400, width: '100%' }}><DataGrid rows={rows} columns={columns} /></div>;
};

export default DataTable;
