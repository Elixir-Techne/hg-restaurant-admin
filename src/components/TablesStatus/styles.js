import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import { Box, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import styled from 'styled-components'

export const UseStyle = makeStyles((theme) => ({
  mainContainter: {
    width: '100%',
    height: 'auto',
    padding: '2.5rem 1rem',
    '@media (max-width:768px)': {
      paddingBottom: '0.5rem',
    },
    '@media (max-width:525px)': {
      paddingBottom: '0.3rem',
    },
  },
  title: {
    fontSize: '1.6rem',
    color: '#3C49FF',
    fontWeight: 'bold',
    '@media (max-width:525px)': {
      fontSize: '1.2rem',
    },
    '@media (max-width:320px)': {
      fontSize: '0.8rem',
    },
  },
  statusBox: {
    width: 'auto',
    padding: '0 1rem',
    '@media (max-width:320px)': {
      padding: '0 0.2rem',
    },
  },
  iconBox: {
    color: '#B3B8BD',
    '@media (max-width:525px)': {
      fontSize: 'small',
    },
  },
  divider1: { width: '100%' },
  divider2: { width: '100%', height: '0.5px' },
}))

export const StyledTableStatusContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 1rem',
  '@media (max-width:525px)': {
    margin: '0 0.4rem',
  },
  '@media (max-width:425px)': {
    margin: '0 0.3rem',
  },
})
export const StyledTableTitle = styled(Typography)({
  fontSize: '1.3rem',
  marginLeft: '0.8rem',
  '@media (max-width:1024px)': {
    fontSize: '1.1rem',
    marginLeft: '0.5rem',
  },
  '@media (max-width:525px)': {
    fontSize: '1rem',
    marginLeft: '0.3rem',
  },
  '@media (max-width:525px)': {
    fontSize: '0.9rem',
    marginLeft: '0.3rem',
  },
  '@media (max-width:475px)': {
    fontSize: '0.7rem',
    marginLeft: '0.2rem',
  },
  '@media (max-width:375px)': {
    fontSize: '0.6rem',
    marginLeft: '0.2rem',
  },
})
export const StyledFiberManualRecordIcon = styled(FiberManualRecordIcon)({
  '@media (max-width:525px)': {
    fontSize: 'small',
  },
})
