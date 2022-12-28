import * as React from 'react'
import { useRouter } from 'next/router'
import { Box, Heading, Center, Tabs, TabList, Tab } from '@chakra-ui/react'

const TabHeader = (props) => {
  const { collections, products } = props
  const router = useRouter()
  const handleSubmit = (value) => {
    //console.log(value);
    router.push(`?s=${value}`)
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
          <Tabs variant="soft-rounded" colorScheme="blue">
            <TabList>
              <Tab
                onClick={() => handleSubmit('')}
                border="1px solid #ccc"
                bg="#fff"
                p="10px 20px"
                color="brand.detail"
                _hover={{ bg: 'brand.primary', color: ' white' }}
                borderRadius="50px"
                w="100%"
                fontWeight="300"
              >
                All Product
              </Tab>
             <Box display={{ sm: 'block', md: 'flex', lg: 'flex', xl: 'flex' }}>
              {collections.length > 0 &&
                collections.map((item) => (
                  <Tab
                    key={item}
                    onClick={() => handleSubmit(`${item.slug}`)}
                    border="1px solid #ccc"
                    bg="#fff"
                    p="10px 20px"
                    color="brand.detail"
                    _hover={{ bg: 'brand.primary', color: ' white' }}
                    borderRadius="50px"
                    w="100%"
                    fontWeight="300"
                    _hover={{ bg: 'brand.primary', color: ' white' }}
                  >
                    {item.name}
                  </Tab>
                ))}
              </Box>
            </TabList>
          </Tabs>
        </Flex>
        </Center>
      </Box>
    </Box>
  )
}
export default TabHeader
