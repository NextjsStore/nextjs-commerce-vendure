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
      <Box>
        <Box>
          <Button onClick={() => handleSubmit(`SmartPhone`)}>
            All Product
          </Button>
        </Box>
        <div>
          {collections.length > 0 &&
            collections.map((item) => (
              <Box key={item}>
                <Button onClick={() => handleSubmit(item.slug)}>
                  {item.name}
                </Button>
              </Box>
            ))}
        </div>
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
