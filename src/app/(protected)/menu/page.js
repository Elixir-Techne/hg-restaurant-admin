'use client'

import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  useMediaQuery,
} from '@mui/material'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import styled from 'styled-components'

import Table from '@/components/Table'
import { theme } from '@/theme'

import { deleteMenu, getMenu } from '../../../utils/api'

const StyledCardHeader = styled(CardHeader)(({ theme }) => ({
  color: '#3C49FF',
  '& .MuiCardHeader-title': {
    fontWeight: 'bold',
  },
}))
const rows = [
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
      sx={{
        height: '90%',
        maxWidth: `calc( 100vw - 31vw)`,
        borderRadius: '20px',
        filter: 'drop-shadow(0px 5px 12.5px rgba(82,87,93,0.1 ))',
        boxShadow: 'none',
        background: '#ffffff',
        paddingX: theme.spacing(9),
        paddingTop: theme.spacing(3.5),
        margin: `${theme.spacing(10)} auto`,
      }}
    >
      <StyledCardHeader title="Menu" />
      <Divider variant="middle" />
      <CardContent>
        <Box display="flex" justifyContent="flex-end">
          <Button
            variant="contained"
            onClick={handleNewItem}
            sx={{ borderRadius: '25px', margin: (theme) => theme.spacing(2) }}
          >
            + Add new
          </Button>
        </Box>
        <Table rows={rows} columns={columns} title="menu" />
      </CardContent>
    </Card>
  )
}
