import React, { Component, useState } from 'react'
import Link from 'next/link'
import { Rating } from './ui'
import { Box, Image } from '@chakra-ui/react'


const Collection = (props) => {
  const { product } = props
  return (
    <Box align="center" m="3" p="3" border="1px solid #efefef">
      <Box>
        <Link href={`/product/${product.product?.slug}`}>
          <a>
            <Image src={product.product.assets[0].source} alt="" w="100%" />
          </a>
        </Link>
        <Box item w="80%" pl="5">
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
    </Box>
  )
}
export default Collection
