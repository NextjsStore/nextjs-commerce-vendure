import * as React from 'react'
import { useRouter } from 'next/router'
import { Box, Button, Heading, Center, Flex } from '@chakra-ui/react'

const Tab = (props) => {
  const { collections } = props
  // console.log('categories:', collections)
  const router = useRouter()
  const handleSubmit = (value) => {
    //console.log(value);
    router.push(`?slug=${value}`)
  }
  return (
    <Box pt="6">
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
          NEW PRODUCT
        </Heading>
      </Center>
      <Box
        maxW={{
          md: '768px',
          lg: '960px',
          xl: '1200px',
        }}
        m="12px auto"
      >
        <Center>
          <Flex direction={['column', 'column', 'row', 'row']}>
            <Box pr="5" pt="2">
              <Button
                onClick={() => handleSubmit('')}
                border="1px solid #ccc"
                bg="#fff"
                p="10px 20px"
                color="brand.detail"
                _hover={{ bg: 'brand.primary', color: ' white' }}
                borderRadius="50px"
                w="100%"
              >
                All Product
              </Button>
            </Box>
            <Box display={{ sm: 'block', md: 'flex', lg: 'flex', xl: 'flex' }}>
              {collections.length > 0 &&
                collections.map((item) => (
                  <Box key={item} pr="5" pt="2">
                    <a>
                      <Button
                        onClick={() => handleSubmit(`${item.slug}`)}
                        border="1px solid #ccc"
                        bg="#fff"
                        p="10px 20px"
                        color="brand.detail"
                        _hover={{ bg: 'brand.primary', color: ' white' }}
                        borderRadius="50px"
                        w="100%"
                      >
                        {item.name}
                      </Button>
                    </a>
                  </Box>
                ))}
            </Box>
          </Flex>
        </Center>
      </Box>
    </Box>
  )
}
export default Tab
