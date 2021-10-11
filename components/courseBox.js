import {Center, Link} from "@chakra-ui/react";
import LinkNext from 'next/link'

//Each box must contain background image from recourses.
// bgImage={"url(https://picsum.photos/640/480)"} - random img for test purposes.
export default function CourseBox(props) {
  return (
    <Center borderRadius={"xl"} bg={props.bgColor || "whiteAlpha.700"} w={"100%"} h={"100%"} p={2} boxShadow={"xl"}>
      {/*<LinkNext href={props.link} passHref>*/}
      {/*  <Link color={"black"} fontSize={props.fontSize || "2rem"} isExternal={props.external || false}*/}
      {/*        noOfLines={5} placeContent={"center"}>{props.name}</Link>*/}
      {/*</LinkNext>*/}
      <LinkNext href={props.link || "https://unicornuniversity.net"} passHref>
        <Link fontSize={props.fontSize || "2rem"} color={"blackAlpha.700"} noOfLines={5} isExternal={props.external || false}>{props.name || "Unknown link"}</Link>
      </LinkNext>
    </Center>
  )
}
