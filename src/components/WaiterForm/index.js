import { Box, Divider, Typography } from '@mui/material'
import React from 'react'

import Form from './WaiterForm/form'
import { StyledForm, UseStyleFormContainer } from './styles'

function WaiterForm({ title }) {
  const classes = UseStyleFormContainer()
  return (
    <Box className={classes.mainContainer}>
      <Box>
        <Typography className={classes.title}>{title}</Typography>
        <Divider className={classes.divider} />
      </Box>
      <StyledForm>
        <Form title={title} />
      </StyledForm>
    </Box>
  )
}

export default WaiterForm
