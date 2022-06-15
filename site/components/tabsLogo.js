import * as React from 'react'

import {
  Container,
  Box,
  Center,
  Image,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react'
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
export default function Logo(props) {
  const { brands } = props
  return (
    <Container>
      <Box>
        <Center>
          <SHeading>OUTLET BRAND STUFF</SHeading>
        </Center>
      </Box>
      <Center>
        <SimpleGrid columns={7}>
          {brands.map((element) => (
            <div>
              <Image src={element.imageUrl} border="1px solid #efefef" m="10" />
            </div>
          ))}
        </SimpleGrid>
      </Center>
    </Container>
  )
}
