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
import { urlFor } from "../lib/sanity";
import Form from "../components/Form";
import SanityBlockContent from "@sanity/block-content-to-react";

import missRoy from "../assets/images/roy_drink.jpg";

const teamQuery = groq`*[_type=="person"]
`;

export default function Home({ data }) {
  const isSmall = useMediaQuery("(max-width: 480px)");
  const viewportAmount = isSmall ? 0.1 : 0.3;
  const allCandidates = data;

  return (
    <>
      <Seo />
      <Header />

      <Flex css={{ bg: "$tomato3", "@bp2": { px: "$1" } }}>
        <Box
          css={{
            maxWidth: "$3",
            display: "flex",
            ta: "center",
            flexDirection: "column",
            jc: "start",
            alignSelf: "center",
            "@bp2": {
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            },
          }}
        >
          <Text as="h1" css={{ fontWeight: 900, color: "$primary" }}>
            Miss Roy
          </Text>
          <Text as="h2" css={{ fontWeight: 600 }}>
            2022 Scholarshin Competition
          </Text>

          <Text as="h3" css={{ fontWeight: 600 }}>
            July 16th, 2022 - 7 p.m
          </Text>

          <Text as="h3" css={{ fontWeight: 600, color: "$primary" }}>
            Roy High School
          </Text>
        </Box>
      </Flex>
      <Flex css={{ "@bp2": { px: "$1" } }}>
        <Box
          css={{
            maxWidth: "$2",
            display: "flex",
            ta: "center",
            flexDirection: "column",
            jc: "start",
            alignSelf: "center",
          }}
        >
          <Text as="h2" css={{ pb: "$5" }}>
            Candidates
          </Text>
          {allCandidates.map((item) => (
            <Box
              css={{
                display: "flex",
                jc: "space-between",
                maxWidth: "$2",
                alignItems: "flex-start",
                ta: "left",
                gap: "$5",
                my: "$4",
                "@bp2": {
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                },
              }}
            >
              <Box>
                <CandidateImage
                  src={urlFor(item.image).width(500)}
                  alt={item.name}
                />
              </Box>
              <Box
                css={{
                  display: "flex",
                  jc: "flex-start",
                  fd: "column",
                  alignItems: "flex-start",
                  ta: "left",
                  flex: "1",
                  "@bp2": {
                    ta: "center",
                    h4: {
                      textAlign: "center",
                      width: "100%",
                    },
                  },
                }}
              >
                <Text as="h4">{item.name}</Text>

                <StyledSanityBlockContent
                  blocks={item.body}
                ></StyledSanityBlockContent>
              </Box>
            </Box>
          ))}
        </Box>
      </Flex>

      <Flex
        css={{
          bg: "$gray2",

          ".container": {
            alignItems: "center",
          },
        }}
      >
        <Box
          css={{
            maxWidth: "500px",
          }}
        >
          {/* <Form /> */}
        </Box>
      </Flex>
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

const StyledSanityBlockContent = styled(SanityBlockContent, {});

const StyledImage = styled(Image, {
  borderRadius: "$4",
});

const CandidateImage = styled("img", {
  width: "300px",
  height: "320px",
  objectFit: "cover",
  objectPosition: "top",
  transition: "filter .2s ease-in-out",
  "&:hover": {
    filter: "grayscale(0)",
  },
  "@bp2": {
    width: "auto",
  },
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
  const data = await getClient(preview).fetch(teamQuery);

  return {
    props: { data },
  };
}
