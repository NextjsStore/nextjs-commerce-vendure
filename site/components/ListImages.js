import * as React from 'react'
import Image1 from '../assets/image_1.png'
import Image2 from '../assets/image_2.png'
import Image3 from '../assets/image_3.png'
import Image4 from '../assets/image_4.png'
import Image5 from '../assets/image_5.png'
import Image6 from '../assets/image_6.png'
import Image7 from '../assets/image_7.png'
import Link from 'next/link'
import Image from 'next/image'

import { Flex, Spacer, Box } from '@chakra-ui/react'

const ListImages = () => {
  return (
    <>
      <Flex>
        <Box w="33%">
          <Box>
            <Link href="/product/clean-business-card">
              <a>
                <Image
                  width={426}
                  height={203}
                  layout="fixed"
                  src={Image1.src}
                  alt=""
                />
              </a>
            </Link>
          </Box>
          <Box>
            <Link href="/product/softcover-trade-book">
              <a>
                <Image
                  width={426}
                  height={203}
                  layout="fixed"
                  src={Image2.src}
                  alt=""
                />
              </a>
            </Link>
          </Box>
        </Box>
        <Spacer />
        <Box w="33%">
          <Link href=" /shop">
            <a>
              <Image
                width={430}
                height={430}
                layout="fixed"
                src={Image3.src}
                alt=""
              />
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
                        <Image
                          width={201}
                          height={201}
                          layout="fixed"
                          src={Image4.src}
                          alt=""
                        />
                      </a>
                    </Link>
                  </Box>
                  <Spacer />
                  <Box p="4" bg="green.400">
                    <Link href="/product/sharp-contrast">
                      <a>
                        <Image
                          width={201}
                          height={201}
                          layout="fixed"
                          src={Image5.src}
                          alt=""
                        />
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
                        <Image
                          width={201}
                          height={201}
                          layout="fixed"
                          src={Image6.src}
                          alt=""
                        />
                      </a>
                    </Link>
                  </Box>
                  <Spacer />
                  <Box p="4" bg="green.400">
                    <Link href="/product/tiny-square-card">
                      <a>
                        <Image
                          width={201}
                          height={201}
                          layout="fixed"
                          src={Image7.src}
                          alt=""
                        />
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
export default ListImages
