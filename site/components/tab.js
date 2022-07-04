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
      <Box w="1200px" m="12px auto">
        <Center>
          <Flex>
            <Box>
              <Button
                onClick={() => handleSubmit('')}
                border="1px solid #ccc"
                bg="#fff"
                p="10px 20px"
                mr="5"
                color="#666"
                _hover={{ bg: 'brand.primary', color: ' white' }}
                borderRadius="50px"
              >
                All Product
              </Button>
            </Box>
            <Box display="flex">
              {collections.length > 0 &&
                 collections.map((item) => (
                    <Box key={item}>
                      <a>
                        <Button
                          onClick={() => handleSubmit(`${item.slug}`)}
                          border="1px solid #ccc"
                          bg="#fff"
                          p="10px 20px"
                          mr="5"
                          color="#666"
                          _hover={{ bg: 'brand.primary', color: ' white' }}
                          borderRadius="50px"
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
