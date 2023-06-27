'use client'

import { Box } from '@mui/system'
import React from 'react'

import Tables from '../../../components/Tables/index'
import TablesStatus from '../../../components/TablesStatus/index'
import { UseStyleTableManagement } from './styles'

export default function TableManagement() {
  const TableDetails = [
    {
      id: 1,
      table_name: 3,
      table_image: 'images/fourCircle.png',
      status: 'reserved',
      table_sitting: '4',
      table_clear: 'no',
    },
    {
      id: 2,
      table_name: 2,
      table_image: 'images/twoCircle.png',
      status: 'free',
      table_sitting: '2',
      table_clear: 'no',
    },
    {
      id: 3,
      table_name: 4,
      table_image: 'images/4square.png',
      status: 'occupied',
      table_sitting: '8',
      table_clear: 'no',
    },
    {
      id: 4,
      table_name: 5,
      table_image: 'images/16rectangle.png',
      status: 'reserved',
      table_sitting: '16',
      table_clear: 'no',
    },
    {
      id: 5,
      table_name: 1,
      table_image: 'images/4square.png',
      status: 'free',
      table_sitting: '4',
      table_clear: 'no',
    },
    {
      id: 6,
      table_name: 4,
      table_image: 'images/fourCircle.png',
      status: 'reserved',
      table_sitting: '4',
      table_clear: 'no',
    },
    {
      id: 7,
      table_name: 3,
      table_image: 'images/4square.png',
      status: 'occupied',
      table_sitting: '8',
      table_clear: 'no',
    },
    {
      id: 8,
      table_name: 2,
      table_image: 'images/twoCircle.png',
      status: 'free',
      table_sitting: '2',
      table_clear: 'no',
    },
    {
      id: 9,
      table_name: 1,
      table_image: 'images/4square.png',
      status: 'occupied',
      table_sitting: '4',
      table_clear: 'no',
    },
  ]
  const classes = UseStyleTableManagement()

  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.subContainer}>
        <TablesStatus />
        <Tables TableDetails={TableDetails} />
      </Box>
    </Box>
  )
}
