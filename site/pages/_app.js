import '../styles/globals.css'
import Layout from '../components/common/Layout/Layout'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../styles/theme'
import '../styles/theme/styles.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
