import { Flex, Heading, Image } from "@chakra-ui/react";

export default function Map() {
    return (
        <Flex h='100dvh' w='100dvw' flexDirection='column' align='center' justify='center'>
            <Heading my={2}>
                Railway Map
            </Heading>
            <Image src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Mumbai_suburban_rail_map.svg" h='100%' w='100%' />
        </Flex>
    )
}