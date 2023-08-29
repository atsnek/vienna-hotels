import {Field, PageConfig, PageProps} from '@atsnek/jaen'

import {Box} from '@chakra-ui/react'
import {graphql} from 'gatsby'
import * as React from 'react'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Box as="main">
      <Field.Text name="welcome" placeholder="Welcome to your Jaen website!" />
    </Box>
  )
}

export default IndexPage

export const pageConfig: PageConfig = {
  label: 'Home Page',
  icon: 'FaHome',
  childTemplates: ['BlogPage'],
  menu: {
    type: 'app'
  }
}

export const query = graphql`
  query ($jaenPageId: String!) {
    ...JaenPageQuery
    allJaenPage {
      nodes {
        ...JaenPageData
        children {
          ...JaenPageData
        }
      }
    }
  }
`

export {Head} from '@atsnek/jaen'
