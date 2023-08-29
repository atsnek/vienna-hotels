import {ComponentMeta, Story} from '@storybook/react'
import React from 'react'
import {HotelItems} from './HotelItems.js'
export default {
  title: 'Components/HotelItems',
  component: HotelItems,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof HotelItems>

type ComponentProps = React.ComponentProps<typeof HotelItems>

// Create a template for the component
const Template: Story<ComponentProps> = args => <HotelItems {...args} />

export const Basic: Story<ComponentProps> = Template.bind({})
