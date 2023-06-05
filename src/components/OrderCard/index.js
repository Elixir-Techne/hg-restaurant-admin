import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import styled from 'styled-components'

import { theme } from '@/theme'

import cancelIcon from '../../assets/icons/cancel-icon.png'

const StyledMainContainer = styled(Box)({
  width: '248px',
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

function orderCard() {
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
  const orderServed = false
  const NewOrder = true
  return (
    <Box sx={{ marginLeft: '500px', marginTop: '10px' }}>
      <StyledMainContainer>
        <Image
          src={cancelIcon}
          style={{ position: 'absolute', top: '-4%', left: '88%', zIndex: 1 }}
          alt=""
        />
        <StyledSubContainer
          sx={{ border: NewOrder ? '1px solid #5d6d30' : null }}
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
            {NewOrder ? (
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
          <Box display="flex" justifyContent="center" mt="8px">
            <StyledHeadTitle>Table 1 (inside)</StyledHeadTitle>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            flexWrap="wrap"
            gap="0.5vh"
          >
            <Box display="flex" gap="5vw" sx={{ margin: ' 0 auto' }}>
              <StyledTitle>Waiter</StyledTitle>
              <StyledBoldTitle>Saba</StyledBoldTitle>
            </Box>
            <Box display="flex" gap="5vw" sx={{ margin: ' 0 auto' }}>
              <StyledTitle>Time:</StyledTitle>
              <StyledBoldTitle>19:45</StyledBoldTitle>
            </Box>
            <Divider sx={{ width: '209px', height: '2px', margin: '0 auto' }} />
          </Box>
          <Box
            display="flex"
            sx={{
              overflowY: 'auto',
              overflowX: 'hidden',
              height: orderServed ? '165px' : '225px',
              width: '230px',
              flexDirection: 'column ',
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
                    gap="2vw"
                    sx={{ padding: '0.5rem 1rem' }}
                  >
                    <Avatar>R</Avatar>
                    <StyledTitle>{item.name}</StyledTitle>
                  </Box>
                )
              })}
          </Box>
          {orderServed ? (
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
    </Box>
  )
}

export default orderCard
