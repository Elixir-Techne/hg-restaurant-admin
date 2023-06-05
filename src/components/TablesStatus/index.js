import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import { Box,Divider, Typography } from '@mui/material'
import styled from 'styled-components'

const StyledTableStatusContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent:'center',
  alignItems:'center'
})
const StyledTableTitle = styled(Typography)({
  fontSize: '20px',
  marginLeft:'0.8rem'
})
const TablesStatus = () => {
  return (
    <Box sx={{ width: '100%', height: 'auto',padding:'1.5rem 1rem' }}>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Box>
          <Typography sx={{fontSize:'24px',color:'#3C49FF',fontWeight: 'bold'}}>Tables</Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          sx={{ width: '40%', padding: '0 1rem' }}
        >
          <StyledTableStatusContainer sx={{ color: '#DE0D65' }}>
            <FiberManualRecordIcon />
            <StyledTableTitle>Reserved</StyledTableTitle>
          </StyledTableStatusContainer>
          <StyledTableStatusContainer sx={{ color: '#49BF91' }}>
            <FiberManualRecordIcon />
            <StyledTableTitle>Occupied</StyledTableTitle>
          </StyledTableStatusContainer>
          <StyledTableStatusContainer sx={{ color: '#888888' }}>
            <FiberManualRecordIcon />
            <StyledTableTitle>Free</StyledTableTitle>
          </StyledTableStatusContainer>
          <StyledTableStatusContainer>
            <InfoOutlinedIcon sx={{ color: '#B3B8BD' }} />
          </StyledTableStatusContainer>
        </Box>
      </Box>
      <Divider sx={{ width: '100%'}} />
      <Divider sx={{ width: '100%',height:'0.5px' }} />
    </Box>
  )
}

export default TablesStatus
