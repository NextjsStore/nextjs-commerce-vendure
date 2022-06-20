import Link from 'next/link'
import { useRouter } from 'next/router'
import AddToCartButton from '../../components/cart/AddToCartButton'
import { isEmpty } from 'lodash'
import GalleryCarousel from '@components/single-product/Gallery-Carousel'
import CategoriesCarousel from '@components/single-product/Categories-Carousel'
import { StarIcon } from '@chakra-ui/icons'
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
} from '@chakra-ui/react'

const Product = (props) => {
  const { product, relatedProducts, getcollections } = props
  //console.log('Getcollection', getcollections)

  const router = useRouter()

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <>
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
                    About
                  </Heading>
                </Box>
                <Spacer />
                <Box>
                  <Heading component="h6" variant="h6">
                    About
                  </Heading>
                  <Heading component="h6" variant="h6">
                    My account
                  </Heading>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Box>
      <div>
        {product && getcollections ? (
          <div>
            <Container maxWidth="lg">
              <Grid>
                <Center>
                  <Container w="60%" borderBottom="1px solid #ccc" pb="30px">
                    <Flex>
                      <Box pr="30">
                        <div>
                          <Image src={product.images[0].url} alt="" w="100%" />
                          <div>
                            {!isEmpty(product?.images[0]) ? (
                              <GalleryCarousel gallery={product?.images} />
                            ) : !isEmpty(product?.images) ? (
                              <Image
                                src={product?.images?.url}
                                alt="Product Image"
                                height="auto"
                                srcSet={product?.images?.url}
                              />
                            ) : null}
                          </div>
                        </div>
                      </Box>
                      <Box>
                        <Box>
                          <h1>{product.name}</h1>
                          <h3>${product.price.value}</h3>
                          <Box
                            dangerouslySetInnerHTML={{
                              __html: product.description,
                            }}
                          />
                          {<AddToCartButton product={product} />}
                          <Box>
                            <Box>SKU: N/A</Box>
                            {!isEmpty(getcollections.collections) ? (
                              <CategoriesCarousel
                                gallery={getcollections.collections}
                              />
                            ) : !isEmpty(getcollections.collections) ? (
                              <Box>{getcollections.collections}</Box>
                            ) : null}
                          </Box>
                        </Box>
                      </Box>
                    </Flex>
                  </Container>
                </Center>
                <Center>
                  <Container w="60%">
                    <Box>
                      <h2>Detail</h2>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: product.description,
                        }}
                      ></div>
                    </Box>
                    <Container h="100%" m="5" pb="10">
                      <Container centerContent>
                        <h2>Related products</h2>
                      </Container>
                      <Flex>
                        {relatedProducts.length
                          ? relatedProducts.map((item) => (
                              <Box key={item} m="20" border="1px solid #efefef">
                                <Box>
                                  <Link href={`/product/${item?.slug}`}>
                                    <a>
                                      <Image
                                        src={`${item?.images[0].url}?w=164&h=164&fit=crop&auto=format`}
                                        //srcSet={`${item?.image?.srcSet}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                        alt={item?.name}
                                        loading="lazy"
                                        w="100%"
                                        p="5"
                                      />
                                    </a>
                                  </Link>
                                  <Container centerContent>
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
                                              <StarIcon
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
                                  </Container>
                                </Box>
                              </Box>
                            ))
                          : ''}
                      </Flex>
                    </Container>
                    <div></div>
                  </Container>
                </Center>
              </Grid>
            </Container>
          </div>
        ) : (
          ''
        )}
      </div>
    </>
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

  const getcollections = response.data.data.product

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
      getcollections,
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
