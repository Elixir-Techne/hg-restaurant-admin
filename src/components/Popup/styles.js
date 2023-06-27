import { makeStyles } from '@mui/styles'

export const UseStyle = makeStyles((theme) => ({
  mainContainer: {
    width: '100%',
    height: '100%',
  },
  subContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '810px',
    width: '90%',
    borderRadius: '20px',
    background: '#FFFFFF',
    filter: 'drop-shadow(0px 10px 10px rgba(196,200,208,0.4 ))',
    '@media (max-width:475px)': {
      height: '680px',
    },
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: '435px',
    borderRadius: '39px',
    filter: 'drop-shadow(0px 8px 5px #f7ebe0)',
    background: '#f2eeee',
    padding: '1rem 1.5rem',
    '@media (max-width:475px)': {
      height: '340px',
    },
  },
  inputContainer: {
    width: '90%',
    gap: '2vh',
  },
  title: {
    alignSelf: 'start',
    fontSize: '2.5rem',
    color: '#03528B',
    fontWeight: 'bold',
  },
  texField: {
    color: '#888888',
    background: '#FCFCFC',
    borderRadius: '17px',
    height: '165px',
  },
  submitButton: {
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
