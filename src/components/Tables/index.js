import AddIcon from '@mui/icons-material/Add'
import { Box, Button } from '@mui/material'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import React from 'react'

import { deleteTable, tableManagement } from '../../utils/api'
import { StyledTableFilter, UseStyle } from './styles'
import TableSitting from './tableSitting'

const Tables = ({ TableDetails }) => {
  const [insideSittingArea, setInsideSittingArea] = useState(true)
  const route = useRouter()
  const classes = UseStyle()
  const tableLargeSitting = []
  const tableMediumSitting = []
  TableDetails.forEach((el) => {
    if (el.table_sitting >= 10) {
      tableLargeSitting.push(el)
    } else {
      tableMediumSitting.push(el)
    }
  })

  const handleTableSide = (event) => {
    setInsideSittingArea(!insideSittingArea)
  }
  const handleNewTable = (e) => {
    e.preventDefault()
    route.push('/table-management/new')
  }

  //API get for table management

  // useEffect(() => {
  //   tableManagement()
  //     .then((res) => res)
  //     .catch((err) => console.log(err))
  // }, [tableManagement])

  // API delete for table delete

  // useEffect(() => {
  //   deleteTable()
  //     .then((res) => res)
  //     .catch((err) => console.log(err))
  // }, [deleteTable])

  return (
    <Box className={classes.mainContainer}>
      <Box
        display="flex"
        flexDirection="column"
        className={classes.subContainer}
      >
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          className={classes.button}
          onClick={handleNewTable}
        >
          Add New
        </Button>
        <Box
          display="flex"
          justifyContent="space-between"
          className={classes.tableAreaBox}
        >
          <StyledTableFilter
            variant="contained"
            sx={{
              background: insideSittingArea ? '#077254' : '#FFFFFF',
              color: insideSittingArea ? '#FFFFFF' : '#888888',
            }}
            onClick={() => handleTableSide('Inside')}
          >
            Inside
          </StyledTableFilter>
          <StyledTableFilter
            variant="contained"
            sx={{
              background: !insideSittingArea ? '#077254' : '#FFFFFF',
              color: !insideSittingArea ? '#FFFFFF' : '#888888',
            }}
            onClick={() => handleTableSide('Outside')}
          >
            Outside
          </StyledTableFilter>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        className={classes.sittingTableMainContainer}
      >
        <Box className={classes.sittingTableSubContainer}>
          <TableSitting TableDetails={tableMediumSitting} />
        </Box>
        <Box className={classes.allTables}>
          <TableSitting TableDetails={tableLargeSitting} />
        </Box>
      </Box>
    </Box>
  )
}

export default Tables
