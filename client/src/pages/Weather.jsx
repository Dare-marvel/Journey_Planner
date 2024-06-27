import { Box, Button, Card, Flex, Heading, Icon, Image, Input, Spinner, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDroplet, faEye, faGauge, faMoon, faSun, faTemperature4, faWind } from '@fortawesome/free-solid-svg-icons';
import darkCity from '../../../ProjectImages/Darkcity.jpg';

const urls = {
    current: (lat, lon) => `api/external/weather/current?lat=${lat}&lon=${lon}`,
    pollution: (lat, lon) => `api/external/weather/pollution?lat=${lat}&lon=${lon}`,
    reverse: (lat, lon) => `api/external/weather/reverse?lat=${lat}&lon=${lon}`,
    geo: (query) => `api/external/weather/geo?q=${query}`
}

const celsius = (k) => Math.round(k - 273.15) + '°';

export default function Weather() {
    const { token } = JSON.parse(localStorage.getItem('userInfo'))
    const [data, setData] = useState({
        "current": {
            "coord": {
                "lon": 72.8782,
                "lat": 19.0785
            },
            "weather": [
                {
                    "id": 721,
                    "main": "Haze",
                    "description": "haze",
                    "icon": "50n"
                }
            ],
            "base": "stations",
            "main": {
                "temp": 302.18,
                "feels_like": 307.76,
                "temp_min": 302.18,
                "temp_max": 302.18,
                "pressure": 1006,
                "humidity": 79
            },
            "visibility": 3000,
            "wind": {
                "speed": 1.54,
                "deg": 190
            },
            "clouds": {
                "all": 75
            },
            "dt": 1718634343,
            "sys": {
                "type": 1,
                "id": 9052,
                "country": "IN",
                "sunrise": 1718584270,
                "sunset": 1718632064
            },
            "timezone": 19800,
            "id": 8131499,
            "name": "Konkan Division",
            "cod": 200
        },
        "pollution": {
            "coord": {
                "lon": 72.8777,
                "lat": 19.076
            },
            "list": [
                {
                    "main": {
                        "aqi": 2
                    },
                    "components": {
                        "co": 594.14,
                        "no": 0.95,
                        "no2": 27.76,
                        "o3": 9.57,
                        "so2": 25.03,
                        "pm2_5": 17.57,
                        "pm10": 27.95,
                        "nh3": 6.84
                    },
                    "dt": 1718634123
                }
            ]
        }
    });
    const [query, setQuery] = useState('');
    const [currLocation, setCurrLocation] = useState('Mumbai, Maharashtra, IN, 17 Jun 2024');
    const [coordList, setCoordList] = useState([]);

    const [queryLoading, setQueryLoading] = useState(false);
    const [dataLoading, setDataLoading] = useState(false);

    const search = async () => {
        setQueryLoading(true)
        const coords = await fetch(urls.geo(query), { headers: { Authorization: `Bearer ${token}` } });
        const coordsJson = await coords.json();
        setCoordList(coordsJson);
        setQueryLoading(false)
    };

    const setLocation = async (loc) => {
        setDataLoading(true)

        const current = await fetch(urls.current(loc.lat, loc.lon), { headers: { Authorization: `Bearer ${token}` } });
        const pollution = await fetch(urls.pollution(loc.lat, loc.lon), { headers: { Authorization: `Bearer ${token}` } });

        const currentJson = await current.json();
        const pollutionJson = await pollution.json();

        setData({ current: currentJson, pollution: pollutionJson });
        setCurrLocation(`${loc.name}, ${loc.state}, ${loc.country}, ${(new Date()).toDateString()}`)
        setCoordList([]);
        setQuery('');
        setDataLoading(false)
    }

    const rise = new Date(data.current.sys.sunrise * 1000)
    const set = new Date(data.current.sys.sunset * 1000)

    return (
        <>
            <Box position='fixed' zIndex={-10} h='100dvh' w='100dvw' backgroundImage={darkCity} backgroundSize='cover' backgroundPosition='center' backgroundRepeat='no-repeat' ></Box>
            <Box position='fixed' zIndex={-9} h='100dvh' w='100dvw' backdropFilter='blur(10px)' ></Box>
            <Flex p={4} gap={4} direction='column' textAlign='center' w='100%' align='center'>
                <Flex as={Card} p={4} gap={4} direction='column'>
                    <Flex direction='row' gap={4} >
                        <Input placeholder='Search City' value={query} onChange={(e) => setQuery(e.target.value)} />
                        <Button onClick={search}>Search</Button>
                    </Flex>
                    {queryLoading && <Spinner size='xl' alignSelf='center' />}
                    {coordList.length > 0 && query !== '' && <Flex direction='column' gap={2}>
                        {coordList.map((e, i) => <Button onClick={() => setLocation(e)} key={i} p={2}>
                            {e.name}, {e.state}, {e.country}
                        </Button>)}
                    </Flex>}
                </Flex>
                <Card p={4}>
                    {currLocation}
                </Card>
                <Flex direction='column' justify='center' w='100%' align='center' gap={4}>
                    {dataLoading && <Spinner size='xl' alignSelf='center' color="white" />}
                    <Flex direction='row' gap={4} w='100%' justify='center'>
                        <Card as={Flex} direction='column' justify='center' p={4}>
                            <Flex w='100%' justify='center' gap={4} align='center'>
                                <Image src={`http://openweathermap.org/img/w/${data.current.weather[0].icon}.png`}></Image>
                                <Heading fontSize='2xl'>
                                    {data.current.weather[0].main}
                                </Heading>
                            </Flex>
                            <Text>{data.current.weather[0].description}</Text>
                        </Card>
                        <Card as={Flex} direction='column' justify='center' p={4} gap={2}>
                            <Flex w='100%' justify='center' gap={4} align='center'>
                                <Icon as={FontAwesomeIcon} icon={faTemperature4} w='32px' h='32px' ></Icon>
                                <Heading fontSize='2xl'>
                                    {celsius(data.current.main.temp)}C
                                </Heading>
                            </Flex>
                            <Text>Feels like {celsius(data.current.main.feels_like)}C</Text>
                        </Card>
                    </Flex>
                    <Flex direction='row' wrap='wrap' justify='center' gap={4}>
                        <Card as={Flex} direction='row' wrap='wrap' p={4} gap={6} justify='center' align='center'>
                            <Box>
                                <Text mb={2}>Pressure</Text>
                                <Flex gap={2}>
                                    <Icon as={FontAwesomeIcon} icon={faGauge} w='32px' h='32px' ></Icon>
                                    <Heading fontSize='2xl'>{data.current.main.pressure}hPa</Heading>
                                </Flex>
                            </Box>
                            <Box>
                                <Text mb={2}>Humidity</Text>
                                <Flex gap={2}>
                                    <Icon as={FontAwesomeIcon} icon={faDroplet} w='32px' h='32px' ></Icon>
                                    <Heading fontSize='2xl'>{data.current.main.humidity}%</Heading>
                                </Flex>
                            </Box>
                            <Box>
                                <Text mb={2}>Visibility</Text>
                                <Flex gap={2}>
                                    <Icon as={FontAwesomeIcon} icon={faEye} w='32px' h='32px' ></Icon>
                                    <Heading fontSize='2xl'>{Math.round((data.current.visibility / 1000) * 100) / 100}km</Heading>
                                </Flex>
                            </Box>
                        </Card>
                        <Card as={Flex} direction='row' wrap='wrap' p={4} gap={6} justify='center' align='center'>
                            <Box>
                                <Text mb={2}>Sunrise</Text>
                                <Flex gap={2} align='center'>
                                    <Icon as={FontAwesomeIcon} icon={faSun} w='32px' h='32px' ></Icon>
                                    <Heading fontSize='2xl'>{rise.toLocaleTimeString()}</Heading>
                                </Flex>
                            </Box>
                            <Box>
                                <Text mb={2}>Sunset</Text>
                                <Flex gap={2} align='center'>
                                    <Icon as={FontAwesomeIcon} icon={faMoon} w='32px' h='32px' ></Icon>
                                    <Heading fontSize='2xl'>{set.toLocaleTimeString()}</Heading>
                                </Flex>
                            </Box>
                        </Card>
                        <Card as={Flex} direction='row' wrap='wrap' p={4} gap={6} justify='center' align='center'>
                            <Icon as={FontAwesomeIcon} icon={faWind} w='32px' h='32px' ></Icon>
                            <Box>
                                <Text mb={2}>AQI</Text>
                                <Heading fontSize='2xl'>{data.pollution.list[0].main.aqi}</Heading>
                            </Box>
                            <Box>
                                <Text mb={2}>PM2.5</Text>
                                <Heading fontSize='2xl'>{data.pollution.list[0].components.pm2_5}</Heading>
                            </Box>
                            <Box>
                                <Text mb={2}>SO2</Text>
                                <Heading fontSize='2xl'>{data.pollution.list[0].components.so2}</Heading>
                            </Box>
                            <Box>
                                <Text mb={2}>O3</Text>
                                <Heading fontSize='2xl'>{data.pollution.list[0].components.o3}</Heading>
                            </Box>
                        </Card>
                    </Flex>
                </Flex >
            </Flex >
        </>
    )
}