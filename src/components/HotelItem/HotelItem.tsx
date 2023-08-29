import {Field, connectBlock, useField} from '@atsnek/jaen'
import {
  Box,
  BoxProps,
  Button,
  Center,
  HStack,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  VStack,
  useColorModeValue
} from '@chakra-ui/react'
import {Link} from 'gatsby'

import {FaLandmark, FaPhone} from 'react-icons/fa'

export const HotelItem = connectBlock(
  (props: BoxProps) => {
    const bookingUrlField = useField<string>('bookingUrl', 'IMA:TextField')

    const hiddenUrlField = useField<string>('hiddenUrl', 'IMA:TextField')

    const card = (
      <Center
        maxW={{
          base: '100%',
          md: 'sm',
          lg: 'md'
        }}
        padding="1rem"
        height="100%">
        <Box
          minW="xs"
          maxW="100%"
          role="group"
          boxShadow="2xl"
          rounded="xl"
          height="100%"
          zIndex={1}
          overflow="hidden"
          transition="all 0.2s ease"
          _hover={{
            boxShadow: 'xl',
            transform: 'scale(1.04)'
          }}>
          <Box h="64">
            <Field.Image name={'image'} />
          </Box>

          <VStack p={5} spacing={4} align={'center'}>
            <Box h="5rem" w="full">
              <Field.Image
                name={'logoimage'}
                objectFit={'contain'}
                style={{
                  width: 'auto'
                }}
                imgStyle={{
                  objectFit: 'contain'
                }}
              />
            </Box>

            <Field.Text
              name={'lead'}
              textAlign={'center'}
              defaultValue={'Lead'}
              color="gray.500"
              fontSize="sm"
            />

            <Stack
              mt="8"
              spacing="8"
              flexDir={{
                base: 'column',
                md: 'row'
              }}>
              <List color={'gray.500'} fontSize="xs">
                <ListItem>
                  <HStack>
                    <ListIcon as={FaPhone} color="#958247" />
                    <Field.Text
                      as="span"
                      name={'phone'}
                      defaultValue={'Your phone number'}
                    />
                  </HStack>
                </ListItem>
                <ListItem>
                  <HStack>
                    <ListIcon as={FaLandmark} color="#958247" />
                    <Field.Text
                      as="span"
                      name={'address'}
                      defaultValue={'Addresse'}
                    />
                  </HStack>
                </ListItem>
              </List>

              <Button
                bg="#958247"
                _hover={{
                  bg: '#736643'
                }}
                color="white"
                textTransform="uppercase"
                as={Link}
                to={
                  bookingUrlField.value || bookingUrlField.staticValue || '/'
                }>
                Book now
              </Button>
            </Stack>

            <Stack>
              <List>
                <ListItem
                  style={{
                    display: hiddenUrlField.isEditing ? 'block' : 'none'
                  }}>
                  <Text as="b">Website URL:</Text>
                  <Field.Text name="hiddenUrl" defaultValue="Empty" />
                </ListItem>

                <ListItem
                  style={{
                    display: bookingUrlField.isEditing ? 'block' : 'none'
                  }}>
                  <Text as="b">Booking URL:</Text>
                  <Field.Text name="bookingUrl" defaultValue="Empty" />
                </ListItem>
              </List>
            </Stack>
          </VStack>
        </Box>
      </Center>
    )

    const value = (
      hiddenUrlField.value ||
      hiddenUrlField.staticValue ||
      ''
    ).replace(/<\/?[^>]+(>|$)/g, '')

    if (hiddenUrlField.isEditing || !value) {
      return card
    }

    return (
      <a
        href={value}
        target="_blank"
        style={{
          height: '100%'
        }}>
        {card}
      </a>
    )
  },
  {
    name: 'HotelCard',
    label: 'Hotel Card'
  }
)
