import { TextField, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import styled from 'styled-components'

export const UseStyle = makeStyles(() => ({
  mainContainer: {
    backgroundColor: '#F3F2F5',
    overflow: 'hidden',
  },
  subContainer: {
    width: '100%',
    backgroundImage: `url(images/support.png)`,
    backgroundColor: '#80DAF1',
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    '@media (max-width:575px)': {
      flexDirection: 'column-reverse',
      justifyContent: 'center',
    },
  },
  navContainer: {
    '@media (max-width:575px)': {
      justifyContent: 'center',
      overflowX: 'auto',
    },
  },
  navTypography: {
    color: '#077254',
    cursor: 'pointer',
  },
  searchTitleBox: {
    width: '45%',
    margin: '0 auto',
    '@media (max-width:1440px)': {
      width: '60%',
    },
    '@media (max-width:1024px)': {
      width: '80%',
    },
    '@media (max-width:575px)': {
      width: '100%',
      paddingTop: '0.5rem',
    },
  },
  searchTitle: {
    color: '#077254',
    textAlign: 'center',
    '@media (max-width:768px)': {
      fontSize: '1.4rem',
    },
    '@media (max-width:475px)': {
      fontSize: '1.2rem',
    },
  },
  questionTypography: {
    color: '#077254',
    mt: 5,
    mb: '24px',
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    margin: '-48px',
    '@media (max-width:768px)': {
      flexDirection: 'column',
    },
  },
  cardSubContainer: {
    minWidth: '370px',
    mimHeight: '121px',
    borderRadius: '20px',

    boxShadow: 'none',
    '@media (max-width:1024px)': {
      minWidth: '290px',
    },
    '@media (max-width:768px)': {
      maxWidth: '190px',
      margin: '0 auto',
    },
  },
  contactContainer: {
    width: '60%',
    margin: '0 auto',
    marginTop: '8rem',
    '@media (max-width:1024px)': {
      width: '90%',
    },
    '@media (max-width:768px)': {
      width: '80%',
    },
    '@media (max-width:475px)': {
      width: '90%',
    },
  },
  contactTypography: {
    color: '#042C71',
    fontSize: '1rem',
  },
  subTitleTypography: {
    color: '#3C49FF',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    '@media (max-width:1024px)': {
      fontSize: '2.1rem',
    },
  },
  contentTypography: {
    color: '#565872',
  },
  descriptionTextField: {
    height: '165px !important',
  },
  sendButton: {
    marginTop: '1rem',
    fontSize: '1.6rem',
    borderRadius: '10px',
    alignSelf: 'flex-end',
    padding: '0.5rem 2rem',
    textTransform: 'inherit',
    background: '#077254',
    '@media (max-width: 899px)': {
      fontSize: '1.5rem',
    },
  },
  questionsMainContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '75%',
    margin: '0 auto',
    marginTop: '1.5rem',
    marginBottom: '0',
    '@media (max-width:1024px)': {
      width: '%',
    },
    '@media (max-width:575px)': {
      flexDirection: 'column',
      width: '100%',
    },
  },
  questionsSubContainer: {
    width: '25%',
    '@media (max-width:575px)': {
      width: '100%',
      textAlign: 'center',
    },
  },
  questionTitle: {
    color: '#FF4E4E',
    fontSize: '3rem',
    fontWeight: 'bold',
    '@media (max-width:1024px)': {
      fontSize: '2.5rem',
    },
    '@media (max-width:768px)': {
      fontSize: '2rem',
    },
  },
  questionContainer: {
    width: '65%',
    '@media (max-width:575px)': {
      width: '100%',
    },
  },
  accordion: {
    background: 'transparent !important',
    boxShadow: 'none important',
  },
  accordionSummary: {
    '& .MuiAccordionSummary-expandIconWrapper': {
      '&.Mui-expanded': {
        transform: 'rotate(45deg)',
      },
    },
  },
  questionId: {
    color: '#3C49FF',
    fontSize: '1.7rem',
    fontWeight: 'bold',
    marginRight: '3rem',
  },
  questionAsk: {
    color: '#282938',
    fontSize: '1.7rem',
    fontWeight: 'bold',
  },
  questionAnswer: {
    color: '#282938',
    fontSize: '1.5rem',
    marginLeft: '4.5rem',
  },
  contactUstypography: {
    color: '#077254',
    fontSize: '1.1rem',
    fontWeight: 'bold',
  },
  divider: {
    width: '100%',
    height: '5px',
    color: '#3C49FF',
  },
}))
export const StyledTextField = styled(TextField)({
  padding: '0 1rem',
  background: '#ffffff',
  border: '1px solid #AACDE8',
  width: '650px',
  borderRadius: '5.5px',
  '@media (max-width:768px)': {
    width: '450px',
  },
  '@media (max-width:475px)': {
    width: '300px',
  },
})

export const StyledFormField = styled(TextField)({
  background: '#FFFFFF',
  borderRadius: '10px',
  margin: '0.5rem',
})

export const StyledErrorMessage = styled(Typography)({
  fontSize: '0.7rem',
  color: 'red',
  paddingLeft: '0.5rem',
  position: 'fix',
})
