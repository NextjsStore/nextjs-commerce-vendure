import * as React from 'react'
import Image1 from '../assets/seller_1.png'
import Image2 from '../assets/seller_2.png'
import Image3 from '../assets/seller_3.png'
import Image4 from '../assets/seller_4.png'
import Image5 from '../assets/seller_5.png'
import Image6 from '../assets/seller_6.png'
import Image7 from '../assets/seller_7.png'
import Image8 from '../assets/seller_8.png'
import Image9 from '../assets/seller_9.png'
import Link from 'next/link'
import { Image, Box } from '@chakra-ui/react'

const NewImageList = () => {
  return (
    <Box pt="50" display={{ base: 'block', sm: 'block', md: 'flex' }}>
      <Box w={{ base: '100%', sm: '100%', md: '25%' }}>
        <Link href="/shop">
          <a>
            <Image src={Image1.src} w={{ sm: '100%', md: '95%' }} />
          </a>
        </Link>
      </Box>
      <Box w={{ base: '100%', sm: '100%', md: '75%' }}>
        <Box pb="5" display={{ base: 'block', sm: 'block', md: 'flex' }}>
          <Box w={{ base: '100%', sm: '100%', md: '33%' }}>
            <Link href="/product/pro-card-visit-a1">
              <a>
                <Image src={Image2.src} w="100%" />
              </a>
            </Link>
          </Box>
          <Box
            w={{ base: '100%', sm: '100%', md: '21%' }}
            ml={{ sm: '0', md: '5' }}
          >
            <Link href="/product/travel-agency-flyer">
              <a>
                <Image src={Image3.src} w="100%" />
              </a>
            </Link>
          </Box>
          <Box
            w={{ base: '100%', sm: '100%', md: '21%' }}
            ml={{ sm: '0', md: '5' }}
          >
            <Link href="/product/travel-agency-flyer">
              <a>
                <Image src={Image4.src} w="100%" />
              </a>
            </Link>
          </Box>
          <Box
            w={{ base: '100%', sm: '100%', md: '21%' }}
            ml={{ sm: '0', md: '5' }}
          >
            <Link href="/product/business-card-with-print-option/">
              <a>
                <Image src={Image5.src} w="100%" />
              </a>
            </Link>
          </Box>
        </Box>
        <Box display={{ base: 'block', sm: 'block', md: 'flex' }}>
          <Box w={{ base: '100%', sm: '100%', md: '21%' }}>
            <Link href=" /product/poster-with-print-option">
              <a>
                <Image src={Image6.src} w="100%" />
              </a>
            </Link>
          </Box>
          <Box
            w={{ base: '100%', sm: '100%', md: '33%' }}
            ml={{ sm: '0', md: '5' }}
          >
            <Link href=" /product/poster-with-print-option">
              <a>
                <Image src={Image7.src} w="100%" />
              </a>
            </Link>
          </Box>
          <Box
            w={{ base: '100%', sm: '100%', md: '21%' }}
            ml={{ sm: '0', md: '5' }}
          >
            <Link href=" /product/color-with-print-option">
              <a>
                <Image src={Image8.src} w="100%" />
              </a>
            </Link>
          </Box>
          <Box
            w={{ base: '100%', sm: '100%', md: '21%' }}
            ml={{ sm: '0', md: '5' }}
          >
            <Link href="/product/dot-luck">
              <a>
                <Image src={Image9.src} w="100%" />
              </a>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
export default NewImageList
