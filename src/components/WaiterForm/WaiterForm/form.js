import {
  Autocomplete,
  Box,
  Button,
  Grid,
  TextField,
  Typography,
} from '@mui/material'
import { Title } from 'chart.js'
import { useRouter } from 'next/navigation'
import { useContext, useEffect, useRef, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import styled from 'styled-components'

import { OrdersDetailContext } from '@/context/orderDetailContext'

import { rows } from '../../../app/(protected)/waiter/page'
import '../../../styles/form.css'
import { waiterForm } from '../../../utils/api'

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

const StyledErrorMessage = styled(Typography)({
  fontSize: '0.8rem',
  color: 'red',
  marginLeft: '15%',
  position: 'fix',
  '@media (max-width:375px)': {
    marginLeft: '0',
  },
})
function Form({ title }) {
  const testingData = [
    { id: 1, name: 'Ahmedabad' },
    { id: 2, name: 'Gandhinagar' },
  ]
  const fileInputRef = useRef(null)
  const [selectedFile, setSelectedFile] = useState(null)
  const route = useRouter()
  const { control, register, handleSubmit, formState } = useForm()
  const error = formState.errors

  const handleImageClick = () => {
    fileInputRef.current.click() // Trigger click on the hidden file input element
  }

  const handleImageUpload = (event) => {
    const file = event.target.files[0]
    setSelectedFile(file.size)
  }

  const onSubmit = (data) => {
    //API for post waiter form

    // waiterForm(data)
    //   .then((res) => res)
    //   .catch((err) => console.log(err))
    console.log(data, '============')
    route.push('/waiter')
  }
  const handleCancel = () => {
    route.push('/waiter')
  }

  return (
    <Box
      sx={{
        height: '100%',
        padding: '1rem',
        overflowY: 'auto',
      }}
    >
      <Grid container spacing={4} display="flex" gap={10} xs={12}>
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
          {error?.name?.type === 'required' ? (
            <StyledErrorMessage>{error?.name?.message}</StyledErrorMessage>
          ) : null}
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
          {error?.cnic?.type === 'required' ? (
            <StyledErrorMessage>{error?.cnic?.message}</StyledErrorMessage>
          ) : null}
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
              rules={{ required: 'CNIC file is required' }}
              render={({ field: { value, onChange, ...field } }) => (
                <StyledTextField
                  {...field}
                  ref={fileInputRef}
                  accept="*"
                  type="file"
                  value={value?.fileName}
                  onChange={(event) => {
                    onChange(event.target.files[0])
                    handleImageUpload(event)
                  }}
                />
              )}
            />
          </StyledSubContainer>

          {error?.uploadCnic?.type === 'required' ? (
            <StyledErrorMessage>
              {error?.uploadCnic?.message}
            </StyledErrorMessage>
          ) : (
            <Typography
              sx={{
                color: selectedFile < 2548 ? 'green' : 'red',
                marginLeft: '15%',
              }}
            >
              Maximum file size 2MB, File Formate JPG/PNG/JPEG
            </Typography>
          )}
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
                  onChange={(event, newValue) => field.onChange(newValue)}
                  sx={{
                    background: '#F5F6FA',
                    borderRadius: '17px',
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              )}
            />
          </StyledSubContainer>
          {error?.location?.type === 'required' ? (
            <StyledErrorMessage>{error?.location?.message}</StyledErrorMessage>
          ) : null}
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
                  onChange={(event, newValue) => field.onChange(newValue)}
                  sx={{
                    background: '#F5F6FA',
                    borderRadius: '17px',
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              )}
            />
          </StyledSubContainer>
          {error?.type?.type === 'required' ? (
            <StyledErrorMessage>{error?.type?.message}</StyledErrorMessage>
          ) : null}
        </Grid>
      </Grid>
      {title === 'Edit Waiter' ? (
        <Box display="flex" justifyContent="center">
          <Button
            variant="contained"
            sx={{
              marginTop: '1rem',
              marginRight: '0.5rem',
              fontSize: '1.6rem',
              borderRadius: '20px',
              alignSelf: 'flex-end',
              padding: '0 2rem',
              textTransform: 'inherit',
              '@media (max-width: 1024px)': {
                fontSize: '1.3rem',
              },
              '@media (max-width: 899px)': {
                fontSize: '1.2rem',
              },
            }}
            onClick={handleSubmit(onSubmit)}
          >
            Update
          </Button>
          <Button
            variant="contained"
            sx={{
              marginTop: '1rem',
              fontSize: '1.6rem',
              borderRadius: '20px',
              alignSelf: 'flex-end',
              padding: '0 2rem',
              textTransform: 'inherit',
              backgroundColor: '#A7A7AA',
              '@media (max-width: 1024px)': {
                fontSize: '1.3rem',
              },
              '@media (max-width: 899px)': {
                fontSize: '1.2rem',
              },
            }}
            onClick={handleCancel}
          >
            Cancel
          </Button>
        </Box>
      ) : (
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
            Save
          </Button>
        </Box>
      )}
    </Box>
  )
}

export default Form
