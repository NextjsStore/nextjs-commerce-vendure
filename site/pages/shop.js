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
      <Box
        color="#fff"
        backgroundImage="/assets/banner_page.png"
        h="200px"
        mb="6"
      >
        <Flex
          maxW={{
            md: '768px',
            lg: '960px',
            xl: '1200px',
          }}
          m="12px auto"
        >
          <Box>
            <Heading fontSize="40" variant="h1" lineHeight="200px">
              Shop
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
                Shop
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Container
        maxW={{
          md: '768px',
          lg: '960px',
          xl: '1200px',
        }}
        m="12px auto"
        display={{ sm: 'block', md: 'flex' }}
      >
        <Box w={{ sm: '100%', md: '20%' }}>
          <Heading
            as="h3"
            size="lg"
            color="brand.title"
            borderBottom="1px solid #ccc"
            pb="2"
          >
            Product Category
          </Heading>
          {categories.length > 0 &&
            categories.map((item) => (
              <Box key={item}>
                <Box disablePadding>
                  <Box>
                    <Text
                      as="button"
                      onClick={() => handleSubmit(`${item.slug}`)}
                      borderBottom="1px solid #ccc"
                      p={[2, 3]}
                      w="100%"
                      display="flex"
                    >
                      {item.name}
                    </Text>
                  </Box>
                </Box>
                <Divider />
              </Box>
            ))}
        </Box>
        <Box
          item
          lg={8}
          w={{ sm: '100%', md: '80%' }}
          pl={{ sm: '0', md: '5' }}
          pt={{ sm: '5', md: '0' }}
        >
          <Box>
            <SimpleGrid columns={{ sm: '1', md: '2', lg: '4' }}>
              {products.length > 0 &&
                products.map((product) => (
                  <Product key={product.id} product={product} />
                ))}
            </SimpleGrid>
          </Box>
        </Box>
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
