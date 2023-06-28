import { Box, Divider, Typography } from '@mui/material'
import moment from 'moment'
import Image from 'next/image'
import { useState } from 'react'
import React from 'react'

import OrderImage from '../../../public/images/burger.png'
import cancelIcon from '../../assets/icons/cancel-icon.png'
import '../../styles/form.css'
import { deleteOrders, getOrders } from '../../utils/api'
import PopUp from '../Popup/index'
import {
  StyledBoldTitle,
  StyledHeadTitle,
  StyledMainContainer,
  StyledServedTitle,
  StyledSubContainer,
  StyledTitle,
  UseStyle,
} from './styles'

const OrderCard = ({
  ordersDetail,
  setOrderCancelled,
  orderCancelled,
  setOrderData,
  orderData,
}) => {
  const [cancelledId, setCancelledId] = useState(' ')
  const classes = UseStyle()
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

  const handleCancelOrder = (id) => {
    setCancelledId(id)
    setOrderCancelled(true)
  }

  const handleServedAndPaid = (id) => {
    setOrderData((prev) =>
      prev.map((o) =>
        o.order_id === id
          ? {
              ...o,
              status: o.status === 'pending' ? 'served' : 'completed',
              cooking_status: 'completed',
            }
          : o,
      ),
    )
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
      <Box className={classes.cancelOrderBox}>
        <PopUp
          setOrderCancelled={setOrderCancelled}
          setOrderData={setOrderData}
          cancelledId={cancelledId}
        />
      </Box>
    )
  } else
    return (
      <StyledMainContainer
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        gap="2vw"
      >
        {orderData?.map((item, index) => {
          return (
            <StyledSubContainer
              key={index}
              sx={{
                border:
                  item.cooking_status === 'in_progress'
                    ? '1.5px solid #5d6d30'
                    : null,
                borderTopRight: 'transparent',
              }}
            >
              {item.status !== 'cancelled' ? (
                <Image
                  src={cancelIcon}
                  className="cancel-image"
                  onClick={() => handleCancelOrder(item.order_id)}
                  alt="cancel icon"
                />
              ) : null}
              <Box className={classes.cardContainer}>
                {item.cooking_status === 'in_progress' ? (
                  <Typography className={classes.cardStatusTitle}>
                    New
                  </Typography>
                ) : null}
              </Box>
              <Box
                display="flex"
                justifyContent="center"
                sx={{
                  paddingTop:
                    item.cooking_status === 'in_progress' ? '8px' : '10px',
                }}
              >
                <StyledHeadTitle>
                  Table {item.table_number} (inside)
                </StyledHeadTitle>
              </Box>
              <Box display="flex" flexDirection="column" flexWrap="wrap">
                <Box display="flex" gap="5vw" className={classes.waiterBox}>
                  <StyledTitle>Waiter</StyledTitle>
                  <StyledBoldTitle>Saba</StyledBoldTitle>
                </Box>
                <Box display="flex" gap="5vw" className={classes.timeContainer}>
                  <StyledTitle>Time:</StyledTitle>
                  <StyledBoldTitle>
                    {moment(item.created_at).format('mm:ss')}
                  </StyledBoldTitle>
                </Box>
                <Divider className={classes.divider} />
              </Box>
              <Box
                display="flex"
                className={classes.orderMainContainer}
                sx={{
                  height:
                    item.cooking_status === 'completed' ? '165px' : '225px',

                  '@media (max-width:768px)': {
                    height:
                      item.cooking_status === 'completed' ? '118px' : '176px',
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
                        className={classes.orderSubContainer}
                      >
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
              {item.cooking_status === 'completed' ? (
                <Box
                  display="flex"
                  justifyContent={
                    item.status === 'served' || 'paid'
                      ? 'space-around'
                      : 'start'
                  }
                  alignItems="center"
                  className={classes.billingBox}
                >
                  <StyledServedTitle
                    onClick={() => handleServedAndPaid(item.order_id)}
                  >
                    {item.status === 'pending'
                      ? 'Served'
                      : item.status === 'served' || 'paid'
                      ? 'Paid'
                      : null}
                  </StyledServedTitle>
                  <StyledBoldTitle>$190</StyledBoldTitle>
                </Box>
              ) : null}
            </StyledSubContainer>
          )
        })}
      </StyledMainContainer>
    )
}

export default OrderCard
