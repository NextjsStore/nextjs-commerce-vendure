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
import Link from 'next/link'

const DealsOfDay = (props) => {
  const { productsdeal } = props
  return (
    <Container
      pt="10"
      maxW={{
        md: '768px',
        lg: '960px',
        xl: '1200px',
      }}
      pb="10"
    >
      <Box>
        <Center>
          <Heading
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
      <Center position="relative">
        <Box display={{ sm: 'block', md: 'block', lg: 'flex', xl: 'flex' }}>
          {productdeal.length > 1 &&
            productdeal.map((item) => (
              <Box key={item} display={{ sm: 'block', md: 'flex' }}>
                <Box>
                  <Image src={item.assets[0].source} alt="" />
                  <Box position="absolute" ml="5" top="5">
                    <Circle size="40px" bg="brand.primary" color="#fff">
                      -22%
                    </Circle>
                  </Box>
                </Box>
                <Box ml="6">
                  <Link href={`/product/${item.slug}`}>
                    <a>
                      <Text fontSize="xl">{item.name}</Text>
                    </a>
                  </Link>
                  <Box fontSize="20" fontWeight="bold" display="flex">
                    <Text
                      color="#999"
                      m="0px 20px 0px 0px"
                      textDecoration="line-through"
                    >
                      ${item.variants[0].price / 100}
                    </Text>
                  </Box>
                  <Box
                    color="brand.detail"
                    m="18px 8px 27px 0px"
                    dangerouslySetInnerHTML={{
                      __html: item.description,
                    }}
                  />
                  <CountDown />
                  <Box>
                    <Link href={`/product/${item.slug}`}>
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
              </Box>
            ))}
        </Box>
      </Center>
    </Container>
  )
}
export default DealsOfDay
