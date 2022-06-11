import * as React from 'react'

import {
  Container,
  Box,
  Center,
  Image,
  Heading,
  useTheme,
} from '@chakra-ui/react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import styled from '@emotion/styled'

const SHeading = styled(Heading)`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;fgf
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
    return (
      <Carousel showThumbs={false} infiniteLoop={true}>
        {children}
      </Carousel>
    )
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
        <Wrapper>
          {brands.map((element) => (
            <div>
              <Image src={element.imageUrl} />
            </div>
          ))}
        </Wrapper>
      </Center>
    </Container>
  )
}
