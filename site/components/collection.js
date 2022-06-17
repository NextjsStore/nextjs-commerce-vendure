import React from 'react'
import Link from 'next/link'

import { Box, Rating, Grid } from '@chakra-ui/react'

const Collection = (props) => {
  const { product } = props
  return (
    <>
      <Grid item lg={1} md={1} sm={1}>
        <Box>
          <Link href={`/product/${product.product?.slug}`}>
            <a>
              <img src={product.product.assets[0].source} alt="" />
            </a>
          </Link>

          <Box>
            <h3>
              <Link href={`/product/${product.product?.slug}`}>
                <a>{product.product.name}</a>
              </Link>
            </h3>
            <Box>
              <Rating name="read-only" value="0" readOnly />
            </Box>
            <h4>${product.product.variants[0].price / 100}</h4>
            <Box></Box>
          </Box>
        </Box>
      </Grid>
    </>
  )
}
export default Collection
