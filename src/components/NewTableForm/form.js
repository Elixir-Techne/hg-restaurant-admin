import {
  Autocomplete,
  Box,
  Button,
  FormControlLabel,
  Grid,
  IconButton,
  Switch,
  TextField,
  Typography,
} from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import moment from 'moment'
import Image from 'next/image'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import styled from 'styled-components'

import DropDown from '../../../public/images/dropdown.png'
import MinusIcon from '../../../public/images/minusIcon.png'
import NumberIcon from '../../../public/images/numberIcon.png'
import PhoneIcon from '../../../public/images/phone.png'
import PlusIcon from '../../../public/images/plusIcon.png'
import { theme } from '../../theme'
import './form.css'

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
})

function Form() {
  const [selectedImage, setSelectedImage] = useState(null)

  const testingDaa = [
    { id: 1, name: 'hello' },
    { id: 2, name: 'world' },
    { id: 3, name: 'india' },
  ]
  const { control, register, handleSubmit, errors } = useForm()
  const renderToggle = (params) => (
    <IconButton>
      <Image src={DropDown} alt="Dropdown" />
    </IconButton>
  )
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
    console.log(data, '============')
  }

  const handleUp = () => {
    console.log('==')
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
          <Grid xs={12}>
            <Controller
              name="TableNumber"
              control={control}
              rules={{ required: 'Sector is required' }}
              render={({ field }) => (
                <Autocomplete
                  {...field}
                  options={testingDaa}
                  getOptionLabel={(option) => option.name}
                  sx={{
                    background: '#F5F6FA',
                    borderRadius: '17px',
                  }}
                  renderInput={(params) => (
                    <TextField {...params} placeholder="choose sector" />
                  )}
                  renderToggle={renderToggle}
                />
              )}
            />
          </Grid>
          <Grid xs={12}>
            <Controller
              name="TableNumber"
              control={control}
              rules={{ required: 'Table Number is required' }}
              render={({ field }) => (
                <TextField
                  fullWidth
                  {...field}
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
          </Grid>
          <Grid xs={12} display="flex">
            <StyledImage src={MinusIcon} alt="minus" />
            <Controller
              name="TotalPerson"
              control={control}
              rules={{ required: 'Total person is required' }}
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
            <StyledImage src={PlusIcon} alt="add" />
          </Grid>
          <Grid
            xs={12}
            display="flex"
            justifyContent="space-around"
            sx={{
              '@media (max-width:899px)': {
                flexWrap: 'wrap',
              },
            }}
          >
            <FormControlLabel
              control={<ToogleButton sx={{ m: 1 }} defaultChecked />}
              label="VIP?"
            />
            <FormControlLabel
              control={<ToogleButton sx={{ m: 1 }} defaultChecked />}
              label="Occupied"
            />
            <FormControlLabel
              control={<ToogleButton sx={{ m: 1 }} defaultChecked />}
              label="Reserved?"
            />
            {/* </Box> */}
          </Grid>
          <Grid xs={12}>
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
          </Grid>
          <Grid
            item
            container
            sx={12}
            display="flex"
            justifyContent="space-between"
          >
            <Grid xs={5.5} sx={{ background: '#F5F6FA', borderRadius: '17px' }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                  <DatePicker
                    placeholder="Enter Date"
                    slotProps={{ textField: { size: 'small' } }}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>
            <Grid xs={5.5}>
              <Controller
                name="MobileNumber"
                control={control}
                rules={{ required: 'Mobile Number is required' }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    placeholder="Enter Mobile Number"
                    InputProps={{
                      endAdornment: (
                        <StyledImage src={PhoneIcon} alt="phone icon" />
                      ),
                    }}
                    sx={{ background: '#F5F6FA', borderRadius: '17px' }}
                  />
                )}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={5} sm={12} xs={12}>
          <Box
            sx={{
              // margin: '0 1.5rem',
              // padding: '1.1rem',
              height: '50%',
              width: '100%',
              filter: 'drop-shadow(0px 10px 10px rgba(196,200,208,0.4 ))',
              background: '#ffffff',
              borderRadius: '20px',
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
          >
            {!selectedImage && (
              <Typography sx={{ textAlign: 'center' }}>
                Click to upload
              </Typography>
            )}
            {selectedImage && (
              <Box
                sx={{
                  margin: '0 auto',
                  width: '90%',
                  height: '`90`%',
                  backgroundImage: `url(images/tableBgImage.png)`,
                  backgroundRepeat: 'no - repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'right',
                }}
              >
                <Controller
                  name="TableImage"
                  control={control}
                  rules={{ required: 'Mobile Number is required' }}
                  render={({ field }) => (
                    <img
                      {...field}
                      src={selectedImage}
                      alt="Selected"
                      style={{
                        height: '100%',
                        width: '100%',
                        objectFit: 'contain',
                      }}
                    />
                  )}
                />
              </Box>
            )}
            <input
              hidden
              accept="*"
              type="file"
              onChange={(event) => handleImageUpload(event)}
            />
          </Box>
        </Grid>
      </Grid>
      <Box display="flex" justifyContent="end">
        <Button
          type="submit"
          variant="contained"
          sx={{
            marginTop: '1rem',
            fontSize: '2rem',
            borderRadius: '20px',
            alignSelf: 'flex-end',
            padding: '0 2rem',
            '@media (max-width: 899px)': {
              fontSize: '1.5rem',
            },
          }}
          onClick={() => handleSubmit(onSubmit)}
        >
          Save
        </Button>
      </Box>
    </Box>
  )
}

export default Form
