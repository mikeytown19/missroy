import React from 'react'

import { styled } from '../../theme/stitches.config';
import { motion } from 'framer-motion'
import Box from '../Box'


const Flex = ({ children, css, py = '', ...props }) => {
  return (
    <Box
      {...props}
      css={{
        ...css,
        position: "relative",
        overflow: "visible",
        height: "min-content",
        flex: "0 0 auto",
        '@bp2': {
          px: '$5'
        }

      }}>

      <Wrapper py={py}>
        <Box css={{
          maxWidth: '$4', position: "relative",
          overflow: "visible",
          height: "min-content",
          flex: "0 0 auto"
        }}>

          <Container className="container">
            {children}
          </Container>

        </Box>
      </Wrapper>
    </Box>

  )
}

export default Flex


const Wrapper = styled(motion.section, {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  py: "$12",
  width: "100%",
  height: "auto",
  "--stack-native-gap": "40px",
  variants: {
    py: {
      none: {
        '@bp1': {

          py: '$2',
        }
      }
    }
  },
})

const Container = styled(motion.div, {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "flex-start",
  padding: "0px",
  width: "100%",
  height: "auto",
  gap: '$12',

  '@bp2': {
    flexDirection: "column",
  },
  ">div": {
    flex: '1',
    '@bp1': {
      width: "100%",
    }
  }
})

