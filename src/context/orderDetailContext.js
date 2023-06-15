import { createContext, useContext } from 'react'

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
    order_id: 235,
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
    order_id: 236,
    restaurant_id: 456,
    option_chosen: false,
    option: null,
    table_number: 2,
    menu_id: 345,
    session_id: 1213,
    status: 'in_progress',
    created_at: '2022-02-16T18:43:12Z',
    updated_at: '2022-02-16T20:12:05Z',
    updated_by: 5678,
  },
  {
    order_id: 237,
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
    order_id: 238,
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
    order_id: 239,
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
    order_id: 240,
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
    order_id: 241,
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
    order_id: 242,
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
export const OrdersDetailContext = createContext(null)

export const OrdersDetailProvider = ({ children }) => {
  return (
    <OrdersDetailContext.Provider value={{ ordersDetail }}>
      {children}
    </OrdersDetailContext.Provider>
  )
}
export function useOrdersDetailContext() {
  return useContext(OrdersDetailContext)
}
