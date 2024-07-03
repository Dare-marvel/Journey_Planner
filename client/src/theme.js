import { extendTheme } from "@chakra-ui/react"

const theme = {
  config: {
    initialColorMode: 'light',
    useSystemColorMode: true,
  },
  styles: {
    global: {
      body: {
        _dark: {
          backgroundColor: 'gray.900'
        },
        _light: {
          backgroundColor: 'gray.300'
        }
      }
    }
  },
  semanticTokens: {
    colors: {
      bg: {
        _dark: 'gray.800',
        _light: 'white'
      },
      txt: {
        _dark: 'white',
        _light: 'black'
      },
      txt_place: {
        _dark: 'gray.200',
        _light: 'gray.800'
      },
      btn: {
        _dark: 'gray.700',
        _light: 'gray.100'
      },
      tab_active: {
        _dark: 'gray.600',
        _light: 'gray.300'
      }
    }
  }
}
export default extendTheme(theme)