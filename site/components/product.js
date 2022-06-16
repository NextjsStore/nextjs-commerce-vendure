import React, { Component, useState } from 'react'
import Grid from '@mui/material/Grid'
import Link from 'next/link'
import Rating from '@mui/material/Rating'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@mui/system'
import Image from 'next/image'

const colorHover = '#40c6ff'
const useStyles = makeStyles((theme) => ({
  itemProduct: {
    marginBottom: 20,
  },
  cardButton: {
    paddingBottom: 15,
  },
  cardBody: {
    textAlign: 'center',
    '& h3': {
      fontSize: '19px',
      fontWeight: 'bold',
      color: '#444',
      marginTop: '12px',
      marginBottom: '10px',
      fontFamily: 'Mulish,sans-serif',
    },
    '& h4': {
      marginTop: '6px',
      marginBottom: '0px',
    },
  },
  cardTitle: {
    '&:hover': {
      color: `${colorHover}`,
    },
  },
  startRating: {
    '& span': {
      color: '#ffcc35',
      fontSize: '18px',
    },
  },
  cardPrice: {
    color: `${colorHover}`,
    fontSize: '22px',
    fontWeight: '500',
    fontFamily: 'Mulish,sans-serif',
  },
  regular_price: {
    textDecoration: 'line-through',
    marginRight: '15px',
    color: '#999',
    fontWeight: '400',
  },
  box_product: {
    border: '1px solid #efefef',
    padding: '15px 15px 22px 15px',
    textAlign: 'center',
    transition: '0.35s',
    '&:hover': {
      boxShadow: '0 10px 6px -6px #ccc',
    },
  },
}))

const Product = (props) => {
  const classes = useStyles()
  const { product } = props
  //console.warn(product);
  return (
    <>
      <Grid item lg={1} md={1} sm={1}>
        <Box className={classes.box_product}>
          <Link href={`/product/${product?.slug}`}>
            <a>
              <Image
                width={238}
                height={238}
                layout="fixed"
                className={classes.productImg}
                src={product.images[0].url}
                alt=""
              />
            </a>
          </Link>

          <Box className={classes.cardBody}>
            <h3>
              <Link href={`/product/${product?.slug}`}>
                <a>{product?.name}</a>
              </Link>
            </h3>
            <Box className={classes.startRating}>
              <Rating name="read-only" value="0" readOnly />
            </Box>
            <h4 className={classes.cardPrice}>${product.price.value}</h4>
            <Box className={classes.cardButton}></Box>
          </Box>
        </Box>
      </Grid>
    </>
  )
}
export default Product
