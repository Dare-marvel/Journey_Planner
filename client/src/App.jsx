import { Box, Button, Card, CardBody, CardHeader, Divider, Heading, Input, Text } from "@chakra-ui/react"
import { stations } from "../js/mumbaiLocal"
import { useEffect, useState } from "react"
import './App.css'
import { Retrieve } from "../js/djikstra";
function App() {
    const [src, setSrc] = useState('');
    const [des, setDes] = useState('');
    const [route, setRoute] = useState(null);

    useEffect(() => console.log(route), [route]);

    return (
        <Card maxW="md" mx="auto">
            <CardHeader>
                <Heading>
                    Train Route
                </Heading>
            </CardHeader>
            <Divider />
            <CardBody>
                <datalist id="list">
                    {stations.map((e, i) => <option key={i} value={e["Station"]}>{e["Station"]} ({e["Station Code"]})</option>)}
                </datalist>
                <label htmlFor="src">Source Station:</label>
                <Input mb={4} id="src" list="list" placeholder="Source Station" value={src} onChange={(e) => setSrc(e.target.value)} />
                <label htmlFor="src">Destination Station:</label>
                <Input id="des" list="list" placeholder="Destination Station" value={des} onChange={(e) => setDes(e.target.value)} />
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
    )
}

export default App
