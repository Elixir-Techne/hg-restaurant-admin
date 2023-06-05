'use client'

import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
} from '@mui/material'

import Table from '@/components/Table'
import { theme } from '@/theme'

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
]

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
]

export default function Waiter() {
  return (
    <Card
      sx={{
        maxHeight: '874px',
        borderRadius: '20px',
        filter: 'drop-shadow(0px 5px 12.5px rgba(82,87,93,0.1 ))',
        boxShadow: 'none',
        background: '#ffffff',
        margin: theme.spacing(10),
        paddingX: theme.spacing(9),
        paddingY: theme.spacing(3.5),
      }}
    >
      <CardHeader title="Waiters" sx={{ color: '#3C49FF' }} />
      <Divider variant="middle" />
      <CardContent>
        <Box display="flex" justifyContent="flex-end">
          <Button
            variant="contained"
            sx={{ borderRadius: '25px', margin: (theme) => theme.spacing(2) }}
          >
            + Add new
          </Button>
        </Box>
        <Table rows={rows} columns={columns} />
      </CardContent>
    </Card>
  )
}
