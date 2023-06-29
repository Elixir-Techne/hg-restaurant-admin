import { ClassNames } from '@emotion/react'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  Autocomplete,
  Box,
  Button,
  FormControlLabel,
  Grid,
  Switch,
  TextField,
  Typography,
} from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import dayjs from 'dayjs'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useRef, useState } from 'react'
import { Controller, set, useForm } from 'react-hook-form'
import * as yup from 'yup'

import MinusIcon from '../../../public/images/minusIcon.png'
import NumberIcon from '../../../public/images/numberIcon.png'
import PhoneIcon from '../../../public/images/phone.png'
import PlusIcon from '../../../public/images/plusIcon.png'
import '../../styles/form.css'
import {
  StyledErrorMessage,
  StyledImage,
  ToogleButton,
  UseStyleTableForm,
} from './styles'

const schema = yup
  .object()
  .shape({
    sector: yup.object().required(),
    TableNumber: yup.number().required(),
    TotalPerson: yup.number().required(),
    MobileNumber: yup.number().when('reserved', {
      is: false,
      then: () => yup.number().required('Mobile Number is required'),
      otherwise: () => yup.string(),
    }),
    personName: yup.string().when('reserved', {
      is: false,
      then: () => yup.string().required('Person Name is required'),
      otherwise: () => yup.string(),
    }),
    date: yup.string().when('reserved', {
      is: false,
      then: () => yup.string().required('Date is required'),
      otherwise: () => yup.string(),
    }),
    // image: yup.object().when('reserved', {
    //   is: false,
    //   then: () => yup.object().required('Image is required'),
    //   otherwise: () => yup.string(),
    // }),
    reserved: yup.boolean().required(),
    occupied: yup.boolean().required(),
    vip: yup.boolean().required(),
  })
  .required()

function Form({ title }) {
  const [selectedImage, setSelectedImage] = useState(null)
  const [imageError, setImageError] = useState(false)
  const fileInputRef = useRef(null)
  const route = useRouter()
  const testingDaa = [
    { id: 1, name: 'inside' },
    { id: 2, name: 'outside' },
  ]
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    getValues,
    setError,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      vip: true,
      reserved: false,
      occupied: false,
    },
  })
  const classes = UseStyleTableForm()

  // const error = formState.errors
  // watch(['reserved', 'occupied', 'vip'])
  //API get form

  // useEffect(() => {
  //   getTableForm()
  //     .then((res) => res)
  //     .catch((err) => console.log(err))
  // }, [getTableForm])

  const handleImageClick = () => {
    fileInputRef.current.click()
  }
  const handleImageUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        setSelectedImage(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const onSubmit = (data) => {
    if (title === 'Edit Table') {
      //API put for menu item form
      // editTableForm(data)
      //   .then((res) => res)
      //   .catch((err) => console.log(err))
    } else if (title === 'New Table') {
      //API post for menu item form
      // postTableForm(data)
      //   .then((res) => res)
      //   .catch((err) => console.log(err))
    }
    console.log(data, '============')
    route.push('/table-management')
  }
  const handleCancel = () => {
    route.push('/table-management')
  }
  const handleIncrement = () => {
    const price = getValues('TotalPerson')
    setValue('TotalPerson', Number(price) + 1)
  }
  const handleDecrement = () => {
    const price = getValues('TotalPerson')
    if (Number(price) > 0) {
      setValue('TotalPerson', Number(price) - 1)
    }
  }

  const handleSaveClick = () => {
    const reserved = getValues('reserved')
    const image = getValues('image')
    if (!reserved && !image) {
      setImageError(true)
      return
    } else {
      handleSubmit(onSubmit)()
    }
  }
  console.log(errors)
  return (
    <Box className={classes.mainContainer}>
      <Grid
        container
        spacing={4}
        display="flex"
        className={classes.gridContainer}
      >
        <Grid item container md={7} xs={12} sm={12} gap={8}>
          <Grid xs={12} item>
            <Controller
              name="sector"
              control={control}
              rules={{ required: 'Sector is required' }}
              render={({ field }) => (
                <Autocomplete
                  {...field}
                  options={testingDaa}
                  getOptionLabel={(option) => option.name}
                  onChange={(event, newValue) => field.onChange(newValue)}
                  className={classes.fieldBackground}
                  renderInput={(params) => (
                    <TextField {...params} placeholder="choose sector" />
                  )}
                />
              )}
            />
            <StyledErrorMessage>{errors.sector?.message}</StyledErrorMessage>
          </Grid>
          <Grid xs={12} item>
            <Controller
              name="TableNumber"
              control={control}
              rules={{ required: 'Table Number is required' }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  className={classes.fieldBackground}
                  placeholder="Enter Table Number"
                  InputProps={{
                    endAdornment: (
                      <StyledImage src={NumberIcon} alt="dropdownimage" />
                    ),
                  }}
                />
              )}
            />
            <StyledErrorMessage>
              {errors.TableNumber?.message}
            </StyledErrorMessage>
          </Grid>
          <Grid xs={12} item>
            <Box display="flex">
              <StyledImage
                src={MinusIcon}
                alt="minus"
                onClick={handleDecrement}
              />
              <Controller
                name="TotalPerson"
                control={control}
                rules={{ required: 'Total person is required' }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    placeholder="Enter No. of Persons"
                    className={classes.fieldBackground}
                  />
                )}
              />
              <StyledImage src={PlusIcon} alt="add" onClick={handleIncrement} />
            </Box>
            <StyledErrorMessage>
              {errors.TotalPerson?.message}
            </StyledErrorMessage>
          </Grid>
          <Grid
            xs={12}
            item
            display="flex"
            justifyContent="space-around"
            className={classes.totalPeopleContainer}
          >
            <Controller
              name="vip"
              control={control}
              render={({ field }) => (
                <FormControlLabel
                  {...field}
                  control={
                    <ToogleButton
                      className={classes.toogleButton}
                      defaultChecked
                    />
                  }
                  label="VIP?"
                />
              )}
            />
            <Controller
              name="occupied"
              control={control}
              render={({ field }) => (
                <FormControlLabel
                  {...field}
                  control={<ToogleButton className={classes.toogleButton} />}
                  label="Occupied"
                  onChange={(event, newvalue) => field.onChange(newvalue)}
                />
              )}
            />
            <Controller
              name="reserved"
              control={control}
              render={({ field }) => (
                <FormControlLabel
                  {...field}
                  control={<ToogleButton className={classes.toogleButton} />}
                  label="Reserved?"
                />
              )}
            />
          </Grid>
          <Grid xs={12} item>
            <Controller
              name="personName"
              control={control}
              rules={{ required: 'Person Name is required' }}
              render={({ field }) => (
                <TextField
                  {...field}
                  placeholder="Enter Person Name"
                  className={classes.textField}
                />
              )}
            />
            <StyledErrorMessage>
              {errors.personName?.message}
            </StyledErrorMessage>
          </Grid>
          <Grid item container sx={12} spacing={6}>
            <Grid xs={6} item>
              <Controller
                name="date"
                control={control}
                rules={{ required: 'Date is required' }}
                render={({ field }) => (
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer
                      components={['DatePicker']}
                      className={classes.datefield}
                    >
                      <DatePicker
                        {...field}
                        placeholder="Enter Date"
                        onChange={(newValue) =>
                          field.onChange(dayjs(newValue).format())
                        }
                        slotProps={{
                          textField: {
                            fullWidth: true,
                          },
                        }}
                        className={classes.fieldBackground}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                )}
              />
              <StyledErrorMessage>{errors.date?.message}</StyledErrorMessage>
            </Grid>
            <Grid xs={6} item>
              <Controller
                name="MobileNumber"
                control={control}
                rules={{ required: 'Mobile Number is required' }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    placeholder="Enter Mobile Number"
                    fullWidth
                    InputProps={{
                      endAdornment: (
                        <StyledImage src={PhoneIcon} alt="phone icon" />
                      ),
                    }}
                    className={classes.fieldBackground}
                  />
                )}
              />
              <StyledErrorMessage>
                {errors.MobileNumber?.message}
              </StyledErrorMessage>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={5} sm={12} xs={12}>
          <Box
            className={classes.uploadImageContainer}
            onClick={handleImageClick}
          >
            {!selectedImage && <Typography>Click to Upload</Typography>}
            {selectedImage && (
              <Box className={classes.imageBox}>
                <img
                  src={selectedImage}
                  alt="Selected"
                  className={classes.image}
                />
              </Box>
            )}
            <Controller
              name="image"
              control={control}
              rules={{ required: 'image is required' }}
              render={({ field: { value, onChange, ...field } }) => (
                <input
                  {...field}
                  ref={fileInputRef}
                  accept="*"
                  type="file"
                  value={value?.fileName}
                  onChange={(event) => {
                    onChange(event.target.files[0])
                    handleImageUpload(event)
                    setImageError(false)
                  }}
                  className={classes.inputImage}
                />
              )}
            />
          </Box>
          <StyledErrorMessage>
            {errors.image?.message || imageError ? 'Image is required' : ''}
          </StyledErrorMessage>
        </Grid>
      </Grid>
      {title === 'Edit Table' ? (
        <Box display="flex" justifyContent="end">
          <Button
            variant="contained"
            className={classes.updateButton}
            onClick={handleSaveClick}
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
        <Box display="flex" justifyContent="end">
          <Button
            variant="contained"
            className={classes.saveButton}
            onClick={handleSaveClick}
          >
            Save
          </Button>
        </Box>
      )}
    </Box>
  )
}

export default Form
