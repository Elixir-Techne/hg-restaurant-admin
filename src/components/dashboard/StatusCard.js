import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from '@mui/material'
import Image from 'next/image'
import { useState } from 'react'
import styled from 'styled-components'

import { theme } from '@/theme'

import downIcon from '../../assets/icons/down.svg'
import upIcon from '../../assets/icons/upArrow.svg'
import ToggleButtons from '../ToogleButton'

const StyledCard = styled(Card)({
  borderRadius: '20px',
  filter: 'drop-shadow(0px 10px 10px rgba(196,200,208,0.4 ))',
  background: '#ffffff}',
  height: '189px',
  boxShadow: 'none',
  marginBottom: theme.spacing(5),
})

function StatusCard() {
  const [toggle1, settoggle1] = useState('Cancelled')
  const [toggle2, settoggle2] = useState('Inside')
  const data = [
    {
      id: 1,
      cardTitle: 'Orders',
      label1: 'Cancelled',
      label2: 'Completed',
      count: '2,052',
      precent: '5%',
      callback: (status) => settoggle1(status),
    },
    {
      id: 2,
      cardTitle: 'Customers',
      label1: 'Inside',
      label2: 'Outside',
      count: '3,052',
      precent: '6%',
      callback: (status) => settoggle2(status),
    },
  ]
  return data.map((item) => (
    <StyledCard key={item.id}>
      <CardHeader
        title={
          <Box display="flex" justifyContent="space-between">
            <Typography
              sx={{ color: '#3C49FF', fontWeight: 'bold' }}
              variant="h5"
            >
              {item.cardTitle}
            </Typography>
            <ToggleButtons
              label1={item.label1}
              label2={item.label2}
              callback={item.callback}
            />
          </Box>
        }
      ></CardHeader>
      <Divider variant="middle" />
      <CardContent>
        <Box display="flex" justifyContent="space-between">
          <Typography sx={{ color: '#FF3C3C', fontWeight: 600 }} variant="h2">
            {item.count}
          </Typography>
          <Box display="flex" alignItems="center">
            {toggle1 === item.label1 || toggle2 === item.label1 ? (
              <Image src={upIcon} alt="" />
            ) : (
              <Image src={downIcon} alt="" />
            )}

            <Typography sx={{ color: '#005290', ml: '5px' }} variant="h6">
              {item.precent}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </StyledCard>
  ))
}

export default StatusCard
