import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from '@mui/material'
import Image from 'next/image'
import styled from 'styled-components'

import OrderImage from '../../../public/images/burger.png'
import ToggleButtons from '../ToogleButton'

const Container = styled(Box)({
  display: 'flex',
  overflowY: 'auto',
  overflowX: 'hidden',
  flexDirection: 'column ',
  height: '380px',
  '&::-webkit-scrollbar': {
    width: '2px',
  },

  /* Track */
  '&::-webkit-scrollbar-track': {
    background: '#f1f1f1',
  },
  /* Handle */
  '&::-webkit-scrollbar-thumb': {
    background: '#D8E3EB',
  },
})

const StyledCard = styled(Card)({
  height: '400px',
  borderRadius: '20px',
  filter: 'drop-shadow(0px 10px 10px rgba(196,200,208,0.4 ))',
  background: '#ffffff}',
  maxHeight: '413px',
  boxShadow: 'none',
})

const StyledTitle = styled(Typography)({
  color: '#52575D',
  margin: ' 0 auto',
  fontSize: '18px',
})

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
  return (
    <StyledCard>
      <CardHeader
        title={
          <Box display="flex" justifyContent="space-between">
            <Typography sx={{ color: '#3C49FF' }} variant="h5">
              Orders
            </Typography>
            <ToggleButtons label1="Least" label2="Most" />
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
                sx={{ padding: '0.5rem 1rem' }}
              >
                {/* <Avatar>{OrderImage}</Avatar> */}
                <Image src={OrderImage} width="46px" height="46px" alt="" />
                <StyledTitle>{item.name}</StyledTitle>
              </Box>
              <Typography>{item.count}</Typography>
            </Box>
          ))}
        </Container>
      </CardContent>
    </StyledCard>
  )
}

export default OrderCountCard
