import React from "react";
import { fadeIn, itemFadeIn } from "../theme/motion-variants";
import { useMediaQuery } from "../hooks/utils";

import Seo from "../components/Seo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Box from "../components/Box";
import Hero from "../components/Hero";
import Flex from "../components/Flex";
import Section from "../components/Section";
import Text from "../components/Text";
import Form from "../components/Form";
import Tabs from "../components/Tabs";
import ListItem from "../components/List/ListItem";
const pricing = () => {
  const isSmall = useMediaQuery("(max-width: 480px)");
  const viewportAmount = isSmall ? 0.1 : 0.3;
  return (
    <>
      <Seo page="Pricing" />
      <Header />
      <Section pb="none">
        <Box variants={itemFadeIn} css={{ maxWidth: "500px" }}>
          <Box variants={itemFadeIn} css={{ maxWidth: "600px", ta: "center" }}>
            <Text as="h2">Pricing</Text>
            <Text>
              Pricing is as follows. Please contact us for additional
              information on Holidays.
            </Text>
          </Box>
        </Box>
      </Section>
      <Section>
        <Box>
          <Tabs />
        </Box>
      </Section>
      <Section
        type="grid"
        css={{ bg: "$slate2" }}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: viewportAmount }}
        variants={fadeIn}
      >
        <ListItem>
          <Text size="md">Weddings</Text>
          <Text className="list_copy">
            Control breakpoints for stunning designs on every device.{" "}
          </Text>
        </ListItem>
        <ListItem>
          <Text size="md">Retreats</Text>
          <Text className="list_copy">
            Design together with your team in realtime.
          </Text>
        </ListItem>
        <ListItem>
          <Text size="md">Parties</Text>
          <Text className="list_copy">
            Brilliant Lighthouse score with automatic asset resizing and
            pre-rendering.
          </Text>
        </ListItem>
        <ListItem>
          <Text size="md">Gatherings</Text>
          <Text className="list_copy">
            Start in seconds with our premade components.
          </Text>
        </ListItem>
        <ListItem>
          <Text size="md">Memorials</Text>
          <Text className="list_copy">
            Start in seconds with our premade components.
          </Text>
        </ListItem>
        <ListItem>
          <Text size="md">Get Aways</Text>
          <Text className="list_copy">
            Start in seconds with our premade components.
          </Text>
        </ListItem>
        <ListItem>
          <Text size="md">Reunions</Text>
          <Text className="list_copy">
            Start in seconds with our premade components.
          </Text>
        </ListItem>
        <ListItem>
          <Text size="md">Trails</Text>
          <Text className="list_copy">
            Start in seconds with our premade components.
          </Text>
        </ListItem>
      </Section>

      <Footer />
    </>
  );
};

export default pricing;
