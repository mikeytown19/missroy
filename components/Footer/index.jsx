import React from 'react'
import { styled } from '../../theme/stitches.config'
import Text from '../Text'
import Box from '../Box'
import { FacebookLogo, InstagramLogo } from 'phosphor-react'
const Footer = () => {
  return (
    <Wrapper>
      <Text css={{ color: '$gray9' }} size="small">
        © 2021 Company, Inc. All Rights reserved.
      </Text>
      <Box css={{ svg: { pr: '$2', color: '$gray9' } }}>
        <Text as="a" href="/" target="_blank">

          <FacebookLogo weight="fill" size={26} />
        </Text>
        <Text as="a" href="/" target="_blank">
          <InstagramLogo weight="fill" size={26} />
        </Text>

      </Box >
    </Wrapper >
  )
}

export default Footer

const Wrapper = styled('footer', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'start',
  pt: '$5',
  pb: '$6',
  px: '$5',

})