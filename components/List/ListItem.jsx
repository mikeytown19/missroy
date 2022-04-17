import { styled } from '../../theme/stitches.config';
import { motion } from 'framer-motion'
import { Check } from "phosphor-react";

import Box from '../Box'

const ListItem = ({ children, icon }) => {
  return (
    <Box css={{
      display: 'flex', ai: 'start', jc: 'start', gap: '$2',
      '.list_copy': {
        color: '$gray11'
      }
    }}>
      <Box css={{ svg: { pt: '3px' } }}>
        {icon ? icon : <Check color="rgb(12, 223, 152)" />}

      </Box>
      <Box css={{ width: '100%', 'p, a': { m: 0 } }}>

        {children}
      </Box>
    </Box>
  )
}

export default ListItem
