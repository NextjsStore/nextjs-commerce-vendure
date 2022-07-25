import React from 'react'
import { Container, Grid, Box, SimpleGrid } from '@chakra-ui/react'
import SwipeableTextMobileStepper from '@components/slider'
import Product from '@components/product'
import ListImages from '@components/ListImages'
import ListImgSeller from '../components/imglist'
import NameForm from '@components/formEmail'
import DealsOfDay from 'components/DealsOfDay'
import TabHeader from '@components/tab'
import TabSeller from '@components/tabSeller'
import Logo from '@components/ListLogo'
import commerce from '@lib/api/commerce'
import axios from 'axios'
import ProdutcsSeller from '@components/ProductsSeller'
import Search_Collection from '@components/searchcollection'

export async function getServerSideProps({ preview, locale, locales, query }) {
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
  /**
   * getQuery Product Seller
   */
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

  /**
   * Query Data Tab Seller
   */
  const dataTabSeller = {
    operationName: 'fetchAuthor',
    query: `query fetchAuthor($s1: String!){
      search(input: {collectionSlug: $s1, take: 8  }) {
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
    variables: { s1: query.s1 ? query.s1 : '' },
  }
  const getDataSeller = await axios({
    url: endpoint,
    method: 'post',
    headers: headers,
    data: dataTabSeller,
  })
  const tabSeller = query.s1 ? getDataSeller.data.data.search.items : ''

  /**
   * Query Deal of Days
   */
  const QueryproductsDeal = {
    operationName: 'fetchAuthor',
    query: `query fetchAuthor{
      products(options: {take:2}){
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
  const productsdof = await axios({
    url: endpoint,
    method: 'post',
    headers: headers,
    data: QueryproductsDeal,
  })
  const productDeal = productsdof.data.data.products.items

  /**
   * Data  Tab Header
   */
  const queryCollection = {
    operationName: 'fetchAuthor',
    query: `query fetchAuthor($s: String!) {
      search(input: {collectionSlug: $s, take: 8 }) {
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
    variables: { s: query.s ? query.s : '' },
  }
  const tabHeader = await axios({
    url: endpoint,
    method: 'POST',
    headers: headers,
    data: queryCollection,
  })
  const dataTab = tabHeader.data.data.search.items

  return {
    props: {
      products,
      productDeal,
      productsSeller,
      dataTab,
      categories,
      brands,
      pages,
      tabSeller,
    },
  }
}

const Home = (props) => {
  const {
    products,
    productsSeller,
    categories,
    productDeal,
    dataTab,
    tabSeller,
  } = props
  // console.log('dataTab', dataTab)
  const brands = [
    {
      id: 1,
      imageUrl: '/assets/logo1.png',
    },
    {
      id: 2,
      imageUrl: '/assets/logo2.png',
    },
    {
      id: 3,
      imageUrl: '/assets/logo3.png',
    },
    {
      id: 4,
      imageUrl: '/assets/logo4.png',
    },
    {
      id: 5,
      imageUrl: '/assets/logo5.png',
    },
    {
      id: 6,
      imageUrl: '/assets/logo6.png',
    },
    {
      id: 7,
      imageUrl: '/assets/logo5.png',
    },
    {
      id: 8,
      imageUrl: '/assets/logo6.png',
    },
    {
      id: 9,
      imageUrl: '/assets/logo5.png',
    },
    {
      id: 10,
      imageUrl: '/assets/logo6.png',
    },
    {
      id: 11,
      imageUrl: '/assets/logo5.png',
    },
    {
      id: 12,
      imageUrl: '/assets/logo6.png',
    },
  ]

  return (
    <Box>
      <SwipeableTextMobileStepper />
      <DealsOfDay key={productDeal.id} productsdeal={productDeal} />
      <TabHeader key={categories.id} collections={categories} />
      <SimpleGrid columns={{ sm: '1', md: '2', lg: '4' }}
          w={{
            md: '768px',
            lg: '960px',
            xl: '1200px',
          }}
          m="12px auto">
        {dataTab.length > 0 &&
          dataTab.map((product) => (
            <Search_Collection key={product.id} product={product} />
          ))}
      </SimpleGrid>
      <ListImages />
      <TabSeller key={categories.id} collections={categories} />
     <SimpleGrid columns={{ sm: '1', md: '2', lg: '4' }}
          w={{
            md: '768px',
            lg: '960px',
            xl: '1200px',
          }}
          m="12px auto">
        {!tabSeller &&
          productsSeller.length > 0 &&
          productsSeller.map((product) => (
            <ProdutcsSeller key={product.id} product={product} />
          ))}
      </SimpleGrid>
      <SimpleGrid columns={{ sm: '1', md: '2', lg: '4' }}
          w={{
            md: '768px',
            lg: '960px',
            xl: '1200px',
          }}
          m="12px auto">
        {tabSeller.length > 0 &&
          tabSeller.map((product) => (
            <Search_Collection key={product.id} product={product} />
          ))}
      </SimpleGrid>
      <ListImgSeller />
      <Logo brands={brands} />
      <NameForm />
    </Box>

  )
}
export default Home
