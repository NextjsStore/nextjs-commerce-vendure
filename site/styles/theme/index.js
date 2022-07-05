import { extendTheme, theme as base } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brand: {
      title: '#444444',
      primary: '#40c6ff',
      blue: '#1565c0',
      greySecondary: '#42414d',
      detail: '#66666',
    },
  },
  fonts: {
    heading: `Montserrat, ${base.fonts?.heading}`,
    body: `Inter, ${base.fonts?.body}`,
  },
  _after: {
    after: {
      mt: '5',
      ml: '3',
      w: '15px',
      h: '1px',
      content: `""`,
      position: 'absolute',
      backgroundColor: '#40c6ff',
    },
  },
})

export default theme
