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
import { useRef, useState } from 'react'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'

import '../../../styles/form.css'
import {
  StyledAutocomplete,
  StyledErrorMessage,
  StyledFormLabel,
  StyledSubContainer,
  StyledTextField,
  UseStyleForm,
} from '../styles'

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
  const classes = UseStyleForm()
  const handleImageClick = () => {
    fileInputRef.current.click()
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
    <Box className={classes.mainContainer}>
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
              }}
              className={classes.imageSizeBox}
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
                  className={classes.fieldBox}
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
                  className={classes.fieldBox}
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
            className={classes.updateButton}
            onClick={handleSubmit(onSubmit)}
          >
            Update
          </Button>
          <Button
            variant="contained"
            className={classes.cancelButton}
            onClick={handleCancel}
          >
            Cancel
          </Button>
        </Box>
      ) : (
        <Box display="flex" justifyContent="center">
          <Button
            variant="contained"
            className={classes.saveButton}
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
