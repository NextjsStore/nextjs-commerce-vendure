import * as React from 'react'
import { useRouter } from 'next/router'
import {
  Box,
  Button,
  Heading,
  Center,
  Flex,
  extendTheme,
} from '@chakra-ui/react'

const Tab = (props) => {
  const { collections } = props
  // console.log('categories:', collections)
  const router = useRouter()
  const handleSubmit = (value) => {
    //console.log(value);
    router.push(`?slug=${value}`)
  }
  return (
    <Box pt="40">
      <Center>
        <Heading>
          <span style={styles.span}>NEW PRODUCT</span>
        </Heading>
      </Center>
      <Box>
        <Box>
          <Button onClick={() => handleSubmit('')}>All Product</Button>
        </Box>
        <div>
          {collections.length > 0 &&
            collections.map((item) => (
              <Box key={item}>
                <a>
                  <Button onClick={() => handleSubmit(item.slug)}>
                    {item.name}
                  </Button>
                </a>
              </Box>
            ))}
        </div>
      </Box>
    </Box>
  )
}
export default Tab

const styles = {
  button: {
    border: '1px solid #ccc',
    background: '#fff',
    padding: '10px 20px',
    borderRadius: '50px',
    marginRight: '20px',
    fontSize: '16px',
    color: '#666',
  },
  span: {
    '*, *::before, &::after': {
      backgroundColor: '#fff',
    },
  },
}
