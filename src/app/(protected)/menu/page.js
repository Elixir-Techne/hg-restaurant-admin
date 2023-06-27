'use client'

import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  useMediaQuery,
} from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'

import Table from '@/components/Table'

import { deleteMenu, getMenu } from '../../../utils/api'
import { StyledCardHeader, UseStyleMenu } from './styles'

export const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 10, lastName: 'Targaryen', firstName: 'Jaime', age: 22 },
  { id: 11, lastName: 'Stark', firstName: 'Arya', age: 46 },
  { id: 12, lastName: 'Stark', firstName: 'Arya', age: 46 },
  { id: 13, lastName: 'Stark', firstName: 'Arya', age: 46 },
  { id: 14, lastName: 'Stark', firstName: 'Arya', age: 46 },
  { id: 15, lastName: 'Stark', firstName: 'Arya', age: 46 },
]

export default function Menu() {
  const router = useRouter()
  const isMobile = useMediaQuery('(max-width:768px)')
  const columns = [
    {
      field: 'firstName',
      headerName: 'Category',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Sub-Category',
      width: 150,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Food-Type',
      type: 'number',
      width: 110,
      editable: true,
    },
    ...(isMobile
      ? []
      : [
          {
            field: 'loc',
            headerName: 'Item Name',
            sortable: false,
            width: 120,
          },
          {
            field: 'type',
            headerName: 'Price',
            sortable: false,
            width: 80,
          },
          {
            field: 'status',
            headerName: 'Out of Order',
            sortable: false,
            width: 140,
          },
          {
            field: 'selling',
            headerName: 'Best Selling',
            sortable: false,
            width: 140,
          },
          {
            field: 'id',
            headerName: 'Pic',
            width: 90,
            renderCell: ({ row }) => {
              return <Avatar />
            },
          },
        ]),
  ]

  const handleNewItem = (e) => {
    e.preventDefault()
    router.push('/menu/add')
  }
  const classes = UseStyleMenu()
  //API get menu

  // useEffect(() => {
  //   getMenu(restaurant_id)
  //     .then((res) => res.data)
  //     .catch((err) => console.log(err))
  // }, [getMenu])

  //API delete menu

  // useEffect(() => {
  //   deleteMenu(restaurant_id, menu_id)
  //     .then((res) => res.data)
  //     .catch((err) => console.log(err))
  // }, [deleteMenu])

  return (
    <Card
      className={classes.mainContainer}
      sx={{
        maxWidth: isMobile ? `calc( 100vw - 10vw)` : `calc( 100vw - 31vw)`,
      }}
    >
      <StyledCardHeader title="Menu" />
      <Divider variant="middle" />
      <CardContent>
        <Box display="flex" justifyContent="flex-end">
          <Button
            variant="contained"
            onClick={handleNewItem}
            className={classes.addButton}
          >
            + Add new
          </Button>
        </Box>
        <Table rows={rows} columns={columns} title="menu" />
      </CardContent>
    </Card>
  )
}
