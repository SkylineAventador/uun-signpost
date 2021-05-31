import {Box, Flex, Link} from "@chakra-ui/react";
import LinkNext from 'next/link'

// bgImage={"url(https://picsum.photos/640/480)"}
export default function CourseBox(props){
    return(
        <Box position={"relative"} bgImage="/code_background.jpg" boxShadow={"2xl"}
             backgroundSize={"cover"} backgroundPosition={"center"} backgroundRepeat={"no-repeat"} borderRadius={"xl"}>
            <Flex direction={"column"} position={"absolute"} background={"rgba(0,0,0,0.5)"} w={"100%"}
                  h={"100%"} justify={"center"} align={"center"} textAlign={"center"} borderRadius={"xl"} p={2}>
                <LinkNext href={props.link} passHref>
                    <Link color={"white"} fontSize={["1rem", "1.5rem", "2rem"]} isExternal
                          noOfLines={5}>{props.name}</Link>
                </LinkNext>
            </Flex>
        </Box>
    )
}
