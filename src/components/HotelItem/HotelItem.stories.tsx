import {ComponentMeta, Story} from '@storybook/react'
import React from 'react'
import {HotelItem} from './HotelItem.js'
export default {
  title: 'Components/HotelItem',
  component: HotelItem,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof HotelItem>

type ComponentProps = React.ComponentProps<typeof HotelItem>

// Create a template for the component
const Template: Story<ComponentProps> = args => <HotelItem {...args} />

export const Basic: Story<ComponentProps> = Template.bind({})
