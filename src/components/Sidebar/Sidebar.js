import { Drawer, useMediaQuery } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import React from 'react'

import ContactSvg from '@/assets/icons/contcatSvg'
import DashBoardSvg from '@/assets/icons/dasboardSvg'
import MenuSvg from '@/assets/icons/menuSvg'
import OrderSvg from '@/assets/icons/orderSvg'
import TableMangSvg from '@/assets/icons/tableManSvg'
import WaiterSvg from '@/assets/icons/waiterSvg'
import { theme } from '@/theme'

import companyPng from '../../assets/icons/company.png'
import MobileMenuSvg from '../../assets/icons/feather-menu.svg'
import LogoutSvg from '../../assets/icons/logout.svg'
import { ordersDetail } from '../../context/orderDetailContext'
import { StyledBadge, StyledButton, StyledDrawer, UseStyles } from './styles'

const data = [
  {
    id: 1,
    name: 'Dashboard',
    icon: DashBoardSvg,
    path: '/dashboard',
  },
  { id: 2, name: 'Order Reception', icon: OrderSvg, path: '/order' },
  {
    id: 3,
    name: 'Table Management',
    icon: TableMangSvg,
    path: '/table-management',
  },
  {
    id: 4,
    name: 'Waiter Management',
    icon: WaiterSvg,
    path: '/waiter',
  },
  {
    id: 5,
    name: 'Menu Management',
    icon: MenuSvg,
    path: '/menu',
  },
  { id: 6, name: 'Support and Contact', icon: ContactSvg, path: '/support' },
]
function Sidebar() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const isMobile = useMediaQuery('(max-width:865px)')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [totalPendingOrders, setTotalPendingOrders] = useState(0)
  const pathname = usePathname()
  const classes = UseStyles()

  useEffect(() => {
    const item = data.find((d) => pathname.includes(d.path))
    if (item) setSelectedIndex(item.id)
    const pendingOrders = ordersDetail.filter(
      (el) => el.status === 'in_progress',
    )
    setTotalPendingOrders(pendingOrders.length)
  }, [pathname, data, ordersDetail])
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index)
    if (isMobile) setMobileOpen(!mobileOpen)
  }
  const drawer = (
    <>
      <Box display="flex" justifyContent="center">
        <Image src={companyPng} alt="" />
      </Box>
      <Box
        display="flex"
        alignItems="end"
        mx={isMobile ? theme.spacing(3) : theme.spacing(5)}
        my={isMobile ? theme.spacing(1) : theme.spacing(5)}
      >
        <Avatar alt="Remy Sharp" src="" className={classes.avatar} />
        <Typography variant="h5">Thabo</Typography>
      </Box>
      <List sx={{ margin: isMobile ? theme.spacing(3) : theme.spacing(5) }}>
        {data.map((item, index) => (
          <Link href={item?.path || ''} className={classes.link} key={item.id}>
            <ListItem
              disablePadding
              className={classes.listItem}
              sx={{
                backgroundColor: (theme) =>
                  selectedIndex === item.id ? theme.palette.primary.main : '',
                color: selectedIndex === item.id ? 'white' : '',
              }}
            >
              <ListItemButton
                selected={selectedIndex === item.id}
                onClick={(event) => handleListItemClick(event, item.id)}
                className={classes.listItemButton}
              >
                <ListItemIcon
                  sx={{
                    marginRight: isMobile ? theme.spacing(1) : theme.spacing(2),
                    marginLeft: isMobile ? theme.spacing(2) : theme.spacing(4),
                  }}
                >
                  <item.icon selected={selectedIndex === item.id} />
                </ListItemIcon>
                <ListItemText primary={item.name} />
                {item.name === 'Order Reception' ? (
                  <StyledBadge
                    color="secondary"
                    badgeContent={totalPendingOrders}
                    className={classes.styledBadge}
                  ></StyledBadge>
                ) : null}
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <StyledButton
        sx={{
          margin: isMobile
            ? theme.spacing('auto', 1, 0.5)
            : theme.spacing('auto', 4, 2),
        }}
      >
        <Image
          src={LogoutSvg}
          alt=""
          style={{ marginRight: theme.spacing(2) }}
        />
        <Typography variant="subtitle1" sx={{ marginTop: theme.spacing(1.5) }}>
          Logout
        </Typography>
      </StyledButton>
    </>
  )

  return (
    <>
      {isMobile && (
        <IconButton onClick={handleDrawerToggle} className={classes.iconButton}>
          <Image src={MobileMenuSvg} alt="" />
        </IconButton>
      )}
      {mobileOpen && (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      )}
      {!mobileOpen && !isMobile && (
        <StyledDrawer variant="permanent" open anchor="left">
          {drawer}
        </StyledDrawer>
      )}
    </>
  )
}

export default Sidebar
