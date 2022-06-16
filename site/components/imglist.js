import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@mui/material/Box'
import Image1 from '../assets/seller_1.png'
import Image2 from '../assets/seller_2.png'
import Image3 from '../assets/seller_3.png'
import Image4 from '../assets/seller_4.png'
import Image5 from '../assets/seller_5.png'
import Image6 from '../assets/seller_6.png'
import Image7 from '../assets/seller_7.png'
import Image8 from '../assets/seller_8.png'
import Image9 from '../assets/seller_9.png'
import Link from 'next/link'
import Image from 'next/image'

const useStyles = makeStyles({
  wrapperImage: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '50px',

    '@media (max-width: 768px)': {
      display: 'block',
      alignItems: 'inherit',
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
    display: 'flex',
    paddingRight: '15px',
    paddingLeft: '15px',
    '@media (max-width: 768px)': {
      paddingRight: '0px',
      marginBottom: '30px',
      paddingLeft: '0px',
    },
    '@media (max-width: 600px)': {
      paddingLeft: '0px',
      display: 'block',
    },
  },
  box_2Image1: {
    paddingRight: '15px',
    marginBottom: '30px',
    '@media (max-width: 768px)': {
      paddingRight: '0px',
      marginBottom: '30px',
    },
  },
  box_2Image2: {
    paddingRight: '30px',
    '@media (max-width: 600px)': {
      paddingRight: '0px',
      marginBottom: '30px',
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

const ListImgSeller = () => {
  const classes = useStyles()
  return (
    <>
      <Box className={classes.wrapperImage}>
        <Box className={classes.box_1Image}>
          <Box>
            <Link href="/shop">
              <a>
                <Image
                  width={453}
                  height={524}
                  src={Image1.src}
                  alt="List-Product-Seller"
                />
              </a>
            </Link>
          </Box>
        </Box>
        <Box className={classes.rowImage}>
          <Box>
            <Box className={classes.box_2Image}>
              <Box className={classes.box_2Image1}>
                <Link href="/product/pro-card-visit-a1">
                  <a>
                    <Image
                      width={467}
                      height={255}
                      src={Image2.src}
                      className={classes.Image}
                      alt="List-Product-Seller"
                    />
                  </a>
                </Link>
              </Box>
              <Box>
                <Link href="/product/agency-books">
                  <a>
                    <Image
                      width={310}
                      height={262}
                      src={Image3.src}
                      className={classes.Image}
                      alt="List-Product-Seller"
                    />
                  </a>
                </Link>
              </Box>
            </Box>
            <Box className={classes.box_2Image}>
              <Box className={classes.box_2Image2}>
                <Link href="/product/travel-agency-flyer">
                  <a>
                    <Image
                      width={292}
                      height={247}
                      src={Image6.src}
                      className={classes.Image}
                      alt="List-Product-Seller"
                    />
                  </a>
                </Link>
              </Box>
              <Box>
                <Link href="/product/business-card-with-print-option/">
                  <a>
                    <Image
                      width={450}
                      height={245}
                      src={Image7.src}
                      className={classes.Image}
                      alt="List-Product-Seller"
                    />
                  </a>
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className={classes.rowImage}>
          <Box className={classes.box_3Image}>
            <Box className={classes.box_Image}>
              <Link href="  /product/poster-with-print-option">
                <a>
                  <Image
                    width={292}
                    height={247}
                    src={Image5.src}
                    className={classes.Image}
                    alt="List-Product-Seller"
                  />
                </a>
              </Link>
            </Box>
            <Box>
              <Link href=" /product/poster-with-print-option">
                <a>
                  <Image
                    width={292}
                    height={247}
                    src={Image4.src}
                    className={classes.Image}
                    alt="List-Product-Seller"
                  />
                </a>
              </Link>
            </Box>
          </Box>
          <Box className={classes.box_4Image}>
            <Box className={classes.box_Image}>
              <Link href=" /product/color-with-print-option">
                <a>
                  <Image
                    width={292}
                    height={247}
                    src={Image8.src}
                    className={classes.Image}
                    alt="List-Product-Seller"
                  />
                </a>
              </Link>
            </Box>
            <Box>
              <Link href="/product/dot-luck">
                <a>
                  <Image
                    width={292}
                    height={247}
                    src={Image9.src}
                    className={classes.Image}
                    alt="List-Product-Seller"
                  />
                </a>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}
export default ListImgSeller
