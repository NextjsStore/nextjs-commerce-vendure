import React from 'react'
import Link from 'next/link'
import { BsAlarmFill } from 'react-icons/bs'
import { Box, Image, Text, Heading } from '@chakra-ui/react'

const Search_Collection = (props) => {
  const { product } = props
  return (
    <Box align="center" m="10px" p="10px" border="1px solid #efefef">
      <Link href={`/product/${product.slug}`}>
        <a>
          <Image w="100%" src={product.productAsset.preview} alt="" />
        </a>
      </Link>
      <Box>
        {product.productName && (
          <Heading color="#323232" fontSize="18px" fontWeight="100" pt="4">
            <Link href={`/product/${product.slug}`}>
              <a>{product.productName}</a>
            </Link>
          </Heading>
        )}
        {product.rating && (
          <Box mb="10" alignItems="center">
            {Array(5)
              .fill('')
              .map((_, i) => (
                <BsAlarmFill
                  key={i}
                  color={i < product.rating ? '#81E6D9' : 'gray.200'}
                />
              ))}
          </Box>
        )}
        <Text mt={2} fontSize="xl" align="center" color="brand.primary">
          ${product.price.value / 100}
        </Text>
      </Box>
    </Box>
  )
}
export default Search_Collection
