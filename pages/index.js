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

import missRoy from "../assets/images/missroy.jpeg";

import { useMediaQuery } from "../hooks/utils";
import { UsersFour, Cake, Gift, Knife } from "phosphor-react";

export default function Home() {
  const isSmall = useMediaQuery("(max-width: 480px)");
  const viewportAmount = isSmall ? 0.1 : 0.3;

  return (
    <>
      <Seo />
      <Header />

      <Flex
        initial="offscreen"
        whileInView="onscreen"
        variants={fadeIn}
        viewport={{ once: true, amount: viewportAmount }}
      >
        <Box variants={itemFadeIn} css={{ maxWidth: "500px" }}>
          <Text as="h1" css={{ fontWeight: 900, color: "$primary" }}>
            Miss Roy 2022
          </Text>
          <Text>
            Quis aute iure reprehenderit in voluptate velit esse. Lorem ipsum
            dolor sit amet, consectetur adipisici elit, sed eiusmod tempor
            incidunt ut labore et dolore magna aliqua. Etiam habebis sem
            dicantur magna mollis euismod. Qui ipsorum lingua Celtae, nostra
            Galli appellantur. Hi omnes lingua, institutis, legibus inter se
            differunt. Quisque ut dolor gravida, placerat libero vel, euismod.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus. Paullum
            deliquit, ponderibus modulisque suis ratio utitur. Contra legem
            facit qui id facit quod lex prohibet. Quam temere in vitiis, legem
            sancimus haerentia. Morbi odio eros, volutpat ut pharetra vitae,
            lobortis sed nibh. Donec sed odio operae, eu vulputate felis
            rhoncus. Nec dubitamus multa iter quae et nos invenerat. Quo usque
            tandem abutere, Catilina, patientia nostra? Magna pars studiorum,
            prodita quaerimus.
          </Text>
        </Box>
        <Box variants={itemFadeIn} css={{ maxWidth: "600px" }}>
          <Logo src={missRoy.src} alt="Current Miss Roy" />
        </Box>
      </Flex>
      {/*
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
      </Section> */}

      <Section centered css={{ bg: "$gold4" }}>
        <Box
          css={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <Text
            as="h3"
            css={{ maxWidth: "$2", ta: "center", fontWeight: "$8" }}
          >
            Registrations is now live!
          </Text>
          <Button>Register Now</Button>
          {/* <Text as="h6" css={{ ta: "center", fontWeight: "$2", pt: "$4" }}>
            - Walt Whitman
          </Text> */}
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
          <Text as="h2" css={{ color: "$primary" }}>
            Contact Us
          </Text>
          <Text>missroy@gmail.com</Text>

          <Text as="a" href="tel:801-479-4278">
            666-666-6666
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

const Button = styled("button", {
  appearance: "none",
  display: "inline-block",
  lineHeight: "1.4em",
  outline: "none",
  border: "none",
  borderRadius: "8px",
  padding: "15px",
  fontWeight: 600,
  fontSize: "16px",
  background: "$primary",
  cursor: "pointer",
  color: "rgb(255, 255, 255)",
  zIndex: 1,
  opacity: 1,
  px: "$7",
  transition: "background-color .2s ease-out, color .2s ease-out",
  "&:hover": {
    bg: "$primary_dark",
  },
});
