import AddIcon from '@mui/icons-material/Add'
import { Box, Button, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { deleteTable, tableManagement } from '../../utils/api'
import TableSitting from './tableSitting'

const StyledTableFilter = styled(Button)({
  borderRadius: '20px',
  fontSize: '1.3rem',
  width: '156px',
  padding: '0.5rem 1.5rem',
  filter: 'drop-shadow(0px 3px 3px rgba(0,0,0,0.16 ))',
  '@media (max-width:1024px)': {
    width: '140px',
    fontSize: '1rem',
  },
  '@media (max-width:525px)': {
    width: '125px',
    fontSize: '0.9rem',
  },
  '@media (max-width:320px)': {
    width: '100px',
    fontSize: '0.9rem',
  },
})

const Tables = ({ TableDetails }) => {
  const [insideSittingArea, setInsideSittingArea] = useState(true)
  const route = useRouter()

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
    <Box
      sx={{
        padding: '2rem',
        paddingTop: '0',
        width: '100%',
        '@media (max-width:1024px)': {
          padding: '0.5rem',
        },
      }}
    >
      <Box display="flex" flexDirection="column" sx={{ position: 'relative' }}>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            fontSize: '1.1rem',
            borderRadius: '15px',
            alignSelf: 'flex-end',
            '@media (max-width:1024px)': {
              fontSize: '0.9rem',
            },
            '@media (max-width:425px)': {
              fontSize: '0.7rem',
            },
          }}
          onClick={handleNewTable}
        >
          Add New
        </Button>
        <Box
          display="flex"
          justifyContent="space-between"
          sx={{
            width: '327px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, 0)',
            '@media (max-width:768px)': {
              position: 'inherit',
              justifyContent: 'center',
              gap: '1vw',
              marginTop: '0.5rem',
            },
          }}
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
        sx={{
          overflowY: 'auto',
          padding: '0 1rem',
          '@media (max-width:1024px)': {
            padding: '0',
          },
          '@media (max-width:525px)': {
            flexDirection: 'column',
          },
        }}
      >
        <Box
          sx={{
            width: '80%',
            '@media (max-width:525px)': {
              width: '100%',
            },
          }}
        >
          <TableSitting TableDetails={tableMediumSitting} />
        </Box>
        <Box
          sx={{
            width: '20%',
            flex: 1,
            '@media (max-width:525px)': {
              width: '100%',
            },
          }}
        >
          <TableSitting TableDetails={tableLargeSitting} />
        </Box>
      </Box>
    </Box>
  )
}

export default Tables
