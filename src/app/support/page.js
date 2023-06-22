'use client'

import AddIcon from '@mui/icons-material/Add'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import PinterestIcon from '@mui/icons-material/Pinterest'
import TwitterIcon from '@mui/icons-material/Twitter'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  TextField,
  Typography,
  withStyles,
} from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Controller, useForm } from 'react-hook-form'
import styled from 'styled-components'

import addressPng from '../../../public/images/address.svg'
import emailPng from '../../../public/images/email.svg'
import phonePng from '../../../public/images/phoneSupport.png'
import companyPng from '../../../public/images/supportContact.png'
import '../../styles/support.css'

const StyledTextField = styled(TextField)({
  padding: '0 1rem',
  background: '#ffffff',
  border: '1px solid #AACDE8',
  width: '650px',
  borderRadius: '5.5px',
  '@media (max-width:768px)': {
    width: '450px',
  },
  '@media (max-width:475px)': {
    width: '300px',
  },
})

const StyledFormField = styled(TextField)({
  background: '#FFFFFF',
  borderRadius: '10px',
  margin: '0.5rem',
})

const StyledErrorMessage = styled(Typography)({
  fontSize: '0.7rem',
  color: 'red',
  paddingLeft: '0.5rem',
  position: 'fix',
})

const data = [
  { id: 1, name: 'Home', url: '/' },
  { id: 2, name: 'FAQs', url: '/' },
  { id: 3, name: 'Contact', url: '/support' },
  { id: 4, name: 'Sign up', url: '/' },
  { id: 5, name: 'Login', url: '/' },
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
const socialProfile = [
  {
    id: 1,
    name: 'facebook',
    icon: <FacebookIcon />,
    link: 'https://www.facebook.com',
  },
  {
    id: 2,
    name: 'twitter',
    icon: <TwitterIcon />,
    link: 'https://www.twitter.com',
  },
  {
    id: 3,
    name: 'pinterest',
    icon: <PinterestIcon />,
    link: 'https://www.pinterest.com',
  },
  {
    id: 4,
    name: 'instagram',
    icon: <InstagramIcon />,
    link: 'https://www.instagram.com',
  },
  {
    id: 5,
    name: 'linkedin',
    icon: <LinkedInIcon />,
    link: 'https://www.linkedin.com',
  },
]

const askedQuestions = [
  {
    id: '01',
    question: 'How much time does it take ?',
    answer:
      'Lorem ipsum dolor sit consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore mangna aliquaveniam.',
  },
  {
    id: '02',
    question: 'What are your opening time and closing time ?',
    answer:
      'Lorem ipsum dolor sit consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore mangna aliquaveniam.',
  },
  {
    id: '03',
    question: 'On which area you offer discounts ?',
    answer:
      'Lorem ipsum dolor sit consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore mangna aliquaveniam.',
  },
  {
    id: '04',
    question: 'Where is your location?',
    answer:
      'Lorem ipsum dolor sit consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore mangna aliquaveniam.',
  },
  {
    id: '05',
    question: 'Are you up for food delivery ?',
    answer:
      'Lorem ipsum dolor sit consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore mangna aliquaveniam.',
  },
]
export default function Support() {
  const route = useRouter()
  const { control, register, handleSubmit, errors, formState } = useForm()
  const error = formState?.errors
  const onSubmit = (data) => {
    console.log(data, '============')
  }
  const handleSocialProfile = (id) => {
    const socialhandle = socialProfile.find((el) => el.id === id)
    route.push(socialhandle.link)
  }
  const handleUrl = (id) => {
    const urlhandle = data.find((el) => el.id === id)
    route.push(urlhandle.url)
  }

  return (
    <div style={{ backgroundColor: '#F3F2F5', overflow: 'hidden' }}>
      <Box
        sx={{
          width: '100%',
          backgroundImage: `url(images/support.png)`,
          backgroundColor: '#80DAF1',
        }}
      >
        <Box
          display="flex"
          justifyContent="space-around"
          sx={{
            '@media (max-width:575px)': {
              flexDirection: 'column-reverse',
              justifyContent: 'center',
            },
          }}
        >
          <Image src={companyPng} alt="" className="company-logo" />

          <Box
            display="flex"
            gap="40px"
            alignItems="center"
            sx={{
              '@media (max-width:575px)': {
                justifyContent: 'center',
                overflowX: 'auto',
              },
            }}
          >
            {data.map((item) => (
              <Typography
                sx={{ color: '#077254', cursor: 'pointer' }}
                key={item.id}
                onClick={() => handleUrl(item.id)}
              >
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
          sx={{
            width: '45%',
            margin: '0 auto',
            '@media (max-width:1440px)': {
              width: '60%',
            },
            '@media (max-width:1024px)': {
              width: '80%',
            },
            '@media (max-width:575px)': {
              width: '100%',
              paddingTop: '0.5rem',
            },
          }}
        >
          <Typography
            sx={{
              color: '#077254',
              textAlign: 'center',
              '@media (max-width:768px)': {
                fontSize: '1.4rem',
              },
              '@media (max-width:475px)': {
                fontSize: '1.2rem',
              },
            }}
            variant="h4"
            m="auto"
          >
            Cloud Dleunkder provides you the best food Services
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
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          margin: '-48px',
          '@media (max-width:768px)': {
            flexDirection: 'column',
          },
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
              '@media (max-width:1024px)': {
                minWidth: '290px',
              },
              '@media (max-width:768px)': {
                maxWidth: '190px',
                margin: '0 auto',
              },
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
      </Box>
      <Box
        sx={{
          // border: '1px solid red',
          width: '60%',
          margin: '0 auto',
          marginTop: '8rem',
          '@media (max-width:1024px)': {
            width: '90%',
          },
          '@media (max-width:768px)': {
            width: '80%',
          },
          '@media (max-width:475px)': {
            width: '90%',
          },
        }}
      >
        <Grid container display="flex" justifyContent="space-between">
          <Grid item container lg={3} xs={12} md={4} m gap={3}>
            <Grid item xs={12}>
              <Typography sx={{ color: '#042C71', fontSize: '1rem' }}>
                GET IN TOUCH
              </Typography>
            </Grid>
            <Grid item lg={12} xs={6}>
              <Typography
                sx={{
                  color: '#3C49FF',
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
                  '@media (max-width:1024px)': {
                    fontSize: '2.1rem',
                  },
                }}
              >
                Write us a Message
              </Typography>
            </Grid>
            {/* <Grid item lg={12} xs={6}>
              <Typography
                sx={{
                  color: '#3C49FF',
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
                  '@media (max-width:768px)': {
                    fontSize: '2rem',
                  },
                }}
              >
                Message
              </Typography>
            </Grid> */}
            <Grid item xs={12}>
              <Typography sx={{ color: '#565872' }}>
                Lorem ipsum dolor sit consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore mangna aliqua
                veniam.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" justifyContent="space-around">
                {socialProfile?.map((item, i) => {
                  return (
                    <Box onClick={() => handleSocialProfile(item.id)} key={i}>
                      {item.icon}
                    </Box>
                  )
                })}
              </Box>
            </Grid>
          </Grid>
          <Grid container lg={8} xs={12} md={8} spacing={4}>
            <Grid item xs={6}>
              <Controller
                name="fullname"
                control={control}
                rules={{ required: 'fullname is required' }}
                render={({ field }) => (
                  <StyledFormField
                    {...field}
                    fullWidth
                    placeholder="Full Name"
                  />
                )}
              />
              {error?.fullname?.type === 'required' ? (
                <StyledErrorMessage>
                  {error?.fullname?.message}
                </StyledErrorMessage>
              ) : null}
            </Grid>
            <Grid item xs={6}>
              <Controller
                name="phoneNumber"
                control={control}
                rules={{ required: 'phone Number is required' }}
                render={({ field }) => (
                  <StyledFormField
                    {...field}
                    fullWidth
                    placeholder="Phone Number"
                  />
                )}
              />
              {error?.phoneNumber?.type === 'required' ? (
                <StyledErrorMessage>
                  {error?.phoneNumber?.message}
                </StyledErrorMessage>
              ) : null}
            </Grid>
            <Grid item xs={6}>
              <Controller
                name="email"
                control={control}
                rules={{ required: 'Email Address is required' }}
                render={({ field }) => (
                  <StyledFormField
                    {...field}
                    fullWidth
                    placeholder="Email Address"
                  />
                )}
              />
              {error?.email?.type === 'required' ? (
                <StyledErrorMessage>{error?.email?.message}</StyledErrorMessage>
              ) : null}
            </Grid>
            <Grid item xs={6}>
              <Controller
                name="subject"
                control={control}
                rules={{ required: 'Subject is required' }}
                render={({ field }) => (
                  <StyledFormField {...field} fullWidth placeholder="Subject" />
                )}
              />
              {error?.subject?.type === 'required' ? (
                <StyledErrorMessage>
                  {error?.subject?.message}
                </StyledErrorMessage>
              ) : null}
            </Grid>
            <Grid xs={12} item>
              <Controller
                name="description"
                control={control}
                rules={{ required: 'Description is required' }}
                render={({ field }) => (
                  <StyledFormField
                    {...field}
                    fullWidth
                    placeholder=" "
                    sx={{ height: '165px' }}
                  />
                )}
              />
              {error?.description?.type === 'required' ? (
                <StyledErrorMessage>
                  {error?.description?.message}
                </StyledErrorMessage>
              ) : null}
            </Grid>
          </Grid>
        </Grid>
        <Box display="flex" justifyContent="center">
          <Button
            variant="contained"
            sx={{
              marginTop: '1rem',
              fontSize: '1.6rem',
              borderRadius: '10px',
              alignSelf: 'flex-end',
              padding: '0.5rem 2rem',
              textTransform: 'inherit',
              background: '#077254',
              '@media (max-width: 899px)': {
                fontSize: '1.5rem',
              },
            }}
            onClick={handleSubmit(onSubmit)}
          >
            Send Message
          </Button>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        sx={{
          width: '75%',
          margin: '0 auto',
          marginTop: '1.5rem',
          marginBottom: '0',
          '@media (max-width:1024px)': {
            width: '%',
          },
          '@media (max-width:575px)': {
            flexDirection: 'column',
            width: '100%',
          },
        }}
      >
        <Box
          sx={{
            width: '25%',
            '@media (max-width:575px)': {
              width: '100%',
              textAlign: 'center',
            },
          }}
        >
          <Typography
            sx={{
              color: '#FF4E4E',
              fontSize: '3rem',
              fontWeight: 'bold',
              '@media (max-width:1024px)': {
                fontSize: '2.5rem',
              },
              '@media (max-width:768px)': {
                fontSize: '2rem',
              },
            }}
          >
            Frequently asked questions
          </Typography>
        </Box>
        <Box
          sx={{
            width: '65%',
            '@media (max-width:575px)': {
              width: '100%',
            },
          }}
        >
          {askedQuestions?.map((item) => {
            return (
              <>
                <Accordion
                  sx={{
                    background: 'transparent !important',
                    boxShadow: 'none important',
                  }}
                >
                  <AccordionSummary
                    expandIcon={<AddIcon fontSize="large" />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{
                      '& .MuiAccordionSummary-expandIconWrapper': {
                        '&.Mui-expanded': {
                          transform: 'rotate(45deg)',
                        },
                      },
                    }}
                  >
                    <Box display="flex">
                      <Typography
                        sx={{
                          color: '#3C49FF',
                          fontSize: '1.7rem',
                          fontWeight: 'bold',
                          marginRight: '3rem',
                        }}
                      >
                        {item.id}
                      </Typography>
                      <Typography
                        sx={{
                          color: '#282938',
                          fontSize: '1.7rem',
                          fontWeight: 'bold',
                        }}
                      >
                        {item.question}
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      sx={{
                        color: '#282938',
                        fontSize: '1.5rem',
                        marginLeft: '4.5rem',
                      }}
                    >
                      {item.answer}
                    </Typography>
                  </AccordionDetails>
                  <Typography
                    sx={{
                      color: '#077254',
                      fontSize: '1.1rem',
                      fontWeight: 'bold',
                    }}
                  >
                    Contact us for more Info
                  </Typography>
                </Accordion>
                <Divider
                  sx={{ width: '100%', height: '5px', color: '#3C49FF' }}
                />
              </>
            )
          })}
        </Box>
      </Box>
    </div>
  )
}
