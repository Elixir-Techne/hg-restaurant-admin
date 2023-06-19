'use client'

import { Typography } from '@mui/material'
import { useContext, useMemo, useState } from 'react'

import OrderCard from '@/components/OrderCard'
import TabFilter from '@/components/TabFilter'
import { OrdersDetailContext } from '@/context/orderDetailContext'
import { ordersDetail } from '@/context/orderDetailContext'

export default function Order() {
  // const { ordersDetail } = useContext(OrdersDetailContext)
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

  // console.log('🚀 ~ file: page.js:22 ~ Order ~ orderData:', orderData)
  const served = []
  const onTabSelect = (newValue) => {
    const status = tabs.find((el) => el.id === newValue)
    setOrderStatus(status.name)
    setSelectedTab(newValue)
    // const filterOrderData = tabs?.find((el) => el?.id === newValue)
    // setOrderStatus(filterOrderData.name)
    // if (filterOrderData.name === 'Pending') {
    //   setOrderData(ordersDetail)
    // } else if (filterOrderData.name === 'Served') {
    //   setOrderData(served)
    // }
  }
  const filteredData = useMemo(
    () =>
      orderData?.filter((el) => el.status === selectedTab?.toLocaleLowerCase()),
    [selectedTab, orderData],
  )
  // console.log('🚀 ~ file: page.js:42 ~ Order ~ filteredData:', filteredData)
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
    <div
      style={{
        marginLeft: 'auto',
        marginBottom: '1.5rem',
      }}
    >
      <TabFilter
        tabs={tabs}
        onTabSelect={onTabSelect}
        selectedTab={tabs?.[0]}
      />
      {!orderCancelled ? (
        <Typography
          sx={{
            fontSize: '27px',
            color: '#3C49FF',
            fontWeight: 'bold',
            marginLeft: '3.5rem',
          }}
        >
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
    </div>
  )
}
