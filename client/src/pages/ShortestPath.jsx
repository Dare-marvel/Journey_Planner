import { Box, Button, Card, CardBody, CardHeader, Divider, Flex, Heading, Input, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { stations } from "../../js/mumbaiLocal";
import { Retrieve } from "../../js/djikstra";
import darkCity from '../../../ProjectImages/Darkcity.jpg';
export default function ShortestPath() {
    const [src, setSrc] = useState('');
    const [des, setDes] = useState('');
    const [route, setRoute] = useState(null);

    useEffect(() => console.log(route), [route]);

    return (
        <>
            <Box position='fixed' zIndex={-10} h='100dvh' w='100dvw' backgroundImage={darkCity} backgroundSize='cover' backgroundPosition='center' backgroundRepeat='no-repeat' ></Box>
            <Flex h='100dvh' w='100dvw' align='center' justify='center'>
                <Card backgroundColor='rgba(255,255,255,0.75)' backdropFilter='blur(2px)' maxW="md" mx="auto">
                    <CardHeader>
                        <Heading>
                            Train Route
                        </Heading>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                        <datalist id="list">
                            {stations.map((e, i) => <option key={i} value={e["Station"]}>{e["Station"]} ({e["Station Code"]}) -- {e["Line"]}</option>)}
                        </datalist>
                        <label htmlFor="src">Source Station:</label>
                        <Input backgroundColor='white' mb={4} id="src" list="list" placeholder="Enter Station Name or Code" value={src} onChange={(e) => setSrc(e.target.value)} />
                        <label htmlFor="des">Destination Station:</label>
                        <Input backgroundColor='white' id="des" list="list" placeholder="Enter Station Name or Code" value={des} onChange={(e) => setDes(e.target.value)} />
                    </CardBody>
                    <Divider />
                    <CardBody>
                        <Button backgroundColor='rgba(255,255,255,0.66)' _hover={{ backgroundColor: 'white', color: 'black' }} onClick={() => setRoute(Retrieve(src, des))}>Get Route</Button>
                        {route && <Box mt={4}>
                            <Heading size="md">Path: </Heading>
                            <Text>{route.comp_path}</Text>
                            <Heading size="md">Time: </Heading>
                            <Text>{route.time_taken}</Text>
                        </Box>}
                    </CardBody>
                </Card>
            </Flex>
        </>
    )
}