import "./ChartBar.css";
import { Box, Flex, Text } from "@chakra-ui/react";

const ChartBar = (props) => {
    let barFillHeight = '0%';

    if (props.maxValue > 0) {
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';

    }
    return (
        <Flex direction='column' alignItems='center' h='100%'>
            <Flex h='100%' w='16px' border='1px solid #313131' borderRadius='12px' backgroundColor='#c3b4f3' direction='column' justifyContent='flex-end' overflow='hidden'>
                <Box h={barFillHeight} backgroundColor='#4826b9' w='100%' transition='all 0.3s ease-out' ></Box>
            </Flex>
            <Text fontSize='0.75rem' fontWeight='bold' textAlign='center'>{props.label}</Text>
        </Flex>
    );
};

export default ChartBar;
