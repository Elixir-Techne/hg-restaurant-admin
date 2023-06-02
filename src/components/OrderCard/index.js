import { Box, Typography } from '@mui/material'
import styled from 'styled-components'

import { theme } from '@/theme'

const StyledMainContainer = styled(Box)({
  width: '248px',
  height: '381px',
  border: '0.5px solid red',
  position: 'relative',
})
function index() {
  return (
    <Box sx={{ marginLeft: '500px', marginTop: '10px' }}>
      <StyledMainContainer>
        <Box
          sx={{
            width: '238px',
            height: '367px',
            marginTop: '14px',
            position: 'relative',
            border: '1px solid #5d6d30',
            borderRadius: '15px',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              width: '63.2px',
              height: '23px',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <Typography
              sx={{
                textTransform: 'uppercase',

                background: theme.palette.primary.main,
                color: '#FFFFFF',
                fontWeight: 'bold',
                fontSize: '13px',
                borderRadius: '15px',
                textAlign: 'center',
              }}
            >
              New
            </Typography>
          </Box>
          <Box display='flex' justifyContent='center'mt='2px'>
          <Typography
            sx={{ fontSize: '20px', fontWeight: 'bold', color: '#52575D' }}
          >
            Table 1 (inside)
          </Typography>
          </Box>
        </Box>
      </StyledMainContainer>
    </Box>
  )
}

export default index
