import {Box, Flex, Link, Text, GridItem} from "@chakra-ui/react";
import LinkNext from 'next/link'

//Each box must contain background image from recourses.
// bgImage={"url(https://picsum.photos/640/480)"} - random img for test purposes.
export default function CourseBox(props){
    return(
        <GridItem position={"relative"} boxShadow={"2xl"}
             backgroundSize={"cover"} backgroundPosition={"center"} backgroundRepeat={"no-repeat"} borderRadius={"xl"} border={"solid"}>
            <Flex direction={"column"} position={"absolute"} background={"yellow.50"} w={"100%"}
                  h={"100%"} justify={"center"} align={"center"} textAlign={"center"} borderRadius={"xl"} p={2}>
                <LinkNext href="/" passHref>
                    <Link color={"black"} fontSize={["1rem", "1.5rem", "2rem"]} isExternal
                          noOfLines={5}>{props.name}</Link>
                </LinkNext>
            </Flex>
        </GridItem>
      // <Box bg={"tomato"}>
      //   <Text>{props.name}</Text>
      // </Box>
    )
}
