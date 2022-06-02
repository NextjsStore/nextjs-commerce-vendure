import React from 'react'
import { Container, Grid } from '@mui/material'
// slider
// import SwipeableTextMobileStepper from '../components/slider';
// end slider
import SwipeableTextMobileStepper from '../components/slider'

// product

// end product tabs
import Product from '../components/product'

// newlistimg
import NewImageList from '../components/newlistimg'
// end newlistimg

// imglist
import SellerImageList from '../components/imglist'
// end imglist

// form Email
import NameForm from '../components/formEmail'

// end  form Email

//import request data
// import { AppProvider } from '../libs/context/AppContext';
import { AppProvider } from '../lib/context/AppContext'
import DealsOfDay from 'components/DealsOfDay'
import Tab from 'components/tab'
import TabSeller from 'components/tabSeller'
import Logo from 'components/tabsLogo'
import Collection from 'components/collection'
import commerce from '@lib/api/commerce'
import axios from 'axios'

export async function getStaticProps({ preview, locale, locales }) {
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
  const endpoint =
    'http://localhost:3000/shop-api?vendure-token=xn5i72fr18t00v9ghbm'
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
}
    `,
  }

  const response = await axios({
    url: endpoint,
    method: 'post',
    headers: headers,
    data: graphqlQuery,
  })
  const productsSeller = response.data
  console.log('products Seller ', productsSeller)

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
  const { products, productsSeller, products2, productseller2 } = props
  // console.log('productsSeller', productsSeller)
  // console.log('products', products)
  // console.log(productseller);
  return (
    <AppProvider>
      <div>
        {/* <AddHead/>
        <SideBarTop />
        <HeaderMid />
        <HeaderCenter /> */}
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

        <NewImageList />
        <Container>
          <TabSeller />
          <Grid
            container
            spacing={{ sm: 2, md: 2, xs: 4, lg: 3 }}
            columns={{ xs: 4, sm: 6, md: 4, lg: 4 }}
          >
            {productsSeller.data.products.items.length
              ? productsSeller.data.products.items.map((product) => (
                  <Collection key={product.id} product={product} />
                ))
              : ''}
          </Grid>
          {/* <Grid container spacing={{ sm: 2, md: 2, xs: 4, lg: 3 }} columns={{ xs: 4, sm: 6, md: 4, lg: 4 }}>
            {products.length ? (
              products.map(product => <Product key={product.id} product={product} />)
            ) : ''}
          </Grid> */}
        </Container>
        <SellerImageList />
        <Logo />
        <NameForm />
        {/* <Footer />
        <Copyright /> */}
      </div>
    </AppProvider>
  )
}
export default Home

// export async function getServerSideProps({ query }) {

//   const slug = query.slug ? query.slug : '';
//   const slug1 = query.slug1 ? query.slug1 : '';
//   //const cat = query.cat ? query.cat : "";
//   //const cat1 = query.cat1 ? query.cat1 : "";
//   const result = !slug ? await client.query({
//     query: PRODUCT_QUERY,
//   }) : await client.query ({
//     query:  COLLECTION_QUERY,
//     variables: { slug },
//   });

//       /*PRODUCTS SELLER */
//   const result2 = !slug1 ? await client.query({
//     query: PRODUCT_SELLER,
//   }) : await client.query ({
//     query: COLLECTION_QUERY2,
//     variables: { slug1 },
//   });
//   return {
//     props: {
//       products: !slug ? result.data.products.items : '',
//       products2: slug ? result.data.collection.productVariants.items : '',
//       /*PRODUCTS SELLER */
//       productseller: !slug1 ? result2.data.products.items : '',
//       productseller2: slug1 ? result2.data.collection.productVariants.items : '',
//     },
//   };
// }
