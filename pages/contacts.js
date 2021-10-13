import Layout from "../components/layout";
import Head from "next/head";
import LinkNext from "next/link";
import {Box, Heading, Image, Link, Stack, Text} from "@chakra-ui/react";

export default function Contacts() {
  return (
    <Layout>
      <Box p={5}>
        <Head>
          <title>Kontakt</title>
          <meta name="description" content="UUN Signpost Kontakt"/>
          <link rel="icon" href="/favicon.ico"/>
        </Head>
        <Heading as={"h2"} size={"2xl"}>Kontakt</Heading>
        <Text fontSize={"2xl"} color={"gray.500"}>Seznam dostupnych kontaktu na nasi socialni site.</Text>
        <Stack direction={"row"} bg={"white"} borderRadius={"xl"} justifyContent={"space-around"} my={3}
               flexWrap={"wrap"}>
          <Stack direction={"column"} alignItems={"center"} py={2}>
            <Text color={"blackAlpha.700"} fontWeight={"bold"} fontSize={"3xl"}>[EU🇪🇺/CZ🇨🇿] UUN Discord
              server</Text>
            <Text color={"gray.500"} fontWeight={"bold"} fontSize={"xl"}>Univerzitni discord server. Info, baveni se a
              jine...</Text>
            <Image boxSize={["sm", "md", "lg"]} src={"/QR_Discord_PNG.png"} objectFit={"cover"}/>
            <LinkNext href={"https://discord.com/invite/pFEqzyK"} passHref>
              <Link color={"blackAlpha.700"} fontSize={"2vmax"}>https://discord.com/invite/pFEqzyK</Link>
            </LinkNext>
          </Stack>
          <Stack direction={"column"} alignItems={"center"} py={2}>
            <Text color={"blackAlpha.700"} fontWeight={"bold"} fontSize={"3xl"}>[EU🇪🇺/CZ🇨🇿] UUN Facebook
              group</Text>
            <Text color={"gray.500"} fontWeight={"bold"} fontSize={"xl"}>Univerzitni Facebook skupina.</Text>
            <Image boxSize={["sm", "md", "lg"]} src={"/QR_Facebook_png.png"} objectFit={"cover"}/>
            <LinkNext href={"https://www.facebook.com/groups/945105612679242/"} passHref>
              <Link color={"blackAlpha.700"} fontSize={"2vmax"}>https://www.facebook.com/groups/945105612679242/</Link>
            </LinkNext>
          </Stack>
        </Stack>
        <Stack direction={"row"} bg={"white"} borderRadius={"xl"} justifyContent={"space-around"} my={3}
               flexWrap={"wrap"}>
          <Stack direction={"column"} alignItems={"center"} py={2}>
            <Text color={"blackAlpha.700"} fontWeight={"bold"} fontSize={"3xl"}>[CIS/RU🇷🇺🇺🇦🇧🇾🇰🇿] Telegram
              chat</Text>
            <Text color={"gray.500"} fontWeight={"bold"} fontSize={"xl"}>Только для русскоговорящих студентов из стран
              СНГ</Text>
            <Image boxSize={["sm", "md", "lg"]} src={"/QR_Telegram_JPEG.jpeg"} objectFit={"cover"}/>
            <LinkNext href={"https://t.me/joinchat/hld3p0eCdnk4N2Y8"} passHref>
              <Link color={"blackAlpha.700"} fontSize={"2vmax"}>https://t.me/joinchat/hld3p0eCdnk4N2Y8</Link>
            </LinkNext>
          </Stack>
        </Stack>
      </Box>
    </Layout>
  );
}
