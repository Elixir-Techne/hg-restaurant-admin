import { Box, Switch, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

export const UseStyleNewTable = makeStyles((theme) => ({
  mainContainer: {
    padding: '1rem',
    width: '100%',
    height: '100%',
    '@media (max-width:768px)': { padding: '0.5rem' },
  },
  title: {
    fontSize: '24px',
    color: '#3C49FF',
    fontWeight: 'bold',
  },
  divider: {
    width: '100%',
    height: '5px',
  },
}))
export const StyledForm = styled(Box)({
  margin: '2rem 1.5rem',
  background: '#FDFDFD',
  filter: 'drop-shadow(0px 3px 3px rgba(0,0,0,0.16 ))',
  borderRadius: '21px',
  height: '90%',
  '@media (max-height:725px)': {
    height: '85%',
  },
})

// form style

export const UseStyleTableForm = makeStyles((theme) => ({
  mainContainer: {
    height: '100%',
    padding: '1rem',
    overflowY: 'auto',
  },
  gridContainer: {
    '@media (max-width: 899px)': {
      flexDirection: 'column-reverse',
    },
    '@media (max-width: 768px)': {
      flexDirection: 'column-reverse',
    },
  },
  fieldBackground: {
    background: '#F5F6FA',
    borderRadius: '17px',
  },
  totalPeopleContainer: {
    '@media (max-width:899px)': {
      flexWrap: 'wrap',
    },
  },
  toogleButton: {
    m: 1,
  },
  textField: {
    margin: '0.5rem 0',
    padding: '0 1rem',
    width: '100%',
    background: '#F5F6FA',
    borderRadius: '17px',
  },
  datefield: {
    paddingTop: '0',
  },
  uploadImageContainer: {
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
  },
  imageBox: {
    margin: '0 auto',
    width: '90%',
    height: '90%',
  },
  image: {
    height: '100%',
    width: '100%',
    objectFit: 'contain',
  },
  inputImage: {
    display: 'none',
  },
  updateButton: {
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
  },
  cancelButton: {
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
  },
  saveButton: {
    marginTop: '1rem',
    fontSize: '1.6rem',
    borderRadius: '20px',
    alignSelf: 'flex-end',
    padding: '0 2rem',
    textTransform: 'inherit',
    '@media (max-width: 899px)': {
      fontSize: '1.5rem',
    },
  },
}))
export const ToogleButton = styled((props) => (
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

export const StyledImage = styled(Image)({
  margin: '0.5rem',
  cursor: 'pointer',
})

export const StyledErrorMessage = styled(Typography)({
  fontSize: '0.8rem',
  color: 'red',
  paddingLeft: '0.5rem',
  position: 'fix',
})
