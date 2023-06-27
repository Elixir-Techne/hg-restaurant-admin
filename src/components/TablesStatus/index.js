import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import { Box, Divider, Typography } from '@mui/material'
import React from 'react'

import {
  StyledFiberManualRecordIcon,
  StyledTableStatusContainer,
  StyledTableTitle,
  UseStyle,
} from './styles'

const TablesStatus = () => {
  const classes = UseStyle()
  return (
    <Box className={classes.mainContainter}>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Box sx={{ width: '20%' }}>
          <Typography className={classes.title}>Tables</Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          className={classes.statusBox}
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
            <InfoOutlinedIcon className={classes.iconBox} />
          </StyledTableStatusContainer>
        </Box>
      </Box>
      <Divider className={classes.divider1} />
      <Divider className={classes.divider2} />
    </Box>
  )
}

export default TablesStatus
