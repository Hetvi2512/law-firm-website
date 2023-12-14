import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'
// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"
// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  fonts: {
    heading: `'Playfair Display', sans-serif`,
    body: `'Playfair Display', sans-serif`,
  },
  colors: {
    brand: {
      100: "#F0AF42",
      200: "#72A1E5",
      300: "#F2E9E4",
      400: "#C9BEAB",
      900: "#1a202c",
    },
  },
})
function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App;