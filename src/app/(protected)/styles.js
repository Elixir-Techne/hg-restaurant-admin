import { makeStyles } from '@mui/styles'

export const UseStyle = makeStyles(() => ({
  mainContainer: {
    display: 'flex',
    '& ::-webkit-scrollbar': {
      width: '2px',
    },
    '& ::-webkit-scrollbar-track': {
      background: '#f1f1f1',
    },
    '& ::-webkit-scrollbar-thumb': {
      background: '#D8E3EB',
    },
  },
  subContainer: {
    width: '100%',
    height: '100vh',
    overflowY: 'auto',
    backgroundImage: `url(images/lightBgImage.png)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'right',
  },
}))
