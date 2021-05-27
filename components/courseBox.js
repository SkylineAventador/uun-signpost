import {Box, Flex, Link} from "@chakra-ui/react";

export default function CourseBox(props){
    return(
        <Box position={"relative"} bgImage={"url(https://picsum.photos/640/480)"} boxShadow={"2xl"}
             backgroundSize={"cover"} backgroundPosition={"center"} backgroundRepeat={"no-repeat"} borderRadius={"xl"}>
            <Flex direction={"column"} position={"absolute"} background={"rgba(0,0,0,0.5)"} w={"100%"}
                  h={"100%"} justify={"center"} align={"center"} textAlign={"center"} borderRadius={"xl"} p={2}>
                <Link color={"white"} fontSize={[".5rem","1rem","2rem"]} href={"https://google.cz"} isExternal>Architektura cloudovych aplikaci</Link>
            </Flex>
        </Box>
    )
}
