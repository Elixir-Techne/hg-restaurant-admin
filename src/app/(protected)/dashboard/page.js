'use client';

import { Grid } from '@mui/material'
import { useState } from 'react'

import TabFilter from '@/components/TabFilter'
import OrderContainer from '@/components/dashboard/OrderContainer'
import OrderCountCard from '@/components/dashboard/OrderCountCard'
import RevenueCard from '@/components/dashboard/RevenueCard'
import StatusCard from '@/components/dashboard/StatusCard'

export default function Dashboard() {
  const [orderStatus, setOrderStatus] = useState('Pending')
  const tabs = [
    { id: 1, name: 'Today' },
    { id: 2, name: 'This week' },
    { id: 3, name: 'This month' },
    { id: 4, name: 'All time' },
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
    <>
      <div style={{ width: '75%', marginLeft: 'auto', marginBottom: '1rem' }}>
        <TabFilter tabs={tabs} onTabSelect={onTabSelect} />
      </div>
      <Grid container spacing={4} px={8}>
        <Grid container item spacing={2}>
          <Grid item xs={12} md={8} spacing={4}>
            <RevenueCard />
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