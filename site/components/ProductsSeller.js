import React, { Component, useState } from 'react'
import Link from 'next/link'
import { StarIcon } from '@chakra-ui/icons'
import { Container, Box, Image, Heading } from '@chakra-ui/react'

const ProdutcsSeller = (props) => {
  const { product } = props

  return (
    <Container h="100%" w="24%" border="1px solid #efefef" m="5" pb="10">
      <Box maxW="100%" p="4">
        <Box align="center">
          <Link href={`/product/${product?.slug}`}>
            <a>
              <Image src={product.assets[0].source} alt="" w="100%" />
            </a>
          </Link>

          <Box>
            <Heading
              as="h3"
              size="2xl"
              noOfLines={1}
              align="center"
              color="#323232"
            >
              <Link href={`/product/${product?.slug}`}>
                <a>{product.name}</a>
              </Link>
            </Heading>
            {product.rating && (
              <Box mb="10" alignItems="center">
                {Array(5)
                  .fill('')
                  .map((_, i) => (
                    <StarIcon
                      key={i}
                      color={i < product.rating ? '#81E6D9' : 'gray.200'}
                    />
                  ))}
              </Box>
            )}
            <h4>${product.variants[0].price / 100}</h4>
            <Box></Box>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}
export default ProdutcsSeller
