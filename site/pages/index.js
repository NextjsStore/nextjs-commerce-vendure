import React from 'react'
import { Container, Grid } from '@mui/material'
import SwipeableTextMobileStepper from '@components/slider'
import Product from '@components/product'
import ListImages from '@components/ListImages'
import ListImgSeller from '../components/ImgList'
import NameForm from '@components/FormEmail'
import { AppProvider } from '../lib/context/AppContext'
import DealsOfDay from 'components/DealsOfDay'
import Tab from '@components/Tab'
import TabSeller from '@components/TabSeller'
import Logo from '@components/ListLogo'
import commerce from '@lib/api/commerce'
import axios from 'axios'
import ProdutcsSeller from '@components/ProductsSeller'

export async function getStaticProps({ preview, locale, locales, params }) {
  const config = { locale, locales }
  const productsPromise = commerce.getAllProducts({
    variables: { first: 8 },
    config,
    preview,
    // Saleor provider only
    ...{ featured: true },
  })
  const pagesPromise = commerce.getAllPages({ config, preview })
  const siteInfoPromise = commerce.getSiteInfo({ config, preview })
  const { products } = await productsPromise
  const { pages } = await pagesPromise
  const { categories, brands } = await siteInfoPromise

  /***ADD QUERY WITH AXIOS */
  const endpoint = process.env.NEXT_PUBLIC_VENDURE_SHOP_API_URL
  const headers = {
    'content-type': 'application/json',
    Authorization: '<token>',
  }
  const graphqlQuery = {
    operationName: 'fetchAuthor',
    query: `query fetchAuthor{
    products(options: {take: 8 skip:4} ) {
      items {
        id
        name
        description
        slug
        assets {
          source
        }
        variants {
          currencyCode
          price
          name
        }
      }
  }
}`,
  }

  const response = await axios({
    url: endpoint,
    method: 'post',
    headers: headers,
    data: graphqlQuery,
  })
  const productsSeller = response.data.data.products.items

  return {
    props: {
      products,
      productsSeller,
      categories,
      brands,
      pages,
    },
    revalidate: 60,
  }
}

const Home = (props) => {
  const { products, productsSeller } = props
  //console.log('collections', collections)

  return (
    <AppProvider>
      <div>
        <SwipeableTextMobileStepper />
        <DealsOfDay />
        <Container>
          <Tab />
          <Grid
            container
            spacing={{ sm: 2, md: 2, xs: 4, lg: 3 }}
            columns={{ xs: 4, sm: 6, md: 4, lg: 4 }}
          >
            {products.length
              ? products.map((product) => (
                  <Product key={product.id} product={product} />
                ))
              : ''}
          </Grid>
          {/* <Grid container spacing={{ sm: 2, md: 2, xs: 4, lg: 3 }} columns={{ xs: 4, sm: 6, md: 4, lg: 4 }}>
            {products.length ? (
              products.map(product => <Product key={product.id} product={product} />)
            ) : ''}
          </Grid> */}
        </Container>

        <ListImages />
        <Container>
          <TabSeller />
          <Grid
            container
            spacing={{ sm: 2, md: 2, xs: 4, lg: 3 }}
            columns={{ xs: 4, sm: 6, md: 4, lg: 4 }}
          >
            {productsSeller.length
              ? productsSeller.map((product) => (
                  <ProdutcsSeller key={product.id} product={product} />
                ))
              : ''}
          </Grid>
          {/* <Grid container spacing={{ sm: 2, md: 2, xs: 4, lg: 3 }} columns={{ xs: 4, sm: 6, md: 4, lg: 4 }}>
            {products.length ? (
              products.map(product => <Product key={product.id} product={product} />)
            ) : ''}
          </Grid> */}
        </Container>
        <ListImgSeller />
        <Logo />
        <NameForm />
      </div>
    </AppProvider>
  )
}
export default Home
