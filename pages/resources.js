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
        px: "$2",
      }}
    >
      <Text as="h3" css={{ color: "$primary", ta: "center" }}>
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
              <a target="_blank" as="a" href="/files/Checklist_missroy.pdf">
                Checklist
              </a>
            </Text>
            <Text>
              <a
                target="_blank"
                as="a"
                href="/files/Candidate_Introduction_Due_5-28-22.pdf"
              >
                Candidate Introduction
              </a>
            </Text>
            <Text>
              <a href="https://forms.gle/t27fipdp6giQF6Jr5" target="_blank">
                Slideshow Pictures
              </a>
            </Text>

            <Text>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfdxZR4HDj0iGVoB34lI5EFezBPkQifgNQIWFf3YRF7e6Z9Ag/viewform"
                target="_blank"
              >
                Resume
              </a>
            </Text>

            <Text>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfZIRxQXWHWe6AslnTk0YXyk0WygOzAXLhLYngVXIubsigZQQ/viewform"
                target="_blank"
              >
                Social Impact
              </a>
            </Text>
            <Text>
              <a
                target="_blank"
                as="a"
                href="https://docs.google.com/forms/d/e/1FAIpQLScZ4vy2LwV4TgdEVUJUv41qXWGTrUo-DnBgCuxAgGSr7bViXA/viewform"
              >
                Talent Request Form & Intro
              </a>
            </Text>
            <Text>
              <a
                target="_blank"
                as="a"
                href="/files/SponsorshipLetter2022-PDF.pdf"
              >
                Sponsorship Letter
              </a>
            </Text>
            <Text>
              <a
                target="_blank"
                as="a"
                href="/files/CONTRACT-2022Due6-17-22.pdf"
              >
                Contract
              </a>
            </Text>
            <Text>
              <a
                target="_blank"
                as="a"
                href="https://docs.google.com/forms/d/e/1FAIpQLSdO9AhXU37W51vy-iyxH7dqeTAaz3QwtWsf0e8FeD4YhzF-vA/viewform?usp=send_form"
              >
                Sponsorship Form
              </a>
            </Text>

            <Text as="h4" css={{ mt: "$4", color: "$primary" }}>
              MISC
            </Text>
            <Text>
              <a
                target="_blank"
                as="a"
                href="/files/Contact_List_Candidates_Committee_Members.pdf"
              >
                Contact List
              </a>
            </Text>
            <Text>
              <a target="_blank" as="a" href="/files/New_Calendar.pdf">
                Calendar
              </a>
            </Text>

            <Text>
              <a
                target="_blank"
                as="a"
                href="/files/Resume&SISInstructionsDue6-17-22.pdf"
              >
                Resume & SIS Instructions
              </a>
            </Text>
            <Text>
              <a
                target="_blank"
                as="a"
                href="/files/PhotoShootGuidelines2022.pdf"
              >
                Photoshoot Guidelines
              </a>
            </Text>
            <Text>
              <a target="_blank" as="a" href="/files/Wardrobepacket2022.pdf">
                Wardrobe Packet
              </a>
            </Text>
            <Text>
              <a target="_blank" as="a" href="/files/Roy-Resume.pdf">
                Example Resume
              </a>
            </Text>
            <Text>
              <a target="_blank" as="a" href="/files/Roy-SII.pdf">
                Example SII Essay
              </a>
            </Text>
            <Text>
              <a
                target="_blank"
                as="a"
                href="https://drive.google.com/file/d/1nI3fxA65RF4oPnd6OU60E4HD_ISF6xkY/view?usp=drivesdk"
              >
                Example Program Book
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
