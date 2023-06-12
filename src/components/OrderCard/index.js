import { Box, Divider, Typography } from '@mui/material'
import moment from 'moment'
import Image from 'next/image'
import { useEffect } from 'react'
import styled from 'styled-components'

import { theme } from '@/theme'

import OrderImage from '../../../public/images/burger.png'
import cancelIcon from '../../assets/icons/cancel-icon.png'
import '../../styles/form.css'
import { deleteOrders, getOrders } from '../../utils/api'
import PopUp from '../Popup/index'

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
  '@media (max-width:768px)': {
    width: '176px',
    height: '298px',
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
  '@media (max-width:768px)': {
    width: '168px',
    height: '286px',
  },
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
  '@media (max-width:768px)': {
    margin: '0 0.5rem',
  },
})
const StyledBoldTitle = styled(Typography)({
  color: '#52575D',
  margin: ' 0 auto',
  fontSize: '18px',
  fontWeight: 'bold',
  '@media (max-width:768px)': {
    margin: '0 0.5rem',
  },
})

const StyledServedTitle = styled(Typography)({
  borderRadius: '15px',
  color: 'white',
  fontSize: '1.4rem',
  background: theme.palette.primary.main,
  textAlign: 'center',
  padding: '2px 25px',
  margin: '0 1rem',
  '@media (max-width:768px)': {
    fontSize: '0.9rem',
    margin: '0',
  },
})

function orderCard({
  ordersDetail,
  orderStatus,
  setOrderCancelled,
  orderCancelled,
}) {
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
    setOrderCancelled(true)
  }

  //API for GET orders

  // useEffect(() => {
  //   getOrders(restaurant_id)
  //     .then((res) => res)
  //     .catch((err) => console.log(err))
  // }, [getOrders])

  //API for delete orders

  // useEffect(() => {
  //   deleteOrders(restaurant_id, order_id)
  //     .then((res) => res)
  //     .catch((err) => console.log(err))
  // }, [deleteOrders])

  if (orderCancelled) {
    return (
      <Box sx={{ height: '100%', width: '100%' }}>
        <PopUp setOrderCancelled={setOrderCancelled} />
      </Box>
    )
  } else
    return (
      <Box
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        gap="2vw"
        sx={{
          zIndex: orderCancelled ? 0 : 1,
          margin: theme.spacing(10),
          '@media (max-width:1440px)': {
            gap: '1vw',
          },
          '@media (max-width:1024px)': {
            margin: theme.spacing(4),
          },
          '@media (max-width:768px)': {
            margin: theme.spacing(2),
          },
          '@media (max-width:425px)': {
            margin: theme.spacing(2),
            gap: '3vw',
          },
          '@media (max-width:375px)': {
            margin: theme.spacing(2),
            gap: '1vw',
            justifyContent: 'center',
          },
        }}
      >
        {ordersDetail?.map((item, index) => {
          return (
            <StyledMainContainer key={index}>
              <Image
                src={cancelIcon}
                className="cancel-image"
                style={{
                  position: 'absolute',
                  left: '90%',
                  zIndex: 1,
                  cursor: 'pointer',
                }}
                onClick={handleCancelOrder}
                alt="cancel icon"
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
                  <Box
                    display="flex"
                    gap="5vw"
                    sx={{
                      margin: ' 0 auto',
                      '@media (max-width:768px)': {
                        margin: '0',
                      },
                    }}
                  >
                    <StyledTitle>Waiter</StyledTitle>
                    <StyledBoldTitle>Saba</StyledBoldTitle>
                  </Box>
                  <Box
                    display="flex"
                    gap="5vw"
                    sx={{
                      margin: ' 0 auto',
                      '@media (max-width:768px)': {
                        margin: '0',
                      },
                    }}
                  >
                    <StyledTitle>Time:</StyledTitle>
                    <StyledBoldTitle>
                      {moment(item.created_at).format('mm:ss')}
                    </StyledBoldTitle>
                  </Box>
                  <Divider
                    sx={{
                      width: '209px',
                      height: '2px',
                      margin: '0 auto',
                      '@media (max-width:768px)': { width: '155px' },
                    }}
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
                    '@media (max-width:768px)': {
                      height: item.status === 'completed' ? '118px' : '176px',
                      width: '167px',
                    },
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
                            alt="Food image"
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
                    sx={{
                      marginTop: '1.5rem',
                      '@media (max-width:768px)': { marginTop: '1rem' },
                    }}
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
