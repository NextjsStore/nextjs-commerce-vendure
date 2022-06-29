import * as React from 'react'
import { useRouter } from 'next/router'
import { Container, Box, Button, Heading, Center } from '@chakra-ui/react'

const Tab = (props) => {
  const { collections } = props
  // console.log('categories:', collections)
  const router = useRouter()
  const handleSubmit = (value) => {
    //console.log(value);
    router.push(`?slug=${value}`)
  }
  return (
    <Box>
      <Center>
        <Heading>
          <span>NEW PRODUCT</span>
        </Heading>
      </Center>
      <Box>
        <Box>
          <Button onClick={() => handleSubmit(`SmartPhone`)}>
            All Product
          </Button>
        </Box>
        <Box>
          {collections.length
            ? collections.map((item) => (
                <Box key={item}>
                  <a>
                    <Button onClick={() => handleSubmit(`${item.slug}`)}>
                      {item.name}
                    </Button>
                  </a>
                </Box>
              ))
            : ''}
        </Box>
      </Box>
    </Box>
  )
}
export default Tab
