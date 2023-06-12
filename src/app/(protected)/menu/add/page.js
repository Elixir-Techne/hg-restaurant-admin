'use client'

import { Box } from '@mui/material'

import ItemForm from '../../../../components/NewItemForm/index'

export default function NewItem() {
  const testingCategory = [
    { id: 1, name: 'veg' },
    { id: 2, name: 'non-veg' },
  ]
  const testingSubCategory = [
    { id: 1, name: 'salad' },
    { id: 2, name: 'gujarati' },
  ]
  const testingFoodType = [
    { id: 1, name: 'sweet' },
    { id: 2, name: 'spicy' },
  ]
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
          '@media (max-width: 899px)': {
            width: '100%',
            height: '95%',
            alignItems: 'end',
          },
        }}
      >
        <ItemForm title="New Item" />
      </Box>
    </Box>
  )
}
