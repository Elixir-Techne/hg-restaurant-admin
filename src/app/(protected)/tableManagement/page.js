'use client'

import { Box } from '@mui/system'

import FourSquare from '../../../../public/images/4square.png'
import SixteenRectangle from '../../../../public/images/16rectangle.png'
import FourCirlce from '../../../../public/images/fourCircle.png'
import TwoCirlce from '../../../../public/images/twoCircle.png'
import Tables from '../../../components/Tables/index'
import TablesStatus from '../../../components/TablesStatus/index'

export default function TableManagement() {
  const TableDetails = [
    { id: 1, table_name: 3, table_image: '/images/fourCircle.png', status: 'reserved',table_sitting:'4' },
    { id: 2, table_name: 2, table_image: '/images/twoCircle.png', status: 'free',table_sitting:'2' },
    { id: 3, table_name: 4, table_image:'/images/4square.png', status: 'occupied',table_sitting:'8' },
    {
      id: 4,
      table_name: 5,
      table_image: '/images/16rectangle.png',
      status: 'reserved',
      table_sitting:'16'
    },
    { id: 5, table_name: 1, table_image: '/images/4square.png', status: 'free',table_sitting:'4' },
    { id: 6, table_name: 4, table_image: '/images/fourCircle.png', status: 'reserved',table_sitting:'4' },
    { id: 7, table_name: 3, table_image: '/images/4square.png', status: 'occupied',table_sitting:'8' },
    { id: 8, table_name: 2, table_image: '/images/twoCircle.png', status: 'free',table_sitting:'2' },
    { id: 9, table_name: 1, table_image: '/images/4square.png', status: 'occupied',table_sitting:'4' },
  ]
  
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{ width: '75%', height: '100%', marginLeft: 'auto' }}
    >
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          height: '871px',
          width: '1313px',
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
