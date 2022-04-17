import { motion } from 'framer-motion';
import { styled } from '../../theme/stitches.config'
const Box = styled(motion.div, {
  variants: {
    padding: {
      none: {
        padding: 0,
      }
    },
    centered: {
      true: {
        "> div": {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          textAlign: 'center'
        }
      },
    }
  }
})

export default Box
