import { Box, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import Image from 'next/image'
import styled from 'styled-components'

export const UseStyleFormBox = makeStyles(() => ({
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
  paddingBottom: '3px',
  height: '90%',
  '@media (max-height:725px)': {
    height: '85%',
  },
})

// form styled

export const UseStyleForm = makeStyles(() => ({
  mainContainer: {
    height: '100%',
    padding: '1rem',
    overflowY: 'auto',
  },
  grid: {
    '@media (max-width: 899px)': {
      flexDirection: 'column-reverse',
    },
    '@media (max-width: 768px)': {
      flexDirection: 'column-reverse',
    },
  },
  background: {
    background: '#F5F6FA',
    borderRadius: '17px',
  },
  textArea: {
    background: '#F5F6FA',
    borderRadius: '17px',
    height: '165px',
    '@media (max-width:899px)': {
      height: '125px',
    },
  },
  imageBox: {
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
    '@media (max-width: 475px)': {
      height: '144px',
      width: '195px',
      margin: '0 auto',
    },
    '@media (max-width: 375px)': {
      height: '164px',
      width: '210px',
      margin: '0 auto',
    },
  },
  imageField: {
    margin: '0 auto',
    width: '90%',
    height: '90%',
  },
  image: {
    height: '100%',
    width: '100%',
    objectFit: 'contain',
  },
  inputField: {
    display: 'none',
  },
  totalPeopleContainer: {
    display: 'flex',
    margin: '0 auto',
    '@media (max-width: 899px)': {
      width: '70%',
    },
    '@media (max-width: 768px)': {
      width: '60%',
    },
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

export const StyledImage = styled(Image)({
  margin: '0 0.5rem',
  cursor: 'pointer',
})
export const StyledErrorMessage = styled(Typography)({
  fontSize: '0.7rem',
  color: 'red',
  paddingLeft: '0.5rem',
  position: 'fix',
})
