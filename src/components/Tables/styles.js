import { Box, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import Image from 'next/image'
import styled from 'styled-components'

export const UseStyle = makeStyles((theme) => ({
  mainContainer: {
    padding: '2rem',
    paddingTop: '0',
    width: '100%',
    '@media (max-width:1024px)': {
      padding: '0.5rem',
    },
  },
  subContainer: {
    position: 'relative',
  },
  button: {
    fontSize: '1.1rem',
    borderRadius: '15px',
    alignSelf: 'flex-end',
    '@media (max-width:1024px)': {
      fontSize: '0.9rem',
    },
    '@media (max-width:425px)': {
      fontSize: '0.7rem',
    },
  },
  tableAreaBox: {
    width: '327px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, 0)',
    '@media (max-width:768px)': {
      position: 'inherit',
      justifyContent: 'center',
      gap: '1vw',
      marginTop: '0.5rem',
    },
  },
  sittingTableMainContainer: {
    overflowY: 'auto',
    padding: '0 1rem',
    '@media (max-width:1024px)': {
      padding: '0',
    },
    '@media (max-width:525px)': {
      flexDirection: 'column',
    },
  },
  sittingTableSubContainer: {
    width: '80%',
    '@media (max-width:525px)': {
      width: '100%',
    },
  },
  allTables: {
    width: '20%',
    flex: 1,
    '@media (max-width:525px)': {
      width: '100%',
    },
  },
}))
export const StyledTableFilter = styled(Button)({
  borderRadius: '20px',
  fontSize: '1.3rem',
  width: '156px',
  padding: '0.5rem 1.5rem',
  filter: 'drop-shadow(0px 3px 3px rgba(0,0,0,0.16 ))',
  '@media (max-width:1024px)': {
    width: '140px',
    fontSize: '1rem',
  },
  '@media (max-width:525px)': {
    width: '125px',
    fontSize: '0.9rem',
  },
  '@media (max-width:320px)': {
    width: '100px',
    fontSize: '0.9rem',
  },
})

// sitting table container style

export const UseStyleSittingTable = makeStyles((theme) => ({
  mainContainer: {
    width: '100%',
    marginTop: '3.5rem',
    padding: '0.5rem',
    '@media (max-width:1024px)': {
      gap: '1vw',
    },
    '@media (max-width:525px)': {
      justifyContent: 'center',
      gap: '1vh',
      marginTop: '1.5rem',
    },
  },
  tableBox: {
    width: 'auto',
    '@media (max-width:1024px)': {
      width: '116px',
    },
  },
  tableTypography: {
    marginRight: '0.5rem',
    fontSize: '1rem',
    color: '#077254',
    fontWeight: 'bold',
    '@media (max-width:1024px)': {
      fontSize: '0.7rem',
    },
  },
  tableImageBox: {
    '@media (max-width:1024px)': {
      marginTop: '0.3rem',
    },
  },
  waiter: {
    fontSize: '0.8rem',
    fontWeight: 'bold',

    '@media (max-width:1024px)': {
      fontSize: '0.6rem',
    },
  },
  time: {
    fontSize: '0.7rem',

    '@media (max-width:1024px)': {
      fontSize: '0.5rem',
    },
  },
}))

export const StyledTableBox = styled(Box)({
  flexDirection: 'column',
  background: ' #ffffff',
  borderRadius: '20px',
  filter: 'drop-shadow(0px 10px 10px rgba(196,200,208,0.4 ))',
  padding: '1rem 0.5rem',
  '@media (max-width:1024px)': {
    padding: '0.1rem 0.3rem',
  },
})
export const SyledImage = styled(Image)({
  margin: '0.5rem',
  cursor: 'pointer',
  '@media (max-width:1024px)': {
    margin: '0',
    height: '3rem',
    width: '3.5rem',
  },
})
export const SyledImageIcon = styled(Image)({
  margin: '0.5rem',
  cursor: 'pointer',
  '@media (max-width:1024px)': {
    margin: '0.2rem',
    height: '1rem',
    width: '1rem',
  },
})
export const SyledImageCrawn = styled(Image)({
  cursor: 'pointer',
  '@media (max-width:1024px)': {
    height: '0.7rem',
    width: '0.8rem',
  },
})
