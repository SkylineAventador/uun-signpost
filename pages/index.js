import Head from 'next/head'
import {
  Alert,
  AlertIcon,
  Avatar, Badge,
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading, HStack,
  Link, Stack,
  Text,
  VStack
} from "@chakra-ui/react";
import Layout, {siteTitle} from "../components/layout";
import CourseBox from "../components/courseBox";
import LinkNext from "next/link";
import {IoShareSocial} from "react-icons/io5";

export default function Home() {
  return (
    <Layout home>
      <Box p={5}>
        <Head>
          <title>{siteTitle}</title>
          <meta name="description" content="Generated by create next app"/>
          <link rel="icon" href="/favicon.ico"/>
        </Head>
        <Alert status={"error"} variant={"left-accent"} my={10}>
          <AlertIcon/>
          <Text fontSize={["1rem", "1.75rem", "2.5rem"]} fontWeight={"extrabold"}>
            13.11.2021 - Project development is temporarily suspended. For more information, please contact UUN Discord server
            administrator.
          </Text>
        </Alert>
        <Alert status={"warning"} variant={"left-accent"} mb={5}>
          <AlertIcon/>
          <Text fontSize={["1rem", "1.25rem", "1.5remvw"]}>
            Nektere stranky docasne nejsou responzivni pro mobilni zarizeni a ultra-widescreen monitory.
          </Text>
        </Alert>
        <Alert status={"info"} variant={"left-accent"} mb={5}>
          <AlertIcon/>
          <Text fontSize={["md", "lg", "xl"]}>Vsechny vase namety (co opravit, pridat atd.) posilejte, prosim,
            do
            kanalu <strong>#napady-na-zlepseni</strong> na nasem
            <Link href={"https://discord.gg/pFEqzyK"} isExternal fontWeight={"bold"} color={"blue.500"} ml={1}>UUN
              Discord serveru</Link>
          </Text>
        </Alert>
        <Grid autoRows={"minmax(250px, auto)"} templateColumns={"repeat(auto-fill, 1fr)"} gap={6}>
          <GridItem colSpan={[-1, 3]}>
            <CourseBox name={"Předměty"} link={"/study_programs"} fontSize={"5rem"}/>
          </GridItem>
          <VStack alignItems={"stretch"}>
            <GridItem h={"100%"}>
              <CourseBox name={"Rozvrh předmětů"}
                         link={"https://uuapp.plus4u.net/uu-dockit-maing02/4e68298f1658473e9bf5692272883290/document/sheet?documentId=611f77b986355500272236c6&sheetId=611f77b986355500272236cb"}
                         external/>
            </GridItem>
            <GridItem>
              <Stack direction={"row"} bg={"whiteAlpha.700"} borderRadius={"xl"} justifyContent={"center"}
                     alignItems={"center"}
                     boxShadow={"xl"}
                     flexWrap={"wrap"}>
                <LinkNext href={"#"} passHref>
                  <Link fontSize={"2rem"} ml={1} color={"blackAlpha.700"}>Novinky</Link>
                </LinkNext>
                <Badge colorScheme={"orange"} fontSize={"0.8em"} ml={1}>In progress</Badge>
              </Stack>
            </GridItem>
          </VStack>
          <GridItem colSpan={1}>
            <Center borderRadius={"xl"} bg={"whiteAlpha.700"} w={"100%"} h={"100%"} boxShadow={"xl"}>
              <VStack color={"blackAlpha.700"}>
                <Box>
                  <Heading fontSize={"lg"}>Terminy zkousek <Badge colorScheme={"telegram"}>Waiting</Badge></Heading>
                </Box>
                <Box>
                  <Text fontSize={"sm"}>Ceka se na zverejneni terminu studijnim oddelenim</Text>
                </Box>
              </VStack>
            </Center>
          </GridItem>
          <VStack alignItems={"stretch"} justifyContent={"space-between"}>
            <GridItem colSpan={1}>
              <CourseBox name={"Domovska stranka skoly"} link={"https://unicornuniversity.net"} external/>
            </GridItem>
            <GridItem colSpan={1}>
              <CourseBox name={"Kontakty skoly"} link={"https://unicornuniversity.net/cs/contacts"} external/>
            </GridItem>
            <GridItem colSpan={1}>
              <Flex bg={"whiteAlpha.700"} borderRadius={"xl"} justifyContent={"center"} alignItems={"center"}
                    boxShadow={"xl"}>
                <Avatar size={"sm"} name={"Dmytro Kravtsov"} src={"/Dima_Avatar_Photo.jpg"} mr={2}/>
                <LinkNext href={"#"} passHref>
                  <Link fontSize={"2rem"} color={"blackAlpha.700"}>O nas</Link>
                </LinkNext>
                <Badge colorScheme={"orange"} fontSize={"0.8em"} ml={1}>In progress</Badge>
              </Flex>
            </GridItem>
            <GridItem colSpan={1}>
              <Flex bg={"whiteAlpha.700"} borderRadius={"xl"} justifyContent={"center"} alignItems={"center"}
                    boxShadow={"xl"}>
                <IoShareSocial/>
                <LinkNext href={"/contacts"} passHref>
                  <Link fontSize={"2rem"} ml={1} color={"blackAlpha.700"}>Kontakt</Link>
                </LinkNext>
                <Badge colorScheme={"green"} fontSize={"0.8em"} ml={1}>New</Badge>
              </Flex>
            </GridItem>
          </VStack>
        </Grid>
      </Box>
    </Layout>
  );
}
