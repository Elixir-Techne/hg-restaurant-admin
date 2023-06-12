'use client'

import { Typography } from '@mui/material'
import { useState } from 'react'

import OrderCard from '@/components/OrderCard'
import TabFilter from '@/components/TabFilter'

export default function Order() {
  const [orderStatus, setOrderStatus] = useState('Pending')
  const [orderCancelled, setOrderCancelled] = useState(false)
  const tabs = [
    { id: 1, name: 'Pending' },
    { id: 2, name: 'Served' },
    { id: 3, name: 'Paid' },
    { id: 4, name: 'Cancelled' },
  ]
  const ordersDetail = [
    {
      order_id: 123,
      restaurant_id: 456,
      option_chosen: true,
      option: {
        name: 'Extra cheese',
        price: 2.5,
      },
      table_number: 4,
      menu_id: 789,
      session_id: 1011,
      status: 'in_progress',
      created_at: '2022-02-17T08:34:56Z',
      updated_at: '2022-02-17T09:21:43Z',
      updated_by: 1234,
    },
    {
      order_id: 234,
      restaurant_id: 456,
      option_chosen: false,
      option: null,
      table_number: 2,
      menu_id: 345,
      session_id: 1213,
      status: 'completed',
      created_at: '2022-02-16T18:43:12Z',
      updated_at: '2022-02-16T20:12:05Z',
      updated_by: 5678,
    },
    {
      order_id: 234,
      restaurant_id: 456,
      option_chosen: false,
      option: null,
      table_number: 2,
      menu_id: 345,
      session_id: 1213,
      status: 'completed',
      created_at: '2022-02-16T18:43:12Z',
      updated_at: '2022-02-16T20:12:05Z',
      updated_by: 5678,
    },
    {
      order_id: 234,
      restaurant_id: 456,
      option_chosen: false,
      option: null,
      table_number: 2,
      menu_id: 345,
      session_id: 1213,
      status: 'completed',
      created_at: '2022-02-16T18:43:12Z',
      updated_at: '2022-02-16T20:12:05Z',
      updated_by: 5678,
    },
    {
      order_id: 234,
      restaurant_id: 456,
      option_chosen: false,
      option: null,
      table_number: 2,
      menu_id: 345,
      session_id: 1213,
      status: 'completed',
      created_at: '2022-02-16T18:43:12Z',
      updated_at: '2022-02-16T20:12:05Z',
      updated_by: 5678,
    },
    {
      order_id: 234,
      restaurant_id: 456,
      option_chosen: false,
      option: null,
      table_number: 2,
      menu_id: 345,
      session_id: 1213,
      status: 'completed',
      created_at: '2022-02-16T18:43:12Z',
      updated_at: '2022-02-16T20:12:05Z',
      updated_by: 5678,
    },
    {
      order_id: 234,
      restaurant_id: 456,
      option_chosen: false,
      option: null,
      table_number: 2,
      menu_id: 345,
      session_id: 1213,
      status: 'completed',
      created_at: '2022-02-16T18:43:12Z',
      updated_at: '2022-02-16T20:12:05Z',
      updated_by: 5678,
    },
    {
      order_id: 234,
      restaurant_id: 456,
      option_chosen: false,
      option: null,
      table_number: 2,
      menu_id: 345,
      session_id: 1213,
      status: 'completed',
      created_at: '2022-02-16T18:43:12Z',
      updated_at: '2022-02-16T20:12:05Z',
      updated_by: 5678,
    },
    {
      order_id: 234,
      restaurant_id: 456,
      option_chosen: false,
      option: null,
      table_number: 2,
      menu_id: 345,
      session_id: 1213,
      status: 'completed',
      created_at: '2022-02-16T18:43:12Z',
      updated_at: '2022-02-16T20:12:05Z',
      updated_by: 5678,
    },
    {
      order_id: 234,
      restaurant_id: 456,
      option_chosen: false,
      option: null,
      table_number: 2,
      menu_id: 345,
      session_id: 1213,
      status: 'completed',
      created_at: '2022-02-16T18:43:12Z',
      updated_at: '2022-02-16T20:12:05Z',
      updated_by: 5678,
    },
  ]

  const onTabSelect = (newValue) => {
    const filterOrderData = tabs.find((el) => el.id === newValue)
    setOrderStatus(filterOrderData.name)
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
      />
    </div>
  )
}
