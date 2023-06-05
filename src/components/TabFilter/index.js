import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import React, { useState } from 'react'
import styled from 'styled-components'

import { theme } from '@/theme'

import '../../styles/tabfilter.css'

const TabGroup = styled(Tabs)({
  width: '658.7px',
  height: '55.5px',
  margin: '0 auto',
  marginTop: '47px',
})

const StyledTab = styled(Tab)({
  color: 'black',
  fontFamily: 'roboto',
  fontSize: '26px',
  textTransform:'inherit',
  //   fontWeight: 'bold',
  fontStyle: 'normal',
  textAlign: 'left',
  padding: '6px 16px',
  '&.Mui-selected': {
    color: 'white',
    background: theme.palette.primary.main,
    borderRadius: '25px',
    height: '25px',
  },
  '&.MuiTabs-indicator': {
    display: 'none',
  },
})

export default function TabFilter({ tabs, onTabSelect }) {
  const [activeTab, setActiveTab] = useState(1)
  
  const handleChange = (event, newValue) => {
    setActiveTab(newValue)
    onTabSelect(newValue)
  }
  return (
    <>
      <TabGroup value={activeTab} onChange={handleChange}>
        {tabs &&
          tabs.map((item, index) => {
            return <StyledTab key={item.id} value={item.id} label={item.name} />
          })}
      </TabGroup>
    </>
  )
}
