import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'

import Form from './form'

const StyledForm = styled(Box)({
  // width: '95%',
  // height: '90%',
  margin: '2rem 1.5rem',
  background: '#FDFDFD',
  filter: 'drop-shadow(0px 3px 3px rgba(0,0,0,0.16 ))',
  borderRadius: '21px',
  // '@media (max-width:768px)': {
  //   padding: '0.5rem',
  //   margin: '0.5rem',
  //   width: '100%',
  //   height: '95%',
  // },
})

function NewTableForm() {
  const path = window.location.pathname
  return (
    <Box
      sx={{
        padding: '1rem',
        width: '100%',
        height: '100%',
        '@media (max-width:768px)': { padding: '0.5rem' },
      }}
    >
      <Box>
        <Typography
          sx={{ fontSize: '24px', color: '#3C49FF', fontWeight: 'bold' }}
        >
          {path.includes('edit') ? 'Edit Table' : 'New Table'}
        </Typography>
        <Divider sx={{ width: '100%', height: '5px' }} />
      </Box>
      <StyledForm>
        <Form />
      </StyledForm>
    </Box>
  )
}
export default NewTableForm
