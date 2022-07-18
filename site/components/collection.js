import React, { Component, useState } from 'react'
import Link from 'next/link'
import { BsFillStarFill } from 'react-icons/bs'
import { Box, Image, Text } from '@chakra-ui/react'

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
          <Text color="brand.title" fontSize="18px" pt="4" fontWeight="700">
            <Link href={`/product/${product.product?.slug}`}>
              <a>{product.product.name}</a>
            </Link>
          </Text>
          {product.rating && (
            <Box mb="10" alignItems="center">
              {Array(5)
                .fill('')
                .map((_, i) => (
                  <BsFillStarFill
                    key={i}
                    color={i < product.rating ? '#81E6D9' : 'gray.200'}
                  />
                ))}
            </Box>
          )}
          <Text mt={2} fontSize="xl" align="center" color="brand.primary">
            ${product.product.variants[0].price / 100}
          </Text>
          <Box></Box>
        </Box>
      </Box>
    </Box>
  )
}
export default Collection
