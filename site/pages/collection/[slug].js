import { useRouter } from 'next/router'
import Collection from '@components/collection'
import commerce from '@lib/api/commerce'
import axios from 'axios'
import {
  Center,
  Container,
  Box,
  Flex,
  Spacer,
  Heading,
  Grid,
  Text,
  Button,
} from '@chakra-ui/react'

const CollectionShop = (props) => {
  const { collections, categories } = props
  console.log('categories', categories)

  const router = useRouter()
  const handleSubmit = (slug) => {
    router.push(`${slug}`)
  }
  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>
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
            <Flex>
              <Box>
                <Heading component="h3" variant="h3">
                  My account
                </Heading>
              </Box>
              <Spacer />
              <Box>
                <Heading component="h6" variant="h6">
                  Home
                </Heading>
                <Heading component="h6" variant="h6">
                  My account
                </Heading>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
      <Container>
        <Box>
          <Grid item lg={3}>
            <Box>
              <Text component="h4" variant="h4">
                Product Category
              </Text>
            </Box>
            <div>
              {categories.length
                ? categories.map((item) => (
                    <Box key={item}>
                      <Box disablePadding>
                        <Box>
                          <Button onClick={() => handleSubmit(`${item.slug}`)}>
                            {item.name}
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  ))
                : ''}
            </div>
          </Grid>

          <Grid item lg={9}>
            <Grid
              spacing={{ sm: 2, md: 2, xs: 3, lg: 3 }}
              columns={{ xl: 3, sm: 2, md: 3, lg: 3 }}
            >
              {collections.length
                ? collections.map((product) => (
                    <Collection key={product.id} product={product} />
                  ))
                : ''}
            </Grid>
          </Grid>
        </Box>
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

  const collections = response.data.data.collection.productVariants.items

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
