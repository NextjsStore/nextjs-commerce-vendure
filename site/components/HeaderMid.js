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

const HeaderMid = () => {
  // const { collections } = props
  // console.log('header mid:', collections)
  const router = useRouter()

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
    <Container w="1200px" m="12px auto">
      <Flex w="100%" display="flex">
        <Box w="30%" display="flex">
          <Link href="/">
            <Image src={LogoeBay.src} />
          </Link>
        </Box>
        <Box w="60%" display="flex">
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
            <button type="submit" onClick={handleSubmit}>
              <BiSearch />
            </button>
          </form>
        </Box>
        <Box w="10%" display="flex">
          <CartIcon />
        </Box>
      </Flex>
    </Container>

    // <Container maxW="2xl" bg="blue.600" centerContent w="700px">
    //   <Box padding="4" bg="blue.400" color="black" maxW="md">
    //     There are many benefits to a joint design and development system. Not
    //     only does it bring benefits to the design team, but it also brings
    //     benefits to engineering teams. It makes sure that our experiences have a
    //     consistent look and feel, not just in our design specs, but in
    //     production.
    //   </Box>
    // </Container>
  )
}

HeaderMid.propTypes = {
  searchQuery: PropTypes.string,
  setSearchQuery: PropTypes.func,
  handleSearchForm: PropTypes.func,
}

HeaderMid.defaultProps = {
  searchQuery: '',
  setSearchQuery: () => null,
  handleSearchForm: () => null,
}

export default HeaderMid
