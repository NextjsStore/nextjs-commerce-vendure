import Link from 'next/link'
import { useRouter } from 'next/router'
import AddToCartButton from '../../components/cart/AddToCartButton'
import { isEmpty } from 'lodash'
import GalleryCarousel from '@components/single-product/gallery-carousel'
import CategoriesCarousel from '@components/single-product/categories-carousel'
import { BsFillStarFill } from 'react-icons/bs'
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
  Image,
  Text,
} from '@chakra-ui/react'

const Product = (props) => {
  const { product, relatedProducts, collections } = props
  //console.log('Getcollection', collections)

  const router = useRouter()

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
      {product && collections && (
        <Box
          maxW={{
            md: '768px',
            lg: '960px',
            xl: '1200px',
          }}
          m="0px auto"
        >
          <Box borderBottom="1px solid #ccc" pb="30px">
            <Flex>
              <Box pr="30">
                <Box>
                  <Image src={product.images[0].url} alt="" w="100%" />
                  <Box>
                    <GalleryCarousel gallery={product?.images} />
                  </Box>
                </Box>
              </Box>
              <Box>
                <Box>
                  <Heading>{product.name}</Heading>
                  <h3>${product.price.value}</h3>
                  <Box
                    dangerouslySetInnerHTML={{
                      __html: product.description,
                    }}
                  />
                  {<AddToCartButton product={product} />}
                  <Box>
                    <Box>SKU: N/A</Box>
                    <CategoriesCarousel gallery={collections.collections} />
                  </Box>
                </Box>
              </Box>
            </Flex>
          </Box>
          <Box>
            <Heading pt="4" pb="4">
              Detail
            </Heading>
            <Box
              dangerouslySetInnerHTML={{
                __html: product.description,
              }}
            ></Box>
          </Box>
          <Box h="100%" pt="6" pb="10">
            <Heading>
              <Center>Related products</Center>
            </Heading>
            <Flex pt="6">
              {relatedProducts.length > 0 &&
                relatedProducts.map((item) => (
                  <Box key={item} m="2" border="1px solid #efefef">
                    <Box>
                      <Link href={`/product/${item?.slug}`}>
                        <a>
                          <Image
                            src={`${item?.images[0].url}?w=164&h=164&fit=crop&auto=format`}
                            alt={item?.name}
                            loading="lazy"
                            w="100%"
                            p="5"
                          />
                        </a>
                      </Link>
                      <Box centerContent>
                        <h3>
                          <Link href={`/product/${item?.slug}`}>
                            <a>{item.name}</a>
                          </Link>
                        </h3>
                        <Box>
                          {product.rating && (
                            <Box mb="10" alignItems="center">
                              {Array(5)
                                .fill('')
                                .map((_, i) => (
                                  <BsFillStarFill
                                    key={i}
                                    color={
                                      i < product.rating
                                        ? '#81E6D9'
                                        : 'gray.200'
                                    }
                                  />
                                ))}
                            </Box>
                          )}
                        </Box>
                        <h4>
                          <span>${item.price.value}</span>
                        </h4>
                      </Box>
                    </Box>
                  </Box>
                ))}
            </Flex>
          </Box>
        </Box>
      )}
    </Box>
  )
}
export default Product

export async function getStaticProps({ params, locale, locales, preview }) {
  const config = { locale, locales }
  const pagesPromise = commerce.getAllPages({ config, preview })
  const siteInfoPromise = commerce.getSiteInfo({ config, preview })
  const productPromise = commerce.getProduct({
    variables: { slug: params.slug },
    config,
    preview,
  })

  const endpoint = process.env.NEXT_PUBLIC_VENDURE_SHOP_API_URL
  const headers = {
    'content-type': 'application/json',
    Authorization: '<token>',
  }
  const graphqlQuery = {
    operationName: 'fetchAuthor',
    query: `
      query fetchAuthor($slug: String!) {
        product(slug: $slug) {
          id
          name
          slug
          collections {
            name
            slug
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

  const collections = response.data.data.product

  const allProductsPromise = commerce.getAllProducts({
    variables: { first: 4 },
    config,
    preview,
  })
  const { pages } = await pagesPromise
  const { categories } = await siteInfoPromise
  const { product } = await productPromise
  const { products: relatedProducts } = await allProductsPromise

  if (!product) {
    throw new Error(`Product with slug '${params.slug}' not found`)
  }

  return {
    props: {
      pages,
      product,
      collections,
      relatedProducts,
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
            arr.push(`/${locale}/product${product.path}`)
          })
          return arr
        }, [])
      : products.map((product) => `/product${product.path}`),
    fallback: 'blocking',
  }
}
