import Image from "next/image";
import { styled } from "../theme/stitches.config";
import { getClient } from "../lib/sanity.server";
import { useMediaQuery } from "../hooks/utils";
import { groq } from "next-sanity";
import Link from "next/link";
import ListItem from "../components/List/ListItem";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import Box from "../components/Box";
import Flex from "../components/Flex";
import Text from "../components/Text";
import Section from "../components/Section";
import Form from "../components/Form";

import missRoy from "../assets/images/roy_drink.jpg";

const pageQuery = groq`*[_type == "page"]{
  pageBuilder[]
{
  ...,
}  }`;

export default function Home({ data }) {
  const isSmall = useMediaQuery("(max-width: 480px)");
  const viewportAmount = isSmall ? 0.1 : 0.3;

  return (
    <>
      <Seo />
      <Header />

      <Flex css={{ px: "$4", "@bp2": { px: "$1" } }}>
        <Box
          css={{
            maxWidth: "$3",
            display: "flex",
            ta: "center",
            flexDirection: "column",
            jc: "center",
            alignSelf: "center",
          }}
        >
          <Text as="h1" css={{ fontWeight: 900, color: "$primary" }}>
            Miss Roy 2022
          </Text>
          <Text as="h4" css={{ fontWeight: 700 }}>
            Competition Date:
          </Text>
          <Text as="h3" css={{ fontWeight: 700 }}>
            July 16th, 2022
          </Text>
          <Text as="h4" css={{ fontWeight: 700 }}>
            Competition Location:
          </Text>
          <Text as="h3" css={{ fontWeight: 700 }}>
            Roy High School
          </Text>
        </Box>
        <Box css={{ maxWidth: "500px" }}>
          <StyledImage
            width={500}
            height={500}
            src={missRoy.src}
            alt="Current Miss Roy"
          />
        </Box>
      </Flex>
      <Section css={{ bg: "$gold4", "@bp2": { pb: "$2" } }}>
        <Box
          css={{
            maxWidth: "$2",
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            "@bp2": {
              ta: "center",
            },
          }}
        >
          <Text as="h3">Registrations is now live!</Text>
          <Link href="/resources">
            <Button css={{ mt: "$4" }}>Register Now</Button>
          </Link>
        </Box>
      </Section>

      <Flex
        css={{
          bg: "$gray2",

          ".container": {
            alignItems: "center",
          },
        }}
      >
        <Box css={{ maxWidth: "600px", ta: "center", margin: "auto" }}>
          <Text as="h2" css={{ color: "$primary" }}>
            Contact Us
          </Text>
          <Text as="a" href="mailto:missroycompetition@gmail.com">
            missroycompetition@gmail.com
          </Text>
        </Box>
        <Box
          css={{
            maxWidth: "500px",
          }}
        >
          {/* <Form /> */}
        </Box>
      </Flex>

      <Footer />
    </>
  );
}

const StyledImage = styled(Image, {
  borderRadius: "$4",
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

export async function getStaticProps({ preview = false }) {
  const data = await getClient(preview).fetch(pageQuery);

  return {
    props: { data },
  };
}
