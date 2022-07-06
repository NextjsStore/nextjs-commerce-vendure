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
      <Container maxW="1200px" p="20px 0">
        <Flex>
          <Box w="30%">
            <Link href="/">
              <Image src={LogoeBay.src} />
            </Link>
          </Box>
          <Box w="60%">
            <FormControl
              id="searchform"
              onSubmit={handleSubmit}
              width="100%"
              display="flex"
              position="relative"
            >
              <Select
                onChange={(e) => changeSearchQuery(e)}
                name=""
                float="left"
                h="36px"
                fontSize="15px"
                w="45%"
                borderRadius="50px 0px 0px 50px"
                border="1px solid #d1d3d4"
                borderRight="none"
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
                color="#666"
                w="100%"
                border="1px solid #d1d3d4"
                height="36px"
                padding=" 0px 95px 0px 15px"
                fontSize="15px"
                fontFamily=" Mulish,sans-serif"
                fontWeight=" 400"
                borderRadius=" 0px 50px 50px 0px"
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
                backgroundColor="transparent"
                borderRadius=" 0px 50px 50px 0px"
              >
                <BiSearch />
              </Button>
            </FormControl>
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
    </Box>
  )
}


export default HeaderMid
