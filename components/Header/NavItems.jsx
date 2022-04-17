
import { styled } from '../../theme/stitches.config'
import Link from 'next/link'
import Box from '../Box'



const NavItem = ({ children, to }) => <Link href={to}><a>{children}</a></Link>


export const NavItems = ({ className, css, isOpen, ...props }) =>
  <StyledBox

    isOpen={isOpen}
    {...props}
    css={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      'a': {
        mx: '$3',
        fontSize: '$1',
        fontWeight: '$6',
        textDecoration: 'none',
        '&:hover': {
          color: '$blackA11',
          textDecoration: 'underline',
        }
      },
    }} className={className}>
    <NavItem to='/pricing'>Pricing</NavItem>
    <NavItem to='/amenities'>Amenities</NavItem>
    <NavItem to='/gallery'>Gallery</NavItem>
    <NavItem to='/services'>Our Services</NavItem>
  </StyledBox>


const StyledBox = styled(Box, {

  '@bp2': {
    position: 'absolute',
    flexDirection: 'column',
    alignItems: 'flex-start',
    opacity: 0
  },
  variants: {
    isOpen: {
      true: {
        zIndex: 1,
        py: '$4',
        opacity: 1,
        top: '80px',
        left: '0',
        width: '100%',
        height: 'auto',
        backgroundColor: '$tomato1',
        'a': {
          my: '$3'
        }
      }

    }
  }



})