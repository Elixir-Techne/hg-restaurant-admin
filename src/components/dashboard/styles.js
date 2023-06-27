import { Box, Card, CardHeader, Typography, styled } from '@mui/material'
import { makeStyles } from '@mui/styles'

import { theme } from '@/theme'

//revenue card

export const UseStylesRevenueCard = makeStyles((theme) => ({
  typographyTitle: {
    color: '#3C49FF',
    fontWeight: 'bold',
    '@media (max-width:475px)': {
      fontSize: '1.1rem',
    },
    '@media (max-width:360px)': {
      fontSize: '0.8rem',
    },
  },
  infoOutlinedIcon: {
    color: '#B3B8BD',
    '@media (max-width:475px)': {
      fontSize: 'medium',
    },
  },
  typographyStatus: {
    color: '#3C49FF',
    '@media (max-width:475px)': {
      fontSize: '1.1rem',
    },
    '@media (max-width:360px)': {
      fontSize: '0.8rem',
    },
  },
  cardHeader: {
    color: '#3C49FF',
  },
  cardContent: {
    height: '350px',
  },
}))
export const StyleRevenueCard = styled(Card)({
  height: '400px',
  borderRadius: '20px',
  filter: 'drop-shadow(0px 10px 10px rgba(196,200,208,0.4 ))',
  background: '#ffffff',
  boxShadow: 'none',
})

// status card

export const UseStylesStatusCard = makeStyles((theme) => ({
  typographyTitle: {
    color: '#3C49FF',
    fontWeight: 'bold',
    '@media (max-width:475px)': {
      fontSize: '1.1rem',
    },
    '@media (max-width:360px)': {
      fontSize: '0.8rem',
    },
  },
  typographyCount: {
    color: '#FF3C3C',
    fontWeight: 600,
  },
  typographyCount: {
    color: '#FF3C3C',
    fontWeight: 600,
  },
  typographyPrecent: {
    color: '#005290',
    ml: '5px',
  },
}))

export const StyledStatusCard = styled(Card)({
  borderRadius: '20px',
  filter: 'drop-shadow(0px 10px 10px rgba(196,200,208,0.4 ))',
  background: '#ffffff',
  height: '189px',
  boxShadow: 'none',
  marginBottom: `${theme.spacing(5)} !important`,
  '& .MuiPaper-elevation': {
    marginBottom: `${theme.spacing(5)} !important`,
  },
})

//  Order container

export const UseStyleOrderContainer = makeStyles((theme) => ({
  mainCardBox: {
    height: '83%',
    overflowY: 'hidden',
    overflowX: 'auto',
    '&::-webkit-scrollbar': {
      width: '1px',
      height: '3px',
    },

    /* Track */
    '&::-webkit-scrollbar-track:horizontal': {
      background: 'transparent',
      borderRadius: '20px',
      margin: '15px',
    },
    /* Handle */

    '&::-webkit-scrollbar-thumb:horizontal': {
      height: '10px',
      background: '#D8E3EB',
    },
  },
  cardContentBox: {
    margin: '0 2.5rem',
  },
  containerBox: {
    paddingTop: '10px',
  },
  titleBox: {
    margin: ' 0 auto',
  },
  divider: {
    width: '209px',
    height: '2px',
    margin: '0 auto',
  },
  menuContainer: {
    overflowY: 'auto',
    overflowX: 'hidden',
    height: '165px',
    width: '213px',
    flexDirection: 'column ',
    // gap:"0.5vh"
  },
  menuSubContainer: {
    padding: '0.5rem 1rem',
  },
  billingBox: {
    display: 'flex',
    justifyContent: 'end',
    margin: '0 25px',
    fontWeight: 'bold',
  },
}))

export const StyledOrderContainerCard = styled(Card)({
  height: '400px',
  borderRadius: '20px',
  boxShadow: 'none',
  filter: 'drop-shadow(0px 10px 10px rgba(196,200,208,0.4 ))',
  background: '#ffffff}',
  maxHeight: '413px',
  overflowY: 'hidden',
  overflowX: 'auto',
  '&::-webkit-scrollbar': {
    width: '2px',
    height: '8px',
  },

  /* Track */
  '&::-webkit-scrollbar-track:horizontal': {
    background: '#f1f1f1',
    borderRadius: '20px',
    margin: '15px',
  },
  /* Handle */

  '&::-webkit-scrollbar-thumb:horizontal': {
    height: '10px',
    background: '#D8E3EB',
  },
})
export const StyledMainContainer = styled(Box)({
  width: '241px',
  height: '365px',
  position: 'relative',
  '& ::-webkit-scrollbar': {
    width: '2px',
  },

  /* Track */
  '& ::-webkit-scrollbar-track': {
    background: '#f1f1f1',
  },
  /* Handle */
  '& ::-webkit-scrollbar-thumb': {
    background: '#D8E3EB',
  },
})

export const StyledSubContainer = styled(Box)({
  width: '217px',
  height: '280px',
  marginTop: '14px',
  position: 'relative',
  filter: 'drop-shadow(0px 10px 10px rgba(196,200,208,0.4 ))',
  borderRadius: '15px',
  backgroundColor: '#FFFFFF',
})
export const StyledHeadTitle = styled(Typography)({
  fontSize: '20px',
  fontWeight: 'bold',
  color: '#52575D',
  marginBottom: '0.7rem',
})

export const StyledBoldTitle = styled(Typography)({
  color: '#52575D',
  margin: ' 0 auto',
  fontSize: '18px',
  fontWeight: 'bold',
})
export const StyledCardHeader = styled(CardHeader)(({ theme }) => ({
  color: '#3C49FF',
  '& .MuiCardHeader-title': {
    fontWeight: 'bold',
  },
}))

//orderCount card

export const useStyleOrderCountCard = makeStyles((theme) => ({
  typographyTitle: {
    color: '#3C49FF',
    fontWeight: 'bold',
  },
  containerBox: {
    padding: '0.5rem 1rem',
  },
}))
export const StyledOrderCountCard = styled(Card)({
  height: '400px',
  borderRadius: '20px',
  filter: 'drop-shadow(0px 10px 10px rgba(196,200,208,0.4 ))',
  background: '#ffffff}',
  maxHeight: '413px',
  boxShadow: 'none',
})
export const Container = styled(Box)({
  display: 'flex',
  overflowY: 'auto',
  overflowX: 'hidden',
  flexDirection: 'column ',
  height: '380px',
  '&::-webkit-scrollbar': {
    width: '2px',
  },

  /* Track */
  '&::-webkit-scrollbar-track': {
    background: '#f1f1f1',
  },
  /* Handle */
  '&::-webkit-scrollbar-thumb': {
    background: '#D8E3EB',
  },
})

//common style

export const StyledTitle = styled(Typography)({
  color: '#52575D',
  margin: ' 0 auto',
  fontSize: '18px',
})
