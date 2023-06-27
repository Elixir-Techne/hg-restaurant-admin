import { Box } from '@mui/material'
import React, { useState } from 'react'

import '../../styles/tabfilter.css'
import { StyledTab, TabGroup } from './styles'

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
