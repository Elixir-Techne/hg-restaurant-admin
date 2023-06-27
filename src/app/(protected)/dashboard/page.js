'use client'

import { Grid } from '@mui/material'
import { useState } from 'react'
import React from 'react'

import TabFilter from '@/components/TabFilter'
import OrderContainer from '@/components/dashboard/OrderContainer'
import OrderCountCard from '@/components/dashboard/OrderCountCard'
import RevenueCard from '@/components/dashboard/RevenueCard'
import StatusCard from '@/components/dashboard/StatusCard'
import { ordersDetail } from '@/context/orderDetailContext'

export default function Dashboard() {
  const [orderStatus, setOrderStatus] = useState('Today')
  const [selectedTab, setSelectedTab] = useState('Today')
  const tabs = [
    { id: 1, name: 'Today' },
    { id: 2, name: 'This week' },
    { id: 3, name: 'This month' },
    { id: 4, name: 'All time' },
  ]

  const onTabSelect = (newValue) => {
    setSelectedTab(newValue)
    const filterOrderData = tabs.find((el) => el.id === newValue)
    setOrderStatus(filterOrderData.name)
  }
  return (
    <>
      <TabFilter
        tabs={tabs}
        onTabSelect={onTabSelect}
        selectedTab={tabs?.[0]}
      />
      <Grid container spacing={4} px={8}>
        <Grid container item spacing={2}>
          <Grid item xs={12} md={8} spacing={4}>
            <RevenueCard orderStatus={orderStatus} />
          </Grid>
          <Grid item xs={12} md={4} spacing={4}>
            <OrderCountCard />
          </Grid>
        </Grid>
        <Grid container item spacing={4}>
          <Grid item xs={12} md={4}>
            <StatusCard />
          </Grid>
          <Grid item xs={12} md={8}>
            <OrderContainer
              ordersDetail={ordersDetail}
              orderStatus={orderStatus}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
