import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Header from "../SharedComponents/Header"

function MyApp({ Component, pageProps }) {
	return <div className="w-full h-screen">
		<Header />
		<Component {...pageProps} />
	</div>
}

export default MyApp
