import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import React, { useState } from 'react'
import styled from 'styled-components'

import { theme } from '@/theme'

import '../../styles/tabfilter.css'

const TopTabs = styled(Tabs)({
  position: 'absolute',
  width: '658.7px',
  height: '55.5px',
  margin:'0 auto',
  marginTop: '47px',

})

const TitleTab = styled(Tab)({
  color: 'black',
  fontFamily: 'roboto',
  fontSize: '26px',
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

export default function DisabledTabs({tabs, onTabSelect}) {
  const [activeTab, setActiveTab] = useState(0)

  const FilterData = [
    {
      id: 1,
      name: 'Today',
    },
    {
      id: 2,
      name: 'This week',
    },
    {
      id: 3,
      name: 'This month',
    },
    {
      id: 4,
      name: 'All time',
    },
  ]
  const handleChange = (event, newValue) => {
    setActiveTab(newValue)
    onTabSelect()
  }
  return (
    <>
      <TopTabs value={activeTab} onChange={handleChange}>
        {FilterData &&
          FilterData.map((item, index) => {
            return <TitleTab key={item.id} label={item.name} />
          })}
      </TopTabs>
    </>
  )
}
