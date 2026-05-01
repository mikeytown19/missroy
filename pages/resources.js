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
              <a
                target="_blank"
                as="a"
                href="/files/2026Calendar.pdf"
              >
                Calendar
              </a>
            </Text>

            <Text>
              <a
                target="_blank"
                as="a"
                href="/files/2026Checklist.pdf"
              >
                Checklist
              </a>
            </Text>

            <Text>
              <a rel="noopener noreferrer" as="a" href="https://forms.gle/Wx96ptfBCKsczeCNA" target="_blank" >
              Talent Request Form
              </a>
            </Text>

            <Text>
              <a rel="noopener noreferrer" as="a" href="https://storage.googleapis.com/msgsndr/2kD74R4iVusddhxXy8hi/media/64ee6c75f6f755e92ac181bb.pdf" target="_blank" >
              CSI Essay Instructions
              </a>
            </Text>




            <Text>
              <a rel="noopener noreferrer" as="a" href="https://forms.gle/46AprdUNUFRo9k9Z7" target="_blank" >
              CSI Essay Upload
              </a>
            </Text>


            <Text>
              <a rel="noopener noreferrer" as="a" href="https://storage.googleapis.com/msgsndr/2kD74R4iVusddhxXy8hi/media/64ee6c75ba2ab03f26752d96.pdf" target="_blank" >
              Fact Sheet Instructions
              </a>
            </Text>


            <Text>
              <a rel="noopener noreferrer" as="a" href="https://forms.gle/VtKvkbsyg9RaHqtu5" target="_blank" >
                Fact Sheet Upload
              </a>
            </Text>


         

            <Text>
              <a rel="noopener noreferrer" as="a" href="https://www.zeffy.com/en-US/ticketing/sponsorship-form-14" target="_blank" >
              Sponsorship Opportunity Form 
              </a>
            </Text>


            <Text>
              <a rel="noopener noreferrer" as="a" href="https://storage.googleapis.com/msgsndr/2kD74R4iVusddhxXy8hi/media/688a781b3c5f720183ed82c3.pdf" target="_blank" >
              SpotFund Account Setup 
              </a>
            </Text>


            <Text>
              <a rel="noopener noreferrer" as="a" href="https://storage.googleapis.com/msgsndr/2kD74R4iVusddhxXy8hi/media/688a7f7fc6431c31762453d5.pdf" target="_blank" >
              Miss America Registration step-by-step guide
              </a>
            </Text>


          





            <Text>
              <a
                target="_blank"
                as="a"
                href="/files/2025SponsorLetter.pdf"
              >
                Sponsorship Letter
              </a>
            </Text>
            <Text>
              <a
                target="_blank"
                as="a"
                href="/files/Local-Paperwork-Instructions-1.pdf"
              >
                Paperwork Instructions
              </a>
            </Text>
            <Text>
              Contract - Coming Soon
              {/* <a target="_blank" as="a" href="/files/2024Contract.pdf">
              </a> */}
            </Text>

            <Text>
              <a
                target="_blank"
                as="a"
                href="https://docs.google.com/forms/d/e/1FAIpQLScI3RuF-NbLcJiyuA1kNXpj-boe6KJUBkWMSFDQptrlpB3c1g/viewform"
              >
                Sponsor Ad Form
              </a>
            </Text>
            <Text>
              <a
                target="_blank"
                as="a"
                href="https://docs.google.com/forms/d/e/1FAIpQLScEOR1zlL7axzBxK1HjlQia4zlqSZJrdTggHW-rtRbJVYPHrQ/viewform"
              >
                Titleholder Agreement
              </a>
            </Text>

         

            <Text as="h4" css={{ mt: "$4", color: "$primary" }}>
              MISC
            </Text>


            <Text>
              <a rel="noopener noreferrer" as="a" href="https://forms.gle/8guX8RHNBGUpeRvy7" target="_blank" >
              Talent Music Submission
              </a>
            </Text>








            <Text>
              <a
                target="_blank"
                as="a"
                href="https://drive.google.com/file/d/107tQJQKhBwYAOwpmj0aduljz87NzZZBq/view?usp=drivesdk"
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

      {allowedIn == "missroy26" && (
        <Modal allowedIn={allowedIn} setAllowedIn={setAllowedIn} />
      )}
      <Footer />
    </>
  );
};

export default Resources;
