import { Avatar, Box, Divider, Typography } from '@mui/material'
import moment from 'moment'
import Image from 'next/image'
import styled from 'styled-components'

import { theme } from '@/theme'

import OrderImage from '../../../public/images/burger.png'
import cancelIcon from '../../assets/icons/cancel-icon.png'

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

const StyledSubContainer = styled(Box)({
  width: '238px',
  height: '355px',
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

const StyledServedTitle = styled(Typography)({
  borderRadius: '15px',
  width: '110px',
  color: 'white',
  fontSize: '18px',
  background: theme.palette.primary.main,
  textAlign: 'center',
  padding: '2px 25px',
  margin: '0 1rem',
})

function orderCard({ ordersDetail, orderStatus }) {
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
  const handleCancelOrder = () => {
    console.log('order cancel')
  }

  return (
    <Box
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
      gap="1vw"
      sx={{ margin: '0 2.5rem' }}
    >
      {ordersDetail?.map((item, index) => {
        return (
          <StyledMainContainer key={index}>
            <Image
              src={cancelIcon}
              style={{
                position: 'absolute',
                left: '90%',
                zIndex: 1,
                cursor: 'pointer',
              }}
              onClick={handleCancelOrder}
              alt=""
            />
            <StyledSubContainer
              sx={{
                border:
                  item.status === 'in_progress' ? '1px solid #5d6d30' : null,
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  width: '63.2px',
                  height: '23px',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                {item.status === 'in_progress' ? (
                  <Typography
                    sx={{
                      textTransform: 'uppercase',
                      background: theme.palette.primary.main,
                      color: '#FFFFFF',
                      fontWeight: 'bold',
                      fontSize: '13px',
                      borderRadius: '15px',
                      textAlign: 'center',
                    }}
                  >
                    New
                  </Typography>
                ) : null}
              </Box>
              <Box
                display="flex"
                justifyContent="center"
                sx={{
                  paddingTop: item.status === 'in_progress' ? '8px' : '10px',
                }}
              >
                <StyledHeadTitle>
                  Table {item.table_number} (inside)
                </StyledHeadTitle>
              </Box>
              <Box display="flex" flexDirection="column" flexWrap="wrap">
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
                  height: item.status === 'completed' ? '165px' : '225px',
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
              </Box>
              {item.status === 'completed' ? (
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  sx={{ marginTop: '1.5rem' }}
                >
                  <StyledServedTitle>Served</StyledServedTitle>
                  <StyledBoldTitle>$190</StyledBoldTitle>
                </Box>
              ) : null}
            </StyledSubContainer>
          </StyledMainContainer>
        )
      })}
    </Box>
  )
}

export default orderCard
