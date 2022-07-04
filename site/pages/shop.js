import React from 'react'
import Product from '../components/product'
import { useRouter } from 'next/router'
import commerce from '@lib/api/commerce'
import {
  Box,
  Container,
  Flex,
  Heading,
  Spacer,
  Text,
  Divider,
  SimpleGrid,
} from '@chakra-ui/react'

const Shop = (props) => {
  const { products, categories } = props

  const router = useRouter()
  const handleSubmit = (slug) => {
    router.push(`collection/${slug}`)
  }

  return (
    <Box>
      <Box>
        <Box
          color="#fff"
          backgroundImage="/assets/banner_page.png"
          h="200px"
          mb="6"
        >
          <Flex w="1200px" m="0px auto">
            <Box>
              <Heading fontSize="40" variant="h1" lineHeight="200px">
                About
              </Heading>
            </Box>
            <Spacer />
            <Box lineHeight="200px">
              <Flex>
                <Text component="h6" variant="h6">
                  Home
                </Text>
                <Text p="0px 10px"> / </Text>
                <Text component="h6" variant="h6">
                  About
                </Text>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>
      <Container maxW="1200px" m="12px auto">
        <Flex>
          <Box w="20%">
            <Heading
              as="h3"
              size="lg"
              color="brand.title"
              borderBottom="1px solid #ccc"
              pb="2"
            >
              Product Category
            </Heading>
            {categories.length
              ? categories.map((item) => (
                  <Box key={item}>
                    <Box disablePadding>
                      <Box>
                        <Text
                          onClick={() => handleSubmit(`${item.slug}`)}
                          borderBottom="1px solid #ccc"
                          p={[2, 3]}
                        >
                          {item.name}
                        </Text>
                      </Box>
                    </Box>
                    <Divider />
                  </Box>
                ))
              : ''}
          </Box>
          <Box item lg={8} w="80%" pl="20">
            <Box>
              <SimpleGrid columns={3}>
                {products.length
                  ? products.map((product) => (
                      <Product key={product.id} product={product} />
                    ))
                  : ''}
              </SimpleGrid>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}
export default Shop

export async function getStaticProps({ preview, locale, locales }) {
  const config = { locale, locales }
  const productsPromise = commerce.getAllProducts({
    variables: { first: 12 },
    config,
    preview,
    // Saleor provider only
    ...{ featured: true },
  })
  const siteInfoPromise = commerce.getSiteInfo({ config, preview })

  const { categories } = await siteInfoPromise
  const { products } = await productsPromise

  return {
    props: {
      categories,
      products,
    },
    revalidate: 60,
  }
}
