import {ComponentMeta, Story} from '@storybook/react'
import React from 'react'
import {SocialDivider} from './SocialDivider.js'
export default {
  title: 'Components/SocialDivider',
  component: SocialDivider,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof SocialDivider>

type ComponentProps = React.ComponentProps<typeof SocialDivider>

// Create a template for the component
const Template: Story<ComponentProps> = args => <SocialDivider {...args} />

export const Basic: Story<ComponentProps> = Template.bind({})
