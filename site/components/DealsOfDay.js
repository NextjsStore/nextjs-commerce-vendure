import React from 'react'
import {
  Container,
  Flex,
  Center,
  Heading,
  Circle,
  Box,
  Text,
  Button,
} from '@chakra-ui/react'

import CountDown from './Countdown'
import Image_1 from '../assets/deals_of_day_1.jpg'
import Image_2 from '../assets/deals_of_day_2.jpg'
import Link from 'next/link'
import Image from 'next/image'

const DealsOfDay = () => {
  return (
    <Container pt="10" maxW="1200px" pb="10">
      <Box>
        <Center>
          <Heading
            as="h3"
            size="lg"
            pb="6"
            color="brand.title"
            fontFamily="Merriweather"
            _before={{
              w: '15px',
              h: '1px',
              ml: '-6',
              mt: '5',
              content: `""`,
              position: 'absolute',
              backgroundColor: '#40c6ff',
            }}
            _after={{
              mt: '5',
              ml: '2',
              w: '15px',
              h: '1px',
              content: `""`,
              position: 'absolute',
              backgroundColor: '#40c6ff',
            }}
          >
            DEALS OF DAY
          </Heading>
        </Center>
      </Box>
      <Center>
        <Flex>
          <Box>
            <Image width={266} height={270} layout="fixed" src={Image_1.src} />
            <Box position="absolute" mt="-250" ml="10">
              <Circle size="40px" bg="brand.primary" color="#fff">
                -22%
              </Circle>
            </Box>
          </Box>
          <Box ml="6">
            <Link href="/product/softcover-trade-book">
              <Text fontSize="2xl">Softcover Trade Book</Text>
            </Link>
            <Box fontSize="20" fontWeight="bold" display="flex">
              <Text
                color="#999"
                m="0px 20px 0px 0px"
                textDecoration="line-through"
              >
                $5700
              </Text>
              <Text m="0" color="brand.primary">
                $2600
              </Text>
            </Box>
            <Text color="#666" m="18px 8px 27px 0px">
              Black finish thin profile metal pole and base. White polyresin
              torchiere shade.
            </Text>
            <CountDown />
            <Box>
              <Link href="/product/softcover-trade-book">
                <Button
                  fontSize="14px"
                  fontWeight="600"
                  bg="#fff"
                  border="2px solid #40c6ff"
                  borderRadius="50px"
                  mt="6"
                  color="brand.primary"
                >
                  SHOP NOW
                </Button>
              </Link>
            </Box>
          </Box>
          <Box>
            <Image width={266} height={270} layout="fixed" src={Image_2.src} />
            <Box position="absolute" mt="-250" ml="10">
              <Circle size="40px" bg="brand.primary" color="#fff">
                -39%
              </Circle>
            </Box>
          </Box>
          <Box ml="6">
            <Link href="/product/agency-books">
              <Text fontSize="2xl" noOfLines={1} color="#323232">
                Agency Books
              </Text>
            </Link>
            <Box fontSize="20" fontWeight="bold" display="flex">
              <Text
                color="#999"
                m="0px 20px 0px 0px"
                textDecoration="line-through"
              >
                $10000
              </Text>
              <Text color="brand.primary" m=" 0">
                $7800
              </Text>
            </Box>
            <Text color="#666" m="18px 8px 27px 0px">
              Caramel Ice Cream with a Swirl of Caramel & Fudge Covered Caramel
              Chunks. Caramel lovers wont want to...
            </Text>
            <CountDown />
            <Box>
              <Link href="/product/agency-books">
                <Button
                  fontSize="14px"
                  fontWeight="600"
                  bg="#fff"
                  border="2px solid #40c6ff"
                  borderRadius="50px"
                  mt="6"
                  color="brand.primary"
                >
                  SHOP NOW
                </Button>
              </Link>
            </Box>
          </Box>
        </Flex>
      </Center>
    </Container>
  )
}
export default DealsOfDay
