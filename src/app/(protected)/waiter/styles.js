import { makeStyles } from '@mui/styles'

import { theme } from '@/theme'

export const UseStylewaiterTable = makeStyles(() => ({
  mainContainer: {
    overflowY: 'auto',
    height: '90%',
    borderRadius: '20px',
    filter: 'drop-shadow(0px 5px 12.5px rgba(82,87,93,0.1 ))',
    boxShadow: 'none',
    background: '#ffffff',
    margin: `${theme.spacing(10)} auto`,
    // paddingX: theme.spacing(9),
    paddingTop: theme.spacing(3.5),
  },
  addButton: {
    borderRadius: '25px',
    margin: theme.spacing(2),
  },
}))

export const UseStyleWaiterForm = makeStyles(() => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    marginLeft: 'auto',
  },
  subContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '85%',
    width: '95%',
    borderRadius: '20px',
    background: '#FFFFFF',
    filter: 'drop-shadow(0px 10px 10px rgba(196,200,208,0.4 ))',
    '@media (max-width: 899px)': {
      width: '100%',
      height: '95%',
      alignItems: 'end',
    },
  },
}))
