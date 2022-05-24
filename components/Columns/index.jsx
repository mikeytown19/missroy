import React from 'react'
import Section from '../Section'
import Box from '../Box'
import Text from '../Text'
import BasePortableText from '@sanity/block-content-to-react';
import { styled } from '../../theme/stitches.config'
import Image from "../Image"


const serializers2 = {
  marks: {
    highlight: ({ children }) => (
      <Text className="highlight" as="span">
        {children}
      </Text>
    ),
  },
  types: {
    mainImage: (props) => (
      <Image className="block_content_image" {...props.node} alt={props.node.alt} />
    ),
  },
}

const serializers = {
  types: {
    column: (props) => (
      <BasePortableText
        blocks={props.node.body} serializers={serializers2} />
    ),
  },
}

const Columns = ({ children, node }) => {

  const columnCount = node.columns.length
  return (
    <Section css={{ '@bp2': { pb: '$2' } }}>
      <Box
        centered={node?.centered}
        css={{
          maxWidth: '$4',
          margin: 'auto',
        }}>

        <StyledBasePortableText css={{
          maxWidth: '$3',
          margin: 'auto',
        }}
          columns={columnCount}
          serializers={serializers} blocks={node.columns}
        />
      </Box>
    </Section>
  )
}


const StyledBasePortableText = styled(BasePortableText, {
  px: '$3',
  variants: {
    columns: {
      1: {
        '@bp1': {
          gridTemplateColumns: 'repeat(1, 1fr)',
        },
      },
      2: {

        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridGap: '$10',
        '@bp3': {
          gridTemplateColumns: 'repeat(1, 1fr)',

        },
      },
    }
  }
})
export default Columns
