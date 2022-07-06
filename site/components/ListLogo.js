import * as React from 'react'
import { Box, Center, Image, Heading, SimpleGrid } from '@chakra-ui/react'
import styled from '@emotion/styled'

const SHeading = styled(Heading)`
  padding: 32px;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`
const Wrapper = ({ children }) => {
  const count = React.Children.count(children)

  if (count >= 7) {
    return { children }
  }
  return (
    <Box border="1px solid #efefef" m="10">
      {children}
    </Box>
  )
}

const Logo = (props) => {
  const { brands } = props
  return (
    <Box pt="50">
      <Center>
        <Heading
          color="brand.title"
          as="h3"
          size="lg"
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
          OUTLET BRAND STUFF
        </Heading>
      </Center>
      <Center>
        <SimpleGrid columns={{ sm: '2', md: '3', lg: '6' }}>
          {brands?.map((element) => (
            <Image
              key={element.id}
              src={element.imageUrl}
              border="1px solid #efefef"
              m="6"
            />
          ))}
        </SimpleGrid>
      </Center>
    </Box>
  )
}
export default Logo
