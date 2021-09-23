import { ChakraProvider } from "@chakra-ui/react"

const MyApp = ({ Component, pageProps }) => {
    // 2. Use at the root of your app
    return (
        <ChakraProvider>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}

export default MyApp
