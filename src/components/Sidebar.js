import { Avatar, Button, Divider, Typography, styled } from '@mui/material'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Image from 'next/image'

import companyPng from '../assets/icons/company.png'
import { useState } from 'react'

const StyledDrawer = styled(Drawer)({
  position: 'absolute',
  height: '100%',
  filter: 'drop-shadow(0px 10px 10px rgba(196,200,208,0.4 ))',
  '& .MuiDrawer-paper': {
    boxSizing: 'border-box',
    width: '24vw',
    borderTopRightRadius: '20px',
    borderBottomRightRadius: '20px',
  },
})

const StyledButton = styled(Button)({
  margin: 'auto 40px 20px 40px ',
  borderTop: '1px solid',
  color: 'black',
  borderRadius: '0px',
  justifyContent: 'flex-start',
})
const data = [
  { name: 'Dashboard' },
  { name: 'Order Reception' },
  { name: 'Table Management' },
  { name: 'Waiter Managemet' },
  { name: 'Menu Management' },
  { name: 'Support and Contact' },
]
function Sidebar() {
  const [selectedIndex, setSelectedIndex] = useState(1)

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index)
  }

  return (
    <StyledDrawer variant="permanent" open>
      <Box display="flex" justifyContent="center">
        <Image src={companyPng} alt="" />
      </Box>
      <Box display="flex" alignItems="end" mx="40px" my="40px">
        <Avatar
          alt="Remy Sharp"
          src=""
          sx={{ width: 56, height: 56, marginRight: '10px' }}
        />
        <Typography variant="h5">Thabo</Typography>
      </Box>
      <List sx={{ margin: '40px' }}>
        {data.map((text, index) => (
          <ListItem
            key={text.name}
            disablePadding
            sx={{
              backgroundColor: (theme) =>
                selectedIndex === index ? theme.palette.primary.main : '',
              color: selectedIndex === index ? 'white' : '',
              borderRadius: '40px',
              marginBottom: '20px',
            }}
          >
            <ListItemButton
              selected={selectedIndex === index}
              onClick={(event) => handleListItemClick(event, index)}
              sx={{
                borderRadius: '40px',
              }}
            >
              <ListItemIcon></ListItemIcon>
              <ListItemText primary={text.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <StyledButton>Logout</StyledButton>
    </StyledDrawer>
  )
}

export default Sidebar
