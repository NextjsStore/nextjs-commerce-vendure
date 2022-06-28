import React from 'react'
import { AppProvider } from '@lib/context/AppContext'
import { BiSearch } from 'react-icons/bi'
import LogoeBay from '../assets/ebaylogo.png'
import Link from 'next/link'
import CartIcon from './cart/CartIcon'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { Container, Box, Center, Flex, Spacer, Image } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export const PER_PAGE_FIRST = 9
export const PER_PAGE_REST = 12

const HeaderMid = (props) => {
  // console.log('propssssss', props)
  const { categories } = props
  // console.log('categories-header mid', categories)
  const router = useRouter()

  const [searchQuery, setSearchQuery] = useState('')
  const [searchError, setSearchError] = useState('')
  const [queryResultPosts, setQueryResultPosts] = useState({})
  const [showResultInfo, setShowResultInfo] = useState(false)

  const handleSubmit = (event, value) => {
    event.preventDefault()
    setShowResultInfo(false)
    router.push(`/searchresult?slug=${searchQuery}`)
  }

  const changeSearchQuery = (e) => {
    setSearchQuery(e.target.value)
  }

  return (
    <Center>
      <Container maxWidth="lg">
        <Box sx={{ flexGrow: 1 }}>
          <Flex>
            <Box>
              <Link href="/">
                <a>
                  <Image src={LogoeBay.src} alt="" />
                </a>
              </Link>
            </Box>
            <Spacer />
            <Box item xs={9} sm={10} md={8}>
              <form id="searchform" onSubmit={handleSubmit}>
                <select onChange={(e) => changeSearchQuery(e)} name="">
                  <option value="">Shop by collection</option>
                  <option value="">Uncategorized</option>
                  {categories.length
                    ? categories.map((item) => (
                        <option key={item} value={item.slug}>
                          ---{item.name}---
                        </option>
                      ))
                    : ''}
                </select>
                <input
                  type="text"
                  placeholder="What are you looking for..."
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event?.target?.value)}
                />
                <button type="submit" onClick={handleSubmit}>
                  <BiSearch />
                </button>
              </form>
            </Box>
            <Spacer />
            <Box item xs={3} sm={2} md={1}>
              <a>
                <CartIcon />
              </a>
            </Box>
          </Flex>
        </Box>
      </Container>
    </Center>
  )
}

export default HeaderMid
