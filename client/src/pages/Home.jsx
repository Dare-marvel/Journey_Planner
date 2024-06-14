import { Button, Card, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <Flex h='100dvh' w='100dvw' align='center' justify='center'>
            <Card maxW='md' p={2} mx='auto' display='flex' flexDir='column' gap={2}>
                <Button>
                    <Link to='/list'>List of All Stations</Link>
                </Button>
                <Button>
                    <Link to='/shortestpath'>Shortest Path</Link>
                </Button>
                <Button>
                    <Link to='/map'>Railway Map</Link>
                </Button>
            </Card>
        </Flex>
    )
}