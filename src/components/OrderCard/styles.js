import { Box, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import styled from 'styled-components'

import { theme } from '@/theme'

export const UseStyle = makeStyles((theme) => ({
  cancelOrderBox: {
    height: '100%',
    width: '100%',
  },
  cardContainer: {
    position: 'absolute',
    width: '63.2px',
    height: '23px',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  cardStatusTitle: {
    textTransform: 'uppercase',
    background: theme.palette.primary.main,
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: '13px',
    borderRadius: '15px',
    textAlign: 'center',
  },
  waiterBox: {
    margin: ' 0 auto',
  },
  timeContainer: {
    margin: ' 0 auto',
    '@media (max-width:1024px)': {
      justifyContent: 'space-between',
    },
  },
  divider: {
    width: '209px',
    height: '2px',
    margin: '0 auto',
    '@media (max-width:1024px)': { width: '155px' },
  },
  orderMainContainer: {
    flex: 1,
    overflowY: 'auto',
    overflowX: 'hidden',
    width: '239px',
    flexDirection: 'column ',
    '@media (max-width:1024px)': {
      width: '168px',
    },
  },
  orderSubContainer: {
    padding: '0.5rem 1rem',
  },
  billingBox: {
    marginTop: '1.5rem',
    '@media (max-width:1024px)': { marginTop: '1rem' },
  },
}))

export const StyledMainContainer = styled(Box)({
  margin: theme.spacing(10),
  '@media (max-width:1440px)': {
    gap: '1vw',
  },

  '@media (max-width:1024px)': {
    margin: theme.spacing(3),
  },
  '@media (max-width:425px)': {
    justifyContent: 'center',
    margin: theme.spacing(3),
    gap: '1vw',
  },
  '@media (max-width:375px)': {
    margin: theme.spacing(1.5),
    gap: '1vw',
    justifyContent: 'center',
  },
  '& ::-webkit-scrollbar': {
    width: '2px',
  },
  '& ::-webkit-scrollbar-track': {
    background: '#f1f1f1',
  },
  '& ::-webkit-scrollbar-thumb': {
    background: '#D8E3EB',
  },
})

export const StyledSubContainer = styled(Box)({
  width: '242px',
  height: '355px',
  marginTop: '14px',
  position: 'relative',
  filter: 'drop-shadow(0px 10px 10px rgba(196,200,208,0.4 ))',
  borderRadius: '15px',
  backgroundColor: '#FFFFFF',
  // '@media (max-width:1024px)': {
  //   margin: `${theme.spacing(1.5)} ${theme.spacing(0.55)}`,
  // },
  '@media (max-width:1024px)': {
    width: '172px',
    height: '286px',
  },
  '@media (max-width:375px)': {
    margin: `${theme.spacing(1.5)} ${theme.spacing(0.55)}`,
    width: '168px',
    height: '286px',
  },
})
export const StyledHeadTitle = styled(Typography)({
  fontSize: '20px',
  fontWeight: 'bold',
  color: '#52575D',
  marginBottom: '0.7rem',
})
export const StyledTitle = styled(Typography)({
  color: '#52575D',
  margin: ' 0 auto',
  fontSize: '18px',
  '@media (max-width:1024px)': {
    margin: '0 0.5rem',
  },
})
export const StyledBoldTitle = styled(Typography)({
  color: '#52575D',
  margin: ' 0 auto',
  fontSize: '18px',
  fontWeight: 'bold',
  '@media (max-width:1024px)': {
    margin: '0 0.5rem',
  },
})

export const StyledServedTitle = styled(Typography)({
  borderRadius: '15px',
  color: 'white',
  fontSize: '1.4rem',
  background: theme.palette.primary.main,
  textAlign: 'center',
  padding: '2px 25px',
  margin: '0 1rem',
  cursor: 'pointer',
  '@media (max-width:1024px)': {
    padding: '2px 25px',
    fontSize: '0.9rem',
    margin: '0',
    marginLeft: '0.3rem',
  },
})
