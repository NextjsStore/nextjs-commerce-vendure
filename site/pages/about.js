import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import PublicIcon from '@mui/icons-material/Public'
import Banner from '../assets/banner_page.png'
import AboutTeam from '../assets/aboutpng.png'
import AboutTeam_1 from '../assets/aboutteam01.png'
import AboutTeam_2 from '../assets/aboutteam02.png'
import AboutTeam_3 from '../assets/aboutteam03.png'

const useStyles = makeStyles({
  pageAbout: {
    marginBottom: '60px',
    minHeight: '200px',
    backgroundImage: `url(${Banner.src})`,
    backgroundSize: 'cover',
  },

  titlePageAbout: {
    display: 'flex',
    paddingTop: '75px',
    paddingBottom: '75px',
    '@media (max-width: 1200px)': {
      display: 'inline-block',
    },
  },

  rightTextPageAbout: {
    float: 'right',
    paddingTop: '12px',
    '@media (max-width: 768px)': {
      float: 'inherit',
    },
  },
  services: {
    display: 'flex',
    margin: '40px',
    '@media (max-width: 767px)': {
      display: 'block',
      textAlign: '-webkit-center',
    },
  },
  avartar: {
    height: 'auto',
    maxWidth: '100%',
    display: 'block',
  },
  profileItem: {
    position: 'relative',
    textAlign: 'center',
    margin: '15px',
    '&:hover content': {
      top: 0,
      visibility: 'visible',
      opacity: 1,
    },
  },
  author: {
    position: 'relative',
    textAlign: 'center',
    margin: ' 0 0px 140px 0px',
  },
  msTeamInfo: {
    position: 'absolute',
    padding: '15px 0',
    zIndex: 11,
    width: '90%',
    bottom: '-50px',
    left: '50%',
    transform: 'translateX(-50%)',
    background: 'rgb(64,198,255)',
  },
  name: {
    fontSize: '16px',
    lineHeight: '24px',
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    margin: '0 0 2px 0',
  },
  job: {
    fontSize: '14px',
    lineHeight: '24px',
    color: '#fff',
    margin: 0,
  },
  content: {
    position: 'absolute',
    zIndex: '10',
    maxWidth: '100%',
    height: '100%',
    top: '-80px',
    left: 0,
    padding: '20px',
    textAlign: 'left',
    background: 'rgba(41, 53, 68, 0.9)',
    visibility: 'hidden',
    opacity: 0,
    transition: 'all .7s',
    borderRadius: '3px',
    fontZize: '14px',
    lineHeight: '24px',
    color: '#999',
  },
  profileOutTeam: {
    display: 'flex',
    '@media (max-width: 768px)': {
      display: 'block',
    },
    '@media (max-width: 600px)': {
      display: 'block',
    },
  },
  profile_item: {
    display: 'contents',
    '@media (max-width: 768px)': {
      display: 'flex',
    },
    '@media (max-width: 600px)': {
      display: 'block',
    },
  },
  aboutIcon: {
    border: '1px solid #fff',
    borderRadius: '40px',
    color: '#fff',
    fontSize: '80px',
    padding: '15px',
    margin: '10px',
    background: '#40c6ff',
  },
  textTile: {
    color: 'white',
    fontFamily: 'Merriweather',
    fontSize: '50px',
    fontWeight: 700,
  },
  titleText: {
    color: 'white',
    fontFamily: 'Muli',
    fontWeight: 400,
    fontSize: '14px',
  },
  textAbout_main: {
    textAlign: 'center',
    fontWeight: '700',
    lineHeight: '32px',
    fontSize: '36px',
    color: '#293544',
    fontFamily: 'Merriweather',
  },
})

export default function About() {
  const classes = useStyles()
  return (
    <>
      <Box className={classes.pageAbout}>
        <Container>
          <Box className={classes.titlePageAbout}>
            <Grid item lg={6}>
              <Box>
                <Typography
                  className={classes.textTile}
                  component="h3"
                  variant="h3"
                >
                  About
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={6}>
              <Box className={classes.rightTextPageAbout}>
                <Breadcrumbs sx={{ color: 'white' }} aria-label="breadcrumb">
                  <Typography
                    className={classes.titleText}
                    component="h6"
                    variant="h6"
                  >
                    Home
                  </Typography>
                  <Typography
                    className={classes.titleText}
                    component="h6"
                    variant="h6"
                  >
                    About
                  </Typography>
                </Breadcrumbs>
              </Box>
            </Grid>
          </Box>
        </Container>
      </Box>
      <Container>
        <Box>
          <Typography
            className={classes.textAbout_main}
            component="h4"
            variant="h4"
          >
            Get to know Multistore
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              padding: '0 20%',
              marginTop: '20px',
              color: '#676c77',
            }}
          >
            Multistore vision is to create Indias most reliable and frictionless
            commerce ecosystem that creates life-changing experiences for buyers
            and sellers.
          </Typography>
        </Box>
        <Box
          className={classes.services}
          sx={{ display: 'flex', margin: '40px' }}
        >
          <Grid item xs={4} lg={4} sx={{ textAlign: 'center' }}>
            <Inventory2OutlinedIcon className={classes.aboutIcon} />
            <Typography sx={{ fontWeight: '700' }} component="h5" variant="h5">
              35 Million+
            </Typography>
            <Typography sx={{ fontWeight: '700', color: '#676c77' }}>
              Products
            </Typography>
          </Grid>
          <Grid item xs={4} lg={4} sx={{ textAlign: 'center' }}>
            <ShoppingCartIcon className={classes.aboutIcon} />
            <Typography sx={{ fontWeight: '700' }} component="h5" variant="h5">
              250,000
            </Typography>
            <Typography sx={{ fontWeight: '700', color: '#676c77' }}>
              Sellers
            </Typography>
          </Grid>
          <Grid item xs={4} lg={4} sx={{ textAlign: 'center' }}>
            <PublicIcon className={classes.aboutIcon} />
            <Typography sx={{ fontWeight: '700' }} component="h5" variant="h5">
              6000+
            </Typography>
            <Typography sx={{ fontWeight: '700', color: '#676c77' }}>
              Cities
            </Typography>
          </Grid>
        </Box>
        <Box sx={{ textAlign: 'center', margin: '40px' }}>
          <Typography
            sx={{
              margin: '10px',
              color: '#676c77',
            }}
          >
            In February 2010, Kunal Bahl along with Rohit Bansal, started
            Multistore.com Indias largest online marketplace, with the widest
            assortment of 30 million plus products across 800 plus Boxerse
            categories from over 125,000 regional, national, and international
            brands and retailers.
          </Typography>
          <Typography
            sx={{
              margin: '10px',
              color: '#676c77',
            }}
          >
            With millions of users and more than 300,000 sellers, Multistore is
            the shopping destination for Internet users across the country,
            delivering to 6000+ cities and towns in India.
          </Typography>
          <Typography
            sx={{
              margin: '10px',
              color: '#676c77',
            }}
          >
            In its journey till now, Multistore has partnered with several
            global marquee investors and inBoxiduals such as SoftBank,
            BlackRock, Temasek, Foxconn, Alibaba, eBay Inc., Premji Invest,
            Intel Capital, Bessemer Venture Partners, Mr. Ratan Tata, among
            others.
          </Typography>
        </Box>
        <Box sx={{ textAlign: 'center', marginTop: '80px' }}>
          <Typography
            className={classes.textAbout_main}
            component="h4"
            variant="h4"
          >
            Our Team
          </Typography>
          <Typography
            sx={{
              padding: '0 20%',
              marginTop: '20px',
              color: '#676c77',
            }}
          >
            Each member of our team is a specialist in his or her field.
            Together, we make sure youre investing where the best returns are,
            while building loyalty across every touchpoint.
          </Typography>
        </Box>
        <Grid
          className={classes.profileOutTeam}
          columns={{ xs: 4, sm: 6, md: 4, lg: 3 }}
        >
          <Box className={classes.profile_item}>
            <Grid item lg={1}>
              <Box className={classes.profileItem}>
                <Grid className={classes.author}>
                  <Box className={classes.logo}>
                    <img
                      className={classes.avartar}
                      src={AboutTeam.src}
                      alt="Philip Demarco"
                    />
                  </Box>
                  <Grid className={classes.msTeamInfo}>
                    <h3 className={classes.name}>Philip Demarco</h3>
                    <p className={classes.job}>Business Analyst</p>
                  </Grid>
                </Grid>
                <Box className={classes.content}>
                  <Typography>
                    By testing and launching new partners and internal tech
                    solutions, he increases both efficiency and performance
                  </Typography>
                  <Grid className={classes.ourteamSocialShare}>
                    <a href="https://facebook.com/">
                      <i className="fa fa-facebook"></i>{' '}
                    </a>
                    <a href="https://twitter.com/">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="https://google.com/">
                      <i className="fa fa-google"></i>{' '}
                    </a>
                  </Grid>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={1}>
              <Box className={classes.profileItem}>
                <Grid className={classes.author}>
                  <Box className={classes.logo}>
                    <img
                      className={classes.avartar}
                      src={AboutTeam_1.src}
                      alt="Philip Demarco"
                    />
                  </Box>
                  <Grid className={classes.msTeamInfo}>
                    <h3 className={classes.name}>Philip Demarco</h3>
                    <p className={classes.job}>Business Analyst</p>
                  </Grid>
                </Grid>
                <Box className={classes.content}>
                  <Typography>
                    By testing and launching new partners and internal tech
                    solutions, he increases both efficiency and performance
                  </Typography>
                  <Grid className={classes.ourteamSocialShare}>
                    <a href="https://facebook.com/">
                      <i className="fa fa-facebook"></i>{' '}
                    </a>
                    <a href="https://twitter.com/">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="https://google.com/">
                      <i className="fa fa-google"></i>{' '}
                    </a>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Box>
          <Box className={classes.profile_item}>
            <Grid item lg={1}>
              <Box className={classes.profileItem}>
                <Grid className={classes.author}>
                  <Box className={classes.logo}>
                    <img
                      className={classes.avartar}
                      src={AboutTeam_2.src}
                      alt="Philip Demarco"
                    />
                  </Box>
                  <Grid className={classes.msTeamInfo}>
                    <h3 className={classes.name}>Philip Demarco</h3>
                    <p className={classes.job}>Business Analyst</p>
                  </Grid>
                </Grid>
                <Box className={classes.content}>
                  <Typography>
                    By testing and launching new partners and internal tech
                    solutions, he increases both efficiency and performance
                  </Typography>
                  <Grid className={classes.ourteamSocialShare}>
                    <a href="https://facebook.com/">
                      <i className="fa fa-facebook"></i>{' '}
                    </a>
                    <a href="https://twitter.com/">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="https://google.com/">
                      <i className="fa fa-google"></i>{' '}
                    </a>
                  </Grid>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={1}>
              <Box className={classes.profileItem}>
                <Grid className={classes.author}>
                  <Box className={classes.logo}>
                    <img
                      className={classes.avartar}
                      src={AboutTeam_3.src}
                      alt="Philip Demarco"
                    />
                  </Box>
                  <Grid className={classes.msTeamInfo}>
                    <h3 className={classes.name}>Philip Demarco</h3>
                    <p className={classes.job}>Business Analyst</p>
                  </Grid>
                </Grid>
                <Box className={classes.content}>
                  <Typography>
                    By testing and launching new partners and internal tech
                    solutions, he increases both efficiency and performance
                  </Typography>
                  <Grid className={classes.ourteamSocialShare}>
                    <a href="https://facebook.com/">
                      <i className="fa fa-facebook"></i>{' '}
                    </a>
                    <a href="https://twitter.com/">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="https://google.com/">
                      <i className="fa fa-google"></i>{' '}
                    </a>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Container>
    </>
  )
}
