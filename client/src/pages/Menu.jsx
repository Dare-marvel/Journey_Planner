import { Box, Button, Card, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import mumbaiLocal from '../../../ProjectImages/MumbaiLocal.jpg';
import { Navbar } from "../components/Navbar";

export default function Menu() {
    return (
        <>
            <Navbar />
            <Box position='fixed' zIndex={-10} h='100dvh' w='100dvw' backgroundImage={mumbaiLocal} backgroundSize='cover' backgroundPosition='center' backgroundRepeat='no-repeat' ></Box>
            <Flex h='100dvh' w='100dvw' align='center' justify='center'>
                <Card backgroundColor='rgba(255,255,255,0.5)' backdropFilter='blur(2px)' maxW='md' p={4} display='flex' flexDir='column' gap={4}>
                    <Button backgroundColor='rgba(255,255,255,0.66)' _hover={{ backgroundColor: 'white', color: 'black' }}>
                        <Link to='/list'>List of All Stations</Link>
                    </Button>
                    <Button backgroundColor='rgba(255,255,255,0.66)' _hover={{ backgroundColor: 'white', color: 'black' }}>
                        <Link to='/shortestpath'>Shortest Path</Link>
                    </Button>
                    <Button backgroundColor='rgba(255,255,255,0.66)' _hover={{ backgroundColor: 'white', color: 'black' }}>
                        <Link to='/map'>Railway Map</Link>
                    </Button>
                    <Button backgroundColor='rgba(255,255,255,0.66)' _hover={{ backgroundColor: 'white', color: 'black' }}>
                        <Link to='/chats'>Chats</Link>
                    </Button>
                </Card>
            </Flex>
        </>
    )
}