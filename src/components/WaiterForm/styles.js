import { Autocomplete, Box, TextField, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import styled from 'styled-components'

export const UseStyleFormContainer = makeStyles(() => ({
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

export const UseStyleForm = makeStyles(() => ({
  mainContainer: {
    height: '100%',
    padding: '1rem',
    overflowY: 'auto',
  },
  imageSizeBox: {
    marginLeft: '15%',
  },
  fieldBox: {
    background: '#F5F6FA',
    borderRadius: '17px',
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

export const StyledSubContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  '@media (max-width:375px)': {
    fontSize: '1.3rem',
    flexDirection: 'column',
    alignItems: 'start',
    gap: '0.5rem',
  },
})
export const StyledFormLabel = styled(Typography)({
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

export const StyledTextField = styled(TextField)({
  padding: '0 1rem',
  width: '100%',
  background: '#ffffff',
  borderRadius: '13px',
  border: '1px solid #AACDE8',
})
export const StyledAutocomplete = styled(Autocomplete)({
  padding: '0 1rem',
  width: '100%',
  background: '#ffffff',
  borderRadius: '13px',
  border: '1px solid #AACDE8',
})

export const StyledErrorMessage = styled(Typography)({
  fontSize: '0.8rem',
  color: 'red',
  marginLeft: '15%',
  position: 'fix',
  '@media (max-width:375px)': {
    marginLeft: '0',
  },
})
