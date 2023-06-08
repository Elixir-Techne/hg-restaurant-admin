import { Box, Divider, Typography } from '@mui/material'
import styled from 'styled-components'

import Form from './ItemForm/form'

const StyledForm = styled(Box)({
  margin: '2rem 1.5rem',
  background: '#FDFDFD',
  filter: 'drop-shadow(0px 3px 3px rgba(0,0,0,0.16 ))',
  borderRadius: '21px',
})

function NewItemForm() {
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
          New Item
        </Typography>
        <Divider sx={{ width: '100%', height: '5px' }} />
      </Box>
      <StyledForm>
        <Form />
      </StyledForm>
    </Box>
  )
}

export default NewItemForm
