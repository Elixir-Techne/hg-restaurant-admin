import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import { Box, Divider, Typography } from '@mui/material'
import styled from 'styled-components'

const StyledTableStatusContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 1rem',
  '@media (max-width:525px)': {
    margin: '0 0.4rem',
  },
  '@media (max-width:425px)': {
    margin: '0 0.3rem',
  },
})
const StyledTableTitle = styled(Typography)({
  fontSize: '1.3rem',
  marginLeft: '0.8rem',
  '@media (max-width:1024px)': {
    fontSize: '1.1rem',
    marginLeft: '0.5rem',
  },
  '@media (max-width:525px)': {
    fontSize: '1rem',
    marginLeft: '0.3rem',
  },
  '@media (max-width:525px)': {
    fontSize: '0.9rem',
    marginLeft: '0.3rem',
  },
  '@media (max-width:475px)': {
    fontSize: '0.7rem',
    marginLeft: '0.2rem',
  },
  '@media (max-width:375px)': {
    fontSize: '0.6rem',
    marginLeft: '0.2rem',
  },
})
const StyledFiberManualRecordIcon = styled(FiberManualRecordIcon)({
  '@media (max-width:525px)': {
    fontSize: 'small',
  },
})
const TablesStatus = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto',
        padding: '2.5rem 1rem',
        '@media (max-width:768px)': {
          paddingBottom: '0.5rem',
        },
        '@media (max-width:525px)': {
          paddingBottom: '0.3rem',
        },
      }}
    >
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Box sx={{ width: '20%' }}>
          <Typography
            sx={{
              fontSize: '1.6rem',
              color: '#3C49FF',
              fontWeight: 'bold',
              '@media (max-width:525px)': {
                fontSize: '1.2rem',
              },
              '@media (max-width:320px)': {
                fontSize: '0.8rem',
              },
            }}
          >
            Tables
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          sx={{
            width: 'auto',
            padding: '0 1rem',
            '@media (max-width:320px)': {
              padding: '0 0.2rem',
            },
          }}
        >
          <StyledTableStatusContainer sx={{ color: '#DE0D65' }}>
            <StyledFiberManualRecordIcon />
            <StyledTableTitle>Reserved</StyledTableTitle>
          </StyledTableStatusContainer>
          <StyledTableStatusContainer sx={{ color: '#49BF91' }}>
            <StyledFiberManualRecordIcon />
            <StyledTableTitle>Occupied</StyledTableTitle>
          </StyledTableStatusContainer>
          <StyledTableStatusContainer sx={{ color: '#888888' }}>
            <StyledFiberManualRecordIcon />
            <StyledTableTitle>Free</StyledTableTitle>
          </StyledTableStatusContainer>
          <StyledTableStatusContainer sx={{ margin: '0 !important' }}>
            <InfoOutlinedIcon
              sx={{
                color: '#B3B8BD',
                '@media (max-width:525px)': {
                  fontSize: 'small',
                },
              }}
            />
          </StyledTableStatusContainer>
        </Box>
      </Box>
      <Divider sx={{ width: '100%' }} />
      <Divider sx={{ width: '100%', height: '0.5px' }} />
    </Box>
  )
}

export default TablesStatus
