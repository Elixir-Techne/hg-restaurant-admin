import { Box } from '@mui/material'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import React, { useState } from 'react'
import styled from 'styled-components'

import { theme } from '@/theme'

import '../../styles/tabfilter.css'

const TabGroup = styled(Tabs)({
  height: '55.5px',
  margin: '0 auto',
  marginTop: '15px',
})

const StyledTab = styled(Tab)({
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

export default function TabFilter({ tabs, onTabSelect, selectedTab }) {
  const [activeTab, setActiveTab] = useState(selectedTab?.id)

  const handleChange = (event, newValue) => {
    setActiveTab(newValue)
    onTabSelect(newValue)
  }
  return (
    <Box display="flex" justifyContent="center">
      <TabGroup
        value={activeTab}
        onChange={handleChange}
        style={{ marginBottom: '1rem' }}
      >
        {tabs &&
          tabs.map((item, index) => {
            return <StyledTab key={item.id} value={item.id} label={item.name} />
          })}
      </TabGroup>
    </Box>
  )
}
