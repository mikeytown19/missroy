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
import ListItem from "../components/List/ListItem";
const Amenities = () => {
  const isSmall = useMediaQuery("(max-width: 480px)");
  const viewportAmount = isSmall ? 0.1 : 0.3;
  return (
    <>
      <Seo page="Amenities" />
      <Header />
      <Flex
        initial="offscreen"
        whileInView="onscreen"
        variants={fadeIn}
        viewport={{ once: true, amount: viewportAmount }}
      >
        <Box variants={itemFadeIn} css={{ maxWidth: "500px" }}>
          <Box variants={itemFadeIn} css={{ maxWidth: "600px" }}>
            <Text as="h2">Amenities</Text>
          </Box>

          <Text>
            60 private acres of ranch-style atmosphere with stunning views and
            close to town, 27 min north of the SLC airport and adjacent to hwy.
            #84 (between Layton and Ogden) is the private River View Ranch. A
            perfect place for family gatherings, meetings, weddings, life
            celebrations, or whatever you can think to create. Plenty of
            guest/RV parking plus 4000 sf of ranch-style atmosphere awaits your
            unforgettable experience. Have your meals catered, or use our
            well-equipped professional kitchen to feed your herd.
          </Text>
          <Text>
            At River View Ranch, we’re in the business of hosting stunning
            weddings and special events. Since our opening in 2021, we’ve given
            our clients the power to customize every aspect of their event, from
            the decor and floral arrangements to the menu and entertainment.
            We’ll make sure the special day you’ve envisioned becomes a reality.
            Contact us to book your venue today. We can’t wait to host you.
          </Text>
        </Box>
      </Flex>
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

export default Amenities;
