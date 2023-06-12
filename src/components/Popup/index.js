import { Box, Button, TextField, Typography } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'

export default function PopUp({ setOrderCancelled }) {
  const { control, register, handleSubmit, formState } = useForm()
  const onSubmit = (data) => {
    setOrderCancelled(false)
    console.log(data)
  }
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{ width: '100%', height: '100%' }}
    >
      <Box
        display="flex"
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '810px',
          width: '90%',
          borderRadius: '20px',
          background: '#FFFFFF',
          filter: 'drop-shadow(0px 10px 10px rgba(196,200,208,0.4 ))',
          '@media (max-width:475px)': {
            height: '680px',
          },
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '80%',
            height: '435px',
            borderRadius: '39px',
            filter: 'drop-shadow(0px 8px 5px #f7ebe0)',
            background: '#f2eeee',
            padding: '1rem 1.5rem',
            '@media (max-width:475px)': {
              height: '340px',
            },
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            sx={{ width: '90%', gap: '2vh' }}
          >
            <Typography
              sx={{
                alignSelf: 'start',
                fontSize: '2.5rem',
                color: '#03528B',
                fontWeight: 'bold',
              }}
            >
              Reason
            </Typography>
            <Controller
              name="description"
              control={control}
              rules={{ required: 'Description is required' }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  sx={{
                    color: '#888888',
                    background: '#FCFCFC',
                    borderRadius: '17px',
                    height: '165px',
                  }}
                  placeholder="Description and Add ons"
                />
              )}
            />
            <Box display="flex" justifyContent="center">
              <Button
                variant="contained"
                sx={{
                  marginTop: '1rem',
                  fontSize: '1.6rem',
                  borderRadius: '20px',
                  alignSelf: 'flex-end',
                  padding: '0 2rem',
                  textTransform: 'inherit',
                  '@media (max-width: 899px)': {
                    fontSize: '1.5rem',
                  },
                }}
                onClick={handleSubmit(onSubmit)}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
