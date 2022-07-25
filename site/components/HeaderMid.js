import React from 'react'
import { BiSearch } from 'react-icons/bi'
import LogoeBay from '../assets/ebaylogo.png'
import Link from 'next/link'
import CartIcon from './cart/CartIcon'
import { useState } from 'react'
import {
  Container,
  Box,
  Select,
  Flex,
  FormControl,
  Image,
  Input,
  Button,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'

const HeaderMid = (props) => {
  const { categories } = props
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
    <Box borderBottom="1px solid #eee">
      <Container
        maxW={{
          md: '768px',
          lg: '960px',
          xl: '1200px',
        }}
        p="6"
      >
        <Box display={{ base: 'block', sm: 'block', md: 'flex' }}>
          <Box
            w={{ sm: '100%', md: '30%' }}
            display={{ base: 'flex', sm: 'flex', md: 'block' }}
            pb={{ base: '4', sm: '4', md: '0' }}
            justifyContent="center"
          >
            <Link href="/">
              <a>
                <Image src={LogoeBay.src} />
              </a>
            </Link>
          </Box>
          <Box display="flex" w={{ sm: '100%', md: '70%' }}>
            <Box w={{ sm: '90%', md: '90%' }}>
              <FormControl
                id="searchform"
                onSubmit={handleSubmit}
                width="100%"
                display="flex"
                position="relative"
              >
                <Select
                  onChange={changeSearchQuery}
                  name=""
                  float="left"
                  h="36px"
                  fontSize="15px"
                  w="45%"
                  borderRadius="50px 0px 0px 50px"
                  border="1px solid #d1d3d4"
                  borderRight="none"
                  _focusVisible={{
                    zIndex: '0',
                  }}
                >
                  <option value="">Shop by collection</option>
                  <option value="">Uncategorized</option>
                  {categories.length > 0 &&
                    categories.map((item) => (
                      <option key={item} value={item.slug}>
                        ---{item.name}---
                      </option>
                    ))}
                </Select>
                <Input
                  type="text"
                  placeholder="What are you looking for..."
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event?.target?.value)}
                  outline="none"
                  color="brand.detail"
                  w="100%"
                  border="1px solid #d1d3d4"
                  height="36px"
                  padding=" 0px 95px 0px 15px"
                  fontSize="15px"
                  fontFamily=" Mulish,sans-serif"
                  fontWeight=" 400"
                  borderRadius=" 0px 50px 50px 0px"
                  _focusVisible={{
                    zIndex: '0',
                  }}
                />
                <Button
                  type="submit"
                  onClick={handleSubmit}
                  top=" 0px"
                  right="10px"
                  w=" 60px"
                  h="36px"
                  p="0"
                  zIndex="10"
                  overflow="hidden"
                  position="absolute"
                  borderLeft=" 1px solid #d1d3d4"
                  borderRadius=" 0px 50px 50px 0px"
                  _hover={{ bg: '#fff' }}
                  variant="ghost"
                >
                  <BiSearch />
                </Button>
              </FormControl>
            </Box>
            <Box
              w={{ sm: '10%', md: '10%' }}
              display="flex"
              justifyContent="flex-end"
              alignContent="center"
              flexWrap="wrap"
            >
              <CartIcon />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default HeaderMid
