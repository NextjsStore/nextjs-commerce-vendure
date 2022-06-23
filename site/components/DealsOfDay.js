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
  Image,
} from '@chakra-ui/react'
import CountDown from './Countdown'
import Image_1 from '../assets/deals_of_day_1.jpg'
import Image_2 from '../assets/deals_of_day_2.jpg'
import Link from 'next/link'

const DealsOfDay = (props) => {
  const { productsdeal } = props
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
        <Container w="90%" display="flex">
          {productsdeal.length
            ? productsdeal.map((item) => (
                <Flex key={item}>
                  <Box>
                    <Image
                      width={266}
                      height={270}
                      layout="fixed"
                      src={item.assets[0].source}
                      alt=""
                    />
                    <Box position="absolute" mt="-250" ml="10">
                      <Circle size="40px" bg="#40c6ff" color="#fff">
                        -22%
                      </Circle>
                    </Box>
                  </Box>
                  <Box style={{ marginLeft: 30 }}>
                    <Link href={`/product/${item.slug}`}>
                      <a>
                        <Heading
                          as="h3"
                          size="2xl"
                          noOfLines={1}
                          color="#323232"
                          raphy
                        >
                          {item.name}
                        </Heading>
                      </a>
                    </Link>
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        display: 'flex',
                      }}
                    >
                      <Text style={{ color: 'rgb(64,198,255)', margin: 0 }}>
                        ${item.variants[0].price / 100}
                      </Text>
                    </Text>
                    <Box
                      style={{
                        color: '#666',
                        width: '500px',
                        overflow: 'hidden',
                        textOverFlow: 'ellipsis',
                        lineHeight: '25px',
                        height: '95px',
                        margin: '18px 8px 27px 0px',
                      }}
                      dangerouslySetInnerHTML={{
                        __html: item.description,
                      }}
                    />
                    <CountDown />
                    <Box>
                      <Link href={`/product/${item.slug}`}>
                        <a>
                          <Button sx={{ fontSize: '14px', fontWeight: '600' }}>
                            SHOP NOW
                          </Button>
                        </a>
                      </Link>
                    </Box>
                  </Box>
                </Flex>
              ))
            : ''}
        </Container>
      </Center>
    </Container>
  )
}
export default DealsOfDay
