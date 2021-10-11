import Head from 'next/head'
import NextLink from 'next/link'
import {Badge, Box, Flex, Heading, Link, Spacer, Text} from "@chakra-ui/react";
import LinkNext from "next/link";

export const siteTitle = 'Unicorn University signpost'

export default function Layout({children, home}) {
  return (
    <Flex direction={"column"} wrap={"nowrap"} minH={"100vh"} bg={"gray.100"}>
      <Head>
        <link rel="icon" href="/favicon.ico"/>
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle}/>
        <meta name="twitter:card" content="summary_large_image"/>
      </Head>
      <Heading size={"xl"} minH={"15vh"} bg={"gray.100"}>Unicorn University rozcestnik</Heading>
      {children}
      {!home && (
        <Box>
          <NextLink href="/">
            <a>← Back to home</a>
          </NextLink>
        </Box>
      )}
      <Spacer/>
      <Heading size={"md"} minH={"5vh"} bg={"gray.100"} m={5}>
        <LinkNext href={"/o-nas"} passHref>
          <Link fontSize={"1.25rem"}> Created by SkylineAventador (2021)</Link>
        </LinkNext>
        <Badge colorScheme={"orange"} ml={1}>In progress</Badge>
        <Text fontSize={"sm"} color={"gray.500"}>Veškera data jsou aktuální na ZS ak. roku 2021/22</Text>
      </Heading>
    </Flex>
  )
}
