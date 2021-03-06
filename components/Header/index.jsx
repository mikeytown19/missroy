import React, { useState } from 'react'

import { styled } from '../../theme/stitches.config'
import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons';
import { motion } from 'framer-motion'
import logo from '../../assets/images/miss_roy.png'
import Link from 'next/link'
import Box from '../Box'
import Text from '../Text'
import Image from "next/image";
import { NavItems } from './NavItems'

const Header = ({ seoData }) => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Wrapper isOpen={isOpen}>
        <Nav css={{ a: { textDecoration: "none" } }}>
          <Link href="/">
            <a>
              <Text css={{ color: '$primary', fontWeight: '$9', mb: 0, }}>Miss Roy</Text>
              {/* <Logo src={logo.src} alt='riverview ranch' /> */}
            </a>
          </Link>
          <IconButton
            isOpen={isOpen}
            css={{
              display: 'none',
              '@bp2': {
                display: 'block',
                px: '$1'
              },
            }} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <Cross1Icon /> : <HamburgerMenuIcon />}
          </IconButton>
          <NavItems
            isOpen={isOpen}
          />
        </Nav>
      </Wrapper>
    </>
  )
}

export default Header

const Wrapper = styled(motion.nav, {


})

const Nav = styled(motion.div, {
  maxWidth: '$4',
  margin: 'auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  px: '$5',
  py: '$4',
  '@bp1': {
    px: '$3',
    py: '$3',
  }

})

const IconButton = styled(motion.div, {
  '&:hover': {
    cursor: 'pointer'
  },
  svg: { size: '$space$4', color: '$primary' },
  variants: {
    isOpen: {
      true: {
        svg: { color: '$blackA8' }
      }
    }
  }
})

const Logo = styled('img', {
  height: '$space$5'
})