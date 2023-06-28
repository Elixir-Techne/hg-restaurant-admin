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
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import styled from 'styled-components'

import addressPng from '../../../public/images/address.svg'
import emailPng from '../../../public/images/email.svg'
import phonePng from '../../../public/images/phoneSupport.png'
import companyPng from '../../../public/images/supportContact.png'
import '../../styles/support.css'
import {
  StyledErrorMessage,
  StyledFormField,
  StyledTextField,
  UseStyle,
} from './styles'

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
  const classes = UseStyle()
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
    <Box className={classes.mainContainer}>
      <Box className={classes.subContainer}>
        <Box className={classes.logoContainer}>
          <Image src={companyPng} alt="" className="company-logo" />

          <Box
            display="flex"
            gap="40px"
            alignItems="center"
            className={classes.navContainer}
          >
            {data.map((item) => (
              <Typography
                className={classes.navTypography}
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
          className={classes.searchTitleBox}
        >
          <Typography className={classes.searchTitle} variant="h4" m="auto">
            Cloud Dleunkder provides you the best food Services
          </Typography>
          <Typography
            className={classes.questionTypography}
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
      <Box className={classes.cardContainer}>
        {cardData.map((data) => (
          <Card
            className={classes.cardSubContainer}
            key={data.id}
            sx={{ backgroundColor: data.bgcolor }}
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
      <Box className={classes.contactContainer}>
        <Grid container display="flex" justifyContent="space-between">
          <Grid item container lg={3} xs={12} md={4} m gap={3}>
            <Grid item xs={12}>
              <Typography className={classes.contactTypography}>
                GET IN TOUCH
              </Typography>
            </Grid>
            <Grid item lg={12} xs={6}>
              <Typography className={classes.subTitleTypography}>
                Write us a Message
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.contentTypography}>
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
                    className={classes.descriptionTextField}
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
            className={classes.sendButton}
            onClick={handleSubmit(onSubmit)}
          >
            Send Message
          </Button>
        </Box>
      </Box>
      <Box className={classes.questionsMainContainer}>
        <Box className={classes.questionsSubContainer}>
          <Typography className={classes.questionTitle}>
            Frequently asked questions
          </Typography>
        </Box>
        <Box className={classes.questionContainer}>
          {askedQuestions?.map((item) => {
            return (
              <>
                <Accordion className={classes.accordion}>
                  <AccordionSummary
                    expandIcon={<AddIcon fontSize="large" />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className={classes.accordionSummary}
                  >
                    <Box display="flex">
                      <Typography className={classes.questionId}>
                        {item.id}
                      </Typography>
                      <Typography className={classes.questionAsk}>
                        {item.question}
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className={classes.questionAnswer}>
                      {item.answer}
                    </Typography>
                  </AccordionDetails>
                  <Typography className={classes.contactUstypography}>
                    Contact us for more Info
                  </Typography>
                </Accordion>
                <Divider className={classes.divider} />
              </>
            )
          })}
        </Box>
      </Box>
    </Box>
  )
}
