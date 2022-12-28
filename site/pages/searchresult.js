import Banner from '../assets/banner_page.png'
import Search_Collection from '../components/searchcollection'
import {
  Box,
  Container,
  Flex,
  Heading,
  Spacer,
  Grid,
  SimpleGrid,
  Text,
} from '@chakra-ui/react'
import commerce from '@lib/api/commerce'
import axios from 'axios'

export async function getServerSideProps({ preview, locale, locales, query }) {
  const config = { locale, locales }
  const siteInfoPromise = commerce.getSiteInfo({ config, preview })
  const { categories } = await siteInfoPromise

  const endpoint = process.env.NEXT_PUBLIC_VENDURE_SHOP_API_URL
  const headers = {
    'content-type': 'application/json',
  }

  const graphqlQuery = {
    operationName: 'fetchAuthor',
    query: `query fetchAuthor($slug: String!) {
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
  const response = await axios({
    url: endpoint,
    method: 'POST',
    headers: headers,
    data: graphqlQuery,
  })
  const searchResult = response.data.data.search.items

  return {
    props: {
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
                  Search
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
                    Search
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
      {/********************** */}
      <Container maxW="1200px" m="12px auto">
        <Flex>
          <Box w="25%">
            <Heading as="h3" size="lg" color="brand.title" pb="2">
              Search Results:
            </Heading>
          </Box>
          <Box item lg={8} w="80%" pl="20">
            <Box>
              <SimpleGrid columns={3}>
                {searchResult.length > 0 &&
                  searchResult.map((product) => (
                    <Search_Collection key={product} product={product} />
                  ))}
              </SimpleGrid>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}
export default Search_Result
