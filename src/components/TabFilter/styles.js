import { Tab, Tabs } from '@mui/material'
import styled from 'styled-components'

import { theme } from '@/theme'

export const TabGroup = styled(Tabs)({
  height: '55.5px',
  margin: '0 auto',
  marginTop: '15px',
})

export const StyledTab = styled(Tab)({
  color: 'black',
  fontSize: '1.3rem',
  textTransform: 'inherit',
  fontStyle: 'normal',
  minHeight: '38px',
  padding: '0 1.5rem',
  '&.Mui-selected': {
    color: 'white',
    fontSize: '1.3rem',
    background: theme.palette.primary.main,
    borderRadius: '25px',
    '@media (max-width:475px)': {
      fontSize: '1.1rem',
    },
    '@media (max-width:325px)': {
      fontSize: '0.9rem',
    },
  },
  '&.MuiTabs-indicator': {
    display: 'none',
  },
  '@media (max-width:475px)': {
    fontSize: '1.1rem',
    padding: 0,
  },
  '@media (max-width:325px)': {
    fontSize: '0.9rem',
    padding: 0,
  },
})
