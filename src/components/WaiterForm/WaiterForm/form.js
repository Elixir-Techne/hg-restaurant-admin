import {
  Autocomplete,
  Box,
  Button,
  Grid,
  TextField,
  Typography,
} from '@mui/material'
import { useRef, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import styled from 'styled-components'

import '../../../styles/form.css'

const StyledSubContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  '@media (max-width:375px)': {
    fontSize: '1.3rem',
    flexDirection: 'column',
    alignItems: 'start',
    gap: '0.5rem',
  },
})
const StyledFormLabel = styled(Typography)({
  minWidth: '15%',
  fontSize: '1.5rem',
  color: '#888888',
  '@media (max-width:1024px)': {
    fontSize: '1.3rem',
  },
  '@media (max-width:524px)': {
    fontSize: '1.1rem',
    minWidth: '20%',
  },
})

const StyledTextField = styled(TextField)({
  padding: '0 1rem',
  width: '100%',
  background: '#ffffff',
  borderRadius: '13px',
  border: '1px solid #AACDE8',
})
const StyledAutocomplete = styled(Autocomplete)({
  padding: '0 1rem',
  width: '100%',
  background: '#ffffff',
  borderRadius: '13px',
  border: '1px solid #AACDE8',
})
function Form() {
  const testingData = [
    { id: 1, name: 'Ahmedabad' },
    { id: 2, name: 'Gandhinagar' },
  ]
  const fileInputRef = useRef(null)
  const [selectedFile, setSelectedFile] = useState(null)
  const { control, register, handleSubmit, formState } = useForm()
  const handleImageClick = () => {
    fileInputRef.current.click() // Trigger click on the hidden file input element
  }

  const handleImageUpload = (event) => {
    const file = event.target.files[0]
    setSelectedFile(file)
  }

  const onSubmit = (data) => {
    console.log(data, '============')
  }
  return (
    <Box
      sx={{
        padding: '1rem',
        '@media (max-width:899px)': {
          padding: '0.5rem',
        },
      }}
    >
      <Grid
        container
        spacing={4}
        display="flex"
        gap={10}
        xs={12}
        // sx={{
        //   '@media (max-width: 899px)': {
        //     flexDirection: 'column-reverse',
        //   },
        //   '@media (max-width: 768px)': {
        //     flexDirection: 'column-reverse',
        //   },
        // }}
      >
        <Grid item xs={12}>
          <StyledSubContainer>
            <StyledFormLabel>Name</StyledFormLabel>
            <Controller
              name="name"
              control={control}
              rules={{ required: 'Name is required' }}
              render={({ field }) => <StyledTextField {...field} />}
            />
          </StyledSubContainer>
        </Grid>
        <Grid item xs={12}>
          <StyledSubContainer display="flex" alignItems="center">
            <StyledFormLabel>CNIC</StyledFormLabel>
            <Controller
              name="cnic"
              control={control}
              rules={{ required: 'CNIC is required' }}
              render={({ field }) => <StyledTextField {...field} />}
            />
          </StyledSubContainer>
        </Grid>
        <Grid item xs={12}>
          <StyledSubContainer
            display="flex"
            alignItems="center"
            onClick={handleImageClick}
          >
            <StyledFormLabel>Upload CNIC</StyledFormLabel>
            <Controller
              name="uploadCnic"
              control={control}
              rules={{ required: 'Upload CNIC is required' }}
              render={({ field }) => (
                <StyledTextField
                  {...field}
                  ref={fileInputRef}
                  accept="*"
                  type="file"
                  onChange={(event) => handleImageUpload(event)}
                  //   style={{ display: 'none' }}
                />
              )}
            />
          </StyledSubContainer>
        </Grid>
        <Grid item xs={12}>
          <StyledSubContainer
            display="flex"
            alignItems="center"
            onClick={handleImageClick}
          >
            <StyledFormLabel>Location</StyledFormLabel>
            <Controller
              name="location"
              control={control}
              rules={{ required: 'Location is required' }}
              render={({ field }) => (
                <StyledAutocomplete
                  {...field}
                  fullWidth
                  options={testingData}
                  getOptionLabel={(option) => option.name}
                  sx={{
                    background: '#F5F6FA',
                    borderRadius: '17px',
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              )}
            />
          </StyledSubContainer>
        </Grid>
        <Grid item xs={12}>
          <StyledSubContainer
            display="flex"
            alignItems="center"
            onClick={handleImageClick}
          >
            <StyledFormLabel>Type</StyledFormLabel>
            <Controller
              name="type"
              control={control}
              rules={{ required: 'Type is required' }}
              render={({ field }) => (
                <StyledAutocomplete
                  {...field}
                  fullWidth
                  options={testingData}
                  getOptionLabel={(option) => option.name}
                  sx={{
                    background: '#F5F6FA',
                    borderRadius: '17px',
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              )}
            />
          </StyledSubContainer>
        </Grid>
      </Grid>
      <Box display="flex" justifyContent="center">
        <Button
          variant="contained"
          sx={{
            marginTop: '2rem',
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
  )
}

export default Form
