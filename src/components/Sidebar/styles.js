import { Badge, Button, styled } from '@mui/material'
import Drawer from '@mui/material/Drawer'
import { makeStyles } from '@mui/styles'

export const UseStyles = makeStyles((theme) => ({
  listItem: {
    padding: 0,
    borderRadius: '40px',
    marginBottom: '20px',
  },
  avatar: { width: 56, height: 56, marginRight: '10px' },
  link: { textDecoration: 'none', color: 'inherit' },
  listItemButton: {
    borderRadius: '40px',
    height: '54px',
  },
  styledBadge: {
    marginRight: '0.5rem',
  },
  iconButton: {
    marginTop: '10px',
    marginLeft: 2,
    position: 'absolute',
  },
}))
export const StyledDrawer = styled(Drawer)({
  width: '24vw',
  height: '100vh',
  flexShrink: 0,
  filter: 'drop-shadow(0px 10px 10px rgba(196,200,208,0.4 ))',
  '& .MuiDrawer-paper': {
    boxSizing: 'border-box',
    width: '24vw',
    borderTopRightRadius: '20px',
    borderBottomRightRadius: '20px',
  },
})

export const StyledButton = styled(Button)({
  borderTop: '1px solid',
  color: 'black',
  borderRadius: '0px',
  justifyContent: 'flex-start',
})

export const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    marginRight: '0.5rem',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    padding: '0.8rem',
    borderRadius: '25px',
    '@media (max-width: 1024px) and (min-width: 769px)': {
      marginRight: '0',
      fontSize: '1rem',
      padding: '0.6rem',
      borderRadius: '25px',
    },
  },
}))
