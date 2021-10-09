import {Badge, Box, Divider, Grid, GridItem, Heading, Text} from "@chakra-ui/react";
import Head from "next/head";
import Layout from "../components/layout";
import CourseBox from "../components/courseBox";

export default function StudyPrograms() {
  return (
    <Layout>
      <Box p={5}>
        <Head>
          <title>Study programs</title>
          <meta name="description" content="Generated by create next app"/>
          <link rel="icon" href="/favicon.ico"/>
        </Head>
        <Heading as={"h2"} size={"2xl"}>Seznam dostupnych predmetu</Heading>
        <Text fontSize={"2xl"} color={"gray.500"}>Vyberte si jeden z predmetu pro presmerovani na jeho stranku.
          Pozor: Uzivatel musi byt prihlasen v systemu Plus4U.</Text>

        <Grid templateColumns={"repeat(2, 1fr)"} autoRows gap={4} py={5}>

          <Grid templateColumns={"repeat(2, 1fr)"} autoRows gap={4} alignContent={"start"}
                justifyItems={"stretch"} textAlign={"center"}>
            <GridItem colSpan={2}>
              <Heading fontSize={"4xl"} color={"orange.500"}>Softwarovy vyvoj</Heading>
            </GridItem>
            <Box bg={"yellow.300"} color={"blackAlpha.700"} fontWeight={"bold"} borderRadius={"full"} p={2}>Frontendove
              systemy</Box>
            <Box bg={"blue.300"} color={"white"} fontWeight={"bold"} borderRadius={"full"} p={2}>Diskretni
              matematika</Box>
            <Box bg={"green.300"} color={"white"} fontWeight={"bold"} borderRadius={"full"} p={2}>Projektovy
              management</Box>
            <Box bg={"orange.300"} color={"white"} fontWeight={"bold"} borderRadius={"full"} p={2}>Backendove
              systemy</Box>
            <Box bg={"red.300"} color={"white"} fontWeight={"bold"} borderRadius={"full"} p={2}>Obchodni anglictina
              3</Box>
          </Grid>

          <Grid templateColumns={"repeat(2, 1fr)"} autoRows gap={4} alignContent={"start"} justifyItems={"stretch"}
                textAlign={"center"}>
            <GridItem colSpan={2}>
              <Heading fontSize={"4xl"} color={"blue.500"}>Business Management</Heading>
            </GridItem>
            <Box bg={"yellow.300"} color={"blackAlpha.700"} fontWeight={"bold"} borderRadius={"full"} p={2}>Rizeni
              podnikovych financi</Box>
            <Box bg={"blue.300"} color={"white"} fontWeight={"bold"} borderRadius={"full"} p={2}>Diskretni
              matematika</Box>
            <Box bg={"orange.300"} color={"white"} fontWeight={"bold"} borderRadius={"full"} p={2}>Cross-cultural
              management</Box>
            <Box bg={"green.300"} color={"white"} fontWeight={"bold"} borderRadius={"full"} p={2}>Makroekonomie</Box>
            <Box bg={"red.300"} color={"white"} fontWeight={"bold"} borderRadius={"full"} p={2}>Obchodni anglictina
              3</Box>
          </Grid>

          <GridItem colSpan={2}>
            <Divider/>
          </GridItem>

          <Grid templateColumns={"repeat(2, 1fr)"} autoRows gap={4} alignContent={"start"} justifyItems={"stretch"}
                textAlign={"center"}>
            <GridItem colSpan={2}>
              <Heading fontSize={"4xl"} color={"gray.500"}>Povinne-volitelne</Heading>
            </GridItem>
            <Box bg={"gray.300"} color={"blackAlpha.700"} fontWeight={"bold"} borderRadius={"full"} p={2}>Rusky jazyk
              1</Box>
            <Box bg={"gray.300"} color={"blackAlpha.700"} fontWeight={"bold"} borderRadius={"full"} p={2}>3D modely a
              tisk</Box>
            <Box bg={"gray.300"} color={"blackAlpha.700"} fontWeight={"bold"} borderRadius={"full"} p={2}>Priprava na
              Cambridge English first 1</Box>
            <Box bg={"gray.300"} color={"blackAlpha.700"} fontWeight={"bold"} borderRadius={"full"} p={2}>Time & stress
              management</Box>
            <Box bg={"gray.300"} color={"blackAlpha.700"} fontWeight={"bold"} borderRadius={"full"} p={2}>Nemecky jazyk
              1</Box>
            <Box bg={"gray.300"} color={"blackAlpha.700"} fontWeight={"bold"} borderRadius={"full"} p={2}>Matematicky
              proseminar</Box>
            <Box bg={"gray.300"} color={"blackAlpha.700"} fontWeight={"bold"} borderRadius={"full"} p={2}>Zabavna
              matematika</Box>
          </Grid>
          <Grid templateColumns={"repeat(2, 1fr)"} autoRows gap={4} alignContent={"start"} justifyItems={"stretch"}
                textAlign={"center"}>
            <GridItem colSpan={2}>
              <Heading fontSize={"4xl"} color={"gray.500"}>Volitelne</Heading>
            </GridItem>
            <Box bg={"gray.300"} color={"blackAlpha.700"} fontWeight={"bold"} borderRadius={"full"} p={2}>Testovaci
              predmet 1</Box>
            <Box bg={"gray.300"} color={"blackAlpha.700"} fontWeight={"bold"} borderRadius={"full"} p={2}>Testovaci
              predmet 2</Box>
            <Box bg={"gray.300"} color={"blackAlpha.700"} fontWeight={"bold"} borderRadius={"full"} p={2}>Testovaci
              predmet 3</Box>
            <Box bg={"gray.300"} color={"blackAlpha.700"} fontWeight={"bold"} borderRadius={"full"} p={2}>Testovaci
              predmet 4</Box>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}
