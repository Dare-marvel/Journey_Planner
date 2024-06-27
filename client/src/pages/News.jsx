import { Box, Button, Card, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import mumbaiLocal from '../../../ProjectImages/MumbaiLocal.jpg';
import { useState } from "react";

export default function News() {
    const [news, setNews] = useState({
        "meta": {
            "found": 1842043,
            "returned": 3,
            "limit": 3,
            "page": 1
        },
        "data": [
            {
                "uuid": "08c79c09-90e9-4e84-8257-0047fb983c20",
                "title": "Orissa HC directs safety audit of school infrastructure to prevent deaths of students on campuses",
                "description": "Orissa High Court mandates District Education Infrastructure Safety Audit Committees to prevent accidents in schools, ensuring student safety.",
                "keywords": "",
                "snippet": "The Orissa High Court has ordered the formation of a District Education Infrastructure Safety Audit Committee in each district in the State to prevent untoward ...",
                "url": "https://www.thehindu.com/news/national/orissa-hc-directs-safety-audit-of-school-infrastructure-to-prevent-deaths-of-students-on-campuses/article68336404.ece",
                "image_url": "https://th-i.thgim.com/public/incoming/h7yj4u/article68336650.ece/alternates/LANDSCAPE_1200/IMG_for_Manmohan_Singh_C_2_1_9VC4S3SI.jpg",
                "language": "en",
                "published_at": "2024-06-27T04:10:25.000000Z",
                "source": "thehindu.com",
                "categories": [
                    "general"
                ],
                "relevance_score": null,
                "locale": "in"
            },
            {
                "uuid": "e13340d2-bc94-4e5d-ad4a-f710a86c7cb0",
                "title": "No Respite After Dark: Why Are Our Cities Unable to Cool Down at Night?",
                "description": "India Heatwave: Why are nights getting hotter? Why are cities unable to cool down at night? How are urban heat islands and lack of green spaces contribute to ri...",
                "keywords": "climate change, heatwave, heat, india heatwave, delhi heatwave, delhi temperature, night heat, night temperature, global warming, heat health risk, heat stroke",
                "snippet": "This year, Northern India experienced one of the most brutal summers in recent history with temperatures soaring beyond 50o C, and an unprecedented rise in heat...",
                "url": "https://www.thequint.com/climate-change/heatwave-india-night-heat-cities-urban-planning-health",
                "image_url": "https://images.thequint.com/thequint%2F2024-06%2F096c42ca-5d99-44cb-888f-8c38b0309772%2Fnight_heatwave.jpg",
                "language": "en",
                "published_at": "2024-06-27T04:00:35.000000Z",
                "source": "thequint.com",
                "categories": [
                    "general"
                ],
                "relevance_score": null,
                "locale": "in"
            },
            {
                "uuid": "04a9efa2-0c38-4446-986b-79267e344f25",
                "title": "T20 World Cup: South Africa Reach Final With 9-Wicket Victory Over Afghanistan",
                "description": "South Africa defeated Afghanistan by 9-wicket to reach the final of the Men’s T20 World Cup 2024 at Brian Lara Stadium on Thursday.",
                "keywords": "T20 World Cup, T20 World Cup 2024, T20 World Cup South Africa vs Afghanistan, South Africa vs Afghanistan semifinal, sa vs afg, afg vs sa",
                "snippet": "The chase was led by by Reeza Hendricks, who played an innings of 29 off 25 deliveries and was well supported by skipper Aiden Markram, who scored 23 runs as th...",
                "url": "https://www.thequint.com/sports/cricket/t20-world-cup-south-africa-reach-final-with-9-wicket-victory-over-afghanistan",
                "image_url": "https://images.thequint.com/thequint%2F2024-06%2Ffaf37148-effe-41fd-95e0-45c22ab3790f%2F27061_pti06_27_2024_000033b.jpg",
                "language": "en",
                "published_at": "2024-06-27T04:00:35.000000Z",
                "source": "thequint.com",
                "categories": [
                    "general"
                ],
                "relevance_score": null,
                "locale": "in"
            }
        ]
    });
    const [error, setError] = useState(null);
    const getNews = async () => {
        setError(null);
        const response = await fetch(`https://api.thenewsapi.com/v1/news/top?api_token=${import.meta.env.VITE_NEWS_API}&locale=in`)
        const json = await response.json()
        if (response.ok) setNews(json)
        else setError(json)
        console.log(json);
    }
    return (
        <>
            {/* <Navbar /> */}
            <Box position='fixed' zIndex={-10} h='100dvh' w='100dvw' backgroundImage={mumbaiLocal} backgroundSize='cover' backgroundPosition='center' backgroundRepeat='no-repeat' ></Box>
            <Flex minH='100dvh' minW='100dvw' align='center' justify='center' p={4}>
                <Card backgroundColor='rgba(255,255,255,0.5)' backdropFilter='blur(2px)' maxW='1440px' p={4} display='flex' flexDir='column' gap={4}>
                    {news && news.data.map((e) => <Card as={Link} href={e.url} target="_blank" key={e.uuid} display='flex' p={4} gap={2} direction={{ base: 'column', md: 'row' }} justify='center' align='center'>
                        <Image src={e.image_url} h='200px' />
                        <Flex direction='column' gap={4}>
                            <Heading fontSize='xl' textOverflow='ellipsis' noOfLines={1}>{e.title}</Heading>
                            <Text noOfLines={2} textOverflow='ellipsis'>{e.description}</Text>
                        </Flex>
                    </Card>)}
                    <Button onClick={getNews}>Get Current News</Button>
                    {error && error.message}
                </Card>
            </Flex>
        </>
    )
}