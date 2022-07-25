import { useRouter } from 'next/router'
import Collection from '@components/collection'
import commerce from '@lib/api/commerce'
import axios from 'axios'
import {
  Container,
  Box,
  Flex,
  Heading,
  Text,
  Spacer,
  SimpleGrid,
  Button,
} from '@chakra-ui/react'
import Link from 'next/link'

const CollectionShop = (props) => {
  const { collections, categories } = props

  const router = useRouter()
  const handleSubmit = (slug) => {
    router.push(`${slug}`)
  }
  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <Box>Loading...</Box>
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
          m="0px auto"
        >
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
      <Container maxW="1200px" m="12px auto">
        <Flex>
          <Box item lg={3} w="20%">
            <Box>
              <Heading
                as="h3"
                size="lg"
                color="brand.title"
                borderBottom="1px solid #ccc"
                pb="2"
              >
                Product Category
              </Heading>
            </Box>
            {categories.length > 0 &&
              categories.map((item) => (
                <Box key={item}>
                  <Box disablePadding>
                    <Box
                      as="button"
                      onClick={() => handleSubmit(item.slug)}
                      borderBottom="1px solid #ccc"
                      p={[2, 3]}
                      w="100%"
                      display="flex"
                    >
                      {item.name}
                    </Box>
                  </Box>
                </Box>
              ))}
          </Box>
          <Box item lg={8} w="80%" pl="20">
            <SimpleGrid columns={{ sm: '1', md: '2', lg: '4' }}>
              {collections.length > 0 &&
                collections.map((product) => (
                  <Collection key={product.id} product={product} />
                ))}
            </SimpleGrid>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}
export default CollectionShop

export async function getStaticProps({ params, locale, locales, preview }) {
  const config = { locale, locales }
  const siteInfoPromise = commerce.getSiteInfo({ config, preview })

  const { categories } = await siteInfoPromise
  /*********AXIOS GRAPHQL */
  const endpoint = process.env.NEXT_PUBLIC_VENDURE_SHOP_API_URL
  const headers = {
    'content-type': 'application/json',
    Authorization: '<token>',
  }
  const graphqlQuery = {
    query: `query fetchAuthor ($slug: String!){
      collection(slug: $slug) {
        productVariants {
          items {
            product {
              name
              slug
              id
              assets {
                source
              }
              variants{
                price
              }
              collections {
                name
                slug
              }
            }
          }
        }
      }
}
`,
    variables: { slug: params.slug },
  }

  const response = await axios({
    url: endpoint,
    method: 'post',
    headers: headers,
    data: graphqlQuery,
  })

  const collections = response.data.data.collection?.productVariants.items

  if (!collections) {
    throw new Error(`Product with slug '${params.slug}' not found`)
  }

  return {
    props: {
      collections,
      categories,
    },
    revalidate: 200,
  }
}

export async function getStaticPaths({ locales }) {
  const { products } = await commerce.getAllProductPaths()

  return {
    paths: locales
      ? locales.reduce((arr, locale) => {
          // Add a product path for every locale
          products.forEach((product) => {
            arr.push(`/${locale}/collection${product.path}`)
          })
          return arr
        }, [])
      : products.map((product) => `/collection${product.path}`),
    fallback: 'blocking',
  }
}
