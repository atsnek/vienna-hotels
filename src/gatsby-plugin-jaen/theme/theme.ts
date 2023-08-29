import {
  extendTheme,
  ThemeConfig,
  withDefaultColorScheme,
  baseTheme
} from '@chakra-ui/react'

const theme = extendTheme(
  {
    colors: {
      brand: {
        50: '#F5E9E1',
        100: '#E6D3C2',
        200: '#D6BCA2',
        300: '#C7A582',
        400: '#B89165',
        500: '#958247',
        600: '#7A6B37',
        700: '#5F5328',
        800: '#443B19',
        900: '#292308'
      }
    }
  },
  withDefaultColorScheme({
    colorScheme: 'brand'
  })
)

export default theme
