import * as React from 'react'
import Image1 from '../assets/image_1.png'
import Image2 from '../assets/image_2.png'
import Image3 from '../assets/image_3.png'
import Image4 from '../assets/image_4.png'
import Image5 from '../assets/image_5.png'
import Image6 from '../assets/image_6.png'
import Image7 from '../assets/image_7.png'
import Link from 'next/link'

import { Flex, Spacer, Box, Image } from '@chakra-ui/react'

const ListImages = () => {
  return (
    <Flex pt="50">
      <Box w="33%">
        <Box>
          <Link href="/product/clean-business-card">
            <a>
              <Image layout="fixed" src={Image1.src} />
            </a>
          </Link>
        </Box>
        <Box mt="6">
          <Link href="/product/softcover-trade-book">
            <a>
              <Image layout="fixed" src={Image2.src} />
            </a>
          </Link>
        </Box>
      </Box>
      <Spacer />
      <Box w="33%">
        <Link href=" /shop">
          <a>
            <Image layout="fixed" src={Image3.src} />
          </a>
        </Link>
      </Box>
      <Box
        w="33%"
        display="flex"
        flexWrap=" wrap"
        flexDirection="row"
        justifyContent="flex-end"
        alignItems="flex-start"
      >
        <Box>
          <Flex pb="5">
            <Box pr="6">
              <Link href="/product/dot-luck">
                <a>
                  <Image layout="fixed" src={Image4.src} />
                </a>
              </Link>
            </Box>
            <Box>
              <Link href="/product/sharp-contrast">
                <a>
                  <Image layout="fixed" src={Image5.src} />
                </a>
              </Link>
            </Box>
          </Flex>
        </Box>
        <Box>
          <Flex>
            <Box pr="6">
              <Link href="/product/web2print">
                <a>
                  <Image layout="fixed" src={Image6.src} />
                </a>
              </Link>
            </Box>
            <Spacer />
            <Box>
              <Link href="/product/tiny-square-card">
                <a>
                  <Image layout="fixed" src={Image7.src} />
                </a>
              </Link>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  )
}
export default ListImages
