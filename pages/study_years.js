import {Box, SimpleGrid} from "@chakra-ui/react";
import Head from "next/head";
import Layout from "../components/layout";
import CourseBox from "../components/courseBox";

export default function StudyYears() {
  return (
    <Layout>
      <Box p={5}>
        <Head>
          <title>Years of study</title>
          <meta name="description" content="Generated by create next app"/>
          <link rel="icon" href="/favicon.ico"/>
        </Head>
        <SimpleGrid columns={2} autoRows={"minmax(250px, 1fr)"} spacing="40px">
          <CourseBox name={"1. ročník"} link={"/courses_list"}/>
          <CourseBox name={"2. ročník"} link={"/"}/>
          <CourseBox name={"3. ročník"} link={"/"}/>
          <CourseBox name={"4. ročník"} link={"/"}/>
        </SimpleGrid>
      </Box>
    </Layout>
  );
}
