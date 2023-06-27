import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'

import { UseStyle } from './styles'

export default function PopUp({
  setOrderCancelled,
  setOrderData,
  cancelledId,
}) {
  const { control, register, handleSubmit, formState } = useForm()
  const classes = UseStyle()
  const onSubmit = (data) => {
    setOrderData((prev) =>
      prev.map((o) =>
        o.order_id === cancelledId
          ? {
              ...o,
              status: 'cancelled',
              cooking_status: 'cancelled',
            }
          : o,
      ),
    )
    setOrderCancelled(false)
  }
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      className={classes.mainContainer}
    >
      <Box display="flex" className={classes.subContainer}>
        <Box
          display="flex"
          flexDirection="column"
          className={classes.textContainer}
        >
          <Box
            display="flex"
            flexDirection="column"
            className={classes.inputContainer}
          >
            <Typography className={classes.title}>Reason</Typography>
            <Controller
              name="description"
              control={control}
              rules={{ required: 'Description is required' }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  className={classes.texField}
                  placeholder="Description and Add ons"
                />
              )}
            />
            <Box display="flex" justifyContent="center">
              <Button
                variant="contained"
                className={classes.submitButton}
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
