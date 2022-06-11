import React from 'react'
import LogoeBay from '../assets/ebaylogo.png'
// makestyle
import Link from 'next/link'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import PropTypes from 'prop-types'
import { useState } from 'react'
// import { useLazyQuery } from "@apollo/client";
// import client from "../libs/apollo/ApolloClient";
import { useRouter } from 'next/router'

import { Center, Container, Box, Flex, Button, Spacer } from '@chakra-ui/react'
import { GoSearch } from 'react-icons/go'

export const PER_PAGE_FIRST = 9
export const PER_PAGE_REST = 12

const GET_SEARCH_RESULTS = `query Product($collectionSlug: String!) {
    search(input: {collectionSlug: $collectionSlug , take: 12}) {
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
    }`

const Item = () => {}

const HeaderMid = (props) => {
  const router = useRouter()
  // const handleSubmit = (value) => {
  //     //console.log(value);
  //     router.push(`?cat=${value}`);
  // };

  const [searchQuery, setSearchQuery] = useState('')
  const [searchError, setSearchError] = useState('')
  const [queryResultPosts, setQueryResultPosts] = useState({})
  const [showResultInfo, setShowResultInfo] = useState(false)

  const handleSubmit = (event, value) => {
    event.preventDefault()
    setShowResultInfo(false)
    router.push(`/searchresult?collectionSlug=${searchQuery}`)
  }

  const changeSearchQuery = (e) => {
    setSearchQuery(e.target.value)
  }

  return (
    <Container>
      <Box>
        <Flex sx={{ flexGrow: 1 }}>
          <Box w="20%">
            <Link href="/">
              <a>
                <img src={LogoeBay.src} />
              </a>
            </Link>
          </Box>
          <Spacer />
          <Box w="60%">
            <form id="searchform" onSubmit={handleSubmit}>
              <select onChange={(e) => changeSearchQuery(e)} name="">
                <option value="">Shop by collection</option>
                <option value="">Uncategorized</option>
                <option value="custom-prints">---Custom Prints---</option>
                <option value="free-file-check">---Free file check---</option>
                <option value="graphic-design">--- GraphicDesign---</option>
                <option value="mailing">---Mailing---</option>
              </select>
              <input
                type="text"
                placeholder="What are you looking for..."
                value={searchQuery}
                onChange={(event) => setSearchQuery(event?.target?.value)}
              />
              <Spacer />
              <Box>
                <Button type="submit" onClick={handleSubmit}>
                  <GoSearch />
                </Button>
              </Box>
            </form>
          </Box>
          <Spacer />
          <Box w="10%">
            <a>
              <HiOutlineShoppingBag size="20px" />
            </a>
          </Box>
        </Flex>
      </Box>
    </Container>
  )
}

HeaderMid.PropTypes = {
  searchQuery: PropTypes.string,
  setSearchQuery: PropTypes.func,
  handleSearchForm: PropTypes.func,
}

HeaderMid.defaultProps = {
  searchQuery: '',
  setSearchQuery: () => null,
  handleSearchForm: () => null,
}
export async function getStaticProps() {
  const { data, errors } = await client.query({
    query: GET_SEARCH_RESULTS,
  })
  const defaultProps = {
    props: {
      data: { ...data, slug: 'slug' },
    },
    revalidate: 1,
  }
}

export default HeaderMid
