import { Box, Divider, Typography } from '@mui/material'
import React from 'react'

import Form from './form'
import { StyledForm, UseStyleNewTable } from './styles'

function NewTableForm({ title }) {
  const classes = UseStyleNewTable()
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
export default NewTableForm
