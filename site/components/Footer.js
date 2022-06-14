import React from 'react'
import { Container, Box, Grid } from '@mui/material'
import Link from 'next/link'

// add font
import HomeIcon from '@mui/icons-material/Home'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import MailIcon from '@mui/icons-material/Mail'
import PublicIcon from '@mui/icons-material/Public'
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp'
import TwitterIcon from '@mui/icons-material/Twitter'
import GoogleIcon from '@mui/icons-material/Google'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import FavoriteIcon from '@mui/icons-material/Favorite'
import imgWorking from '../assets/imgWorking.jpg'

// makestyle
import { makeStyles } from '@material-ui/core/styles'

const colorHeading = '#323232'
const colorHover = '#40c6ff'
const colorDefaul = '#666'

// import images

const useStyle_footer = makeStyles({
  box_f: {
    '@media (max-width: 899px)': {
      marginBottom: '25px',
      Clear: 'both',
      overflow: 'hidden',
    },
  },
  footer_main: {
    backgroundColor: '#fff',
    paddingTop: '45px',
    paddingBottom: '8px',
  },
  title_f: {
    fontSize: '16px',
    fontWeight: 'bold',
    margin: '10px 0px 14px 0px',
    borderBottom: 'none',
    paddingBottom: '0px',
    fontFamily: 'Merriweather',
    color: `${colorHeading}`,
  },
  address_f: {
    listStyle: 'none',
    padding: '0px',
    margin: '0px 0px 15px 0px',
    '& li': {
      padding: '8px 0px',
      marginBottom: '3px',
      borderBottom: 'none',
      color: `${colorDefaul}`,
      '&:first-child': {
        paddingRight: '30px',
      },
      '& svg': {
        fontSize: '16px',
        color: `${colorDefaul}`,
        marginRight: '15px',
      },
      '& a': {
        color: `${colorDefaul}`,
        '&:hover': {
          color: `${colorHover}`,
        },
      },
    },
  },
  social_f: {
    listStyle: 'none',
    padding: '0px',
    margin: '0px',
    float: 'left',
    '& li': {
      display: 'inline-flex',
      padding: '0px',
      margin: '0px',
      '& a': {
        width: 40,
        height: 40,
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '15px',
        borderRadius: '50%',
        transition: '0.35s',
        border: '1px solid #666',
        '& svg': {
          fontSize: ' 16px',
          color: `${colorDefaul}`,
        },
        '&:hover': {
          borderColor: `${colorHover}`,
          backgroundColor: `${colorHover}`,
          '& svg': {
            color: '#fff',
          },
        },
      },
    },
  },
  menu_footer: {
    listStyle: 'none',
    padding: '0px',
    margin: '0px',
    '& li': {
      display: 'flex',
      alignItems: 'center',
      lineHeight: '30px',
      '& svg': {
        fontSize: '8px',
        marginRight: '15px',
        color: `${colorDefaul}`,
      },
      '& a': {
        color: `${colorDefaul}`,
        fontSize: '16px',
        '&:hover': {
          color: `${colorHover}`,
        },
      },
    },
  },
  descWorking: {
    color: `${colorDefaul}`,
    fontSize: '16px',
    '& span': {
      display: 'block',
      lineHeight: '30px',
    },
  },
  boxWorking: {
    backgroundImage: `url(${imgWorking.src})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    minHeight: '160px',
    width: ' 100%',
    borderRadius: '10px',
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    color: '#fff',
    fontSize: '16px',
    '& svg': {
      color: '#fe7fa9',
      marginTop: '10px',
    },
  },
})
const Footer = () => {
  const classes = useStyle_footer()
  return (
    <div className={classes.footer_main}>
      <React.Fragment>
        <Container maxWidth="lg">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container>
              <Grid item xs={12} sm={6} md={3}>
                <div className={classes.box_f}>
                  <p className={classes.title_f}>Contact us</p>
                  <ul className={classes.address_f}>
                    <li>
                      <HomeIcon />
                      PO Box CT16122 Collins Street West, Victoria 8007,
                      Australia.
                    </li>
                    <li>
                      <LocalPhoneIcon />
                      +1 (2) 345 6789
                    </li>
                    <li>
                      <MailIcon />
                      <Link href="#">
                        <a>contact@yourdomain.com</a>
                      </Link>
                    </li>
                    <li>
                      <PublicIcon />
                      <Link href="#">
                        <a>http://yourdomain.com</a>
                      </Link>
                    </li>
                  </ul>
                  <ul className={classes.social_f}>
                    <li>
                      <Link href="facebook.com/">
                        <a>
                          <FacebookSharpIcon />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>
                          <TwitterIcon />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>
                          <LinkedInIcon />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>
                          <GoogleIcon />
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <div className={classes.box_f}>
                  <p className={classes.title_f}>Information</p>
                  <ul className={classes.menu_footer}>
                    <li>
                      <FiberManualRecordIcon />
                      <Link href="#">
                        <a>New Product</a>
                      </Link>
                    </li>
                    <li>
                      <FiberManualRecordIcon />
                      <Link href="#">
                        <a>Best Seller</a>
                      </Link>
                    </li>
                    <li>
                      <FiberManualRecordIcon />
                      <Link href="#">
                        <a>Feature Product</a>
                      </Link>
                    </li>
                    <li>
                      <FiberManualRecordIcon />
                      <Link href="#">
                        <a>Deal off day</a>
                      </Link>
                    </li>
                    <li>
                      <FiberManualRecordIcon />
                      <Link href="#">
                        <a>Handcrafted, Artisan Jewelry</a>
                      </Link>
                    </li>
                    <li>
                      <FiberManualRecordIcon />
                      <Link href="#">
                        <a>Jewelry Boxes & Organizers</a>
                      </Link>
                    </li>
                    <li>
                      <FiberManualRecordIcon />
                      <Link href="#">
                        <a>Jewelry Design & Repair</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <div className={classes.box_f}>
                  <p className={classes.title_f}>My account</p>
                  <ul className={classes.menu_footer}>
                    <li>
                      <FiberManualRecordIcon />
                      <Link href="/myaccount">
                        <a>My account</a>
                      </Link>
                    </li>
                    <li>
                      <FiberManualRecordIcon />
                      <Link href="/orders">
                        <a>Order History</a>
                      </Link>
                    </li>
                    <li>
                      <FiberManualRecordIcon />
                      <Link href="#">
                        <a>Other</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <div className={classes.box_f}>
                  <p className={classes.title_f}>Working Time</p>
                  <div className={classes.descWorking}>
                    <span>Mon to Fri:8:30 am - 6:00 pm</span>
                    <span>Sat and Sun:10:00 am – 5:00 pm</span>
                  </div>
                  <div className={classes.boxWorking}>
                    <FavoriteIcon />
                    <span>Time In Works</span>
                    <span>8:30 am - 6:00 pm</span>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </React.Fragment>
    </div>
  )
}
export default Footer
