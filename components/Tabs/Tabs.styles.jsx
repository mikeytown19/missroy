
import * as TabsPrimitive from '@radix-ui/react-tabs';


import { styled } from '../../theme/stitches.config';


export const Tabs = styled(TabsPrimitive.Root, {
  display: 'flex',
  flexDirection: 'column',
  // width: '100%',
  // boxShadow: `0 2px 10px ${blackA.blackA4}`,
});

export const TabsList = styled(TabsPrimitive.List, {
  flexShrink: 0,
  display: 'flex',
  borderBottom: `1px solid $slate6`,
  maxWidth: '$2',
  m: 'auto',
  '@bp1': {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(auto, 1fr))',
  }
});

export const TabsTrigger = styled(TabsPrimitive.Trigger, {
  all: 'unset',
  fontFamily: 'inherit',
  backgroundColor: 'white',
  padding: '0 $4',
  height: 45,
  display: 'flex',
  width: 'auto',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 15,
  lineHeight: 1,
  color: '$slate11',
  userSelect: 'none',
  '&:first-child': { borderTopLeftRadius: 6 },
  '&:last-child': { borderTopRightRadius: 6 },
  '&:hover': { color: '$green11' },
  '&[data-state="active"]': {
    color: '$green11',
    boxShadow: 'inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor',
  },
  '&:focus': {
    position: 'relative',
    // boxShadow: `0 0 0 2px black`
  },
});

export const TabsContent = styled(TabsPrimitive.Content, {
  flexGrow: 1,
  padding: 20,
  backgroundColor: 'white',
  borderBottomLeftRadius: 6,
  borderBottomRightRadius: 6,
  boxSizing: 'border-box',
  outline: 'none',
  '&:focus': { boxShadow: `0 0 0 2px black` },
});


