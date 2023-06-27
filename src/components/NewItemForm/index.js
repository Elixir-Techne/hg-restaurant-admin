import { Box, Divider, Typography } from '@mui/material'
import React from 'react'

import Form from './ItemForm/form'
import { StyledForm, UseStyleFormBox } from './styles'

function ItemForm({ title }) {
  const classes = UseStyleFormBox()
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

export default ItemForm
