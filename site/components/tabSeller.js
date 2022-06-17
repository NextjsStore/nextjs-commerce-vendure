import * as React from 'react'
import Link from '@mui/material/Link'
import { useRouter } from 'next/router'
import { Container, Box, Button, Heading, Center } from '@chakra-ui/react'

const TabSeller = () => {
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
        <Box>
          <Button onClick={() => handleSubmit(`custom-prints`)}>
            Custom Prints
          </Button>
        </Box>
        <Box>
          <Button onClick={() => handleSubmit(`free-file-check`)}>
            Free file check
          </Button>
        </Box>

        <Box>
          <Button onClick={() => handleSubmit(`graphic-design`)}>
            Graphic Design
          </Button>
        </Box>
        <Box>
          <Button onClick={() => handleSubmit(`mailing`)}>Mailing</Button>
        </Box>
      </Box>
    </Box>
  )
}
export default TabSeller
