import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@mui/material/Box'
import { Container, Grid, Typography } from '@mui/material'
import Link from '@mui/material/Link'
import Logo1 from '../assets/logo1.png'
import Logo2 from '../assets/logo2.png'
import Logo3 from '../assets/logo3.png'
import Logo4 from '../assets/logo4.png'
import Logo5 from '../assets/logo5.png'
import Logo6 from '../assets/logo6.png'
import Image from 'next/image'

const colorHover = '#40c6ff'
const useStyles = makeStyles({
  listLogo: {
    display: 'flex',
    '@media (max-width: 768px)': {
      display: 'block',
      with: '100%',
    },
  },
  logoGroup: {
    display: 'flex',
    marginLeft: '-9px',
    '@media (max-width: 350px)': {
      display: 'block',
      with: '100%',
    },
  },
  imgLogo: {
    width: '100%',
    display: 'block',
    border: '1px solid #efefef',
    marginLeft: '15px',
    marginRight: '15px',
    marginBottom: '30px',
  },
  titleHome: {
    textAlign: 'center',
    fontFamily: 'Merriweather,sans-serif',
    color: '#444444',
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '30px 0px 25px 0px',
    '& span': {
      position: 'relative',
      display: 'inline-block',
      '&::after': {
        position: 'absolute',
        content: '""',
        width: '15px',
        height: '1px',
        left: '-30px',
        top: '18px',
        backgroundColor: `${colorHover}`,
      },
      '&::before': {
        position: 'absolute',
        content: '""',
        width: '15px',
        height: '1px',
        right: '-30px',
        top: '18px',
        backgroundColor: `${colorHover}`,
      },
    },
  },
})

const Logo = () => {
  const classes = useStyles()
  return (
    <>
      <Container>
        <Box>
          <Typography className={classes.titleHome}>
            <span>OUTLET BRAND STUFF</span>
          </Typography>
        </Box>
        <Grid>
          <Box className={classes.listLogo}>
            <Box className={classes.logoGroup}>
              <Box className={classes.imgLogo}>
                <Image
                  width={150}
                  height={150}
                  src={Logo1.src}
                  alt="List-Logo"
                />
              </Box>
              <Box className={classes.imgLogo}>
                <Image
                  width={150}
                  height={150}
                  src={Logo2.src}
                  alt="List-Logo"
                />
              </Box>
            </Box>
            <Box className={classes.logoGroup}>
              <Box className={classes.imgLogo}>
                <Image
                  width={150}
                  height={150}
                  src={Logo3.src}
                  alt="List-Logo"
                />
              </Box>
              <Box className={classes.imgLogo}>
                <Image
                  width={150}
                  height={150}
                  src={Logo4.src}
                  alt="List-Logo"
                />
              </Box>
            </Box>
            <Box className={classes.logoGroup}>
              <Box className={classes.imgLogo}>
                <Image
                  width={150}
                  height={150}
                  src={Logo5.src}
                  alt="List-Logo"
                />
              </Box>
              <Box className={classes.imgLogo}>
                <Image
                  width={150}
                  height={150}
                  src={Logo6.src}
                  alt="List-Logo"
                />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Container>
    </>
  )
}
export default Logo
