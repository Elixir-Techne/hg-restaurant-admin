import axios from 'axios'

axios.defaults.baseURL = ''

// get reuqest
export const getOrders = (restaurant_id) =>
  axios.get(`restaurant/${restaurant_id}/orders`)

export const tableManagement = () => axios.get('table-management')

export const getTableForm = () => axios.get('table-management/form')

export const getWaiter = () => axios.get('waiter')

export const getMenu = (restaurant_id) =>
  axios.get(`restaurant/${restaurant_id}/menus`)

export const MenuItem = (restaurant_id, menu_id) =>
  axios.get(`/restaurant/${restaurant_id}/menus/${menu_id}`)

//post request

export const postTableForm = () => axios.post('table-management/add')

export const postMenuItem = (restaurant_id) =>
  axios.post(`/restaurant/${restaurant_id}/menus`)

export const waiterForm = () => axios.post('waiter')

//put request
export const editTableForm = () => axios.put('table-management/edit')

export const editMenuItem = (restaurant_id, menu_id) =>
  axios.put(`/restaurant/${restaurant_id}/menus/${menu_id}`)

//delete request
export const deleteOrders = (restaurant_id, order_id) =>
  axios.delete(`/restaurant/${restaurant_id}/orders/${order_id}`)

export const deleteTable = () => axios.delete('table-management')

export const deleteWaiter = () => axios.delete('waiter')

export const deleteMenu = (restaurant_id, menu_id) =>
  axios.delete(`/restaurant/${restaurant_id}/menus/${menu_id}`)
