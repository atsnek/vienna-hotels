import {HStack} from '@chakra-ui/react'
import {StarIcon} from '@chakra-ui/icons'

export interface StarsDividerProps {}

export const StarsDivider: React.FC<StarsDividerProps> = props => {
  return (
    <HStack pt="4">
      {new Array(4).fill(0).map((_, i) => (
        <StarIcon key={i} boxSize="8" color="#958247" />
      ))}
    </HStack>
  )
}
