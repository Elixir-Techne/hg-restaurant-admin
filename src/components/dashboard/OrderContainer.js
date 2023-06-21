import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from '@mui/material'
import moment from 'moment'
import Image from 'next/image'
import styled from 'styled-components'

import { theme } from '@/theme'

import OrderImage from '../../../public/images/burger.png'

const StyledMainContainer = styled(Box)({
  width: '241px',
  height: '365px',
  position: 'relative',
  '& ::-webkit-scrollbar': {
    width: '2px',
  },

  /* Track */
  '& ::-webkit-scrollbar-track': {
    background: '#f1f1f1',
  },
  /* Handle */
  '& ::-webkit-scrollbar-thumb': {
    background: '#D8E3EB',
  },
})

const StyledCard = styled(Card)({
  height: '400px',
  borderRadius: '20px',
  boxShadow: 'none',
  filter: 'drop-shadow(0px 10px 10px rgba(196,200,208,0.4 ))',
  background: '#ffffff}',
  maxHeight: '413px',
  overflowY: 'hidden',
  overflowX: 'auto',
  '&::-webkit-scrollbar': {
    width: '2px',
    height: '8px',
  },

  /* Track */
  '&::-webkit-scrollbar-track:horizontal': {
    background: '#f1f1f1',
    borderRadius: '20px',
    margin: '15px',
  },
  /* Handle */

  '&::-webkit-scrollbar-thumb:horizontal': {
    height: '10px',
    background: '#D8E3EB',
  },
})

const StyledSubContainer = styled(Box)({
  width: '217px',
  height: '280px',
  marginTop: '14px',
  position: 'relative',
  filter: 'drop-shadow(0px 10px 10px rgba(196,200,208,0.4 ))',
  borderRadius: '15px',
  backgroundColor: '#FFFFFF',
})
const StyledHeadTitle = styled(Typography)({
  fontSize: '20px',
  fontWeight: 'bold',
  color: '#52575D',
  marginBottom: '0.7rem',
})
const StyledTitle = styled(Typography)({
  color: '#52575D',
  margin: ' 0 auto',
  fontSize: '18px',
})
const StyledBoldTitle = styled(Typography)({
  color: '#52575D',
  margin: ' 0 auto',
  fontSize: '18px',
  fontWeight: 'bold',
})
const StyledCardHeader = styled(CardHeader)(({ theme }) => ({
  color: '#3C49FF',
  '& .MuiCardHeader-title': {
    fontWeight: 'bold',
  },
}))
function OrderContainer({ ordersDetail, orderStatus }) {
  const OrderCardData = [
    {
      id: 1,
      name: 'Thunder Filler',
    },
    {
      id: 2,
      name: 'Loaded Fries',
    },
    {
      id: 3,
      name: 'Thunder Filler',
    },
    {
      id: 4,
      name: 'Loaded Fries',
    },
    {
      id: 5,
      name: 'Loaded Fries',
    },
    {
      id: 6,
      name: 'Loaded Fries',
    },
  ]

  return (
    <StyledCard>
      <StyledCardHeader title="Order in process" />
      <Divider variant="middle" />
      <CardContent>
        <Box display="flex" gap="1vw" sx={{ margin: '0 2.5rem' }}>
          {ordersDetail?.map((item, index) => {
            return (
              <StyledMainContainer key={index}>
                <StyledSubContainer>
                  <Box
                    display="flex"
                    justifyContent="center"
                    sx={{
                      paddingTop: '10px',
                    }}
                  >
                    <StyledHeadTitle>
                      Table {item.table_number} (inside)
                    </StyledHeadTitle>
                  </Box>
                  <Box display="flex" flexDirection="c" flexWrap="wrap">
                    <Box display="flex" gap="5vw" sx={{ margin: ' 0 auto' }}>
                      <StyledTitle>Waiter</StyledTitle>
                      <StyledBoldTitle>Saba</StyledBoldTitle>
                    </Box>
                    <Box display="flex" gap="5vw" sx={{ margin: ' 0 auto' }}>
                      <StyledTitle>Time:</StyledTitle>
                      <StyledBoldTitle>
                        {moment(item.created_at).format('mm:ss')}
                      </StyledBoldTitle>
                    </Box>
                    <Divider
                      sx={{ width: '209px', height: '2px', margin: '0 auto' }}
                    />
                  </Box>
                  <Box
                    display="flex"
                    sx={{
                      overflowY: 'auto',
                      overflowX: 'hidden',
                      height: '165px',
                      width: '230px',
                      flexDirection: 'column ',
                      // gap:"0.5vh"
                    }}
                  >
                    {OrderCardData &&
                      OrderCardData.map((item, index) => {
                        return (
                          <Box
                            key={item.key}
                            display="flex"
                            flexDirection="row"
                            alignItems="center"
                            gap="1vw"
                            sx={{ padding: '0.5rem 1rem' }}
                          >
                            {/* <Avatar>{OrderImage}</Avatar> */}
                            <Image
                              src={OrderImage}
                              width="46px"
                              height="46px"
                              alt=""
                            />
                            <StyledTitle>{item.name}</StyledTitle>
                          </Box>
                        )
                      })}
                    <Typography
                      sx={{
                        display: 'flex',
                        justifyContent: 'end',
                        margin: '0 25px',
                        fontWeight: 'bold',
                      }}
                    >
                      $190
                    </Typography>
                  </Box>
                </StyledSubContainer>
              </StyledMainContainer>
            )
          })}
        </Box>
      </CardContent>
    </StyledCard>
  )
}

export default OrderContainer
