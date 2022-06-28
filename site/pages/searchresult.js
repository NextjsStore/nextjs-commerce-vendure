import Container from '@mui/material/Container'
import { useRouter } from 'next/router'
import { Grid } from '@mui/material'
import { makeStyles } from '@material-ui/core/styles'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Banner from '../assets/banner_page.png'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Product from '../components/product'
import Search_Collection from '../components/searchcollection'
import commerce from '@lib/api/commerce'
import axios from 'axios'

const colorHover = '#40c6ff'
const useStyles_pageShop = makeStyles((theme) => ({
  pageShop: {
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
    float: 'right',
    paddingTop: '12px',
    '@media (max-width: 768px)': {
      float: 'inherit',
    },
  },
  productCategory: {
    display: 'flex',
    '@media (max-width: 768px)': {
      display: 'flex',
      flexDirection: 'column-reverse',
    },
  },
  productCategoryText: {
    marginRight: '25px',
  },
  textCartegory: {
    padding: '10px 0px',
    borderBottom: '1px solid #ccc',
    color: '#676c77',
    transition: '0.21s',
    '& div.MuiTreeItem-content': {
      padding: '0px!important',
      '&:hover': {
        background: '#fff',
      },
      '&:focus': {
        background: '#fff',
      },
      '& svg': {
        color: '#676c77',
      },
    },
    '&:hover': {
      color: '#000',
    },
  },
  titleCartegory: {
    marginBottom: '10px',
    marginTop: '10px',
  },
  titleSideBarCategory: {
    position: 'relative',
    borderBottom: ' 1px solid #ccc',
    paddingBottom: '15px',
    marginBottom: '20px',
    fontFamily: 'Merriweather,sans-serif',
    fontWeight: 'bold',
    fontSize: '24px',
    '&:before': {
      position: 'absolute',
      content: '""',
      width: '60px',
      height: '1px',
      bottom: '-1px',
      backgroundColor: `${colorHover}`,
    },
  },
  categoryText: {
    paddingLeft: '0px',
    '&:hover': {
      backgroundColor: '#fff !important',
    },
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
}))

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
  const classes = useStyles_pageShop()

  return (
    <Box>
      <Box className={classes.pageShop}>
        <Container>
          <Box className={classes.titlePage}>
            <Grid item lg={6}>
              <Box>
                <Typography
                  className={classes.textTile}
                  component="h3"
                  variant="h3"
                >
                  Search
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
                    Search
                  </Typography>
                </Breadcrumbs>
              </Box>
            </Grid>
          </Box>
        </Container>
      </Box>
      {/********************** */}
      <Container>
        <Box className={classes.productCategory}>
          <Grid item lg={3} className={classes.productCategoryText}>
            <Box>
              <Typography
                className={classes.titleSideBarCategory}
                component="h4"
                variant="h4"
              >
                Search Results :
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={9}>
            <Grid
              spacing={{ sm: 2, md: 2, xs: 3, lg: 3 }}
              columns={{ xl: 3, sm: 2, md: 3, lg: 3 }}
            >
              {searchResult.length
                ? searchResult.map((product) => (
                    <Search_Collection key={product} product={product} />
                  ))
                : ''}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}
export default Search_Result
