import {ComponentMeta, Story} from '@storybook/react'
import React from 'react'
import {StarsDivider} from './StarsDivider.js'
export default {
  title: 'Components/StarsDivider',
  component: StarsDivider,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof StarsDivider>

type ComponentProps = React.ComponentProps<typeof StarsDivider>

// Create a template for the component
const Template: Story<ComponentProps> = args => <StarsDivider {...args} />

export const Basic: Story<ComponentProps> = Template.bind({})
