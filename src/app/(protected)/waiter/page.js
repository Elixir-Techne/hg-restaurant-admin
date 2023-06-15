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
import ToggleButtons from '@/components/ToogleButton'
import { theme } from '@/theme'

import { deleteWaiter, getWaiter } from '../../../utils/api'

const StyledCardHeader = styled(CardHeader)(({ theme }) => ({
  color: '#3C49FF',
  '& .MuiCardHeader-title': {
    fontWeight: 'bold',
  },
}))

export default function Waiter() {
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
  ]
  const isMobile = useMediaQuery('(max-width:768px)')
  const route = useRouter()
  const columns = [
    {
      field: 'id',
      headerName: 'Pic',
      width: 90,
      renderCell: ({ row }) => {
        return <Avatar />
      },
    },
    {
      field: 'firstName',
      headerName: 'Name',
      width: 150,
    },
    {
      field: 'lastName',
      headerName: 'Waiter ID',
      width: 150,
    },

    ...(isMobile
      ? []
      : [
          {
            field: 'age',
            headerName: 'ID Card',
            type: 'number',
            flex: 1,
            hide: isMobile,
          },
          {
            field: 'loc',
            headerName: 'Location',
            sortable: false,
            flex: 1,
            hide: isMobile,
          },
          {
            field: 'type',
            headerName: 'Type',
            sortable: false,
            flex: 1,
          },
          {
            field: 'status',
            headerName: 'Status',
            sortable: false,
            width: 200,
            hide: isMobile,
            renderCell: ({ row }) => {
              return (
                <ToggleButtons
                  label2="In-active"
                  label1="Active"
                  variant="table"
                />
              )
            },
          },
        ]),
  ]

  const handleWaiter = (e) => {
    e.preventDefault()
    route.push('waiter/add')
  }
  //API get the waiter

  // useEffect(() => {
  //   getWaiter()
  //     .then((res) => res)
  //     .catch((err) => console.log(err))
  // }, [getWaiter])

  //API delete the waiter

  // useEffect(() => {
  //   deleteWaiter()
  //     .then((res) => res)
  //     .catch((err) => console.log(err))
  // }, [deleteWaiter])
  return (
    <Card
      sx={{
        height: '90%',
        maxWidth: isMobile ? `calc( 100vw - 10vw)` : `calc( 100vw - 31vw)`,
        borderRadius: '20px',
        filter: 'drop-shadow(0px 5px 12.5px rgba(82,87,93,0.1 ))',
        boxShadow: 'none',
        background: '#ffffff',
        margin: `${theme.spacing(10)} auto`,
        // paddingX: theme.spacing(9),
        paddingTop: theme.spacing(3.5),
      }}
    >
      <StyledCardHeader title="Waiters" />
      <Divider variant="middle" />
      <CardContent>
        <Box display="flex" justifyContent="flex-end">
          <Button
            variant="contained"
            onClick={handleWaiter}
            sx={{ borderRadius: '25px', margin: (theme) => theme.spacing(2) }}
          >
            + Add new
          </Button>
        </Box>
        <Table rows={rows} columns={columns} title="waiter" />
      </CardContent>
    </Card>
  )
}
