'use client'

import { Typography } from '@mui/material'
import { useContext, useState } from 'react'

import OrderCard from '@/components/OrderCard'
import TabFilter from '@/components/TabFilter'
import { OrdersDetailContext } from '@/context/orderDetailContext'

export default function Order() {
  const { ordersDetail } = useContext(OrdersDetailContext)
  const tabs = [
    { id: 1, name: 'Pending' },
    { id: 2, name: 'Served' },
    { id: 3, name: 'Paid' },
    { id: 4, name: 'Cancelled' },
  ]
  const [orderStatus, setOrderStatus] = useState('Pending')
  const [orderCancelled, setOrderCancelled] = useState(false)
  const [orderData, setOrderData] = useState(
    ordersDetail?.filter((el) => el?.status === 'in_progress'),
  )

  const onTabSelect = (newValue) => {
    const filterOrderData = tabs?.find((el) => el?.id === newValue)
    setOrderStatus(filterOrderData.name)
    if (filterOrderData.name === 'Pending') {
      setOrderData(ordersDetail?.filter((el) => el?.status === 'in_progress'))
    } else if (filterOrderData.name === 'Served') {
      setOrderData(ordersDetail?.filter((el) => el?.status === 'completed'))
    }
  }
  return (
    <div style={{ marginLeft: 'auto', marginBottom: '1.5rem' }}>
      <TabFilter tabs={tabs} onTabSelect={onTabSelect} />
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
        orderStatus={orderStatus}
        setOrderCancelled={setOrderCancelled}
        orderCancelled={orderCancelled}
        orderData={orderData}
      />
    </div>
  )
}
