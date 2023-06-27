'use client'

import { Box } from '@mui/material'
import React from 'react'

import ItemForm from '../../../../components/NewItemForm/index'
import { UseStyleForm } from '../styles'

export default function EditItem() {
  const classes = UseStyleForm()
  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.subContainer}>
        <ItemForm title="Edit Item" />
      </Box>
    </Box>
  )
}
