import { Pagination, useMediaQuery } from '@mui/material'
import Box from '@mui/material/Box'
import {
  DataGrid,
  GRID_CHECKBOX_SELECTION_COL_DEF,
  GridCellCheckboxRenderer,
  GridPagination,
  gridPageCountSelector,
  useGridApiContext,
  useGridApiRef,
  useGridSelector,
} from '@mui/x-data-grid'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import AscendingSvg from '@/assets/icons/ascendingSvg'
import CheckboxSvg from '@/assets/icons/checkboxSvg'
import UnCheckboxSvg from '@/assets/icons/unChecboxSvg'

import '../../styles/table.css'
import { deleteWaiter, getWaiter } from '../../utils/api'
import ColumnActionButton from '../ColumnActionButtons'

function Cpagination({ page, onPageChange, className }) {
  const apiRef = useGridApiContext()
  const pageCount = useGridSelector(apiRef, gridPageCountSelector)

  return (
    <Pagination
      size="small"
      color="primary"
      className={className}
      count={pageCount}
      page={page + 1}
      onChange={(event, newPage) => {
        onPageChange(event, newPage - 1)
      }}
    />
  )
}

function CustomPagination(props) {
  return <GridPagination ActionsComponent={Cpagination} {...props} />
}

export default function Table({ rows, columns, data, title }) {
  const [rowData, setRowData] = useState(rows)
  const router = useRouter()
  const isMobile = useMediaQuery('(max-width:865px)')

  const [rowSelectionModel, setRowSelectionModel] = React.useState([])
  const apiRef = useGridApiRef()

  return (
    <Box display="block">
      <DataGrid
        apiRef={apiRef}
        components={{ ColumnMenuSortAscendingIcon: AscendingSvg }}
        rows={rowData}
        columns={[
          ...(isMobile
            ? []
            : [
                {
                  ...GRID_CHECKBOX_SELECTION_COL_DEF,
                  renderCell: (params) => (
                    <GridCellCheckboxRenderer
                      {...params}
                      checkedIcon={<CheckboxSvg />}
                      icon={<UnCheckboxSvg />}
                    />
                  ),
                },
              ]),

          ...columns,
          ...(isMobile
            ? title === 'menu' || title === 'waiter'
              ? [
                  {
                    field: 'action',
                    headerName: 'Action',
                    sortable: false,
                    width: isMobile ? 180 : 160,
                    renderCell: ({ api, row }) => (
                      <ColumnActionButton
                        selected={api.isRowSelected(row.id)}
                        title={title}
                        setRowData={setRowData}
                        id={row.id}
                      />
                    ),
                  },
                ]
              : []
            : [
                {
                  field: 'action',
                  headerName: 'Action',
                  sortable: false,
                  width: 160,
                  renderCell: ({ api, row }) => (
                    <ColumnActionButton
                      selected={api.isRowSelected(row.id)}
                      title={title}
                      setRowData={setRowData}
                      id={row.id}
                    />
                  ),
                },
              ]),
        ]}
        onRowSelectionModelChange={(newRowSelectionModel) => {
          setRowSelectionModel(newRowSelectionModel)
        }}
        rowSelectionModel={rowSelectionModel}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 13,
            },
          },
        }}
        slots={{
          pagination: CustomPagination,
        }}
        pageSizeOptions={[5]}
        pagination
        checkboxSelection={!isMobile}
      />
    </Box>
  )
}
