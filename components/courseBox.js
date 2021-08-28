import {Center, Link} from "@chakra-ui/react";
import LinkNext from 'next/link'

//Each box must contain background image from recourses.
// bgImage={"url(https://picsum.photos/640/480)"} - random img for test purposes.
export default function CourseBox(props) {
  return (
    <Center border={"solid"} borderRadius={"xl"} bg={props.bgColor || "yellow.50"} w={"100%"} h={"100%"}>
      <LinkNext href={props.link} passHref>
        <Link color={"black"} fontSize={props.fontSize || "2rem"} isExternal={props.external || false}
              noOfLines={5} placeContent={"center"}>{props.name}</Link>
      </LinkNext>
    </Center>
  )
}
