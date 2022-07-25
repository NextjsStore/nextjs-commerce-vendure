import React from 'react'
import Link from 'next/link'
import { BsFillStarFill } from 'react-icons/bs'
import { Box, Image, Text, Heading, Button } from '@chakra-ui/react'

const Product = (props) => {
  const { product } = props
  return (
    <Box align="center" m="10px" p="10px" border="1px solid #efefef">
      <Link href={`/product/${product.slug}`}>
        <a>
          <Image src={product.images[0].url} w="100%" />
        </a>
      </Link>
      <Box>
        {product.name && (
          <Text color="brand.title" fontSize="18px" pt="4" fontWeight="700">
            <Link href={`/product/${product.slug}`}>
              <a>{product.name}</a>
            </Link>
          </Text>
        )}
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
          ${product.price.value}
        </Text>
      </Box>
    </Box>
  )
}
export default Product
