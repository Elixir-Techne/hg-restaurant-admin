'use client'

import { Box, Typography } from '@mui/material'
import { useMemo, useState } from 'react'
import React from 'react'

import OrderCard from '@/components/OrderCard'
import TabFilter from '@/components/TabFilter'
import { OrdersDetailContext } from '@/context/orderDetailContext'
import { ordersDetail } from '@/context/orderDetailContext'

import { UseStyle } from './styles'

export default function Order() {
  const tabs = [
    { id: 'pending', name: 'Pending' },
    { id: 'served', name: 'Served' },
    { id: 'completed', name: 'Paid' },
    { id: 'cancelled', name: 'Cancelled' },
  ]
  const [orderStatus, setOrderStatus] = useState('Pending')
  const [orderCancelled, setOrderCancelled] = useState(false)
  const [orderData, setOrderData] = useState(ordersDetail)
  const [selectedTab, setSelectedTab] = useState('pending')
  const classes = UseStyle()
  const served = []
  const onTabSelect = (newValue) => {
    const status = tabs.find((el) => el.id === newValue)
    setOrderStatus(status.name)
    setSelectedTab(newValue)
  }
  const filteredData = useMemo(
    () =>
      orderData?.filter((el) => el.status === selectedTab?.toLocaleLowerCase()),
    [selectedTab, orderData],
  )
  const sortedData = filteredData.sort((a, b) => {
    if (
      a.cooking_status === 'in_progress' &&
      b.cooking_status === 'completed'
    ) {
      return -1
    } else if (
      a.cooking_status === 'completed' &&
      b.cooking_status === 'in_progress'
    ) {
      return 1
    }
    return 0
  })
  return (
    <Box className={classes.mainContainer}>
      <TabFilter
        tabs={tabs}
        onTabSelect={onTabSelect}
        selectedTab={tabs?.[0]}
      />
      {!orderCancelled ? (
        <Typography className={classes.orderStatus}>
          {orderStatus} Orders
        </Typography>
      ) : null}
      <OrderCard
        ordersDetail={ordersDetail}
        setOrderCancelled={setOrderCancelled}
        orderCancelled={orderCancelled}
        orderData={sortedData}
        served={served}
        setOrderData={setOrderData}
      />
    </Box>
  )
}
