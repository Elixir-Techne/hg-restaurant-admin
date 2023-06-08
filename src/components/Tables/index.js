import AddIcon from '@mui/icons-material/Add'
import { Box, Button, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import styled from 'styled-components'

import TableSitting from './tableSitting'

const StyledTableFilter = styled(Button)({
  borderRadius: '20px',
  fontSize: '20px',
  width: '156px',
  padding: '0.5rem 1.5rem',
  filter: 'drop-shadow(0px 3px 3px rgba(0,0,0,0.16 ))',
})

const Tables = ({ TableDetails }) => {
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
    console.log('==', event)
  }
  const handleNewTable = (e) => {
    e.preventDefault()
    route.push('/tableManagement/new')
  }
  const inside = true
  return (
    <Box sx={{ padding: '2rem', paddingTop: '0', width: '100%' }}>
      <Box display="flex" flexDirection="column" sx={{ position: 'relative' }}>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{ fontSize: '18px', borderRadius: '15px', alignSelf: 'flex-end' }}
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
          }}
        >
          <StyledTableFilter
            variant="contained"
            sx={{
              background: inside ? '#077254' : '#FFFFFF',
              color: inside ? '#FFFFFF' : '#888888',
            }}
            onClick={() => handleTableSide('Inside')}
          >
            Inside
          </StyledTableFilter>
          <StyledTableFilter
            variant="contained"
            sx={{
              background: !inside ? '#077254' : '#FFFFFF',
              color: !inside ? '#FFFFFF' : '#888888',
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
        sx={{ padding: '0 1rem' }}
      >
        <Box sx={{ width: '80%', overflowY: 'auto' }}>
          <TableSitting TableDetails={tableMediumSitting} />
        </Box>
        <Box sx={{ width: '20%', flex: 1 }}>
          <TableSitting TableDetails={tableLargeSitting} />
        </Box>
      </Box>
    </Box>
  )
}

export default Tables
