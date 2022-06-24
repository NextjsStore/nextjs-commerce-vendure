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
        <Heading>
          <span>Best Seller</span>
        </Heading>
      </Center>
      <Box w="1200px" m="12px auto">
        <Center>
          <Flex>
            <Box>
              <Button
                onClick={() => handleSubmit(`SmartPhone`)}
                style={styles.button}
              >
                All Product
              </Button>
            </Box>
            <Box display="flex">
              {collections.length
                ? collections.map((item) => (
                    <Box key={item}>
                      <Button
                        onClick={() => handleSubmit(`${item.slug}`)}
                        style={styles.button}
                      >
                        {item.name}
                      </Button>
                    </Box>
                  ))
                : ''}
            </Box>
          </Flex>
        </Center>
      </Box>
    </Box>
  )
}
export default TabSeller
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
}
