import '../styles/globals.css'
import Layout from '../components/common/Layout/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout categories={pageProps.categories}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
