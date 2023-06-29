import { Box, CardContent, Divider, Typography } from '@mui/material'
import moment from 'moment'
import Image from 'next/image'
import React, { useEffect } from 'react'

import OrderImage from '../../../public/images/burger.png'
import {
  StyledBoldTitle,
  StyledCardHeader,
  StyledHeadTitle,
  StyledMainContainer,
  StyledOrderContainerCard,
  StyledSubContainer,
  StyledTitle,
  UseStyleOrderContainer,
} from './styles'

function OrderContainer({ ordersDetail, orderStatus }) {
  const classes = UseStyleOrderContainer()
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
    <StyledOrderContainerCard>
      <StyledCardHeader title="Order in process" />
      <Divider variant="middle" />
      <CardContent className={classes.mainCardBox}>
        <Box display="flex" gap="1vw" className={classes.cardContentBox}>
          {ordersDetail?.map((item, index) => {
            return (
              <StyledMainContainer key={item.id}>
                <StyledSubContainer>
                  <Box
                    display="flex"
                    justifyContent="center"
                    className={classes.containerBox}
                  >
                    <StyledHeadTitle>
                      Table {item.table_number} (inside)
                    </StyledHeadTitle>
                  </Box>
                  <Box display="flex" flexDirection="c" flexWrap="wrap">
                    <Box display="flex" gap="5vw" className={classes.titleBox}>
                      <StyledTitle>Waiter</StyledTitle>
                      <StyledBoldTitle>Saba</StyledBoldTitle>
                    </Box>
                    <Box display="flex" gap="5vw" className={classes.titleBox}>
                      <StyledTitle>Time:</StyledTitle>
                      <StyledBoldTitle>
                        {moment(item.created_at).format('mm:ss')}
                      </StyledBoldTitle>
                    </Box>
                    <Divider className={classes.divider} />
                  </Box>
                  <Box display="flex" className={classes.menuContainer}>
                    {OrderCardData &&
                      OrderCardData.map((item, index) => {
                        return (
                          <Box
                            key={item.key}
                            display="flex"
                            flexDirection="row"
                            alignItems="center"
                            gap="1vw"
                            className={classes.menuSubContainer}
                          >
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
                    <Typography className={classes.billingBox}>$190</Typography>
                  </Box>
                </StyledSubContainer>
              </StyledMainContainer>
            )
          })}
        </Box>
      </CardContent>
    </StyledOrderContainerCard>
  )
}

export default OrderContainer
