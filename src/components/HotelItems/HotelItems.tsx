import {Field} from '@atsnek/jaen'
import {VStack, Flex} from '@chakra-ui/react'

import {HotelItem} from '../HotelItem/HotelItem'

export interface HotelItemsProps {}

export const HotelItems = () => {
  return (
    <>
      <Field.Section
        name="hotelfield"
        label="Hotels"
        as={VStack}
        props={{
          display: {
            base: 'flex',
            lg: 'none'
          }
        }}
        blocks={[HotelItem]}
      />
      <Field.Section
        name="hotelfield"
        label="Hotels"
        as={Flex}
        style={{
          paddingTop: '3rem',
          paddingBottom: '3rem',
          width: '100%',
          justifyContent: 'center'
        }}
        props={{
          display: {
            base: 'none',
            lg: 'flex'
          }
        }}
        sectionProps={props => ({
          ...props,
          justifyContent: 'center',
          alignItems: 'center'
        })}
        blocks={[HotelItem]}
      />
    </>
  )
}
