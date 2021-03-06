import Layout from '../components/Layout'
import "../scss/main.scss";



function MyApp({ Component, pageProps }) {

  
  return (

    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
