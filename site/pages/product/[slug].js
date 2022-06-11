import Link from 'next/link'
import Container from '@mui/material/Container'
import { useRouter } from 'next/router'
import AddToCartButton from '../../components/cart/AddToCartButton'
import { isEmpty } from 'lodash'
import GalleryCarousel from '@components/single-product/gallery-carousel'
import CategoriesCarousel from '@components/single-product/categories-carousel'
import RelatedProduct from '@components/single-product/related-product'
import Price from '@components/single-product/price'
import { ImageList } from '@mui/material'
import { ImageListItem } from '@mui/material'
import { Grid } from '@mui/material'
import { makeStyles } from '@material-ui/core/styles'
//import { makeStyles } from "@mui/material";
import Rating from '@mui/material/Rating'
import Breadcrumbs from '@mui/material/Breadcrumbs'
//import Banner from '../../assets/img/banner_page.png';
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import commerce from '@lib/api/commerce'
import Banner from '../../assets/banner_page.png'
import axios from 'axios'

const colorHeading = '#323232'
const colorHover = '#40c6ff'
const colorDefaul = '#666'

const useStyle_productDetail = makeStyles({
  page: {
    marginBottom: '60px',
    minHeight: '200px',
    backgroundImage: `url(${Banner.src})`,
    backgroundSize: 'cover',
  },

  titlePage: {
    display: 'flex',
    paddingTop: '75px',
    paddingBottom: '75px',
    '@media (max-width: 768px)': {
      display: 'block',
    },
  },

  rightTextPage: {
    paddingTop: '12px',
    float: 'right',
    '@media (max-width: 768px)': {
      float: 'inherit',
    },
  },

  imgagesDetail: {
    '& img': {
      width: '90%',
    },
  },
  galleryImages: {
    '& img': {
      width: '25%',
      border: '1px solid #ccc',
    },
  },
  name_product_detail: {
    fontSize: '30px',
    color: `${colorHeading}`,
    fontFamily: 'Merriweather',
  },
  priceproduct: {
    color: '#40c6ff',
    display: 'inline',
    fontSize: '20px',
    fontWeight: '700',
    margin: '0px 15p',
  },

  description_shot: {
    overflow: 'hidden',
    whiteSpace: 'normal',
    textOverflow: 'ellipsis',
    height: '60px',
    fontSize: '14px',
    color: '#000',
    textAlign: 'justify',
    lineHeight: '23px',
  },
  product_meta: {
    marginTop: '30px',
    padding: '30px 0px',
    float: 'left',
    width: '100%',
    marginBottom: '15px',
    borderTop: '1px solid #e4e4e4',
    borderBottom: '1px solid #e4e4e4',
    fontSize: '16px',
    color: '#676c77',
  },
  sku_title: {
    marginBottom: '15px',
  },
  description_detail: {
    marginTop: '70px',
    paddingTop: '50px',
    borderTop: '1px solid #e4e4e4',
    width: '100%',
    '& h4': {
      marginTop: '0px',
      fontSize: '20px',
      textTransform: 'uppercase',
      fontFamily: 'Merriweather',
    },
  },
  description_item: {
    fontSize: '16px',
    lineHeight: '23px',
    color: '#000',
    '& span': {
      fontSize: '16px',
      lineHeight: '23px',
      color: '#000',
    },
  },
  box_related_products: {
    width: '100%',
    marginTop: '30px',
    float: 'left',
    margin: '0px -15px',
    '& h4': {
      fontSize: '20px',
      textTransform: 'uppercase',
      textAlign: 'center',
    },
  },
  related_products: {
    display: 'inline-block',
    width: '25%',
    padding: '0px 15px',
    marginBottom: '30px',
    '& img': {
      width: '100%',
    },
    '@media (max-width:899px)': {
      width: '50%',
    },
    '@media (max-width:767px)': {
      width: '100%',
    },
  },
  box_product: {
    border: '1px solid #efefef',
    padding: '15px 15px 22px 15px',
    transition: '0.35s',
    '&:hover': {
      boxShadow: '0 10px 6px -6px #ccc',
    },
  },
  cardBody: {
    textAlign: 'center',
    '& h3': {
      fontSize: '19px',
      fontWeight: 'bold',
      color: '#444',
      marginTop: '12px',
      marginBottom: '10px',
      fontFamily: 'Mulish,sans-serif',
      lineHeight: '24px',
      overflow: 'hidden',
      display: '-webkit-box',
      '-webkit-box-orient': 'vertical',
      '-webkit-line-clamp': '1',
    },
    '& h4': {
      marginTop: '6px',
      marginBottom: '0px',
    },
  },
  startRating: {
    textAlign: 'center',
    '& span': {
      color: '#ffcc35',
      fontSize: '18px',
    },
  },
  cardPrice: {
    color: `${colorHover}`,
    fontSize: '22px',
    fontWeight: '500',
    fontFamily: 'Mulish,sans-serif',
  },
  textTile: {
    color: 'white',
    fontFamily: 'Merriweather',
    fontSize: '50px',
    fontWeight: 700,
  },
  titleText: {
    color: 'white',
    fontFamily: 'Muli',
    fontWeight: 400,
    fontSize: '14px',
  },
})

export default function Product(props) {
  const classes = useStyle_productDetail()
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
      <Box className={classes.page}>
        <Container>
          <Box className={classes.titlePage}>
            <Grid item lg={6}>
              <Box>
                <Typography
                  className={classes.textTile}
                  component="h3"
                  variant="h3"
                >
                  Product Detail
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={6}>
              <Box className={classes.rightTextPage}>
                <Breadcrumbs sx={{ color: 'white' }} aria-label="breadcrumb">
                  <Typography
                    className={classes.titleText}
                    component="h6"
                    variant="h6"
                  >
                    Home
                  </Typography>

                  <Typography
                    className={classes.titleText}
                    component="h6"
                    variant="h6"
                  >
                    Product Detail
                  </Typography>
                </Breadcrumbs>
              </Box>
            </Grid>
          </Box>
        </Container>
      </Box>

      <div>
        {product && getcollections ? (
          <div className={classes.singleProduct}>
            <Container maxWidth="lg">
              <Grid container direction="row" lg={12}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <div className={classes.imgagesDetail}>
                    <img src={product.images[0].url} alt="" />
                    <div className={classes.galleryImages}>
                      {!isEmpty(product?.images[0]) ? (
                        <GalleryCarousel gallery={product?.images} />
                      ) : !isEmpty(product?.images) ? (
                        <img
                          src={product?.images?.url}
                          alt="Product Image"
                          height="auto"
                          srcSet={product?.images?.url}
                        />
                      ) : null}
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <div className="descDetail">
                    <h1 className={classes.name_product_detail}>
                      {product.name}
                    </h1>
                    <h3 className={classes.priceproduct}>
                      ${product.price.value}
                    </h3>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: product.description,
                      }}
                      className={classes.description_shot}
                    />
                    {<AddToCartButton product={product} />}
                    <div className={classes.product_meta}>
                      <div className={classes.sku_title}>SKU: N/A</div>
                      {!isEmpty(getcollections.collections) ? (
                        <CategoriesCarousel
                          gallery={getcollections.collections}
                        />
                      ) : !isEmpty(getcollections.collections) ? (
                        <div className={classes.sku_name}>
                          {getcollections.collections}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </Grid>
                <div className={classes.description_detail}>
                  <h4>Detail</h4>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: product.description,
                    }}
                    className={classes.description_item}
                  ></div>
                </div>
                <div className={classes.box_related_products}>
                  <h4>Related products</h4>
                  {relatedProducts.length
                    ? relatedProducts.map((item) => (
                        <div className={classes.related_products} key={item}>
                          <div className={classes.box_product}>
                            <Link href={`/product/${item?.slug}`}>
                              <a>
                                <img
                                  src={`${item?.images[0].url}?w=164&h=164&fit=crop&auto=format`}
                                  //srcSet={`${item?.image?.srcSet}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                  alt={item?.name}
                                  loading="lazy"
                                />
                              </a>
                            </Link>
                            <div className={classes.cardBody}>
                              <h3>
                                <Link href={`/product/${item?.slug}`}>
                                  <a className={classes.cardTitle}>
                                    {item.name}
                                  </a>
                                </Link>
                              </h3>
                              <div className={classes.startRating}>
                                <Rating name="read-only" value="0" readOnly />
                              </div>
                              <h4 className={classes.cardPrice}>
                                <span className={classes.price_sales}>
                                  ${item.price.value}
                                </span>
                              </h4>
                            </div>
                          </div>
                        </div>
                      ))
                    : ''}
                </div>
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
