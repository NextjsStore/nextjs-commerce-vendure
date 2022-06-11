import * as React from 'react'
import { Flex, Heading, Button, Center, ButtonProps } from '@chakra-ui/react'
import { Typography } from '@mui/material'
import { useRouter } from 'next/router'

export default function Tab() {
  const router = useRouter()
  const handleSubmit = (value) => {
    //console.log(value);
    router.push(`?slug=${value}`)
  }
  return (
    <>
      <Heading as="h3" size="2xl" noOfLines={1} align="center" color="#323232">
        <span>NEW PRODUCT</span>
      </Heading>
      <Center>
        <Flex justifyContent="center" alignItems="center">
          <Button onClick={() => handleSubmit(`SmartPhone`)}>
            All Product
          </Button>
          <Button
            colorScheme={'red'}
            onClick={() => handleSubmit(`custom-prints`)}
          >
            Custom Prints
          </Button>
          <Button onClick={() => handleSubmit(`free-file-check`)}>
            Free file check
          </Button>
          <Button onClick={() => handleSubmit(`graphic-design`)}>
            Graphic Design
          </Button>
          <Button onClick={() => handleSubmit(`mailing`)}>Mailing</Button>
        </Flex>
      </Center>
    </>
  )
}
