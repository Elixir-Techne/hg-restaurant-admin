import { Box, Divider, Typography } from '@mui/material'
import styled from 'styled-components'

import Form from './WaiterForm/form'

const StyledForm = styled(Box)({
  margin: '2rem 1.5rem',
  background: '#FDFDFD',
  filter: 'drop-shadow(0px 3px 3px rgba(0,0,0,0.16 ))',
  borderRadius: '21px',
  height: '90%',
  '@media (max-height:725px)': {
    height: '85%',
  },
})

function WaiterForm({ title }) {
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
          {title}
        </Typography>
        <Divider sx={{ width: '100%', height: '5px' }} />
      </Box>
      <StyledForm>
        <Form title={title} />
      </StyledForm>
    </Box>
  )
}

export default WaiterForm
