import ChartBar from "./ChartBar";
import "./Chart.css";
import { Flex } from "@chakra-ui/react";

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);

    return (
        <Flex p={4} h={40} backgroundColor='#f8dfff' justifyContent='space-around' borderRadius='12px' textAlign='center'>
            {props.dataPoints.map((dataPoint) => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label}
                />
            ))}
        </Flex>
    );
};

export default Chart;
