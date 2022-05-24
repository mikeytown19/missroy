import React from "react";
import { getClient } from "../lib/sanity.server";
import { useMediaQuery } from "../hooks/utils";
import { groq } from "next-sanity";
import Link from "next/link";
import { styled } from "../theme/stitches.config";
import { urlFor } from "../lib/sanity";

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

const teamQuery = groq`*[_type=="person"]
`;

const Candidates = ({ data }) => {
  const allCandidates = data;
  const isSmall = useMediaQuery("(max-width: 480px)");
  const viewportAmount = isSmall ? 0.1 : 0.3;
  return (
    <>
      <Seo page="Candidates" />
      <Header />
      <Flex>
        <Box>
          <Text as="h1" css={{ color: "$primary", paddingBottom: "$7" }}>
            2022 Miss Roy Candidates
          </Text>
          <Section
            css={{
              margin: "auto",
              maxWidth: "$4",
              h5: {
                fontWeight: "bold",
                mt: "$4",
                mb: "$1",
              },
            }}
          >
            <Box
              css={{
                //use grid for a 3x3 grid
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(100px, 300px))",
                gridGap: "$6",
                gridAutoRows: "minmax(auto, auto)",
                gridAutoFlow: "row dense",
                justifyItems: "center",
                alignItems: "center",
                "@bp2": {
                  gridGap: "$3",
                },
                "@bp1": {
                  justifyContent: "center",
                  alignItems: "center",
                },
              }}
            >
              {allCandidates.map((item) => (
                <Box>
                  <Link href={`/team/${item.slug.current}`}>
                    <a>
                      <StyledImage
                        src={urlFor(item.image).width(300).height(500)}
                        alt={item.name}
                      />

                      <h5>{item.name}</h5>
                      <Text size="small">{item.position}</Text>
                    </a>
                  </Link>
                </Box>
              ))}
            </Box>
          </Section>
        </Box>
      </Flex>

      <Footer />
    </>
  );
};

export default Candidates;

export async function getStaticProps({ preview = false }) {
  const data = await getClient(preview).fetch(teamQuery);

  return {
    props: { data },
  };
}

const StyledImage = styled("img", {
  width: "300px",
  height: "320px",
  objectFit: "cover",
  objectPosition: "top",
  transition: "filter .2s ease-in-out",
  "&:hover": {
    filter: "grayscale(0)",
  },
});
