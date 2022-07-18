import { extendTheme, theme as base } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brand: {
      title: '#444444',
      primary: '#40c6ff',
      blue: '#1565c0',
      greySecondary: '#42414d',
      detail: '#66666',
      background: 'rgb(243,243,243)',
      text: 'rgb(153,153,153)',
      footer: 'rgb(102,102,102)',
    },
  },
  fonts: {
    heading: `Montserrat, ${base.fonts?.heading}`,
    body: `Inter, ${base.fonts?.body}`,
  },
})

export default theme
