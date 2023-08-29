import {LayoutProps, useAuthenticationContext} from '@atsnek/jaen'
import {Box, Heading} from '@chakra-ui/react'

const Layout: React.FC<LayoutProps> = ({children, pageProps}) => {
  return <Box>{children}</Box>
}

export default Layout
