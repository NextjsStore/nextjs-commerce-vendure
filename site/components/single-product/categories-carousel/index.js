import { isEmpty, isArray } from 'lodash'
import { useState, useRef } from 'react'
import { Box } from '@chakra-ui/react'

const CategoriesCarousel = ({ gallery }) => {
  const activeIndexRef = useRef({ activeIndex: 0 })
  const slideRef = useRef(0)
  const [slide, setSlide] = useState(0)
  const [restartSlide, setRestartSlide] = useState(0)
  const { activeIndex } = activeIndexRef.current

  if (isEmpty(gallery) || !isArray(gallery)) {
    return null
  }
  const nextSlide = () => {
    if (1 === gallery.length) {
      return null
    }
    if (activeIndexRef.current.activeIndex === gallery.length - 1) {
      activeIndexRef.current.activeIndex = 0
      setRestartSlide(restartSlide + 1)
    } else {
      activeIndexRef.current.activeIndex =
        activeIndexRef.current.activeIndex + 1
    }

    slideRef.current = slideRef.current + 1
    setSlide(slideRef.current)
  }

  return (
    <Box mb="15px">
      <Box>
        <span minWidth="0px" display="inline-block">
          Categories:
        </span>
        {gallery.map((item, index) => {
          const opacity =
            activeIndex === index || 1 === gallery.length
              ? 'opacity-10'
              : 'opacity-0'
          return (
            <span color="#676c77" key={item}>
              {item.name}.
            </span>
          )
        })}
      </Box>
    </Box>
  )
}

export default CategoriesCarousel
