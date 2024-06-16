import { Box, Card, Divider, Flex, Heading, ListItem, UnorderedList } from "@chakra-ui/react";
import trains from '../../../ProjectImages/TwoTrains.jpg'
import { Navbar } from "../components/Navbar";

export default function StationList() {
    return (
        <>
            <Navbar />
            <Box position='fixed' zIndex={-10} h='100dvh' w='100dvw' backgroundImage={trains} backgroundSize='cover' backgroundPosition='center' backgroundRepeat='no-repeat' ></Box>
            {/* <Box h='100dvh' w='100dvw' ></Box> */}
            <Flex wrap='wrap' justify='center'>
                <Card backgroundColor='rgba(255,255,255,0.75)' backdropFilter='blur(2px)' p={4} m={4}>
                    <Heading>Central Line</Heading>
                    <Divider my={4} />
                    <UnorderedList>
                        <ListItem>CSMT</ListItem>
                        <ListItem>Masjid Bunder(MB)</ListItem>
                        <ListItem>Sandhurst Road(SandhurstR)</ListItem>
                        <ListItem>Byculla</ListItem>
                        <ListItem>Chinchpokli</ListItem>
                        <ListItem>Currey Road(CurreyR)</ListItem>
                        <ListItem>Parel</ListItem>
                        <ListItem>Dadar</ListItem>
                        <ListItem>Matunga</ListItem>
                        <ListItem>Sion</ListItem>
                        <ListItem>Kurla</ListItem>
                        <ListItem>Vidya Vihar(VidyaVihar)</ListItem>
                        <ListItem>Ghatkopar</ListItem>
                        <ListItem>Vikhroli</ListItem>
                        <ListItem>Kanjur Marg(KanjurMarg)</ListItem>
                        <ListItem>Bhandup</ListItem>
                        <ListItem>Nahur</ListItem>
                        <ListItem>Mulund</ListItem>
                        <ListItem>Thane</ListItem>
                        <ListItem>Kalwa</ListItem>
                        <ListItem>Mumbra</ListItem>
                        <ListItem>Diva</ListItem>
                        <ListItem>Kopar</ListItem>
                        <ListItem>Dombivali</ListItem>
                        <ListItem>Thakurli</ListItem>
                        <ListItem>Kalyan</ListItem>
                        <ListItem>Ulhasnagar</ListItem>
                        <ListItem>Ambernath</ListItem>
                        <ListItem>Badlapur</ListItem>
                        <ListItem>Karjat</ListItem>
                        <ListItem>Khopoli</ListItem>
                    </UnorderedList>
                </Card>
                <Card backgroundColor='rgba(255,255,255,0.75)' backdropFilter='blur(2px)' p={4} m={4}>
                    <Heading>Harbour Line</Heading>
                    <Divider my={4} />
                    <UnorderedList>
                        <ListItem>Dockyard</ListItem>
                        <ListItem>Reay Road(ReayR)</ListItem>
                        <ListItem>Cotton green(CG)</ListItem>
                        <ListItem>Sewri</ListItem>
                        <ListItem>VadalaR</ListItem>
                        <ListItem>GTB Naga(GTBN)</ListItem>
                        <ListItem>Chunabhatti</ListItem>
                        <ListItem>Tilak Nagar(TilakN)</ListItem>
                        <ListItem>Chembur</ListItem>
                        <ListItem>Govandi</ListItem>
                        <ListItem>Mankhurd</ListItem>
                        <ListItem>Vashi</ListItem>
                        <ListItem>Sanpada</ListItem>
                        <ListItem>Juinagar</ListItem>
                        <ListItem>Nerul</ListItem>
                        <ListItem>Seawoods Darave(SeawoodsDarave)</ListItem>
                        <ListItem>CBD Belapur(BelapurCBD)</ListItem>
                        <ListItem>Kharghar</ListItem>
                        <ListItem>Manasarovar</ListItem>
                        <ListItem>Khandeshwar</ListItem>
                        <ListItem>Panvel</ListItem>
                    </UnorderedList>
                </Card>
                <Card backgroundColor='rgba(255,255,255,0.75)' backdropFilter='blur(2px)' p={4} m={4}>
                    <Heading>Western Line</Heading>
                    <Divider my={4} />
                    <UnorderedList>
                        <ListItem>Churchgate</ListItem>
                        <ListItem>Marine Lines(ML)</ListItem>
                        <ListItem>Charni Road(CharniR)</ListItem>
                        <ListItem>Grant Road(GrantR)</ListItem>
                        <ListItem>Mumbai Central(MC)</ListItem>
                        <ListItem>Mahalaxmi</ListItem>
                        <ListItem>Lower Parel(LParel)</ListItem>
                        <ListItem>Prabhadevi</ListItem>
                        <ListItem>Matunga Road(MatungaR)</ListItem>
                        <ListItem>Mahim</ListItem>
                        <ListItem>Bandra</ListItem>
                        <ListItem>KharR</ListItem>
                        <ListItem>Santacruz</ListItem>
                        <ListItem>Vile Parle(Vile Parle)</ListItem>
                        <ListItem>Andheri</ListItem>
                        <ListItem>Jogeshwari</ListItem>
                        <ListItem>Ram Mandir(RamMandir)</ListItem>
                        <ListItem>Goregaon</ListItem>
                        <ListItem>Malad</ListItem>
                        <ListItem>Kandivali</ListItem>
                        <ListItem>Borivali</ListItem>
                        <ListItem>Dahisar</ListItem>
                        <ListItem>Mira Road(MiraR)</ListItem>
                        <ListItem>Bhayandar</ListItem>
                        <ListItem>Naigaon</ListItem>
                        <ListItem>Vasai Road(VasaiR)</ListItem>
                        <ListItem>Virar</ListItem>
                    </UnorderedList>
                </Card>
                <Card backgroundColor='rgba(255,255,255,0.75)' backdropFilter='blur(2px)' p={4} m={4}>
                    <Heading>Thane Vashi Line</Heading>
                    <Divider my={4} />
                    <UnorderedList>
                        <ListItem>Airoli</ListItem>
                        <ListItem>Airoli</ListItem>
                        <ListItem>Rabale</ListItem>
                        <ListItem>Ghansoli</ListItem>
                        <ListItem>Kopar Khairane(KoparKhairane)</ListItem>
                        <ListItem>Turbhe</ListItem>
                    </UnorderedList>
                </Card>
                <Card backgroundColor='rgba(255,255,255,0.75)' backdropFilter='blur(2px)' p={4} m={4}>
                    <Heading>Indian Railway</Heading>
                    <Divider my={4} />
                    <UnorderedList>
                        <ListItem>Juchandra</ListItem>
                        <ListItem>Kaman Road(KamanR)</ListItem>
                        <ListItem>Kharbao</ListItem>
                        <ListItem>Bhiwandi</ListItem>
                        <ListItem>Kopar</ListItem>
                        <ListItem>Dativali</ListItem>
                        <ListItem>Nilje</ListItem>
                        <ListItem>Taloja</ListItem>
                        <ListItem>Navade Road(NavadeR)</ListItem>
                        <ListItem>Kalamboli</ListItem>
                        <ListItem>Panvel</ListItem>
                    </UnorderedList>
                </Card>
                <Card backgroundColor='rgba(255,255,255,0.75)' backdropFilter='blur(2px)' p={4} m={4}>
                    <Heading>Metro Line</Heading>
                    <Divider my={4} />
                    <UnorderedList>
                        <ListItem>Ghatkopar</ListItem>
                        <ListItem>Jagruti Nagar(JagrutiN)</ListItem>
                        <ListItem>Asalpha</ListItem>
                        <ListItem>Saki Naka(SakiNaka)</ListItem>
                        <ListItem>Marol Naka(MarolNaka)</ListItem>
                        <ListItem>Airport Road(AirportR)</ListItem>
                        <ListItem>Chakala</ListItem>
                        <ListItem>Western Express Highway(WesternExpressHighway)</ListItem>
                        <ListItem>Andheri</ListItem>
                        <ListItem>Azad Nagar(AzadN)</ListItem>
                        <ListItem>D N Nagar(DNNagar)</ListItem>
                        <ListItem>Versova</ListItem>
                    </UnorderedList>
                </Card>
                <Card backgroundColor='rgba(255,255,255,0.75)' backdropFilter='blur(2px)' p={4} m={4}>
                    <Heading>Mono Rail Line</Heading>
                    <Divider my={4} />
                    <UnorderedList>
                        <ListItem>Chembur</ListItem>
                        <ListItem>VNP Marg Junction</ListItem>
                        <ListItem>Fertilizer Township(FertilizerTownship)</ListItem>
                        <ListItem>Bharat Petroleum(BP)</ListItem>
                        <ListItem>Mysore Colony(MysoreColony)</ListItem>
                        <ListItem>Bhakti Park(BhaktiPark)</ListItem>
                        <ListItem>VadalaR</ListItem>
                        <ListItem>GTB Nagar(GTBN)</ListItem>
                        <ListItem>Antop Hill(AntopHill)</ListItem>
                        <ListItem>Acharya Atre Nagar(AcharyaAtreNagar)</ListItem>
                        <ListItem>Vadala Bridge(VadalaBridge)</ListItem>
                        <ListItem>Dadar</ListItem>
                        <ListItem>Naigaon</ListItem>
                    </UnorderedList>
                </Card>
            </Flex>
        </>
    )
}