'use client'

import { Box } from '@mui/material'

import TablesStatus from '@/components/TablesStatus'

import TableForm from '../../../../components/NewTableForm/index'

export default function EditTable() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{ width: '100%', height: '100%', marginLeft: 'auto' }}
    >
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          height: '85%',
          width: '95%',
          borderRadius: '20px',
          background: '#FFFFFF',
          filter: 'drop-shadow(0px 10px 10px rgba(196,200,208,0.4 ))',
          '@media (max-width: 768px)': {
            width: '100%',
            height: '90%',
            alignItems: 'end',
          },
        }}
      >
        <TableForm title="Edit Table" />
      </Box>
    </Box>
  )
}
