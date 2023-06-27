'use client'

import { Box } from '@mui/material'
import React from 'react'

import TableForm from '../../../../components/NewTableForm/index'
import { UseStyleForm } from '../styles'

export default function NewTable() {
  const classes = UseStyleForm()
  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.subContainer}>
        <TableForm title="New Table" />
      </Box>
    </Box>
  )
}
