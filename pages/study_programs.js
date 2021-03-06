import {Alert, AlertIcon, Box, Divider, Grid, GridItem, Heading, Link, Stack, Text} from "@chakra-ui/react";
import Head from "next/head";
import Layout from "../components/layout";
import LinkNext from 'next/link';

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
        <Text fontSize={"2xl"} color={"gray.500"}>Vyberte si jeden z predmetu pro presmerovani na jeho stranku.</Text>
        <Alert status={"info"} variant={"left-accent"} mb={2}>
          <AlertIcon/>
          <Text fontSize={["md", "lg"]}>
            <strong>Pozor:</strong> Zkontrolujte si prosim, zda jste prihlaseni do systemu Plus4U.
          </Text>
        </Alert>
        <Alert status={"warning"} variant={"left-accent"}>
          <AlertIcon/>
          <Text fontSize={["md", "lg"]}>
            <strong>Docasne:</strong> Jsou zobrazovany jen predmety pro 2. rocnik denniho bakalarskeho studia ak. roku
            2021/22 a volitelne predmety.
          </Text>
        </Alert>

        <Grid templateColumns={"repeat(2, minmax(auto, 1fr))"} gap={4} py={5}>
          <GridItem colSpan={[2, 1]}>
            <Grid templateColumns={"repeat(2, minmax(auto, 1fr))"} gap={4} alignContent={"space-between"}
                  justifyItems={"stretch"} textAlign={"center"}>
              <GridItem colSpan={2}>
                <Heading fontSize={"4xl"} color={"orange.500"}>Softwarovy vyvoj</Heading>
              </GridItem>
              <DataBox name={"Diskretni matematika"} link={"https://unicornuniversity.net/cs/discrete-mathematics"}
                       bg={"blue.300"} color={"white"}/>
              <DataBox name={"Frontendove systemy"} link={"https://unicornuniversity.net/cs/frontend-systems"}
                       bg={"yellow.300"}/>
              <DataBox name={"Backendove systemy"} link={"https://unicornuniversity.net/cs/backend-systems"}
                       bg={"orange.300"} color={"white"}/>
              <DataBox name={"Projektovy management"} link={"https://unicornuniversity.net/cs/project-management-it"}
                       bg={"green.300"} color={"white"}/>
              <GridItem colSpan={2}>
                <DataBox name={"Obchodni anglictina 3"} link={"https://unicornuniversity.net/cs/business-english-3"}
                         bg={"red.300"} color={"white"}/>
              </GridItem>
            </Grid>
          </GridItem>
          <GridItem colSpan={[2, 1]}>
            <Grid templateColumns={"repeat(2, minmax(auto, 1fr))"} gap={4} alignContent={"space-between"}
                  justifyItems={"stretch"}
                  textAlign={"center"}>
              <GridItem colSpan={2}>
                <Heading fontSize={"4xl"} color={"blue.500"}>Business Management</Heading>
              </GridItem>
              <DataBox name={"Diskretni matematika"} link={"https://unicornuniversity.net/cs/discrete-mathematics"}
                       bg={"blue.300"} color={"white"}/>
              <DataBox name={"Obchodni anglictina 3"} link={"https://unicornuniversity.net/cs/business-english-3"}
                       bg={"red.300"} color={"white"}/>
              <DataBox name={"Cross-cultural management"}
                       link={"https://unicornuniversity.net/cs/cross-cultural-management"}
                       bg={"orange.300"} color={"white"}/>
              <DataBox name={"Rizeni podnikovych financi"}
                       link={"https://unicornuniversity.net/cs/corporate-finance-management"}
                       bg={"yellow.300"} color={"blackAlpha.700"}/>
              <GridItem colSpan={2}>
                <DataBox name={"Makroekonomie"} link={"https://unicornuniversity.net/cs/macroeconomics"}
                         bg={"green.300"} color={"white"}/>
              </GridItem>
            </Grid>
          </GridItem>

          <GridItem colSpan={2}>
            <Divider/>
          </GridItem>

          <GridItem colSpan={2}>
            <Grid templateColumns={"repeat(2, 1fr)"} gap={4} alignContent={"start"} justifyItems={"stretch"}
                  textAlign={"center"} m={2}>
              <GridItem colSpan={2}>
                <Heading fontSize={"4xl"} color={"gray.500"}>Volitelne</Heading>
              </GridItem>
              <DataBox name={"Cambridge English"}
                       link={"https://unicornuniversity.net/cs/preparation-for-cambridge-english-first-1"}/>
              <DataBox name={"3D modely a tisk"} link={"https://unicornuniversity.net/cs/3d-print"}/>
              <DataBox name={"Rusky jazyk"}
                       link={"https://unicornuniversity.net/cs/russian-for-beginners-1"}/>
              <DataBox name={"Nemecky jazyk"}
                       link={"https://unicornuniversity.net/cs/german-for-beginners-1"}/>
              <DataBox name={"Matematicky proseminar"}
                       link={"https://unicornuniversity.net/cs/essentials-of-mathematics"}/>
              <DataBox name={"Zabavna matematika"}
                       link={"https://unicornuniversity.net/cs/entertaining-mathematics"}/>
              <GridItem colSpan={2}>
                <DataBox name={"Time & stress management"}
                         link={"https://unicornuniversity.net/cs/time-and-stress-management"}/>
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>
      </Box>
    </Layout>
  );

  function DataBox(props) {
    return (
      <GridItem colSpan={[2, 1]}>
        <Box bg={props.bg || "gray.300"} color={props.color || "blackAlpha.700"} fontWeight={props.fw || "bold"}
             borderRadius={"full"} p={2}>
          <LinkNext href={props.link || "/"} passHref>
            <Link isExternal>{props.name || "Data load error"}</Link>
          </LinkNext>
        </Box>
      </GridItem>
    );
  }
}
