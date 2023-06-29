import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
} from '@mui/material'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import { useContext, useEffect, useRef, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'

import AddItemIcon from '../../../../public/images/addItemIcon.png'
import MinusIcon from '../../../../public/images/minusIcon.png'
import PlusIcon from '../../../../public/images/plusIcon.png'
import { rows } from '../../../app/(protected)/menu/page'
import { OrdersDetailContext } from '../../../context/orderDetailContext'
import { StyledErrorMessage, StyledImage, UseStyleForm } from '../styles'

function ItemForm({ title }) {
  const [selectedImage, setSelectedImage] = useState(null)
  const [editMenuItem, setEditMenuItem] = useState(null)
  const { formId } = useContext(OrdersDetailContext)
  const menuItemId = formId
  const { control, handleSubmit, formState, setValue, getValues } = useForm({
    defaultValues: {
      bestSelling: true,
      outOfOrder: false,
    },
  })
  const fileInputRef = useRef(null)
  const route = useRouter()
  const pathname = usePathname()
  const error = formState?.errors
  const classes = UseStyleForm()
  const testingCategory = [
    { id: 1, name: 'veg' },
    { id: 2, name: 'non-veg' },
  ]

  //API get form

  // useEffect(() => {
  //   MenuItem(restaurant_id, menu_id)
  //     .then((res) => res)
  //     .catch((err) => console.log(err))
  // }, [MenuItem])
  useEffect(() => {
    const menuDetails = rows.find((el) => el.id === menuItemId)
    setEditMenuItem(menuDetails)
  }, [menuItemId])
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
    // console.log(selectedImage)
    console.log(data)
    if (pathname.includes('edit')) {
      //API put for menu item form
      // editMenuItem({restaurant_id, menu_id},data)
      //   .then((res) => res)
      //   .catch((err) => console.log(err))
    } else if (pathname.includes('add')) {
      //API post for menu item form
      // postMenuItem({restaurant_id,},data)
      //   .then((res) => res)
      //   .catch((err) => console.log(err))
    }
    route.push('/menu')
  }

  const handleCancel = () => {
    route.push('/menu')
  }
  const handleIncrement = () => {
    const price = getValues('price')
    setValue('price', Number(price) + 1)
  }

  const handleDecrement = () => {
    const price = getValues('price')
    if (Number(price) > 0) {
      setValue('price', Number(price) - 1)
    }
  }

  console.log(editMenuItem)
  return (
    <Box className={classes.mainContainer}>
      <Grid container spacing={4} display="flex" className={classes.grid}>
        <Grid
          item
          container
          md={7}
          xs={12}
          sm={12}
          gap={9}
          sx={{
            gap: {
              xs: 2,
              md: 8,
            },
          }}
        >
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
                  onChange={(event, newValue) => field.onChange(newValue)}
                  className={classes.background}
                  renderInput={(params) => (
                    <TextField {...params} placeholder="choose Category" />
                  )}
                />
              )}
            />
            {error?.category?.type === 'required' ? (
              <StyledErrorMessage>
                {error?.category?.message}
              </StyledErrorMessage>
            ) : null}
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
                  onChange={(event, newValue) => field.onChange(newValue)}
                  className={classes.background}
                  renderInput={(params) => (
                    <TextField {...params} placeholder="choose Sub Category" />
                  )}
                />
              )}
            />
            {error?.subCategory?.type === 'required' ? (
              <StyledErrorMessage>
                {error?.subCategory?.message}
              </StyledErrorMessage>
            ) : null}
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
                  onChange={(event, newValue) => field.onChange(newValue)}
                  className={classes.background}
                  renderInput={(params) => (
                    <TextField {...params} placeholder="choose Food Type" />
                  )}
                />
              )}
            />
            {error?.foodType?.type === 'required' ? (
              <StyledErrorMessage>
                {error?.foodType?.message}
              </StyledErrorMessage>
            ) : null}
          </Grid>
          <Grid xs={12}>
            <Controller
              name="itemName"
              control={control}
              rules={{ required: 'Item Name is required' }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  placeholder="Item Name"
                  className={classes.background}
                />
              )}
            />
            {error?.itemName?.type === 'required' ? (
              <StyledErrorMessage>
                {error?.itemName?.message}
              </StyledErrorMessage>
            ) : null}
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
                  className={classes.textArea}
                  placeholder="Description and Add ons"
                />
              )}
            />
            {error?.description?.type === 'required' ? (
              <StyledErrorMessage>
                {error?.description?.message}
              </StyledErrorMessage>
            ) : null}
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
            <Box className={classes.imageBox} onClick={handleImageClick}>
              {!selectedImage && <Image src={AddItemIcon} alt="addIcon" />}
              {selectedImage && (
                <Box className={classes.imageField}>
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
                rules={{ required: 'image image is required' }}
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
                    className={classes.inputField}
                  />
                )}
              />
            </Box>
            {error?.image?.type === 'required' ? (
              <StyledErrorMessage>{error?.image?.message}</StyledErrorMessage>
            ) : null}
          </Grid>
          <Grid xs={12} justifyContent="center">
            <Box className={classes.totalPeopleContainer}>
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
                    className={classes.background}
                  />
                )}
              />
              <StyledImage src={PlusIcon} alt="add" onClick={handleIncrement} />
            </Box>
            {error?.price?.type === 'required' ? (
              <StyledErrorMessage>{error?.price?.message}</StyledErrorMessage>
            ) : null}
          </Grid>
        </Grid>
      </Grid>
      {title === 'Edit Item' ? (
        <Box display="flex" justifyContent="end">
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
        <Box display="flex" justifyContent="end">
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
export default ItemForm
