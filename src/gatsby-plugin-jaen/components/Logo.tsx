import {chakra} from '@chakra-ui/react'

const Logo = () => {
  return (
    <chakra.svg width="full" height="full">
      <text
        x="0"
        y="52%"
        fontSize="var(--chakra-fontSizes-xl)"
        fontWeight="bold"
        width="full"
        dominantBaseline="middle"
        fill="#958247">
        Vienna Hotels
      </text>
    </chakra.svg>
  )
}

export default Logo
