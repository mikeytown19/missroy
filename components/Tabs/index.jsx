import React from 'react';
import { styled } from '../../theme/stitches.config';
import Box from '../Box';
import Text from '../Text';
import * as Styled from './Tabs.styles';
import { fadeIn, itemFadeIn } from "../../theme/motion-variants";

import PricingCard from '../PricingCard';

import Flex from '../Flex'

const TabContainer = () => {
  return (
    <Box>
      <Styled.Tabs defaultValue="mon-wed">
        <Styled.TabsList aria-label="Manage your account">
          <Styled.TabsTrigger value="mon-wed">
            Mon - Wed
          </Styled.TabsTrigger>
          <Styled.TabsTrigger value="thursday">
            Thursday
          </Styled.TabsTrigger>
          <Styled.TabsTrigger value="friday">
            Friday
          </Styled.TabsTrigger>
          <Styled.TabsTrigger value="sat-sun">
            Sat - Sun
          </Styled.TabsTrigger>
        </Styled.TabsList>
        <Styled.TabsContent value="mon-wed">

          <Flex py="none">
            <PricingCard
              day="Half Day"
              price="1,200" />
            <PricingCard
              day="Full Day"
              price="2,000">
              <Text>
                If available can set up night before.
              </Text>
              <Text>
                *Includes access to an indoor professional kitchen, indoor and outdoor grounds, choice of arch, and select decorations.
              </Text>
            </PricingCard>
            <PricingCard
              day="Hourly"
              subPrice="3 hour minimum"
              price="200 /hr" />
          </Flex>
        </Styled.TabsContent>
        <Styled.TabsContent value="thursday">

          <Flex py="none">
            <PricingCard
              day="Half Day"
              price="1,400" >
              <Text>
                7am-2pm/ 3pm-10pm
              </Text>
            </PricingCard>
            <PricingCard
              day="Full Day"
              price="2,600" />
            <PricingCard
              day="Hourly"
              subPrice="3 hour minimum"
              price="250 /hr" />
          </Flex>
        </Styled.TabsContent>
        <Styled.TabsContent value="friday">
          <Flex py="none">
            <PricingCard
              day="Half Day"
              price="1,600" />
            <PricingCard
              day="Full Day"
              price="2,800" />
            <PricingCard
              day="Hourly"
              subPrice="3 hour minimum"
              price="300 /hr" />
          </Flex>
        </Styled.TabsContent>
        <Styled.TabsContent value="sat-sun">
          <Flex py="none">
            <PricingCard
              day="Half Day"
              price="1,900" />
            <PricingCard
              day="Full Day"
              price="2,900" >
              <Text>
                If available can set up night before.
              </Text>
              <Text>
                *Includes access to an indoor professional kitchen, indoor and outdoor grounds, choice of arch, and select decorations.
              </Text>
            </PricingCard>
            <PricingCard
              day="Hourly"
              subPrice="3 hour minimum"
              price="350 /hr" />
          </Flex>
        </Styled.TabsContent>
      </Styled.Tabs>
    </Box>
  )
}

export default TabContainer