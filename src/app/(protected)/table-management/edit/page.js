'use client'

import { Box } from '@mui/material'
import React from 'react'

import TableForm from '../../../../components/NewTableForm/index'
import { UseStyleForm } from '../styles'

export default function EditTable() {
  const classes = UseStyleForm()
  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.subContainer}>
        <TableForm title="Edit Table" />
      </Box>
    </Box>
  )
}
