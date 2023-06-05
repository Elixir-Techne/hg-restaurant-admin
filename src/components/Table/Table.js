import Box from '@mui/material/Box'
import { DataGrid } from '@mui/x-data-grid'
import * as React from 'react'

import '../../styles/table.css'

export default function Table({ rows, columns }) {
  return (
    <Box display="block">
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  )
}
