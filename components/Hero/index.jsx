import { styled } from '../../theme/stitches.config'
import { motion } from 'framer-motion'

import Text from '../Text'
import Box from '../Box'
import { fadeIn, itemFadeIn } from '../../theme/motion-variants'
import logo from '../../assets/images/rvr-color.svg'
const Hero = ({ children, bgImg = '', nav }) => {

  return (
    <>
      <Wrapper>
        {nav}
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
          }} />
        }

        <Content initial="offscreen" variants={fadeIn} animate="onscreen">
          <Logo
            variants={itemFadeIn}
            src={logo.src} alt='riverview ranch' />
          <Text
            variants={itemFadeIn}
            type="bold">Come celebrate with us.</Text>

        </Content>

      </Wrapper>
    </>
  )
}

export default Hero


const Wrapper = styled('div', {
  height: '100vh',
  '@bp4': {
    height: '900px',
    '@bp2': {
      height: '600px',
    },


  },
  position: 'relative',
})

const Content = styled(motion.div, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  flexDirection: 'column',
  pb: '$10',
  '@bp1': {
    height: '80%',
  }
})



const Logo = styled(motion.img, {
  maxHeight: '350px'
})