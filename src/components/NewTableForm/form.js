import {
  Autocomplete,
  Box,
  Button,
  FormControlLabel,
  Grid,
  Hidden,
  IconButton,
  Switch,
  TextField,
  Typography,
} from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import dayjs from 'dayjs'
import moment from 'moment'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { Controller, set, useForm } from 'react-hook-form'
import styled from 'styled-components'

import DropDown from '../../../public/images/dropdown.png'
import MinusIcon from '../../../public/images/minusIcon.png'
import NumberIcon from '../../../public/images/numberIcon.png'
import PhoneIcon from '../../../public/images/phone.png'
import PlusIcon from '../../../public/images/plusIcon.png'
import '../../styles/form.css'
import { editTableForm, getTableForm, postTableForm } from '../../utils/api'

const ToogleButton = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  fontSize: '1.5rem',
  width: 42,
  height: 26,
  padding: 0,
  '@media (max-width:768px)': {
    width: 34,
    height: 20,
  },
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(1rem)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: 'red',
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
    '@media (max-width:768px)': {
      width: 16,
      height: 16,
    },
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    opacity: 1,
  },
}))

const StyledImage = styled(Image)({
  margin: '0.5rem',
  cursor: 'pointer',
})

const StyledErrorMessage = styled(Typography)({
  fontSize: '0.7rem',
  color: 'red',
  paddingLeft: '0.5rem',
  position: 'absolute',
})

function Form({ title }) {
  const [selectedImage, setSelectedImage] = useState(null)
  const fileInputRef = useRef(null)
  const route = useRouter()
  const testingDaa = [
    { id: 1, name: 'hello' },
    { id: 2, name: 'world' },
    { id: 3, name: 'india' },
  ]
  const {
    control,
    register,
    handleSubmit,
    errors,
    formState,
    setValue,
    getValues,
  } = useForm({
    defaultValues: {
      vip: true,
      reserved: false,
      occupied: false,
    },
  })

  const error = formState.errors

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
    console.log(selectedImage)
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

  return (
    <Box
      sx={{
        height: '100%',
        padding: '1rem',
        overflowY: 'auto',
      }}
    >
      <Grid
        container
        spacing={4}
        display="flex"
        sx={{
          '@media (max-width: 899px)': {
            flexDirection: 'column-reverse',
          },
          '@media (max-width: 768px)': {
            flexDirection: 'column-reverse',
          },
        }}
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
                  sx={{
                    background: '#F5F6FA',
                    borderRadius: '17px',
                  }}
                  renderInput={(params) => (
                    <TextField {...params} placeholder="choose sector" />
                  )}
                />
              )}
            />
            {error?.sector?.type === 'required' ? (
              <StyledErrorMessage>{error?.sector?.message}</StyledErrorMessage>
            ) : null}
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
                  sx={{
                    background: '#F5F6FA',
                    borderRadius: '17px',
                  }}
                  placeholder="Enter Table Number"
                  InputProps={{
                    endAdornment: (
                      <StyledImage src={NumberIcon} alt="dropdownimage" />
                    ),
                  }}
                />
              )}
            />
            {error?.TableNumber?.type === 'required' ? (
              <StyledErrorMessage>
                {error?.TableNumber?.message}
              </StyledErrorMessage>
            ) : null}
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
                defaultValue={0}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    placeholder="Enter No. of Persons"
                    sx={{
                      background: '#F5F6FA',
                      borderRadius: '17px',
                    }}
                  />
                )}
              />
              <StyledImage src={PlusIcon} alt="add" onClick={handleIncrement} />
            </Box>
            {error?.TotalPerson?.type === 'required' ? (
              <StyledErrorMessage>
                {error?.TotalPerson?.message}
              </StyledErrorMessage>
            ) : null}
          </Grid>
          <Grid
            xs={12}
            item
            display="flex"
            justifyContent="space-around"
            sx={{
              '@media (max-width:899px)': {
                flexWrap: 'wrap',
              },
            }}
          >
            <Controller
              name="vip"
              control={control}
              render={({ field }) => (
                <FormControlLabel
                  {...field}
                  control={<ToogleButton sx={{ m: 1 }} defaultChecked />}
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
                  control={<ToogleButton sx={{ m: 1 }} />}
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
                  control={<ToogleButton sx={{ m: 1 }} />}
                  label="Reserved?"
                />
              )}
            />

            {/* </Box> */}
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
                  sx={{
                    margin: '0.5rem 0',
                    padding: '0 1rem',
                    width: '100%',
                    background: '#F5F6FA',
                    borderRadius: '17px',
                  }}
                />
              )}
            />
            {error?.personName?.type === 'required' ? (
              <StyledErrorMessage>
                {error?.personName?.message}
              </StyledErrorMessage>
            ) : null}
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
                      sx={{ paddingTop: '0' }}
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
                            sx: {
                              background: '#F5F6FA',
                              borderRadius: '17px',
                            },
                          },
                        }}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                )}
              />

              {error?.date?.type === 'required' ? (
                <StyledErrorMessage>{error?.date?.message}</StyledErrorMessage>
              ) : null}
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
                    sx={{ background: '#F5F6FA', borderRadius: '17px' }}
                  />
                )}
              />
              {error?.MobileNumber?.type === 'required' ? (
                <StyledErrorMessage>
                  {error?.MobileNumber?.message}
                </StyledErrorMessage>
              ) : null}
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={5} sm={12} xs={12}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '50%',
              width: '90%',
              margin: '0 auto',
              filter: 'drop-shadow(0px 10px 10px rgba(196,200,208,0.4 ))',
              background: '#ffffff',
              borderRadius: '20px',
              cursor: 'pointer',
              '@media (max-width: 899px)': {
                height: '188px',
                width: '350px',
                margin: '0 auto',
              },
              '@media (max-width: 524px)': {
                height: '164px',
                width: '265px',
                margin: '0 auto',
              },
              '@media (max-width: 375px)': {
                height: '164px',
                width: '210px',
                margin: '0 auto',
              },
            }}
            onClick={handleImageClick}
          >
            {!selectedImage && <Typography>Click to Upload</Typography>}
            {selectedImage && (
              <Box
                sx={{
                  margin: '0 auto',
                  width: '90%',
                  height: '90%',
                }}
              >
                <img
                  src={selectedImage}
                  alt="Selected"
                  style={{
                    height: '100%',
                    width: '100%',
                    objectFit: 'contain',
                  }}
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
                  }}
                  style={{ display: 'none' }}
                />
              )}
            />
          </Box>
          {error?.image?.type === 'required' ? (
            <StyledErrorMessage>{error?.image?.message}</StyledErrorMessage>
          ) : null}
        </Grid>
      </Grid>
      {title === 'Edit Table' ? (
        <Box display="flex" justifyContent="end">
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
        <Box display="flex" justifyContent="end">
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
