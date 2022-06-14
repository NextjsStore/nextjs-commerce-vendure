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

export default function NewImageList() {
  return (
    <>
      <Flex>
        <Box w="33%">
          <Box>
            <Link href="/product/clean-business-card">
              <a>
                <Image src={Image1.src} w="100%" />
              </a>
            </Link>
          </Box>
          <Box>
            <Link href="/product/softcover-trade-book">
              <a>
                <Image src={Image2.src} w="100%" />
              </a>
            </Link>
          </Box>
        </Box>
        <Spacer />
        <Box w="33%">
          <Link href=" /shop">
            <a>
              <Image src={Image3.src} w="100%" />
            </a>
          </Link>
        </Box>
        <Spacer />
        <Box w="33%">
          <Box>
            <Flex>
              <Box p="4" bg="red.400">
                <Flex>
                  <Box p="4" bg="red.400">
                    <Link href="/product/dot-luck">
                      <a>
                        <Image src={Image4.src} w="100%" />
                      </a>
                    </Link>
                  </Box>
                  <Spacer />
                  <Box p="4" bg="green.400">
                    <Link href="/product/sharp-contrast">
                      <a>
                        <Image src={Image5.src} w="100%" />
                      </a>
                    </Link>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Box>
          <Box>
            <Flex>
              <Box p="4" bg="red.400">
                <Flex>
                  <Box p="4" bg="red.400">
                    <Link href="/product/web2print">
                      <a>
                        <Image src={Image6.src} w="100%" />
                      </a>
                    </Link>
                  </Box>
                  <Spacer />
                  <Box p="4" bg="green.400">
                    <Link href="/product/tiny-square-card">
                      <a>
                        <Image src={Image7.src} w="100%" />
                      </a>
                    </Link>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </>
  )
}
