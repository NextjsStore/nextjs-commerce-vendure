import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@mui/material/Box'
import Image1 from '../assets/image_1.png'
import Image2 from '../assets/image_2.png'
import Image3 from '../assets/image_3.png'
import Image4 from '../assets/image_4.png'
import Image5 from '../assets/image_5.png'
import Image6 from '../assets/image_6.png'
import Image7 from '../assets/image_7.png'
import Link from 'next/link'

const useStyles = makeStyles({
  wrapperImage: {
    display: 'flex',
    marginTop: '50px',

    '@media (max-width: 768px)': {
      display: 'block',
    },
  },
  rowImage: {
    display: 'flex',
    marginBottom: '20px',
    '@media (max-width: 600px)': {
      display: 'block',
      marginBottom: '30px',
    },
  },
  box_1Image: {
    boxSizing: 'border-box',
    paddingRight: '15px',
    '@media (max-width: 768px)': {
      paddingRight: '0px',
      marginBottom: '30px',
    },
  },
  box_Image: {
    marginBottom: '30px',
  },
  box_2Image: {
    paddingRight: '15px',
    paddingLeft: '15px',
    '@media (max-width: 768px)': {
      paddingRight: '0px',
      marginBottom: '30px',
    },
    '@media (max-width: 600px)': {
      paddingLeft: '0px',
    },
  },
  box_3Image: {
    paddingRight: '15px',
    paddingLeft: '15px',
    '@media (max-width: 768px)': {
      width: '100%',
      paddingLeft: '0px',
      marginBottom: '30px',
    },
    '@media (max-width: 600px)': {
      paddingRight: '0px',
    },
  },
  box_4Image: {
    paddingLeft: '15px',
    '@media (max-width: 768px)': {
      width: '100%',
    },
    '@media (max-width: 600px)': {
      paddingLeft: '0px',
    },
  },
  Image: {
    width: '100%',
    transition: 'all .5s',
    '@media (max-width: 768px)': {
      width: '100%',
    },
  },
})

const ListImages = () => {
  const classes = useStyles()
  return (
    <>
      <Box className={classes.wrapperImage}>
        <Box className={classes.rowImage}>
          <Box className={classes.box_1Image}>
            <Box className={classes.box_Image}>
              <Link href="/product/clean-business-card">
                <a>
                  <img src={Image1.src} className={classes.Image} />
                </a>
              </Link>
            </Box>
            <Box>
              <Link href="/product/softcover-trade-book">
                <a>
                  <img src={Image2.src} className={classes.Image} />
                </a>
              </Link>
            </Box>
          </Box>
          <Box className={classes.box_2Image}>
            <Box>
              <Link href=" /shop">
                <a>
                  <img src={Image3.src} className={classes.Image} />
                </a>
              </Link>
            </Box>
          </Box>
        </Box>

        <Box className={classes.rowImage}>
          <Box className={classes.box_3Image}>
            <Box className={classes.box_Image}>
              <Link href="/product/dot-luck">
                <a>
                  <img src={Image4.src} className={classes.Image} />
                </a>
              </Link>
            </Box>
            <Box>
              <Link href="/product/sharp-contrast">
                <a>
                  <img src={Image5.src} className={classes.Image} />
                </a>
              </Link>
            </Box>
          </Box>
          <Box className={classes.box_4Image}>
            <Box className={classes.box_Image}>
              <Link href="/product/web2print">
                <a>
                  <img src={Image6.src} className={classes.Image} />
                </a>
              </Link>
            </Box>
            <Box>
              <Link href="/product/tiny-square-card">
                <a>
                  <img src={Image7.src} className={classes.Image} />
                </a>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}
export default ListImages
