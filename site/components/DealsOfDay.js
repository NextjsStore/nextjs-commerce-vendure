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
    <Container>
      <Box>
        <Center>
          <Heading
            as="h3"
            size="2xl"
            noOfLines={1}
            align="center"
            color="#323232"
          >
            <span>DEALS OF DAY</span>
          </Heading>
        </Center>
      </Box>
      <Center>
        <Container w="90%">
          <Flex>
            <Flex>
              <Box>
                <Image
                  width={266}
                  height={270}
                  layout="fixed"
                  src={Image_1.src}
                />
                <Box position="absolute" mt="-250" ml="10">
                  <Circle size="40px" bg="#40c6ff" color="#fff">
                    -22%
                  </Circle>
                </Box>
              </Box>
              <Box style={{ marginLeft: 30 }}>
                <Link href="/product/softcover-trade-book">
                  <Heading as="h3" size="2xl" noOfLines={1} color="#323232">
                    Softcover Trade Book
                  </Heading>
                </Link>
                <Box
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    display: 'flex',
                  }}
                >
                  <Text
                    style={{
                      color: '#999',
                      margin: '0px 20px 0px 0px',
                      textDecoration: 'line-through',
                    }}
                  >
                    $5700
                  </Text>
                  <Text style={{ color: 'rgb(64,198,255)', margin: 0 }}>
                    $2600
                  </Text>
                </Box>
                <Text style={{ color: '#666', margin: '18px 8px 27px 0px' }}>
                  Black finish thin profile metal pole and base. White polyresin
                  torchiere shade.
                </Text>
                <CountDown />
                <Box>
                  <Link href="/product/softcover-trade-book">
                    <Button sx={{ fontSize: '14px', fontWeight: '600' }}>
                      SHOP NOW
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Flex>
            <Flex>
              <Box>
                <Image
                  width={266}
                  height={270}
                  layout="fixed"
                  src={Image_2.src}
                />
                <Box position="absolute" mt="-250" ml="10">
                  <Circle size="40px" bg="#40c6ff" color="#fff">
                    -39%
                  </Circle>
                </Box>
              </Box>
              <Box style={{ marginLeft: 30 }}>
                <Link href="/product/agency-books">
                  <Heading as="h3" size="2xl" noOfLines={1} color="#323232">
                    Agency Books
                  </Heading>
                </Link>
                <Box
                  style={{ fontSize: 20, fontWeight: 'bold', display: 'flex' }}
                >
                  <Text
                    style={{
                      color: '#999',
                      margin: '0px 20px 0px 0px',
                      textDecoration: 'line-through',
                    }}
                  >
                    $10000
                  </Text>
                  <Text style={{ color: 'rgb(64,198,255)', margin: 0 }}>
                    $7800
                  </Text>
                </Box>
                <Text style={{ color: '#666', margin: '18px 8px 27px 0px' }}>
                  Caramel Ice Cream with a Swirl of Caramel & Fudge Covered
                  Caramel Chunks. Caramel lovers wont want to...
                </Text>
                <CountDown />
                <Box>
                  <Link href="/product/agency-books">
                    <Button sx={{ fontSize: '14px', fontWeight: '600' }}>
                      SHOP NOW
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Flex>
          </Flex>
        </Container>
      </Center>
    </Container>
  )
}
export default DealsOfDay
