import React from 'react'
import { styled } from '../../theme/stitches.config'
import { motion, LayoutGroup } from 'framer-motion'
import Box from '../Box'
import Text from '../Text'



const PricingCard = ({ day = '', price = '', subPrice = '', children }) => {
  return (
    <LayoutGroup >

      <Wrapper layout >
        <Text as="h3"
        >{day}</Text>
        <Text
          className="price"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.1, duration: 0.3 } }}
          exit={{ opacity: 0 }}
        >${price}</Text>
        {subPrice && <Text css={{ mt: '-$3' }} as="p" size="sm">*{subPrice}</Text>}
        {children}
        <Text>
          Price includes access to an indoor professional kitchen, indoor and outdoor grounds, choice of arch, and select decorations.
        </Text>

      </Wrapper>
    </LayoutGroup>
  )
}

export default PricingCard




const Wrapper = styled(motion.div, {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  p: '$4',
  width: '100%',
  height: 'auto',
  backgroundColor: '$green2',
  br: '$2'

})