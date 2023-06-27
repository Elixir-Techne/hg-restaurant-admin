import {
  Box,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from '@mui/material'
import Image from 'next/image'
import { useState } from 'react'
import React from 'react'

import OrderImage from '../../../public/images/burger.png'
import ToggleButtons from '../ToogleButton'
import {
  Container,
  StyledOrderCountCard,
  StyledTitle,
  useStyleOrderCountCard,
} from './styles'

const OrderCardData = [
  {
    id: 1,
    name: 'Thunder Filler',
    count: '2000 orders',
  },
  {
    id: 2,
    name: 'Loaded Fries',
    count: '2000 orders',
  },
  {
    id: 3,
    name: 'Thunder Filler',
    count: '2000 orders',
  },
  {
    id: 4,
    name: 'Loaded Fries',
    count: '2000 orders',
  },
  {
    id: 5,
    name: 'Loaded Fries',
    count: '2000 orders',
  },
  {
    id: 6,
    name: 'Loaded Fries',
    count: '2000 orders',
  },
  {
    id: 7,
    name: 'Loaded Fries',
    count: '2000 orders',
  },
  {
    id: 8,
    name: 'Loaded Fries',
    count: '2000 orders',
  },
]

function OrderCountCard() {
  const [selected, setselected] = useState('')
  const classes = useStyleOrderCountCard()
  return (
    <StyledOrderCountCard>
      <CardHeader
        title={
          <Box display="flex" justifyContent="space-between">
            <Typography className={classes.typographyTitle} variant="h5">
              Orders
            </Typography>
            <ToggleButtons
              label1="Least"
              label2="Most"
              selected={selected}
              setselected={setselected}
            />
          </Box>
        }
      ></CardHeader>
      <Divider variant="middle" />
      <CardContent>
        <Container>
          {OrderCardData.map((item) => (
            <Box
              display="flex"
              justifyContent="space-between"
              key={item.key}
              alignItems="center"
            >
              <Box
                display="flex"
                alignItems="center"
                gap="1vw"
                className={classes.containerBox}
              >
                <Image src={OrderImage} width="46px" height="46px" alt="" />
                <StyledTitle>{item.name}</StyledTitle>
              </Box>
              <Typography>{item.count}</Typography>
            </Box>
          ))}
        </Container>
      </CardContent>
    </StyledOrderCountCard>
  )
}

export default OrderCountCard
