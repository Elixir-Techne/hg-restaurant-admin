'use client'

import { Box, Card, CardContent, TextField, Typography } from '@mui/material'
import Image from 'next/image'
import styled from 'styled-components'

import addressPng from '../../../public/images/address.svg'
import emailPng from '../../../public/images/email.svg'
import phonePng from '../../../public/images/phoneSupport.png'
import companyPng from '../../../public/images/supportContact.png'

const StyledTextField = styled(TextField)({
  padding: '0 1rem',
  background: '#ffffff',
  border: '1px solid #AACDE8',
  width: '650px',
  borderRadius: '5.5px',
})

const data = [
  { id: 1, name: 'Home' },
  { id: 2, name: 'FAQs' },
  { id: 3, name: 'Contact' },
  { id: 4, name: 'Sign up' },
  { id: 5, name: 'Login' },
]
const cardData = [
  {
    id: 1,
    title: 'Our Phone',
    subtitle: '123 4567 89101',
    icon: phonePng,
    bgcolor: '#3C49FF69',
    color: '#FFFFFF',
  },
  {
    id: 2,
    title: 'Our Email',
    subtitle: 'name@website.com',
    icon: emailPng,
    bgcolor: '#A6DDC2',
    color: '#C57123',
  },
  {
    id: 3,
    title: 'Our Address',
    subtitle: '2 St, Loskia sripur, amukara.',
    icon: addressPng,
    bgcolor: '#FFFFF',
    color: '#C57123',
  },
]

export default function Support() {
  return (
    <div style={{ backgroundColor: '#F3F2F5' }}>
      <div
        style={{
          width: '100%',
          backgroundImage: `url(images/support.png)`,
          backgroundColor: '#80DAF1',
        }}
      >
        <Box display="flex" justifyContent="space-around">
          <Image src={companyPng} alt="" />
          <Box display="flex" gap="40px" alignItems="center">
            {data.map((item) => (
              <Typography sx={{ color: '#077254' }} key={item.id}>
                {item.name}
              </Typography>
            ))}
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={16}
        >
          <Typography sx={{ color: '#077254' }} variant="h4" m="auto">
            Cloud Dleunkder provides you the best food
          </Typography>
          <Typography
            style={{ color: '#077254', textAlign: 'center' }}
            variant="h4"
          >
            Services
          </Typography>
          <Typography
            sx={{ color: '#077254', mt: 5, mb: '24px' }}
            m="auto"
            gutterBottom
          >
            Feel free to ask any kind of question
          </Typography>
          <StyledTextField
            placeholder="Have a question? Ask or enter a search term."
            variant="outlined"
            size="small"
          />
        </Box>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          margin: '-48px',
        }}
      >
        {cardData.map((data) => (
          <Card
            sx={{
              minWidth: '370px',
              mimHeight: '121px',
              borderRadius: '20px',
              backgroundColor: data.bgcolor,
              boxShadow: 'none',
            }}
            key={data.id}
          >
            <CardContent>
              <Box display="flex" alignItems="center">
                <Image src={data.icon} alt="" />
                <Box display="flex" flexDirection="column" mx={4}>
                  <Typography sx={{ color: data.color }}>
                    {data.title}
                  </Typography>
                  <Typography sx={{ color: data.color }}>
                    {data.subtitle}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
