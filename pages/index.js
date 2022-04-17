import { styled } from "../theme/stitches.config";
import { motion } from "framer-motion";
import { fadeIn, itemFadeIn } from "../theme/motion-variants";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import Box from "../components/Box";
import Hero from "../components/Hero";
import Flex from "../components/Flex";
import Section from "../components/Section";
import Text from "../components/Text";
import Form from "../components/Form";
import ListItem from "../components/List/ListItem";

import cow_hero from "../assets/images/cow_hero.webp";
import fence from "../assets/images/fence.webp";
import table from "../assets/images/table.webp";
import cows from "../assets/images/cows.webp";
import { useMediaQuery } from "../hooks/utils";
import { UsersFour, Cake, Gift, Knife } from "phosphor-react";

export default function Home() {
  const isSmall = useMediaQuery("(max-width: 480px)");
  const viewportAmount = isSmall ? 0.1 : 0.3;

  return (
    <>
      <Seo />
      <Hero nav={<Header />} bgImg={cow_hero.src}></Hero>
      <Flex
        initial="offscreen"
        whileInView="onscreen"
        variants={fadeIn}
        viewport={{ once: true, amount: viewportAmount }}
      >
        <Box variants={itemFadeIn} css={{ maxWidth: "500px" }}>
          <Text as="h3">A little about us.</Text>
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
        <Box variants={itemFadeIn} css={{ maxWidth: "600px" }}>
          <Logo src={fence.src} alt="riverview ranch" />
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

      <Flex
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: viewportAmount }}
        css={{
          ".container": {
            alignItems: "center",
          },
        }}
      >
        <Box variants={fadeIn} css={{ maxWidth: "600px" }}>
          <Logo src={table.src} alt="riverview ranch" />
        </Box>
        <Box
          variants={fadeIn}
          css={{
            maxWidth: "500px",
          }}
        >
          <Text as="h3">Riverview Ranch Events</Text>
          <Text>
            There is nothing more important for your special event than knowing
            every detail is taken care of. River View Ranch offers all the
            services you need — from Musicians & Entertainment to Catering — to
            make sure everything goes off without a hitch. Book our event venue
            today and make sure you get the best date available.
          </Text>
          <Text>
            Riverview Ranch is set up on a thriving ranch that was also once a
            popular golf-driving range and gorgeous manicured 18 holes putting
            course. The beauty of nature can be seen from sunrise to sundown.
          </Text>
        </Box>
      </Flex>

      <Section bgImg={cows.src} padding="none">
        <Box
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: viewportAmount }}
          variants={fadeIn}
          css={{
            br: "$2",
            bg: "rgba(255, 255, 255, 0.95)",
            p: "$6",
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(100px, 400px))",
            gap: "$6",
            px: "$5",
            "@bp2": {
              px: "$3",
              gridTemplateColumns: "repeat(2, minmax(100px, 1fr))",
              mx: "$3",
            },
            "@bp1": {
              gridTemplateColumns: "repeat(1, minmax(100px, 1fr))",
            },
          }}
        >
          <ListItem icon={<UsersFour size={32} />}>
            <Text size="md">Family Events / Reunions</Text>
            <Text css={{ pt: "$2" }}>
              Gather your family to explore the terrain, take in the views,
              enjoy siting wildlife, walk the trails, ride your 4x4's, hike down
              to the pond, make meals using the professional kitchen or have
              your meals catered by us if you'd like!
            </Text>
          </ListItem>
          <ListItem icon={<Gift size={32} />}>
            <Text size="md">Holiday Gatherings</Text>
            <Text css={{ pt: "$2" }}>
              The perfect place with charm, warmth and views, to host your
              family holiday dinner or gathering. Bring your own food, prepare
              meals with our custom professional kitchen, or have your meals
              catered by us or a vendor of your choice! Memories will be made
              with your family on our beautiful property..
            </Text>
          </ListItem>

          <ListItem icon={<Cake size={32} />}>
            <Text size="md">Parties</Text>
            <Text css={{ pt: "$2" }}>
              Birthdays, Anniversaries, Reunions, get-togethers, Showers; you
              come up with it and we will be there for you.
            </Text>
          </ListItem>
          <ListItem icon={<Knife size={32} />}>
            <Text size="md">Professional Kitchen</Text>
            <Text css={{ pt: "$2" }}>
              Access to a professional kitchen and in-house sound system.
            </Text>
          </ListItem>
        </Box>
      </Section>
      <Section>
        <Box>
          <Text as="h4" css={{ maxWidth: "$2", ta: "center" }}>
            “Happiness, not in another place but this place, not for another
            hour but this hour”
          </Text>
          <Text as="h6" css={{ ta: "center", fontWeight: "$2", pt: "$4" }}>
            - Walt Whitman
          </Text>
        </Box>
      </Section>
      <Flex
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        css={{
          bg: "$gray2",
          ".container": {
            alignItems: "center",
          },
        }}
      >
        <Box variants={fadeIn} css={{ maxWidth: "600px" }}>
          <Text as="h2">Contact Us</Text>
          <Text>Theriverviewranch@gmail.com</Text>
          <Text>5800 Adams Ave Pkwy. Washington Terrace, UT 84405</Text>
          <Text as="a" href="tel:801-479-4278">
            801-479-4278
          </Text>
        </Box>
        <Box
          variants={fadeIn}
          css={{
            maxWidth: "500px",
          }}
        >
          <Form />
        </Box>
      </Flex>

      <Footer />
    </>
  );
}

const Logo = styled(motion.img, {
  height: "580px",
  maxWidth: "500px",
  width: "100%",
  objectFit: "cover",
  br: "$1",
});
