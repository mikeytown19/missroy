
import { styled } from '../../theme/stitches.config';
import { motion } from 'framer-motion'
const Text = styled(motion.p, {
  '&.price': {
    fontFamily: "DM Sans",
    fontWeight: "700",
    fontSize: "$7",
    lineHeight: "$7",
    mb: "$4",
    "@bp2": {
      fontWeight: "700",
      fontSize: "$6",
      lineHeight: "$8",
    },
  },
  variants: {
    as: {
      a: {
        width: 'initial'
      }
    },
    type: {
      bold: {
        fontFamily: '$fonts.body',
        fontWeight: '$6',
        fontSize: '$4',
        '@bp2': {
          fontSize: '$3'

        }
      }
    },
    size: {
      small: {
        fontSize: "$1",
        lineHeight: "$5",
        fontWeight: "100",
        mb: "$2",
      },
      sm: {
        fontSize: "$1",
        lineHeight: "$5",
        fontWeight: "400",
        mb: "$2",
      },
      md: {
        fontSize: "$2",
        lineHeight: "$5",
        fontWeight: "$7",
        mb: "$2",
        fontFamily: '$inter',
      },
      large: {
        fontSize: "$3",
        color: '$primary'
      }
    }
  }
})

export default Text
