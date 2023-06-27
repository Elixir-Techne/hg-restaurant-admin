import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import {
  Box,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from '@mui/material'
import { Chart, registerables } from 'chart.js'
import React from 'react'
import { useEffect } from 'react'

import FilledCircleSvg from '@/assets/icons/filledCircleSvg'

import { StyleRevenueCard, UseStylesRevenueCard } from './styles'

Chart.register(...registerables)

function RevenueCard({ orderStatus }) {
  const classes = UseStylesRevenueCard()
  useEffect(() => {
    var ctx = document.getElementById('myChart').getContext('2d')
    var myChart = new Chart(ctx, {
      type: 'bar',
      options: {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          y: {
            ticks: {
              callback: function (value, index, ticks) {
                return '$' + ' ' + value
              },
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: false,
          },
        },
      },
      data: {
        labels: [
          '00:00',
          '02:00',
          '04:00',
          '06:00',
          '08:00',
          '10:00',
          '12:00',
          '14:00',
          '16:00',
          '18:00',
          '20:00',
          '22:00',
          '24:00',
        ],
        datasets: [
          {
            data: [
              225, 420, 580, 590, 390, 200, 190, 225, 420, 580, 590, 390, 470,
            ],
            label: false,
            backgroundColor: '#3c49ff',
            barThickness: 8,
            borderRadius: { topLeft: 8, topRight: 8 },
            borderWidth: 1.5,
          },
          {
            data: [
              285, 467, 540, 530, 410, 290, 290, 225, 400, 550, 540, 330, 410,
            ],
            label: 'Accepted',
            backgroundColor: '#8CA6FB',
            barThickness: 8,
            borderRadius: { topLeft: 8, topRight: 8 },
            borderWidth: 1.5,
          },
        ],
      },
    })
  }, [])
  return (
    <StyleRevenueCard>
      <CardHeader
        title={
          <Box display="flex" justifyContent="space-between">
            <Box display="flex" alignItems="center" gap="5px">
              <Typography className={classes.typographyTitle} variant="h5">
                Revenue
              </Typography>
              <InfoOutlinedIcon className={classes.infoOutlinedIcon} />
            </Box>
            <Box display="flex" gap="10px">
              <Box display="flex" alignItems="center" gap="5px">
                <FilledCircleSvg />
                <Typography className={classes.typographyStatus} variant="h5">
                  {orderStatus === 'Today'
                    ? 'Yesterday'
                    : orderStatus === 'This week'
                    ? 'Last week'
                    : orderStatus === 'This month'
                    ? 'Last month'
                    : 'Before'}
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" gap="5px">
                <FilledCircleSvg selected />
                <Typography className={classes.typographyStatus} variant="h5">
                  {orderStatus === 'Today'
                    ? 'Today'
                    : orderStatus === 'This week'
                    ? 'Current week'
                    : orderStatus === 'This month'
                    ? 'Current month'
                    : 'now'}
                </Typography>
              </Box>
            </Box>
          </Box>
        }
        className={classes.cardHeader}
      />
      <Divider variant="middle" />
      <CardContent className={classes.cardContent}>
        <canvas id="myChart"></canvas>
      </CardContent>
    </StyleRevenueCard>
  )
}

export default RevenueCard
