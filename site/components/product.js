import React from 'react'
import Link from 'next/link'
import { StarIcon } from '@chakra-ui/icons'
import { Container, Box, Image, Text, Heading } from '@chakra-ui/react'

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
          <Heading
            as="h3"
            size="2xl"
            noOfLines={1}
            align="center"
            color="#323232"
          >
            <Link href={`/product/${product.slug}`}>
              <a>{product.name}</a>
            </Link>
          </Heading>
        )}
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
        <Text
          mt={2}
          fontSize="xl"
          fontWeight="semibold"
          lineHeight="short"
          align="center"
        >
          ${product.price.value}
        </Text>
      </Box>
    </Box>
  )
}
export default Product
