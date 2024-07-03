import {
  Container,
  Text,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Card,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Login, Signup } from "../components";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    if (!userInfo) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <Container maxWidth="xl">
      <Card
        d="flex"
        justifyContent="center"
        p={3}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
      >
        <Text fontSize="4xl" fontFamily="Work sans" textAlign="center">
          PATHCRAFTER
        </Text>
      </Card>

      <Card w="100%" p={4} borderRadius="lg">
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab color='txt_place'>Login</Tab>
            <Tab color='txt_place'>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </Container>
  );
};

export default Home;
