import { Box, Button, Card, CardBody, CardHeader, Divider, Flex, Heading, Input, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { stations } from "../../js/mumbaiLocal";
import { Retrieve } from "../../js/djikstra";
export default function ShortestPath() {
    const [src, setSrc] = useState('');
    const [des, setDes] = useState('');
    const [route, setRoute] = useState(null);

    useEffect(() => console.log(route), [route]);

    return (
        <Flex h='100dvh' w='100dvw' align='center' justify='center'>
            <Card maxW="md" mx="auto">
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
                    <Input mb={4} id="src" list="list" placeholder="Enter Station Name or Code" value={src} onChange={(e) => setSrc(e.target.value)} />
                    <label htmlFor="src">Destination Station:</label>
                    <Input id="des" list="list" placeholder="Enter Station Name or Code" value={des} onChange={(e) => setDes(e.target.value)} />
                    <Button mt={4} onClick={() => setRoute(Retrieve(src, des))}>Get Route</Button>
                    <Divider my={4} />
                    {route && <Box>
                        <Heading size="md">Path: </Heading>
                        <Text>{route.comp_path}</Text>
                        <Heading size="md">Time: </Heading>
                        <Text>{route.time_taken}</Text>
                    </Box>}
                </CardBody>
            </Card>
        </Flex>
    )
}