import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false
  },
  styles: {
    global: (props) => ({
      body: {
        color: mode('gray.700', 'white')(props)
      }
    })
  },
  fonts: {
    heading: "Raleway",
    body: "PT Sans Narrow",
  },
  colors: {
    primary: "#45B3AF",
    secondary: "#196966"
  }
})

export { ChakraProvider as ThemeProvider }
export default theme
