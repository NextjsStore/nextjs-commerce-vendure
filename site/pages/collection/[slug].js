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
} from '@chakra-ui/react'

const CollectionShop = (props) => {
  const { collections } = props

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
      <Box h="240px">
        <Box>
          <Box
            color="#fff"
            backgroundImage="/assets/banner_page.png"
            h="200px"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            mb="60px"
          >
            <Flex w="1200px" m="0px auto">
              <Box lineHeight="3">
                <Heading fontSize="40" variant="h1">
                  Shop
                </Heading>
              </Box>
              <Spacer />
              <Box lineHeight="10">
                <Flex>
                  <Text component="h6" variant="h6">
                    Home
                  </Text>
                  <Text p="0px 10px"> / </Text>
                  <Text component="h6" variant="h6">
                    My account
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Box>
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
            <Box>
              <Box disablePadding>
                <Box>
                  <Box onClick={() => handleSubmit(`custom-prints`)}>
                    Custom Prints
                  </Box>
                </Box>
              </Box>
              <Box disablePadding>
                <Box>
                  <Box onClick={() => handleSubmit(`free-file-check`)}>
                    Free file check
                  </Box>
                </Box>
              </Box>
              <Box disablePadding>
                <Box>
                  <Box onClick={() => handleSubmit(`graphic-design`)}>
                    Graphic Design
                  </Box>
                </Box>
              </Box>
              <Box disablePadding>
                <Box>
                  <Box onClick={() => handleSubmit(`mailing`)}>Mailing</Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box item lg={8} w="80%" pl="20">
            <SimpleGrid columns={3}>
              {collections.length
                ? collections.map((product) => (
                    <Collection key={product.id} product={product} />
                  ))
                : ''}
            </SimpleGrid>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}
export default CollectionShop

export async function getStaticProps({ params, locale, locales }) {
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
