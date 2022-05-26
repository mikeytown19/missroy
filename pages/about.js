import React from "react";
import { fadeIn, itemFadeIn } from "../theme/motion-variants";
import { useMediaQuery } from "../hooks/utils";
import { styled } from "../theme/stitches.config";

import Image from "next/image";

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

import missRoy from "../assets/images/missroy_vol.jpeg";

const About = () => {
  const isSmall = useMediaQuery("(max-width: 480px)");
  const viewportAmount = isSmall ? 0.1 : 0.3;
  return (
    <>
      <Seo page="About" />
      <Header />
      <Flex
        initial="offscreen"
        whileInView="onscreen"
        variants={fadeIn}
        viewport={{ once: true, amount: viewportAmount }}
      >
        <Box variants={itemFadeIn} css={{ margin: "auto" }}>
          <Box variants={itemFadeIn} css={{ ta: "center" }}>
            <Text as="h2" css={{ color: "$primary" }}>
              About Miss Roy
            </Text>
          </Box>
          <Box
            css={{
              maxWidth: "$3",
              margin: "$6 auto",
              px: "$5",
              "@bp2": { px: 0 },
            }}
          >
            <StyledImage
              width="100%"
              height="50%"
              layout="responsive"
              objectFit="cover"
              src={missRoy.src}
              alt="Current Miss Roy"
            />
          </Box>

          <Box css={{ maxWidth: "$2", margin: "auto" }}>
            <Text>
              Sed haec quis possit intrepidus aestimare tellus. Quid securi
              etiam tamquam eu fugiat nulla pariatur. Plura mihi bona sunt,
              inclinet, amari petere vellent. Lorem ipsum dolor sit amet,
              consectetur adipisici elit, sed eiusmod tempor incidunt ut labore
              et dolore magna aliqua. Prima luce, cum quibus mons aliud consensu
              ab eo. Ambitioni dedisse scripsisse iudicaretur. Tityre, tu
              patulae recubans sub tegmine fagi dolor. Nec dubitamus multa iter
              quae et nos invenerat. Quisque placerat facilisis egestas cillum
              dolore. Fabio vel iudice vincam, sunt in culpa qui officia.
            </Text>
            <Text>
              Sed haec quis possit intrepidus aestimare tellus. Quid securi
              etiam tamquam eu fugiat nulla pariatur. Plura mihi bona sunt,
              inclinet, amari petere vellent. Lorem ipsum dolor sit amet,
              consectetur adipisici elit, sed eiusmod tempor incidunt ut labore
              et dolore magna aliqua. Prima luce, cum quibus mons aliud consensu
              ab eo. Ambitioni dedisse scripsisse iudicaretur. Tityre, tu
              patulae recubans sub tegmine fagi dolor. Nec dubitamus multa iter
              quae et nos invenerat. Quisque placerat facilisis egestas cillum
              dolore. Fabio vel iudice vincam, sunt in culpa qui officia.
            </Text>
          </Box>
        </Box>
      </Flex>

      <Footer />
    </>
  );
};

export default About;

const StyledImage = styled(Image, {
  borderRadius: "$4",
  mx: "-100px",
});
