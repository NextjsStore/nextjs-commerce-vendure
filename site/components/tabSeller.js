import * as React from 'react'
import Link from '@mui/material/Link'
import { useRouter } from 'next/router'
import { Container, Box, Button, Heading, Center } from '@chakra-ui/react'

const TabSeller = (props) => {
  const { collections } = props
  const router = useRouter()
  const handleSubmit = (value) => {
    //console.log(value);
    router.push(`?slug1=${value}`)
  }
  return (
    <Box>
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
