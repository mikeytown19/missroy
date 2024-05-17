import React from "react";
import Link from "next/link";
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
          <Box css={{ mt: "$6" }}>
            <Text>
              <a target="_blank" as="a" href="/files/Checklist2024.pdf">
                Checklist
              </a>
            </Text>


            <Text>
              <a href="https://forms.gle/Yx9mHoRPLRF49LxK7" target="_blank">
                Fact Sheet
              </a>
            </Text>

            <Text>
              <a target="_blank" as="a" href="/files/CSI_Essay_EXAMPLES.pdf">
                CSI ESSAY EXAMPLES
              </a>
            </Text>


            <Text>
              <a
                target="_blank"
                as="a"
                href="/files/Sponsor_Letter_contestant-use.pdf"
              >
                Sponsorship Letter
              </a>
            </Text>
            <Text>
              <a
                target="_blank"
                as="a"
                href="/files/Paperwork_Instructions.pdf"
              >
                Paperwork Instructions
              </a>
            </Text>
            <Text>
              <a target="_blank" as="a" href="/files/2024Contract.pdf">
                Contract
              </a>
            </Text>

            <Text>
              <a
                target="_blank"
                as="a"
                href="https://forms.gle/mpRjNCpKxE6fhUpq6"
              >
                Sponsor Ad Form
              </a>
            </Text>

            <Text>
              <a
                target="_blank"
                as="a"
                href="https://forms.gle/UovajWJyEefKvn3d6"
              >
                Talent Request Form
              </a>
            </Text>

            <Text as="h4" css={{ mt: "$4", color: "$primary" }}>
              MISC
            </Text>


            <Text>
              <a
                target="_blank"
                as="a"
                href="https://forms.gle/Wm3d7MppZYvi6paQ7"
              >
                Talent Music Submissions
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

            <Text as="h4" css={{ mt: "$4", color: "$primary" }}>
              Interview Workshop
            </Text>

            <Text>
              <a
                target="_blank"
                as="a"
                href="https://forms.gle/5zW3oHTPfYvV3GTY6"
              >
                CSI Essay Upload
              </a>
            </Text>
            <Text>
              <a
                target="_blank"
                as="a"
                href="/files/SampleQuestions-Harmony2022.pdf"
              >
                Practice Questions
              </a>
            </Text>
            <Text>
              <a target="_blank" as="a" href="/files/SampleQuestions.pdf">
                Sample Questions
              </a>
            </Text>
            <Text>
              <a
                target="_blank"
                as="a"
                href="/files/FirstLast_30_Seconds_of_Private_Interview.pdf"
              >
                Interview Opening & Closing 30 Seconds
              </a>
            </Text>
            <Text>
              <a target="_blank" as="a" href="/files/InterviewTips2022.pdf">
                Interview Tips
              </a>
            </Text>
            <Text>
              <a
                target="_blank"
                as="a"
                href="/files/WhatDoJudgesLookForInAPageantInterview.pdf"
              >
                What do Judges Look For in a Pageant Interview?
              </a>
            </Text>
            <Text>
              <Link href="/aboutYourself">Tell me about yourself</Link>
            </Text>
          </Box>
        </Box>
      </Flex>

      {allowedIn !== "MissRoy" && (
        <Modal allowedIn={allowedIn} setAllowedIn={setAllowedIn} />
      )}
      <Footer />
    </>
  );
};

export default Resources;
