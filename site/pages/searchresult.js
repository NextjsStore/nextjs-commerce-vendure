import Banner from '../assets/banner_page.png'
import Search_Collection from '../components/searchcollection'
import { Box, Container, Flex, Heading, Spacer, Grid } from '@chakra-ui/react'
import commerce from '@lib/api/commerce'
import axios from 'axios'

export async function getServerSideProps({ preview, locale, locales, query }) {
  const config = { locale, locales }
  const productsPromise = commerce.getAllProducts({
    variables: { first: 8 },
    config,
    preview,
    ...{ featured: true },
  })
  const siteInfoPromise = commerce.getSiteInfo({ config, preview })

  const { products } = await productsPromise
  const { categories } = await siteInfoPromise

  const endpoint = process.env.NEXT_PUBLIC_VENDURE_SHOP_API_URL
  const headers = {
    'content-type': 'application/json',
  }

  const graphqlQuery = {
    operationName: 'fetchAuthor',
    query: `query fetchAuthor($slug: String) {
      search(input: {collectionSlug: $slug, take: 12 }) {
        items {
          productName
          price {
            ... on SinglePrice {
              __typename
              value
            }
          }
          slug
          productAsset {
            preview
          }
        }
      }
    }`,
    variables: { slug: query.slug },
  }
  const collectionSlug = query.slug
  console.log('collectionSlug', collectionSlug)

  const response = await axios({
    url: endpoint,
    method: 'POST',
    headers: headers,
    data: graphqlQuery,
  })
  const searchResult = response.data.data.search.items

  return {
    props: {
      products,
      searchResult,
      categories,
    },
    // revalidate: 200,
  }
}

const Search_Result = (props) => {
  const { searchResult } = props
  console.log('searchResult', searchResult)
  // console.log('products', products)
  // console.log('categories-SEARCH', categories)

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
                  Search
                </Heading>
              </Box>
              <Spacer />
              <Box>
                <Heading component="h6" variant="h6">
                  Home
                </Heading>
                <Heading component="h6" variant="h6">
                  Search
                </Heading>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
      {/********************** */}
      <Container>
        <Box>
          <Grid item lg={3}>
            <Box>
              <Heading component="h4" variant="h4">
                Search Results :
              </Heading>
            </Box>
          </Grid>
          <Grid item lg={9}>
            <Grid
              spacing={{ sm: 2, md: 2, xs: 3, lg: 3 }}
              columns={{ xl: 3, sm: 2, md: 3, lg: 3 }}
            >
              {searchResult.length > 0 &&
                searchResult.map((product) => (
                  <Search_Collection key={product} product={product} />
                ))}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}
export default Search_Result
