import Head from "next/head";
import Layout from "../components/layout";
import {Box, Button, Center, Text, Wrap, WrapItem} from "@chakra-ui/react";
import {useState} from "react";

export default function ClicksCount() {

  const [coursesClicks, setCoursesClicks] = useState(0);
  const [contactClicks, setContactClicks] = useState(0);

  return (
    <Layout>
      <Center p={5}>
        <Head>
          <title>Service - Clicks Count</title>
          <meta name="description" content="UUN - Clicks Count"/>
          <link rel="icon" href="/favicon.ico"/>
        </Head>
        <Wrap>
          <WrapItem>
            <Box bg={"blackAlpha.500"} borderRadius={"xl"} boxShadow={"xl"} p={2}>
              <Text fontSize={"1.25rem"} color={"white"}>{Date().toLocaleString()}</Text>
            </Box>
          </WrapItem>
          <WrapItem>
            <Button bg={"blackAlpha.500"} borderRadius={"xl"} boxShadow={"xl"} p={2}
                    onClick={() => setCoursesClicks(coursesClicks + 1)}>
              <Text fontSize={"1.25rem"} color={"white"}>Predmety clicks: {coursesClicks}</Text>
            </Button>
          </WrapItem>
          <WrapItem>
            <Button bg={"blackAlpha.500"} borderRadius={"xl"} boxShadow={"xl"} p={2}
                    onClick={() => setContactClicks(contactClicks + 1)}>
              <Text fontSize={"1.25rem"} color={"white"}>Kontakt clicks: {contactClicks}</Text>
            </Button>
          </WrapItem>
        </Wrap>
      </Center>
    </Layout>
  );
}
