import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from '@mui/material'
import { Chart, registerables } from 'chart.js'
import { useEffect } from 'react'
import styled from 'styled-components'

import FilledCircleSvg from '@/assets/icons/filledCircleSvg'

Chart.register(...registerables)

const StyledCard = styled(Card)({
  height: '400px',
  borderRadius: '20px',
  filter: 'drop-shadow(0px 10px 10px rgba(196,200,208,0.4 ))',
  background: '#ffffff}',
  boxShadow: 'none',
})

function RevenueCard({ orderStatus }) {
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
    <StyledCard>
      <CardHeader
        title={
          <Box display="flex" justifyContent="space-between">
            <Box display="flex" alignItems="center" gap="5px">
              <Typography
                sx={{ color: '#3C49FF', fontWeight: 'bold' }}
                variant="h5"
              >
                Revenue
              </Typography>
              <InfoOutlinedIcon sx={{ color: '#B3B8BD' }} />
            </Box>
            <Box display="flex" gap="10px">
              <Box display="flex" alignItems="center" gap="5px">
                <FilledCircleSvg />
                <Typography sx={{ color: '#3C49FF' }} variant="h5">
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
                <Typography sx={{ color: '#8CA6FB' }} variant="h5">
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
        sx={{ color: '#3C49FF' }}
      />
      <Divider variant="middle" />
      <CardContent sx={{ height: '350px' }}>
        <canvas id="myChart"></canvas>
      </CardContent>
    </StyledCard>
  )
}

export default RevenueCard
