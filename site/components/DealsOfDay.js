import React from 'react'

import CountDown from './Countdown'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Image_1 from '../assets/deals_of_day_1.jpg'
import Image_2 from '../assets/deals_of_day_2.jpg'
import { Container } from '@mui/material'
import { makeStyles } from '@material-ui/core/styles'
import Link from 'next/link'

const colorHover = '#40c6ff'
const useStyles = makeStyles({
  dealsOfDay: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '50px',
  },
  circle: {
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#40c6ff',
    position: 'absolute',
    top: 16,
    left: 16,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 125,
    height: 40,
    borderRadius: 20,
    border: '2px solid rgb(64,198,255)',
    color: 'rgb(64,198,255)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    cursor: 'pointer',
    '&:hover': {
      background: 'rgb(64,198,255)',
      color: '#ffff',
      transition: 'all 0.25s',
    },
  },
  layoutDealsDay: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '95%',
    flexWrap: 'wrap',
    '@media (max-width: 768px)': {
      display: 'flex',
    },
  },
  layoutIteam: {
    display: 'flex',
    alignItems: 'center',
    width: '45%',
    '@media (max-width: 600px)': {
      display: 'block',
      width: '100%',
      marginBottom: '30px',
    },
    '@media (max-width: 768px)': {
      display: 'flex',
    },
    '@media (max-width: 1100px)': {
      display: 'block',
    },
  },
  buttonLink: {
    textDecoration: 'none',
    '&:hover': {
      color: '#fff',
      transition: 'all 0.25s',
    },
  },
  nameProSales: {
    fontFamily: 'Mulish,sans-serif',
    fontSize: '19px',
    fontWeight: 'bold',
    color: '#444',
    marginBottom: '10px',
  },
  titleHome: {
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
const DealsOfDay = () => {
  const classes = useStyles()
  return (
    <Container>
      <Grid className={classes.dealsOfDay}>
        <Box
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography className={classes.titleHome}>
            <span>DEALS OF DAY</span>
          </Typography>
        </Box>
        <Box className={classes.layoutDealsDay}>
          <Box className={classes.layoutIteam}>
            <Box
              style={{
                position: 'relative',
                textAlign: 'center',
                color: 'white',
                border: '1px solid #f1f1f1',
              }}
            >
              <img
                src={Image_1.src}
                style={{
                  width: 264,
                }}
                alt="Image-DealsOfDay"
              />
              <Box className={classes.circle}>
                <Typography style={{ fontSize: 14 }}>-22%</Typography>
              </Box>
            </Box>
            <Typography style={{ marginLeft: 30 }}>
              <Link
                href="/product/softcover-trade-book"
                className={classes.buttonLink}
              >
                <a>
                  <Typography className={classes.nameProSales}>
                    Softcover Trade Book
                  </Typography>
                </a>
              </Link>
              <Typography
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  display: 'flex',
                }}
              >
                <Typography
                  style={{
                    color: '#999',
                    margin: '0px 20px 0px 0px',
                    textDecoration: 'line-through',
                  }}
                >
                  $5700
                </Typography>
                <Typography style={{ color: 'rgb(64,198,255)', margin: 0 }}>
                  $2600
                </Typography>
              </Typography>
              <Typography
                style={{ color: '#666', margin: '18px 8px 27px 0px' }}
              >
                Black finish thin profile metal pole and base. White polyresin
                torchiere shade.
              </Typography>
              <CountDown />
              <Box className={classes.button}>
                <Link
                  href="/product/softcover-trade-book"
                  className={classes.buttonLink}
                  passHref
                >
                  <Typography sx={{ fontSize: '14px', fontWeight: '600' }}>
                    SHOP NOW
                  </Typography>
                </Link>
              </Box>
            </Typography>
          </Box>
          <Box className={classes.layoutIteam}>
            <Box
              style={{
                position: 'relative',
                textAlign: 'center',
                border: '1px solid #f1f1f1',
                color: '#fff',
              }}
            >
              <img
                src={Image_2.src}
                style={{
                  width: 264,
                }}
                alt="ImageProduct2"
              />
              <Box className={classes.circle}>
                <Typography style={{ fontSize: 14 }}>-39%</Typography>
              </Box>
            </Box>
            <Box style={{ marginLeft: 30 }}>
              <Link href="/product/agency-books" className={classes.buttonLink}>
                <a>
                  <Typography className={classes.nameProSales}>
                    Agency Books
                  </Typography>
                </a>
              </Link>
              <Typography
                style={{ fontSize: 20, fontWeight: 'bold', display: 'flex' }}
              >
                <Typography
                  style={{
                    color: '#999',
                    margin: '0px 20px 0px 0px',
                    textDecoration: 'line-through',
                  }}
                >
                  $10000
                </Typography>
                <Typography style={{ color: 'rgb(64,198,255)', margin: 0 }}>
                  $7800
                </Typography>
              </Typography>
              <Typography
                style={{ color: '#666', margin: '18px 8px 27px 0px' }}
              >
                Caramel Ice Cream with a Swirl of Caramel & Fudge Covered
                Caramel Chunks. Caramel lovers wont want to...
              </Typography>
              <CountDown />
              <Box className={classes.button}>
                <Link
                  href="/product/agency-books"
                  className={classes.buttonLink}
                  passHref
                >
                  <Typography sx={{ fontSize: '14px', fontWeight: '600' }}>
                    SHOP NOW
                  </Typography>
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Container>
  )
}
export default DealsOfDay
