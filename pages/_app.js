import '../styles/globals.css'
import Header from "../SharedComponents/Header"

function MyApp({ Component, pageProps }) {
  return <div>
    <Header />
    <Component {...pageProps} />
  </div>
}

export default MyApp
