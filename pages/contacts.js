import Layout from "../components/layout";
import Head from "next/head";
import LinkNext from "next/link";
import {Box, Image, Link, Stack, Text} from "@chakra-ui/react";

export default function Contacts() {
  return (
    <Layout>
      <Box p={5}>
        <Head>
          <title>Kontakt</title>
          <meta name="description" content="UUN Signpost Kontakt"/>
          <link rel="icon" href="/favicon.ico"/>
        </Head>
        <Stack direction={"row"} bg={"white"} borderRadius={"xl"} justifyContent={"space-around"} p={5} mb={3}>
          <Text color={"blackAlpha.700"} fontWeight={"bold"} fontSize={"3xl"}>Testovaci text</Text>
          <Text color={"blackAlpha.700"} fontWeight={"bold"} fontSize={"3xl"}>Testovaci text</Text>
        </Stack>
        <Stack direction={"row"} bg={"white"} borderRadius={"xl"} justifyContent={"space-around"} p={5}>
          <Stack direction={"column"} alignItems={"center"} py={2}>
            <Image boxSize={"15vw"} src={"/QR_Discord_PNG.png"} objectFit={"cover"}/>
            <LinkNext href={"https://discord.com/invite/pFEqzyK"} passHref>
              <Link color={"blackAlpha.700"} fontSize={"2vmax"}>https://discord.com/invite/pFEqzyK</Link>
            </LinkNext>
          </Stack>
          <Stack direction={"column"} alignItems={"center"} py={2}>
            <Image boxSize={"15vw"} src={"/QR_Telegram_JPEG.jpeg"} objectFit={"cover"}/>
            <LinkNext href={"https://t.me/joinchat/hld3p0eCdnk4N2Y8"} passHref>
              <Link color={"blackAlpha.700"} fontSize={"2vmax"}>https://t.me/joinchat/hld3p0eCdnk4N2Y8</Link>
            </LinkNext>
          </Stack>
        </Stack>
      </Box>
    </Layout>
  );
}
