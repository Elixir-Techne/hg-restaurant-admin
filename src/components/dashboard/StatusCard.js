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

import downIcon from '../../assets/icons/down.svg'
import upIcon from '../../assets/icons/upArrow.svg'
import ToggleButtons from '../ToogleButton'
import { StyledStatusCard, UseStylesStatusCard } from './styles'

function StatusCard() {
  const [toggle1, settoggle1] = useState('Cancelled')
  const [toggle2, settoggle2] = useState('Inside')
  const classes = UseStylesStatusCard()
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
    <StyledStatusCard key={item.id} className="elevation">
      <CardHeader
        title={
          <Box display="flex" justifyContent="space-between">
            <Typography className={classes.typographyTitle} variant="h5">
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
          <Typography className={classes.typographyCount} variant="h2">
            {item.count}
          </Typography>
          <Box display="flex" alignItems="center">
            {toggle1 === item.label1 || toggle2 === item.label1 ? (
              <Image src={upIcon} alt="" />
            ) : (
              <Image src={downIcon} alt="" />
            )}

            <Typography className={classes.typographyPrecent} variant="h6">
              {item.precent}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </StyledStatusCard>
  ))
}

export default StatusCard
