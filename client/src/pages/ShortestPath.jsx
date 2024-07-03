import { Box, Button, Card, CardBody, CardHeader, Divider, Flex, FormLabel, Heading, Input, Text } from "@chakra-ui/react"
import { useState } from "react"
import { stations } from "../../js/Stations";
import { Retrieve } from "../../js/djikstra";
export default function ShortestPath() {
  const [src, setSrc] = useState('');
  const [des, setDes] = useState('');
  const [route, setRoute] = useState(null);

  return (
    <Flex minH='100dvh' minW='100dvw' align='center' justify='center'>
      <Card maxW="md" mx="auto">
        <CardHeader>
          <Heading>
            Train Route
          </Heading>
        </CardHeader>
        <Divider />
        <CardBody>
          <datalist id="list">
            {stations.map((e, i) => <option key={i} value={e["Id"]}>{e["Name"]} -- {e["Line"]}</option>)}
          </datalist>
          <FormLabel mb={4} >Source Station:
            <Input _placeholder={{ color: 'txt_place' }} mt={2} list="list" placeholder="Enter Station Name or Code" value={src} onChange={(e) => setSrc(e.target.value)} />
          </FormLabel>
          <FormLabel>Destination Station:
            <Input _placeholder={{ color: 'txt_place' }} mt={2} list="list" placeholder="Enter Station Name or Code" value={des} onChange={(e) => setDes(e.target.value)} />
          </FormLabel>
        </CardBody>
        <Divider />
        <CardBody>
          <Button colorScheme="blue" onClick={() => setRoute(Retrieve(src, des))}>Get Route</Button>
          {route && <Box mt={4}>
            <Heading size="md">Path: </Heading>
            <Text mb={4}>{route.comp_path}</Text>
            <Heading size="md">Time: </Heading>
            <Text>{route.time_taken} minutes</Text>
          </Box>}
        </CardBody>
      </Card>
    </Flex>
  )
}