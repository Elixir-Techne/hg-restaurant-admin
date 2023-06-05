import { Transform } from '@mui/icons-material'
import AddIcon from '@mui/icons-material/Add'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import { Box, Button, Typography } from '@mui/material'
import Image from 'next/image'
import styled from 'styled-components'

import { theme } from '@/theme'

import TableSitting from './tableSitting'

const StyledTableFilter = styled(Button)({
  borderRadius: '20px',
  fontSize: '20px',
  width: '156px',
  padding: '0.5rem 1.5rem',
  filter: 'drop-shadow(0px 3px 3px rgba(0,0,0,0.16 ))',
})

const StyledTableBox = styled(Box)({
  flexDirection: 'column',
  background: ' #ffffff',
  borderRadius: '20px',
  filter: 'drop-shadow(0px 10px 10px rgba(196,200,208,0.4 ))',
  maxWidth: '223px',
  padding: '1rem 0.5rem',
})

const SyledImage = styled(Image)({
  margin: '0.5rem',
})

const Tables = ({ TableDetails }) => {
  const tableLargeSitting = []
  const tableMediumSitting = []

  TableDetails.forEach((el) => {
    if (el.table_sitting >= 10) {
      tableLargeSitting.push(el)
    } else {
      tableMediumSitting.push(el)
    }
  })
  const inside = true
  return (
    <Box sx={{ padding: '2rem', paddingTop: '0' }}>
      <Box display="flex" flexDirection="column" sx={{ position: 'relative' }}>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{ fontSize: '18px', borderRadius: '15px', alignSelf: 'flex-end' }}
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
          >
            Inside
          </StyledTableFilter>
          <StyledTableFilter
            variant="contained"
            sx={{
              background: !inside ? '#077254' : '#FFFFFF',
              color: !inside ? '#FFFFFF' : '#888888',
            }}
          >
            Outside
          </StyledTableFilter>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        sx={{ padding: '0 1rem', overflowY: 'auto' }}
      >
        <Box sx={{ width: '80%' }}>
          <TableSitting TableDetails={tableMediumSitting} />
        </Box>
        <Box sx={{ width: '20%' }}>
          <TableSitting TableDetails={tableLargeSitting} />
        </Box>
      </Box>
    </Box>
  )
}

export default Tables
