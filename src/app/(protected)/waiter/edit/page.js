'use client'

import { Box } from '@mui/material'
import React from 'react'

import WaiterFrom from '../../../../components/WaiterForm/index'
import { UseStyleWaiterForm } from '../styles'

export default function EditWaiter() {
  const classes = UseStyleWaiterForm()
  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.subContainer}>
        <WaiterFrom title="Edit Waiter" />
      </Box>
    </Box>
  )
}
