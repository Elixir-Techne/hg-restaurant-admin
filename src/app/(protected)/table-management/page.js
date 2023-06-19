'use client'

import { Box } from '@mui/system'

import { theme } from '@/theme'

import Tables from '../../../components/Tables/index'
import TablesStatus from '../../../components/TablesStatus/index'

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

  return (
    <Box
      display="flex"
      justifyContent="center"
      sx={{ margin: theme.spacing(10) }}
    >
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          width: '95%',
          // justifyContent: 'center',
          // alignItems: 'center',
          borderRadius: '20px',
          background: '#FFFFFF',
          filter: 'drop-shadow(0px 10px 10px rgba(196,200,208,0.4 ))',
        }}
      >
        <TablesStatus />
        <Tables TableDetails={TableDetails} />
      </Box>
    </Box>
  )
}