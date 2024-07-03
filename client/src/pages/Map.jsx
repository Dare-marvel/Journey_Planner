import { Box, Flex, Heading, Image } from "@chakra-ui/react";

export default function Map() {
  return (
    <>
      <Box position='fixed' zIndex={-10} h='100dvh' w='100dvw' backgroundImage='url(https://upload.wikimedia.org/wikipedia/commons/5/5e/Mumbai_suburban_rail_map.svg)' filter='blur(10px)' backgroundSize='cover' backgroundPosition='center' backgroundRepeat='no-repeat' ></Box>
      <Flex flexDirection='column' align='center' justify='center'>
        <Heading my={2} color='black'>
          Railway Map
        </Heading>
        <Image src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Mumbai_suburban_rail_map.svg" maxH='100vh' maxW='100vw' />
      </Flex>
    </>
  )
}