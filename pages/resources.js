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

const Modal = ({ allowedIn, setAllowedIn }) => {
  console.log(allowedIn);
  return (
    <Box
      css={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,0.99)",
        zIndex: "10",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Text as="h3" css={{ color: "$primary" }}>
        Please enter password to view Resources
      </Text>

      <Text
        as="input"
        type="text"
        value={allowedIn}
        onInput={(e) => setAllowedIn(e.target.value)}
        css={{
          width: "200px",
          br: "$1",
          border: 0,
          height: "40px",
          outline: 0,
          borderBottom: "1px solid $primary",
          color: "$primary",
          fontSize: "20px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      />
    </Box>
  );
};

const Resources = () => {
  const [allowedIn, setAllowedIn] = React.useState("");
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
        <Box variants={itemFadeIn} css={{ maxWidth: "$2" }}>
          <Box variants={itemFadeIn} css={{ maxWidth: "$2" }}>
            <Text as="h2">Resources</Text>
          </Box>
          <Box css={{ mt: "$6", a: { borderBottom: "$gold10 solid 1px" } }}>
            <Text>
              <a target="_blank" as="a" href="/files/Checklist_2022_.pdf">
                Checklist First (XLS)
              </a>
            </Text>
            <Text>
              <a
                target="_blank"
                as="a"
                href="/files/Candidate_Introduction_Due_5-28-22.pdf"
              >
                Candidate Introduction (PDF)
              </a>
            </Text>
            <Text>Slideshow Pictures (G FORM)</Text>
            <Text>Slideshow Pictures</Text>
            <Text>Resume (G FORM)</Text>
            <Text>Resume</Text>
            <Text>Social Impact (G Form)</Text>
            <Text>Social Impact</Text>
            <Text>
              <a
                target="_blank"
                as="a"
                href="/files/TalentRequestFormDue6-17-22.pdf"
              >
                Talent Request Form & Intro (Jotform/PDF)
              </a>
            </Text>
            <Text>
              <a
                target="_blank"
                as="a"
                href="/files/Candidate_Committee_Contact_Information_2022.pdf"
              >
                Contract (PDF)
              </a>
            </Text>
            <Text>
              <a target="_blank" as="a" href="/files/SponsorshirLetter2022.pdf">
                Sponsorship Letter (PDF)
              </a>
            </Text>
            <Text>
              <a target="_blank" as="a" href="/files/Calendar_2022.pdf">
                Sponsorship Form (G FORM)
              </a>
            </Text>
            <Text>Sponsorships</Text>
            <Text>MISC</Text>
            <Text>Contact List</Text>
            <Text>
              <a target="_blank" as="a" href="/files/Calendar_2022.pdf">
                Calendar
              </a>
            </Text>

            <Text>
              <a target="_blank" as="a" href="/files/Wardrobepacket2022.pdf">
                Wardrobe Packet
              </a>
            </Text>
          </Box>
        </Box>
      </Flex>

      {allowedIn !== "MissRoy22!" && (
        <Modal allowedIn={allowedIn} setAllowedIn={setAllowedIn} />
      )}
      <Footer />
    </>
  );
};

export default Resources;
