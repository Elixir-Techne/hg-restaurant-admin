import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Controller, useForm } from 'react-hook-form'
import styled from 'styled-components'

import { theme } from '@/theme'

import CompanyLogo from '../../assets/icons/company.png'
import '../../styles/auth.css'

const StyledMaincontainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
})
const StyledSubcontainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  margin: '2rem 1.5rem',
  background: '#FDFDFD',
  filter: 'drop-shadow(0px 3px 3px rgba(0,0,0,0.16 ))',
  borderRadius: '21px',
  padding: '1rem',
  width: '510px',
  height: '610px',
  '@media (max-width:425px)': {
    height: '610px',
    margin: '0 0.3rem',
  },
})
function AuthForm({ title }) {
  const route = useRouter()
  const { control, register, handleSubmit, errors } = useForm()
  const handleAuth = () => {
    if (title === 'sign-in') {
      route.push('/sign-up')
    } else {
      route.push('/sign-in')
    }
  }
  const onSubmit = (data) => {
    console.log(data, '============')
  }
  return (
    <>
      <StyledMaincontainer>
        <StyledSubcontainer>
          <Grid container>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Image
                  src={CompanyLogo}
                  alt="company logo"
                  width={290}
                  height={160}
                />
              </Box>
            </Grid>
            {title === 'sign-up' ? (
              <Grid item xs={12}>
                <Controller
                  name="Email"
                  control={control}
                  rules={{ required: 'E-mail is required' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      placeholder="E-mail"
                      sx={{
                        margin: '0.5rem 0',
                        padding: '0 1rem',
                        width: '100%',
                        background: '#F5F6FA',
                        borderRadius: '17px',
                      }}
                    />
                  )}
                />
              </Grid>
            ) : null}
            <Grid item xs={12}>
              <Controller
                name="username"
                control={control}
                rules={{ required: 'Username is required' }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    placeholder="Username"
                    sx={{
                      margin: '0.5rem 0',
                      padding: '0 1rem',
                      width: '100%',
                      background: '#F5F6FA',
                      borderRadius: '17px',
                    }}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12}>
              <Controller
                name="password"
                control={control}
                rules={{ required: 'Password is required' }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    placeholder="Password"
                    type="password"
                    sx={{
                      margin: '0.5rem 0',
                      padding: '0 1rem',
                      width: '100%',
                      background: '#F5F6FA',
                      borderRadius: '17px',
                    }}
                  />
                )}
              />
            </Grid>

            {title === 'sign-in' ? (
              <Grid item xs={12}>
                <Box>
                  <Controller
                    name="rememberMe"
                    control={control}
                    render={({ field }) => (
                      <FormControlLabel
                        {...field}
                        value="Remember Me"
                        control={<Checkbox />}
                        label="Remember Me"
                        labelPlacement="end"
                      />
                    )}
                  />
                </Box>
              </Grid>
            ) : null}
            <Grid item xs={12}>
              <Box display="flex" justifyContent="center">
                <Button
                  variant="contained"
                  sx={{
                    marginTop: '1rem',
                    fontSize: '1.6rem',
                    borderRadius: '20px',
                    alignSelf: 'flex-end',
                    padding: '0 2rem',
                    textTransform: 'inherit',
                    '@media (max-width: 899px)': {
                      fontSize: '1.5rem',
                    },
                  }}
                  onClick={handleSubmit(onSubmit)}
                >
                  {title === 'sign-in' ? 'Sign In' : 'Sign Up'}
                </Button>
              </Box>
            </Grid>
            <Grid item container xs={12}>
              <Grid item xs={5}>
                {title === 'sign-in' ? (
                  <Typography
                    sx={{
                      fontSize: '1.1rem',
                      cursor: 'pointer',
                      '@media (max-width:425px)': {
                        fontSize: '1.1rem !important',
                      },
                    }}
                  >
                    Forget Password ?
                  </Typography>
                ) : null}
              </Grid>
              <Grid item xs={7}>
                <Typography
                  sx={{
                    fontSize: '1.1rem',
                    '@media (max-width:425px)': {
                      fontSize: '1.1rem !important',
                      display: 'flex',
                      flexDirection: 'column',
                      textAlign: 'end',
                    },
                  }}
                >
                  {title === 'sign-in'
                    ? "Don't Have Account?"
                    : 'Alreay have a Account'}
                  &nbsp;
                  <span
                    style={{
                      color: theme.palette.primary.main,
                      cursor: 'pointer',
                      fontWeight: 'bold',
                    }}
                    onClick={handleAuth}
                  >
                    {title === 'sign-in' ? 'Sign Up' : 'Sign In'}
                  </span>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </StyledSubcontainer>
      </StyledMaincontainer>
    </>
  )
}

export default AuthForm
