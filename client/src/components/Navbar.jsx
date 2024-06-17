import { Button, Flex, Link as ChakraLink, Heading, Stack, Box } from "@chakra-ui/react";
import { Link as ReactLink, useLocation, useNavigate } from 'react-router-dom';
import { ChatState } from "../context/ChatProvider";
import { useState } from "react";

export function Navbar() {
    const location = useLocation();
    const user = ChatState();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const logout = () => {
        localStorage.removeItem('userInfo');
        navigate('/');
    }
    // return (
    //     <Flex position='sticky' zIndex={10} justifyContent='space-between' alignItems='center' px={4} py={2} top={0} backgroundColor='white' w='100%' >
    //         <Heading size='md'>Journey Planner</Heading>
    //         <Flex columnGap={4} justifyContent='center' alignItems='center' >
    //             <ChakraLink as={ReactLink} to='/menu' px={4} py={2} backgroundColor={location.pathname == '/menu' ? 'rgba(0,0,0,0.1)' : ''} >Menu</ChakraLink>
    //             <ChakraLink as={ReactLink} to='/list' px={4} py={2} backgroundColor={location.pathname == '/list' ? 'rgba(0,0,0,0.1)' : ''} >List</ChakraLink>
    //             <ChakraLink as={ReactLink} to='/shortestpath' px={4} py={2} backgroundColor={location.pathname == '/shortestpath' ? 'rgba(0,0,0,0.1)' : ''} >Path</ChakraLink>
    //             <ChakraLink as={ReactLink} to='/map' px={4} py={2} backgroundColor={location.pathname == '/map' ? 'rgba(0,0,0,0.1)' : ''} >Map</ChakraLink>
    //             <ChakraLink as={ReactLink} to='/chats' px={4} py={2} backgroundColor={location.pathname == '/chats' ? 'rgba(0,0,0,0.1)' : ''} >Chats</ChakraLink>
    //             {user && <Button onClick={logout}>Logout</Button>}
    //         </Flex>
    //     </Flex>
    // )
    return (
        <Flex as='nav' borderBottom='1px solid black' position='sticky' top={0} zIndex={10} backgroundColor='white' px={4} py={2} justifyContent='space-between' alignItems='center' wrap='wrap' >
            <Heading size='md' py={2}>PATHCRAFTER</Heading>
            <Button display={{ base: 'block', md: 'none' }} onClick={() => setOpen(o => !o)}>
                {open ?
                    <svg width="20px" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                        <title>Close</title>
                        <path
                            fill="black"
                            d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
                        />
                    </svg> :
                    <svg
                        width="20px"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="black"
                    >
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                }
            </Button>
            <Box
                display={{ base: open ? "block" : "none", md: "block" }}
                flexBasis={{ base: "100%", md: "auto" }}>
                <Stack spacing={4}
                    align="center"
                    justify={["center", "center", "flex-end", "flex-end"]}
                    direction={["column", "column", "row", "row"]}
                    pt={[4, 4, 0, 0]}>
                    <ChakraLink as={ReactLink} to='/menu' px={4} py={2} backgroundColor={location.pathname == '/menu' ? 'rgba(0,0,0,0.1)' : ''} >Menu</ChakraLink>
                    <ChakraLink as={ReactLink} to='/list' px={4} py={2} backgroundColor={location.pathname == '/list' ? 'rgba(0,0,0,0.1)' : ''} >List</ChakraLink>
                    <ChakraLink as={ReactLink} to='/shortestpath' px={4} py={2} backgroundColor={location.pathname == '/shortestpath' ? 'rgba(0,0,0,0.1)' : ''} >Path</ChakraLink>
                    <ChakraLink as={ReactLink} to='/map' px={4} py={2} backgroundColor={location.pathname == '/map' ? 'rgba(0,0,0,0.1)' : ''} >Map</ChakraLink>
                    <ChakraLink as={ReactLink} to='/chats' px={4} py={2} backgroundColor={location.pathname == '/chats' ? 'rgba(0,0,0,0.1)' : ''} >Chats</ChakraLink>
                    <ChakraLink as={ReactLink} to='/tracker' px={4} py={2} backgroundColor={location.pathname == '/tracker' ? 'rgba(0,0,0,0.1)' : ''} >Track Expenses</ChakraLink>
                    {user && <Button onClick={logout}>Logout</Button>}
                </Stack>
            </Box>
        </Flex>
    )
}