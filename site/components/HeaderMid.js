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
    <Container w="1200px" m="15px auto">
      <Flex w="100%" display="flex">
        <Box w="30%" display="flex">
          <Link href="/">
            <Image src={LogoeBay.src} />
          </Link>
        </Box>
        <Box w="60%" display="flex">
          <form id="searchform" onSubmit={handleSubmit} style={styles.from}>
            <select
              onChange={(e) => changeSearchQuery(e)}
              name=""
              style={styles.select}
            >
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
              style={styles.input}
            />
            <button type="submit" onClick={handleSubmit} style={styles.button}>
              <BiSearch />
            </button>
          </form>
        </Box>
        <Box
          w="10%"
          display="flex"
          justifyContent="flex-end"
          alignContent="center"
          flexWrap="wrap"
        >
          <CartIcon />
        </Box>
      </Flex>
    </Container>
  )
}

export default HeaderMid

const styles = {
  select: {
    color: '#666',
    float: 'left',
    width: '25%',
    height: '36px',
    fontSize: '15px',
    minWidth: '187px',
    fontFamily: "Mulish,'sans-serif",
    fontWeight: '400',
    borderRight: ' none',
    paddingLeft: '15px',
    borderTopLeftRadius: '50px',
    borderBottomLeftRadius: '50px',
    border: '1px solid #d1d3d4',
  },
  input: {
    color: '#666',
    width: '100%',
    border: '1px solid #d1d3d4',
    height: '36px',
    padding: ' 0px 95px 0px 15px',
    fontSize: '15px',
    fontFamily: ' Mulish,sans-serif',
    fontWeight: ' 400',
    borderRadius: ' 0px 50px 50px 0px',
  },
  from: {
    width: ' 100%',
    display: 'flex',
    position: 'relative',
  },
  button: {
    top: ' 0px',
    right: '10px',
    width: ' 60px',
    border: 'none',
    height: '36px',
    padding: '0',
    zIndex: '10',
    overflow: 'hidden',
    position: 'absolute',
    borderLeft: ' 1px solid #d1d3d4',
    backgroundColor: 'transparent',
  },
}
