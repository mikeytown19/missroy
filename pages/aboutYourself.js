import Seo from "../components/Seo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Box from "../components/Box";
import Hero from "../components/Hero";
import Flex from "../components/Flex";
import Section from "../components/Section";
import Text from "../components/Text";
import Form from "../components/Form";
const AboutYourself = () => {
  return (
    <>
      <Seo />
      <Header />

      <Flex>
        <Box css={{ maxWidth: "$2", h4: { color: "$primary" } }}>
          <Text as="h2">
            How to Answer the "Tell Me A Little About Yourself" Question
          </Text>
          <Text>
            <Text>
              Even if you are a very prepared candidate when it comes to pageant
              interview, I see that a lot of girls trip over this question.
              Especially if you have practiced answering very pointed interview
              questions like "What is your favorite book?" and "Why should you
              win?", this question can seem very vague. The good news is that
              you are in control when it comes to this question- since it's
              somewhat vague, you can take it any direction you want. Here's my
              advice on how to handle this question.
            </Text>
            <Text>
              <Text as="h4">Past, Present, Future</Text>
              If you get stumped, here are three different ways you can answer
              this question: where you've been, where you are now, and where
              you're going. A judge is asking you this question to see what you
              find most important about yourself. Is it that working with horses
              at a young age inspired you to be a veterinarian? Is it that you
              are currently excited about a leadership role you hold in school
              or your community? Or is it how hard you are working towards your
              future career goal?
            </Text>
            <Text>
              <Text as="h4"> Tell Them Why You're There</Text>
              What is it about pageants that brought you here? You can answer
              this question by giving a one-sentence introduction, such as "I'm
              a 21 year old college junior who is dedicated to{" "}
              <a
                href="https://www.pageantplanet.com/article/pageant-platform"
                target="_blank"
              >
                spreading awareness about heart disease"
              </a>
              and then talk about why you are getting involved in pageants. Is
              it to share education about your platform topic? Is it to
              challenge yourself? Is it to gain poise and self-confidence?
              Anytime that you can make a connection between who you are and why
              you should win is an opportunity you should take.
            </Text>
            <Text>
              <Text as="h4">Tell Them Something They Might Not Ask About</Text>
              <a
                href="https://www.pageantplanet.com/article/pageant-paperwork-tips-you-must-know"
                target="_blank"
              >
                Organizing your pageant paperwork is important
              </a>
              , but that doesn't always mean a judge reads it. When I was
              competing in the Miss America organization, I wanted to talk about
              studying abroad for a year in my interviews. Barely any judge ever
              brought it up, so I used these kinds of questions to work that
              information in. If you have a unique fact or talent that isn't
              listed on your paperwork, bring it up when you are asked to talk a
              little about yourself.
            </Text>
            <Text>
              <Text as="h4">Think About How Others Describe You</Text>
              Asking your friends to describe you in three words is a good
              exercise for gaining knowledge about the kind of impression you
              give. If all your friends describe you as a "go-getter", for
              example, tell the judges! Sharing that others think positive
              things about you that can add to what you'll bring to the crown is
              a fun way to introduce yourself. Don't get stumped by this
              question! Use the tips above to get the judges interested and
              engaged so you can nail the pageant interview and capture the
              crown!
            </Text>
          </Text>
        </Box>
      </Flex>
    </>
  );
};

export default AboutYourself;
