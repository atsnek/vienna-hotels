import {HStack, Button, Link} from '@chakra-ui/react'
import {FaFacebook, FaInstagram} from 'react-icons/fa'

export interface SocialDividerProps {}

export const SocialDivider = () => {
  return (
    <HStack
      pt="4"
      flexDir={{
        base: 'column',
        md: 'row'
      }}>
      <Button
        as={Link}
        colorScheme="facebook"
        variant="outline"
        href="https://www.facebook.com/hotelsvienna"
        isExternal
        leftIcon={<FaFacebook />}>
        Like us on Facebook
      </Button>
      <Button
        as={Link}
        colorScheme="instagram"
        variant="outline"
        href="https://www.instagram.com/vienna_hotels"
        isExternal
        leftIcon={<FaInstagram />}>
        Follow us on Instagram
      </Button>
    </HStack>
  )
}
