import React from 'react'

import { styled } from '../../theme/stitches.config';
import { motion } from 'framer-motion'
import Box from '../Box'

const Section = ({ children, css, type = '', bgImg = '', pb = '', padding, ...props }) => {
  return (
    <Box
      {...props}
      css={{
        ...css,
        position: "relative",
        overflow: "visible",
        width: "100%",
        height: "min-content",
        flex: "0 0 auto",

      }}>

      {bgImg &&
        <Box css={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
          backgroundImage: `url(${bgImg})`
        }} />}

      <Wrapper pb={pb}>
        <Content
          padding={padding}
        >

          <Container type={type} className="container">
            {children}
          </Container>

        </Content>
      </Wrapper >
    </Box >
  )
}

export default Section


const Content = styled(motion.div, {
  maxWidth: '$4', position: "relative",
  overflow: "visible",
  height: "min-content",
  flex: "0 0 auto",
  variants: {
    padding: {
      default: {
        '@bp2': {
          px: '$5',
        }
      },
      none: {
        '@bp2': {
          px: '0',
        }
      }
    }
  },
  defaultVariants: {
    padding: 'default'
  }
})


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
    pb: {
      none: {
        pb: '0',
      }
    }
  },
})

const Container = styled(motion.div, {
  ">div": {
    flex: '1',

  },
  variants: {
    type: {
      hasBgImg: {
        backgroundColor: '$gray1',
      },
      grid: {
        display: "grid",
        gridTemplateColumns: 'repeat(4, minmax(100px, 1fr))',
        gap: '$6',
        '@bp2': {
          gridTemplateColumns: 'repeat(2, minmax(100px, 1fr))',
        },
        '@bp1': {
          gridTemplateColumns: 'repeat(1, minmax(100px, 1fr))',
        },
      }
    }
  }
})

