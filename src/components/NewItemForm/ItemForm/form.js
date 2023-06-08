import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
  TextField,
  TextareaAutosize,
  Typography,
} from '@mui/material'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import styled from 'styled-components'

import AddItemIcon from '../../../../public/images/addItemIcon.png'
import DropDown from '../../../../public/images/dropdown.png'
import MinusIcon from '../../../../public/images/minusIcon.png'
import PlusIcon from '../../../../public/images/plusIcon.png'

const StyledImage = styled(Image)({
  margin: '0 0.5rem',
  cursor: 'pointer',
})
function ItemForm({ path }) {
  const [selectedImage, setSelectedImage] = useState(null)
  const [priceOut, setPriceOut] = useState('')
  const { control, register, handleSubmit, formState } = useForm()
  const fileInputRef = useRef(null)

  const testingCategory = [
    { id: 1, name: 'veg' },
    { id: 2, name: 'non-veg' },
  ]
  const handleImageClick = () => {
    fileInputRef.current.click()
  }
  const handleImageUpload = (event) => {
    const file = event.target.files[0]
    console.log(file)
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
  const handleIncrement = () => {
    setPriceOut(count + 1)
  }

  const handleDecrement = () => {
    if (count > 0) {
      setPriceOut(count - 1)
    }
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
        <Grid item container md={7} xs={12} sm={12} gap={9}>
          <Grid xs={12}>
            <Controller
              name="category"
              control={control}
              rules={{ required: 'Category is required' }}
              render={({ field }) => (
                <Autocomplete
                  {...field}
                  options={testingCategory}
                  getOptionLabel={(option) => option.name}
                  sx={{
                    background: '#F5F6FA',
                    borderRadius: '17px',
                  }}
                  renderInput={(params) => (
                    <TextField {...params} placeholder="choose Category" />
                  )}
                />
              )}
            />
          </Grid>
          <Grid xs={12}>
            <Controller
              name="subCategory"
              control={control}
              rules={{ required: 'Sub Category is required' }}
              render={({ field }) => (
                <Autocomplete
                  {...field}
                  options={testingCategory}
                  getOptionLabel={(option) => option.name}
                  sx={{
                    background: '#F5F6FA',
                    borderRadius: '17px',
                  }}
                  renderInput={(params) => (
                    <TextField {...params} placeholder="choose Sub Category" />
                  )}
                />
              )}
            />
          </Grid>
          <Grid xs={12}>
            <Controller
              name="foodType"
              control={control}
              rules={{ required: 'Food Type is required' }}
              render={({ field }) => (
                <Autocomplete
                  {...field}
                  options={testingCategory}
                  getOptionLabel={(option) => option.name}
                  sx={{
                    background: '#F5F6FA',
                    borderRadius: '17px',
                  }}
                  renderInput={(params) => (
                    <TextField {...params} placeholder="choose Food Type" />
                  )}
                />
              )}
            />
          </Grid>
          <Grid xs={12}>
            <Controller
              name="itemName"
              control={control}
              rules={{ required: 'Item Name is required' }}
              render={({ field }) => (
                <TextField
                  {...field}
                  placeholder="Item Name"
                  sx={{
                    padding: '0 1rem',
                    width: '100%',
                    background: '#F5F6FA',
                    borderRadius: '17px',
                  }}
                />
              )}
            />
          </Grid>
          <Grid xs={12}>
            <Controller
              name="description"
              control={control}
              rules={{ required: 'Description is required' }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  sx={{
                    background: '#F5F6FA',
                    borderRadius: '17px',
                    height: '165px',
                    '@media (max-width:899px)': {
                      height: '125px',
                    },
                  }}
                  placeholder="Description and Add ons"
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="space-around">
              <Controller
                name="bestSelling"
                control={control}
                render={({ field }) => (
                  <FormControlLabel
                    {...field}
                    value="Best Selling?"
                    control={<Checkbox />}
                    label="Best Selling?"
                    labelPlacement="end"
                  />
                )}
              />
              <Controller
                name="outOfOrder"
                control={control}
                render={({ field }) => (
                  <FormControlLabel
                    {...field}
                    value="Out of Order?"
                    control={<Checkbox />}
                    label="Out of Order?"
                    labelPlacement="end"
                  />
                )}
              />
            </Box>
          </Grid>
        </Grid>
        <Grid
          item
          md={5}
          xs={12}
          sm={12}
          gap={5}
          display="flex"
          flexDirection="column"
        >
          <Grid xs={12}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '90%',
                width: '100%',
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
              {!selectedImage && <Image src={AddItemIcon} alt="addIcon" />}
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
                name="itemImage"
                control={control}
                // rules={{ required: 'item image is required' }}
                render={({ field }) => (
                  <input
                    {...field}
                    ref={fileInputRef}
                    accept="*"
                    type="file"
                    onChange={(event) => handleImageUpload(event)}
                    style={{ display: 'none' }}
                  />
                )}
              />
            </Box>
          </Grid>
          <Grid xs={12} justifyContent="center">
            <Box
              display="flex"
              margin="0 auto"
              sx={{
                '@media (max-width: 899px)': {
                  width: '70%',
                },
                '@media (max-width: 768px)': {
                  width: '60%',
                },
              }}
            >
              <StyledImage
                src={MinusIcon}
                alt="minus"
                onClick={handleDecrement}
              />
              <Controller
                name="price"
                control={control}
                rules={{ required: 'Price is required' }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    placeholder="Total Price"
                    size="small"
                    sx={{
                      background: '#F5F6FA',
                      borderRadius: '17px',
                    }}
                  />
                )}
              />
              <StyledImage src={PlusIcon} alt="add" onClick={handleIncrement} />
            </Box>
          </Grid>
        </Grid>
      </Grid>
      {path.includes('edit') ? (
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
            onClick={handleSubmit(onSubmit)}
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
export default ItemForm
