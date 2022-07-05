import * as React from 'react'
import { useRouter } from 'next/router'
import { Container, Box, Button, Heading, Center, Flex } from '@chakra-ui/react'

const TabSeller = (props) => {
  const { collections } = props
  const router = useRouter()
  const handleSubmit = (value) => {
    //console.log(value);
    router.push(`?slug1=${value}`)
  }
  return (
    <Box pt="50">
      <Center>
        <Heading
          as="h3"
          size="lg"
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
          Best Seller
        </Heading>
      </Center>
      <Box
        w={{
          md: '768px',
          lg: '960px',
          xl: '1200px',
          '2xl': '1536px',
        }}
        m="12px auto"
      >
        <Center>
          <Box display={{ sm: 'block', md: 'flex', lg: 'flex', xl: 'flex' }}>
            <Box>
              <Button
                onClick={() => handleSubmit(`SmartPhone`)}
                border="1px solid #ccc"
                bg="#fff"
                p="10px 20px"
                mr="5"
                color="brand.detail"
                _hover={{ bg: 'brand.primary', color: ' white' }}
                borderRadius="50px"
              >
                All Product
              </Button>
            </Box>
            <Box display={{ sm: 'block', md: 'flex', lg: 'flex', xl: 'flex' }}>
              {collections.length
                ? collections.map((item) => (
                    <Box key={item}>
                      <Button
                        onClick={() => handleSubmit(`${item.slug}`)}
                        border="1px solid #ccc"
                        bg="#fff"
                        p="10px 20px"
                        mr="5"
                        color="brand.detail"
                        _hover={{ bg: 'brand.primary', color: ' white' }}
                        borderRadius="50px"
                      >
                        {item.name}
                      </Button>
                    </Box>
                  ))
                : ''}
            </Box>
          </Box>
        </Center>
      </Box>
    </Box>
  )
}
export default TabSeller
