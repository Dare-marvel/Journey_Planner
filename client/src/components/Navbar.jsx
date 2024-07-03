import { Button, Flex, Link as ChakraLink, Heading, Stack, Box } from "@chakra-ui/react";
import { Link as ReactLink, useLocation, useNavigate } from 'react-router-dom';
import { ChatState } from "../context/ChatProvider";
import { useState } from "react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

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
    <Flex as='nav' borderBottom='1px solid black' position='sticky' top={0} zIndex={10} bg='bg' px={4} py={2} justifyContent='space-between' alignItems='center' wrap='wrap' >
      <Heading size='md' py={2}>PATHCRAFTER</Heading>
      <Button display={{ base: 'flex', md: 'none' }} justifyContent='center' alignItems='center' onClick={() => setOpen(o => !o)}>
        {open ? <CloseIcon /> : <HamburgerIcon />
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
          <ChakraLink as={ReactLink} to='/news' px={4} py={2} backgroundColor={location.pathname == '/news' ? 'tab_active' : ''} rounded='md' >News</ChakraLink>
          <ChakraLink as={ReactLink} to='/list' px={4} py={2} backgroundColor={location.pathname == '/list' ? 'tab_active' : ''} rounded='md' >List</ChakraLink>
          <ChakraLink as={ReactLink} to='/shortestpath' px={4} py={2} backgroundColor={location.pathname == '/shortestpath' ? 'tab_active' : ''} rounded='md' >Path</ChakraLink>
          <ChakraLink as={ReactLink} to='/map' px={4} py={2} backgroundColor={location.pathname == '/map' ? 'tab_active' : ''} rounded='md' >Map</ChakraLink>
          <ChakraLink as={ReactLink} to='/chats' px={4} py={2} backgroundColor={location.pathname == '/chats' ? 'tab_active' : ''} rounded='md' >Chats</ChakraLink>
          <ChakraLink as={ReactLink} to='/tracker' px={4} py={2} backgroundColor={location.pathname == '/tracker' ? 'tab_active' : ''} rounded='md' >Track Expenses</ChakraLink>
          <ChakraLink as={ReactLink} to='/weather' px={4} py={2} backgroundColor={location.pathname == '/weather' ? 'tab_active' : ''} rounded='md' >Weather</ChakraLink>
          <ChakraLink as={ReactLink} to='/games' px={4} py={2} backgroundColor={location.pathname == '/games' ? 'tab_active' : ''} rounded='md' >Games</ChakraLink>
          {user && <Button colorScheme="red" onClick={logout}>Logout</Button>}
        </Stack>
      </Box >
    </Flex >
  )
}